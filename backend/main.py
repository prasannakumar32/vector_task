from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Any, Optional
from collections import defaultdict, deque
import sqlite3
import json
from datetime import datetime
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

# Database setup
def init_db():
    db_path = os.getenv('DATABASE_URL', 'pipelines.db')
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS pipelines (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            nodes TEXT,
            edges TEXT,
            num_nodes INTEGER,
            num_edges INTEGER,
            is_dag BOOLEAN,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    conn.commit()
    conn.close()

# Initialize database on startup
init_db()

class PipelineData(BaseModel):
    nodes: List[Dict[str, Any]]
    edges: List[Dict[str, Any]]
    name: Optional[str] = None

class PipelineResponse(BaseModel):
    num_nodes: int
    num_edges: int
    is_dag: bool
    pipeline_id: Optional[int] = None

def is_dag(nodes: List[Dict[str, Any]], edges: List[Dict[str, Any]]) -> bool:
    """
    Check if the pipeline forms a Directed Acyclic Graph (DAG)
    using Kahn's algorithm for topological sorting
    """
    if not nodes:
        return True
    
    # Build adjacency list and in-degree count
    adjacency = defaultdict(list)
    in_degree = defaultdict(int)
    
    # Initialize all nodes with 0 in-degree
    for node in nodes:
        in_degree[node['id']] = 0
    
    # Build the graph from edges
    for edge in edges:
        source = edge['source']
        target = edge['target']
        
        # Only count if both nodes exist
        if source in in_degree and target in in_degree:
            adjacency[source].append(target)
            in_degree[target] += 1
    
    # Kahn's algorithm
    queue = deque([node_id for node_id, degree in in_degree.items() if degree == 0])
    visited_count = 0
    
    while queue:
        current = queue.popleft()
        visited_count += 1
        
        for neighbor in adjacency[current]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)
    
    # If we visited all nodes, it's a DAG
    return visited_count == len(nodes)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: PipelineData):
    """
    Parse pipeline and return statistics including DAG check
    """
    try:
        num_nodes = len(pipeline.nodes)
        num_edges = len(pipeline.edges)
        dag_check = is_dag(pipeline.nodes, pipeline.edges)
        
        return {
            'num_nodes': num_nodes,
            'num_edges': num_edges,
            'is_dag': dag_check
        }
    except Exception as e:
        return {
            'num_nodes': 0,
            'num_edges': 0,
            'is_dag': False,
            'error': str(e)
        }

@app.post('/pipelines/save')
def savePipeline(pipeline: PipelineData):
    """
    Save pipeline to SQLite database with DAG analysis
    """
    try:
        num_nodes = len(pipeline.nodes)
        num_edges = len(pipeline.edges)
        dag_check = is_dag(pipeline.nodes, pipeline.edges)
        
        conn = sqlite3.connect(os.getenv('DATABASE_URL', 'pipelines.db'))
        cursor = conn.cursor()
        
        cursor.execute('''
            INSERT INTO pipelines (name, nodes, edges, num_nodes, num_edges, is_dag)
            VALUES (?, ?, ?, ?, ?, ?)
        ''', (
            pipeline.name or f"Pipeline_{datetime.now().strftime('%Y%m%d_%H%M%S')}",
            json.dumps(pipeline.nodes),
            json.dumps(pipeline.edges),
            num_nodes,
            num_edges,
            dag_check
        ))
        
        pipeline_id = cursor.lastrowid
        conn.commit()
        conn.close()
        
        return {
            'num_nodes': num_nodes,
            'num_edges': num_edges,
            'is_dag': dag_check,
            'pipeline_id': pipeline_id
        }
    except Exception as e:
        return {"error": str(e)}

@app.get('/pipelines')
def getPipelines():
    """
    Retrieve all saved pipelines from database
    """
    try:
        conn = sqlite3.connect(os.getenv('DATABASE_URL', 'pipelines.db'))
        cursor = conn.cursor()
        
        cursor.execute('''
            SELECT id, name, nodes, edges, num_nodes, num_edges, is_dag, created_at
            FROM pipelines
            ORDER BY created_at DESC
        ''')
        
        pipelines = []
        for row in cursor.fetchall():
            pipelines.append({
                "id": row[0],
                "name": row[1],
                "nodes": json.loads(row[2]),
                "edges": json.loads(row[3]),
                "num_nodes": row[4],
                "num_edges": row[5],
                "is_dag": bool(row[6]),
                "created_at": row[7]
            })
        
        conn.close()
        return {"pipelines": pipelines}
    except Exception as e:
        return {"error": str(e)}

if __name__ == "__main__":
    import uvicorn
    host = os.getenv('HOST', '0.0.0.0')
    port = int(os.getenv('PORT', 8002))
    uvicorn.run(app, host=host, port=port)

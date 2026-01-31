import { useState, useRef, useCallback } from 'react';
import ReactFlow, { Controls, Background, MiniMap } from 'reactflow';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';
import { NodeFactory } from './nodes/NodeFactory';
import { MathNode, DelayNode, ConditionNode, FormatterNode, LoggerNode } from './nodes/DemoNodes';
import { StyledCanvas } from './styles/components';

import 'reactflow/dist/style.css';

const gridSize = 20;
const proOptions = { hideAttribution: true };

// Use the enhanced nodes from NodeFactory and demo nodes
const nodeTypes = {
  customInput: NodeFactory.createInputNode(),
  llm: NodeFactory.createLLMNode(),
  customOutput: NodeFactory.createOutputNode(),
  text: NodeFactory.createTextNode(),
  math: MathNode,
  delay: DelayNode,
  condition: ConditionNode,
  formatter: FormatterNode,
  logger: LoggerNode,
};

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  getNodeID: state.getNodeID,
  addNode: state.addNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
  setNodes: state.setNodes,
  onNodeDataChange: (nodeId, newData) => {
    state.setNodes((nodes) =>
      nodes.map((node) =>
        node.id === nodeId ? { ...node, data: newData } : node
      )
    );
  }
});

export const PipelineUI = () => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const {
    nodes,
    edges,
    getNodeID,
    addNode,
    onNodesChange,
    onEdgesChange,
    onConnect,
    onNodeDataChange
  } = useStore(selector, shallow);

  const getInitNodeData = (nodeID, type) => {
      let nodeData = { id: nodeID, nodeType: `${type}` };
      return nodeData;
    }

    const onDrop = useCallback(
        (event) => {
          event.preventDefault();
    
          const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
          if (event?.dataTransfer?.getData('application/reactflow')) {
            const appData = JSON.parse(event.dataTransfer.getData('application/reactflow'));
            const type = appData?.nodeType;
      
            if (typeof type === 'undefined' || !type) {
              return;
            }
      
            const position = reactFlowInstance.project({
              x: event.clientX - reactFlowBounds.left,
              y: event.clientY - reactFlowBounds.top,
            });

            const nodeID = getNodeID(type);
            const newNode = {
              id: nodeID,
              type,
              position,
              data: getInitNodeData(nodeID, type),
            };

            // Add onDataChange handler for text nodes
            if (type === 'text') {
              newNode.data = {
                ...newNode.data,
                onDataChange: (newData) => onNodeDataChange(nodeID, newData)
              };
            }
      
            addNode(newNode);
          }
        },
        [reactFlowInstance, getNodeID, addNode, onNodeDataChange]
    );

    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-slate-800">
                  Pipeline Canvas
                </h2>
                <div className="text-sm text-slate-600">
                  {nodes.length} nodes • {edges.length} connections
                </div>
            </div>
            
            <StyledCanvas ref={reactFlowWrapper}>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    onDrop={onDrop}
                    onDragOver={onDragOver}
                    onInit={setReactFlowInstance}
                    nodeTypes={nodeTypes}
                    proOptions={proOptions}
                    snapGrid={[gridSize, gridSize]}
                    connectionLineType='smoothstep'
                    style={{ background: 'linear-gradient(to bottom right, #f8fafc, #f1f5f9)' }}
                >
                    <Background color="#cbd5e1" gap={gridSize} size={1} />
                    <Controls 
                        className="bg-white border border-slate-200 rounded-lg shadow-soft"
                        showInteractive={false}
                    />
                    <MiniMap 
                        className="bg-white border border-slate-200 rounded-lg shadow-soft"
                        nodeColor={(node) => {
                          const colors = {
                            customInput: '#3b82f6',
                            llm: '#8b5cf6',
                            customOutput: '#10b981',
                            text: '#f59e0b',
                            math: '#ef4444',
                            condition: '#06b6d4',
                            transform: '#ec4899',
                            database: '#6366f1',
                            api: '#14b8a6'
                          };
                          return colors[node.type] || '#64748b';
                        }}
                    />
                </ReactFlow>
            </StyledCanvas>
        </div>
    )
};

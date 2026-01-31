# Vector Task - Node Abstraction

A React Flow application with a powerful node abstraction system that eliminates code duplication and speeds up development.

## Quick Start

1. Clone and install:
```bash
git clone https://github.com/prasannakumar32/vector_task.git
cd vector_task
```

2. Backend setup:
```bash
cd backend
pip install -r requirements.txt
cp .env.example .env  # Configure your environment
python main.py
```

3. Frontend setup (in separate terminal):
```bash
cd frontend
npm install
cp .env.example .env  # Configure your environment
npm start
```

4. Open http://localhost:3001

## Environment Configuration

### Backend (.env)
- `HOST`: Server host (default: 0.0.0.0)
- `PORT`: Server port (default: 8002)
- `DATABASE_URL`: SQLite database path (default: pipelines.db)

### Frontend (.env)
- `REACT_APP_API_BASE_URL`: Backend API URL (default: http://localhost:8002)
- `REACT_APP_API_ENDPOINT`: API endpoint path (default: /pipelines)
- `PORT`: Frontend port (default: 3001)

### Production Environments
- Copy `.env.production` files and update with production values
- Frontend: Set `REACT_APP_API_BASE_URL` to your production API
- Backend: Adjust `HOST`, `PORT`, and `DATABASE_URL` for production

## What It Does

- **Before**: Each node needed 35-48 lines of repetitive code
- **After**: New nodes need only 6-40 lines of configuration
- **Result**: 87.5% code reduction with consistent styling

## Available Nodes

**Original (Refactored):**
- Input, Output, LLM, Text nodes

**New Demo Nodes:**
- Math (calculations)
- Condition (if/then logic)
- Transform (data conversion)
- Database (DB operations)
- API (HTTP requests)

## Create New Node

```javascript
import { NodeFactory } from './NodeFactory';

export const MyNode = NodeFactory.createCustomNode({
  title: 'My Node',
  handles: [{ id: 'input', type: 'target', position: Position.Left }],
  fields: [{ key: 'value', type: 'text', label: 'Value:' }]
});
```

## Tech Stack

- React 18 + React Flow
- Node abstraction system
- FastAPI backend

---
**Repository**: https://github.com/prasannakumar32/vector_task

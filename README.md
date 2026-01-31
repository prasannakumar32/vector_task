# Vector Task - Node Abstraction

A React Flow application with a powerful node abstraction system that eliminates code duplication and speeds up development.

## Quick Start

1. Clone and install:
```bash
git clone https://github.com/prasannakumar32/vector_task.git
cd vector_task/frontend
npm install
npm start
```

2. Open http://localhost:3001

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

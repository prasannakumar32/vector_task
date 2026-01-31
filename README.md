# Vector Task - Node Abstraction System

## Overview

This project demonstrates a powerful node abstraction system for React Flow applications. It solves the problem of code duplication when creating multiple node types by providing a flexible, configuration-driven approach to node creation.

## Problem Solved

Before the abstraction:
- Each node required 35-48 lines of repetitive code
- Adding new nodes meant copying and modifying existing ones
- Styling changes required updates across multiple files
- Maintenance became difficult as the number of nodes grew

After the abstraction:
- New nodes require only 6-40 lines of configuration
- Consistent styling and behavior across all nodes
- Easy maintenance with centralized functionality
- Rapid development of new node types

## Architecture

### Core Components

1. **BaseNode.js** - The foundation component that handles:
   - Common styling (width, height, border, background)
   - Handle management for input/output connections
   - Field rendering (text inputs, selects, textareas)
   - State management for editable fields
   - Dynamic default values

2. **NodeFactory.js** - Factory functions for rapid node creation:
   - `createInputNode()` - Input nodes with name/type fields
   - `createOutputNode()` - Output nodes with name/type fields
   - `createLLMNode()` - LLM nodes with multiple inputs
   - `createTextNode()` - Text nodes with editable content
   - `createCustomNode(config)` - Fully customizable nodes

3. **Individual Node Files** - Simple exports using the factory

## Available Nodes

### Original Nodes (Refactored)
- **Input Node** - Data input with name and type configuration
- **Output Node** - Data output with name and type configuration
- **LLM Node** - Language model with system and prompt inputs
- **Text Node** - Text manipulation with editable content

### New Demonstration Nodes
- **Math Node** - Mathematical operations (add, subtract, multiply, divide)
- **Condition Node** - Conditional logic with true/false paths
- **Transform Node** - Data transformation with custom expressions
- **Database Node** - Multi-database operations (PostgreSQL, MySQL, MongoDB, SQLite)
- **API Node** - HTTP API requests with error handling

## Code Reduction

| Node | Before | After | Reduction |
|------|--------|-------|-----------|
| InputNode | 48 lines | 6 lines | 87.5% |
| OutputNode | 48 lines | 6 lines | 87.5% |
| LLMNode | 35 lines | 6 lines | 82.9% |
| TextNode | 36 lines | 6 lines | 83.3% |

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/prasannakumar32/vector_task.git
cd vector_task
```

2. Install frontend dependencies:
```bash
cd frontend
npm install
```

3. Install backend dependencies:
```bash
cd ../backend
pip install -r requirements.txt
```

### Running the Application

1. Start the frontend:
```bash
cd frontend
npm start
```

2. Start the backend:
```bash
cd backend
python main.py
```

3. Open http://localhost:3001 in your browser

## Creating New Nodes

### Simple Node Using Factory

```javascript
// newNode.js
import { NodeFactory } from './NodeFactory';

export const NewNode = NodeFactory.createInputNode();
```

### Custom Node with Configuration

```javascript
// customNode.js
import { NodeFactory } from './NodeFactory';
import { Position } from 'reactflow';

export const CustomNode = NodeFactory.createCustomNode({
  title: 'My Custom Node',
  height: 120,
  backgroundColor: '#f0f8ff',
  handles: [
    {
      id: 'input',
      type: 'target',
      position: Position.Left
    },
    {
      id: 'output',
      type: 'source',
      position: Position.Right
    }
  ],
  fields: [
    {
      key: 'setting',
      type: 'select',
      label: 'Setting:',
      defaultValue: 'option1',
      options: [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' }
      ]
    }
  ],
  children: <span>Custom functionality</span>
});
```

### Registering New Nodes

1. Add import to `frontend/src/ui.js`:
```javascript
import { CustomNode } from './nodes/customNode';
```

2. Add to nodeTypes object:
```javascript
const nodeTypes = {
  // existing nodes...
  custom: CustomNode,
};
```

3. Add to toolbar in `frontend/src/toolbar.js`:
```javascript
<DraggableNode type='custom' label='Custom' />
```

## Configuration Options

### Node Configuration
```javascript
{
  title: 'Node Title',           // Display title
  width: 200,                    // Node width
  height: 80,                    // Node height
  border: '1px solid black',     // Border style
  backgroundColor: 'white',     // Background color
  handles: [],                   // Array of handle configurations
  fields: [],                    // Array of field configurations
  children: null                 // Custom content to render
}
```

### Handle Configuration
```javascript
{
  id: 'handleId',               // Unique handle identifier
  type: 'source' | 'target',    // Handle type
  position: Position.Left | Right | Top | Bottom,
  style: { top: '25%' }         // Optional custom styling
}
```

### Field Configuration
```javascript
{
  key: 'fieldName',             // State key
  type: 'text' | 'select' | 'textarea',
  label: 'Field Label:',        // Display label
  defaultValue: 'default',      // Default value or function
  options: [                    // For select fields
    { value: 'val1', label: 'Option 1' }
  ],
  placeholder: 'Enter text...', // For text fields
  rows: 3                       // For textarea fields
}
```

## Benefits

1. **Code Reuse** - Eliminates duplicate code across nodes
2. **Easy Maintenance** - Changes to common functionality only need to be made in one place
3. **Rapid Development** - New nodes can be created with minimal code
4. **Consistency** - Uniform styling and behavior across all nodes
5. **Scalability** - Easy to add new node types as the application grows

## Technology Stack

### Frontend
- React 18.2.0
- React Flow 11.8.3
- React Scripts 5.0.1

### Backend
- Python
- FastAPI
- (Additional backend dependencies in requirements.txt)

## Project Structure

```
vector_task/
├── frontend/
│   ├── src/
│   │   ├── nodes/
│   │   │   ├── BaseNode.js          # Core abstraction
│   │   │   ├── NodeFactory.js       # Factory functions
│   │   │   ├── README.md            # Node documentation
│   │   │   ├── inputNode.js         # Input node
│   │   │   ├── outputNode.js        # Output node
│   │   │   ├── llmNode.js           # LLM node
│   │   │   ├── textNode.js          # Text node
│   │   │   ├── mathNode.js          # Math operation node
│   │   │   ├── conditionNode.js     # Conditional logic node
│   │   │   ├── transformNode.js     # Data transformation node
│   │   │   ├── databaseNode.js      # Database operations node
│   │   │   └── apiNode.js           # API request node
│   │   ├── App.js
│   │   ├── ui.js                    # Main React Flow component
│   │   ├── toolbar.js               # Node toolbar
│   │   ├── store.js                 # State management
│   │   └── ...
│   └── package.json
├── backend/
│   ├── main.py
│   └── ...
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Add your new nodes using the abstraction system
4. Update documentation as needed
5. Submit a pull request

## License

This project is part of a technical assessment and demonstrates advanced React development patterns.

---

**Note**: This abstraction system showcases how to eliminate code duplication and create maintainable, scalable node-based interfaces in React applications.

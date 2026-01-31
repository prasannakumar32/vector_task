# Node Abstraction System

This document explains the node abstraction system that makes creating new nodes efficient and maintainable.

## Overview

The node abstraction system consists of three main components:

1. **BaseNode.js** - Core component that provides shared functionality
2. **NodeFactory.js** - Factory functions for creating different types of nodes
3. **Individual node files** - Simple exports using the factory

## BaseNode Component

The `BaseNode` component handles:
- Common styling (width, height, border, background)
- Handle management (input/output connections)
- Field rendering (text inputs, selects, textareas)
- State management for editable fields
- Dynamic default values

### Configuration Options

```javascript
const config = {
  title: 'Node Title',           // Display title
  width: 200,                    // Node width
  height: 80,                    // Node height
  border: '1px solid black',     // Border style
  backgroundColor: 'white',     // Background color
  handles: [],                   // Array of handle configurations
  fields: [],                    // Array of field configurations
  children: null                 // Custom content to render
};
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

## NodeFactory

The `NodeFactory` provides convenient methods for creating common node types:

### Built-in Factory Methods

- `createInputNode()` - Creates input nodes with name and type fields
- `createOutputNode()` - Creates output nodes with name and type fields  
- `createLLMNode()` - Creates LLM nodes with system/prompt inputs
- `createTextNode()` - Creates text nodes with editable text field
- `createCustomNode(config)` - Creates nodes with custom configuration

### Example Usage

```javascript
// Simple node using factory
export const MyNode = NodeFactory.createInputNode();

// Custom node with configuration
export const CustomNode = NodeFactory.createCustomNode({
  title: 'My Custom Node',
  handles: [
    { id: 'input', type: 'target', position: Position.Left },
    { id: 'output', type: 'source', position: Position.Right }
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
  ]
});
```

## Benefits

### 1. **Code Reuse**
- Eliminates duplicate code across nodes
- Common functionality centralized in BaseNode
- Consistent behavior across all nodes

### 2. **Easy Maintenance**
- Changes to common functionality only need to be made in one place
- Styling updates apply to all nodes automatically
- Bug fixes benefit all node types

### 3. **Rapid Development**
- New nodes can be created with minimal code
- Factory methods for common patterns
- Configuration-driven approach

### 4. **Consistency**
- Uniform styling and behavior
- Standardized field types and handle patterns
- Predictable node structure

## New Nodes Created

The abstraction system was used to create 5 new nodes:

### 1. Math Node
- Performs mathematical operations
- Two inputs, one output
- Selectable operations (add, subtract, multiply, divide)

### 2. Condition Node  
- Conditional logic with true/false paths
- One input, two outputs (true/false)
- Configurable conditions and comparison values

### 3. Transform Node
- Data transformation operations
- One input, one output
- Built-in transforms plus custom expression support

### 4. Database Node
- Database operation node
- Two inputs, one output
- Support for multiple database types and operations

### 5. API Node
- HTTP API request node
- Two inputs, two outputs (response/error)
- Configurable methods, URLs, and timeouts

## Creating New Nodes

To create a new node:

1. **Choose an approach:**
   - Use a built-in factory method if it fits your needs
   - Use `createCustomNode()` for custom requirements

2. **Define configuration:**
   - Set title and styling
   - Configure handles for connections
   - Define fields for user input

3. **Create the file:**
   ```javascript
   // newNode.js
   import { NodeFactory } from './NodeFactory';
   
   export const NewNode = NodeFactory.createCustomNode({
     // configuration here
   });
   ```

4. **Register the node:**
   - Add import to `ui.js`
   - Add to `nodeTypes` object
   - Add to toolbar in `toolbar.js`

This abstraction system makes node creation fast, maintainable, and consistent across the entire application.

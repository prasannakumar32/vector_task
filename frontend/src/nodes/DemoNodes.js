import { NodeFactory } from './NodeFactory';
import { Position } from 'reactflow';

// Math Node - Performs mathematical operations
export const MathNode = NodeFactory.createCustomNode({
  title: 'Math',
  icon: '🔢',
  description: 'Perform mathematical operations',
  width: 220,
  height: 140,
  handles: [
    {
      id: 'input1',
      type: 'target',
      position: Position.Left,
      style: { top: '30%' },
      title: 'First number'
    },
    {
      id: 'input2',
      type: 'target',
      position: Position.Left,
      style: { top: '70%' },
      title: 'Second number'
    },
    {
      id: 'result',
      type: 'source',
      position: Position.Right,
      title: 'Result'
    }
  ],
  fields: [
    {
      key: 'operation',
      type: 'select',
      label: 'Operation',
      defaultValue: 'add',
      options: [
        { value: 'add', label: 'Addition (+)' },
        { value: 'subtract', label: 'Subtraction (-)' },
        { value: 'multiply', label: 'Multiplication (×)' },
        { value: 'divide', label: 'Division (÷)' },
        { value: 'modulus', label: 'Modulus (%)' },
        { value: 'power', label: 'Power (^)' }
      ]
    },
    {
      key: 'precision',
      type: 'number',
      label: 'Decimal Places',
      defaultValue: 2,
      min: 0,
      max: 10,
      step: 1
    }
  ],
  badge: {
    text: '2→1',
    className: 'bg-purple-100 text-purple-700'
  }
});

// Delay Node - Waits for specified milliseconds
export const DelayNode = NodeFactory.createCustomNode({
  title: 'Delay',
  icon: '⏱️',
  description: 'Wait for specified time',
  width: 200,
  height: 120,
  handles: [
    {
      id: 'input',
      type: 'target',
      position: Position.Left,
      title: 'Input data'
    },
    {
      id: 'output',
      type: 'source',
      position: Position.Right,
      title: 'Delayed output'
    }
  ],
  fields: [
    {
      key: 'delayMs',
      type: 'number',
      label: 'Delay (ms)',
      defaultValue: 1000,
      min: 0,
      max: 60000,
      step: 100,
      placeholder: 'Enter milliseconds'
    },
    {
      key: 'showProgress',
      type: 'select',
      label: 'Show Progress',
      defaultValue: 'true',
      options: [
        { value: 'true', label: 'Yes' },
        { value: 'false', label: 'No' }
      ]
    }
  ],
  badge: {
    text: '1→1',
    className: 'bg-orange-100 text-orange-700'
  }
});

// Condition Node - Conditional logic with true/false paths
export const ConditionNode = NodeFactory.createCustomNode({
  title: 'Condition',
  icon: '🔀',
  description: 'Conditional branching logic',
  width: 240,
  height: 160,
  handles: [
    {
      id: 'input',
      type: 'target',
      position: Position.Left,
      title: 'Input value'
    },
    {
      id: 'true',
      type: 'source',
      position: Position.Right,
      style: { top: '25%' },
      title: 'True path'
    },
    {
      id: 'false',
      type: 'source',
      position: Position.Right,
      style: { top: '75%' },
      title: 'False path'
    }
  ],
  fields: [
    {
      key: 'operator',
      type: 'select',
      label: 'Operator',
      defaultValue: 'equals',
      options: [
        { value: 'equals', label: 'Equals (==)' },
        { value: 'notEquals', label: 'Not Equals (!=)' },
        { value: 'greaterThan', label: 'Greater Than (>)' },
        { value: 'lessThan', label: 'Less Than (<)' },
        { value: 'greaterThanOrEqual', label: 'Greater Than or Equal (>=)' },
        { value: 'lessThanOrEqual', label: 'Less Than or Equal (<=)' },
        { value: 'contains', label: 'Contains' },
        { value: 'startsWith', label: 'Starts With' },
        { value: 'endsWith', label: 'Ends With' }
      ]
    },
    {
      key: 'compareValue',
      type: 'text',
      label: 'Compare To',
      defaultValue: '',
      placeholder: 'Value to compare against'
    },
    {
      key: 'caseSensitive',
      type: 'select',
      label: 'Case Sensitive',
      defaultValue: 'false',
      options: [
        { value: 'true', label: 'Yes' },
        { value: 'false', label: 'No' }
      ]
    }
  ],
  badge: {
    text: '1→2',
    className: 'bg-red-100 text-red-700'
  }
});

// Formatter Node - Text transformation operations
export const FormatterNode = NodeFactory.createCustomNode({
  title: 'Formatter',
  icon: '🎨',
  description: 'Transform and format text',
  width: 220,
  height: 140,
  handles: [
    {
      id: 'input',
      type: 'target',
      position: Position.Left,
      title: 'Input text'
    },
    {
      id: 'output',
      type: 'source',
      position: Position.Right,
      title: 'Formatted text'
    }
  ],
  fields: [
    {
      key: 'transform',
      type: 'select',
      label: 'Transform',
      defaultValue: 'uppercase',
      options: [
        { value: 'uppercase', label: 'Uppercase' },
        { value: 'lowercase', label: 'Lowercase' },
        { value: 'capitalize', label: 'Capitalize Words' },
        { value: 'title', label: 'Title Case' },
        { value: 'reverse', label: 'Reverse' },
        { value: 'trim', label: 'Trim Whitespace' },
        { value: 'removeSpaces', label: 'Remove Spaces' },
        { value: 'replaceSpaces', label: 'Replace Spaces with _' }
      ]
    },
    {
      key: 'customPattern',
      type: 'text',
      label: 'Custom Pattern',
      defaultValue: '',
      placeholder: 'Optional: Custom regex pattern'
    }
  ],
  badge: {
    text: '1→1',
    className: 'bg-green-100 text-green-700'
  }
});

// Logger Node - Console/log output
export const LoggerNode = NodeFactory.createCustomNode({
  title: 'Logger',
  icon: '📝',
  description: 'Log data to console',
  width: 200,
  height: 120,
  handles: [
    {
      id: 'input',
      type: 'target',
      position: Position.Left,
      title: 'Data to log'
    },
    {
      id: 'output',
      type: 'source',
      position: Position.Right,
      title: 'Pass through'
    }
  ],
  fields: [
    {
      key: 'logLevel',
      type: 'select',
      label: 'Log Level',
      defaultValue: 'info',
      options: [
        { value: 'debug', label: 'Debug' },
        { value: 'info', label: 'Info' },
        { value: 'warn', label: 'Warning' },
        { value: 'error', label: 'Error' },
        { value: 'log', label: 'Log' }
      ]
    },
    {
      key: 'prefix',
      type: 'text',
      label: 'Prefix',
      defaultValue: '[Pipeline]',
      placeholder: 'Optional log prefix'
    },
    {
      key: 'includeTimestamp',
      type: 'select',
      label: 'Include Timestamp',
      defaultValue: 'true',
      options: [
        { value: 'true', label: 'Yes' },
        { value: 'false', label: 'No' }
      ]
    }
  ],
  badge: {
    text: '1→1',
    className: 'bg-blue-100 text-blue-700'
  }
});

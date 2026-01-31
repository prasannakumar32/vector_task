// mathNode.js

import { NodeFactory } from './NodeFactory';
import { Position } from 'reactflow';

export const MathNode = NodeFactory.createCustomNode({
  title: 'Math Operation',
  handles: [
    {
      id: 'input1',
      type: 'target',
      position: Position.Left,
      style: { top: '25%' }
    },
    {
      id: 'input2',
      type: 'target',
      position: Position.Left,
      style: { top: '75%' }
    },
    {
      id: 'result',
      type: 'source',
      position: Position.Right
    }
  ],
  fields: [
    {
      key: 'operation',
      type: 'select',
      label: 'Operation:',
      defaultValue: 'add',
      options: [
        { value: 'add', label: 'Add (+)' },
        { value: 'subtract', label: 'Subtract (-)' },
        { value: 'multiply', label: 'Multiply (*)' },
        { value: 'divide', label: 'Divide (/)' }
      ]
    }
  ],
  children: <span>Performs math operations</span>
});

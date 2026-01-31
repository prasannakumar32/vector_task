// transformNode.js

import { NodeFactory } from './NodeFactory';
import { Position } from 'reactflow';

export const TransformNode = NodeFactory.createCustomNode({
  title: 'Transform',
  height: 140,
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
      key: 'transformType',
      type: 'select',
      label: 'Transform:',
      defaultValue: 'uppercase',
      options: [
        { value: 'uppercase', label: 'Uppercase' },
        { value: 'lowercase', label: 'Lowercase' },
        { value: 'reverse', label: 'Reverse' },
        { value: 'trim', label: 'Trim Spaces' },
        { value: 'custom', label: 'Custom' }
      ]
    },
    {
      key: 'customExpression',
      type: 'textarea',
      label: 'Custom:',
      defaultValue: '',
      placeholder: 'Enter custom expression...',
      rows: 2
    }
  ],
  children: <span>Data transformation</span>
});

// conditionNode.js

import { NodeFactory } from './NodeFactory';
import { Position } from 'reactflow';

export const ConditionNode = NodeFactory.createCustomNode({
  title: 'Condition',
  height: 120,
  handles: [
    {
      id: 'input',
      type: 'target',
      position: Position.Left
    },
    {
      id: 'true',
      type: 'source',
      position: Position.Right,
      style: { top: '25%' }
    },
    {
      id: 'false',
      type: 'source',
      position: Position.Right,
      style: { top: '75%' }
    }
  ],
  fields: [
    {
      key: 'condition',
      type: 'select',
      label: 'Condition:',
      defaultValue: 'equals',
      options: [
        { value: 'equals', label: 'Equals' },
        { value: 'not_equals', label: 'Not Equals' },
        { value: 'greater', label: 'Greater Than' },
        { value: 'less', label: 'Less Than' },
        { value: 'contains', label: 'Contains' }
      ]
    },
    {
      key: 'value',
      type: 'text',
      label: 'Compare to:',
      defaultValue: ''
    }
  ],
  children: <span>Conditional logic</span>
});

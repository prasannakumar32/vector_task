// databaseNode.js

import { NodeFactory } from './NodeFactory';
import { Position } from 'reactflow';

export const DatabaseNode = NodeFactory.createCustomNode({
  title: 'Database',
  height: 160,
  backgroundColor: '#fff5f5',
  border: '2px solid #ff6b6b',
  handles: [
    {
      id: 'query',
      type: 'target',
      position: Position.Left,
      style: { top: '30%' }
    },
    {
      id: 'data',
      type: 'target',
      position: Position.Left,
      style: { top: '70%' }
    },
    {
      id: 'result',
      type: 'source',
      position: Position.Right
    }
  ],
  fields: [
    {
      key: 'dbType',
      type: 'select',
      label: 'Database:',
      defaultValue: 'postgresql',
      options: [
        { value: 'postgresql', label: 'PostgreSQL' },
        { value: 'mysql', label: 'MySQL' },
        { value: 'mongodb', label: 'MongoDB' },
        { value: 'sqlite', label: 'SQLite' }
      ]
    },
    {
      key: 'operation',
      type: 'select',
      label: 'Operation:',
      defaultValue: 'select',
      options: [
        { value: 'select', label: 'SELECT' },
        { value: 'insert', label: 'INSERT' },
        { value: 'update', label: 'UPDATE' },
        { value: 'delete', label: 'DELETE' }
      ]
    },
    {
      key: 'tableName',
      type: 'text',
      label: 'Table:',
      defaultValue: 'users'
    }
  ],
  children: <span>🗄️ Database operations</span>
});

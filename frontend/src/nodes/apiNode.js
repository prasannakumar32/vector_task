// apiNode.js

import { NodeFactory } from './NodeFactory';
import { Position } from 'reactflow';

export const ApiNode = NodeFactory.createCustomNode({
  title: 'API Call',
  height: 180,
  backgroundColor: '#f0fff4',
  border: '2px solid #48bb78',
  handles: [
    {
      id: 'request',
      type: 'target',
      position: Position.Left,
      style: { top: '25%' }
    },
    {
      id: 'headers',
      type: 'target',
      position: Position.Left,
      style: { top: '50%' }
    },
    {
      id: 'response',
      type: 'source',
      position: Position.Right,
      style: { top: '25%' }
    },
    {
      id: 'error',
      type: 'source',
      position: Position.Right,
      style: { top: '75%' }
    }
  ],
  fields: [
    {
      key: 'method',
      type: 'select',
      label: 'Method:',
      defaultValue: 'GET',
      options: [
        { value: 'GET', label: 'GET' },
        { value: 'POST', label: 'POST' },
        { value: 'PUT', label: 'PUT' },
        { value: 'DELETE', label: 'DELETE' },
        { value: 'PATCH', label: 'PATCH' }
      ]
    },
    {
      key: 'url',
      type: 'text',
      label: 'URL:',
      defaultValue: 'https://api.example.com/endpoint',
      placeholder: 'Enter API URL...'
    },
    {
      key: 'timeout',
      type: 'text',
      label: 'Timeout (ms):',
      defaultValue: '5000'
    }
  ],
  children: <span>🌐 HTTP API Request</span>
});

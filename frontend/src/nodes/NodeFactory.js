import { BaseNode, createNodeConfig } from './BaseNode';
import { EnhancedTextNode } from './EnhancedTextNode';
import { Position } from 'reactflow';

export const NodeFactory = {
  createInputNode: (customConfig = {}) => {
    const config = createNodeConfig({
      title: 'Input',
      handles: [
        {
          id: 'value',
          type: 'source',
          position: Position.Right
        }
      ],
      fields: [
        {
          key: 'inputName',
          type: 'text',
          label: 'Name',
          defaultValue: (data, id) => data?.inputName || id.replace('customInput-', 'input_')
        },
        {
          key: 'inputType',
          type: 'select',
          label: 'Type',
          defaultValue: 'Text',
          options: [
            { value: 'Text', label: 'Text' },
            { value: 'File', label: 'File' }
          ]
        }
      ],
      ...customConfig
    });

    return ({ id, data }) => (
      <BaseNode id={id} data={data} config={config} />
    );
  },

  createOutputNode: (customConfig = {}) => {
    const config = createNodeConfig({
      title: 'Output',
      handles: [
        {
          id: 'value',
          type: 'target',
          position: Position.Left
        }
      ],
      fields: [
        {
          key: 'outputName',
          type: 'text',
          label: 'Name',
          defaultValue: (data, id) => data?.outputName || id.replace('customOutput-', 'output_')
        },
        {
          key: 'outputType',
          type: 'select',
          label: 'Type',
          defaultValue: 'Text',
          options: [
            { value: 'Text', label: 'Text' },
            { value: 'Image', label: 'Image' }
          ]
        }
      ],
      ...customConfig
    });

    return ({ id, data }) => (
      <BaseNode id={id} data={data} config={config} />
    );
  },

  createLLMNode: (customConfig = {}) => {
    const config = createNodeConfig({
      title: 'LLM',
      handles: [
        {
          id: 'system',
          type: 'target',
          position: Position.Left,
          style: { top: `${100/3}%` }
        },
        {
          id: 'prompt',
          type: 'target',
          position: Position.Left,
          style: { top: `${200/3}%` }
        },
        {
          id: 'response',
          type: 'source',
          position: Position.Right
        }
      ],
      fields: [],
      ...customConfig
    });

    return ({ id, data }) => (
      <BaseNode id={id} data={data} config={config}>
        <div className="flex items-center space-x-2 text-purple-700">
          <span className="text-lg">🤖</span>
          <span className="font-medium">LLM Processor</span>
        </div>
      </BaseNode>
    );
  },

  createTextNode: (customConfig = {}) => {
    // Return the enhanced text node component directly
    return ({ id, data, onDataChange }) => (
      <EnhancedTextNode id={id} data={data} onDataChange={onDataChange} />
    );
  },

  createCustomNode: (nodeConfig) => {
    const config = createNodeConfig(nodeConfig);
    
    return ({ id, data }) => (
      <BaseNode id={id} data={data} config={config}>
        {nodeConfig.children}
      </BaseNode>
    );
  }
};

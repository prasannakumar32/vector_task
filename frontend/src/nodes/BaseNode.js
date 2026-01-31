import { useState } from 'react';
import { Handle } from 'reactflow';

export const BaseNode = ({ 
  id, 
  data, 
  config = {},
  children 
}) => {
  const {
    title = 'Node',
    width = 200,
    height = 80,
    border = '1px solid #e2e8f0',
    backgroundColor = 'white',
    handles = [],
    fields = []
  } = config;

  // Initialize state for fields using a single state object
  const getInitialFieldValues = () => {
    const values = {};
    fields.forEach(field => {
      let defaultValue = field.defaultValue || '';
      
      // Handle dynamic default values (functions)
      if (typeof defaultValue === 'function') {
        defaultValue = defaultValue(data, id);
      }
      
      values[field.key] = data?.[field.key] || defaultValue;
    });
    return values;
  };

  const [fieldValues, setFieldValues] = useState(getInitialFieldValues());

  const handleFieldChange = (fieldKey, value) => {
    setFieldValues(prev => ({
      ...prev,
      [fieldKey]: value
    }));
  };

  const renderField = (field) => {
    const value = fieldValues[field.key];
    
    switch (field.type) {
      case 'text':
        return (
          <div key={field.key} className="space-y-1">
            <label className="node-label">
              {field.label}
            </label>
            <input
              type="text"
              className="node-input"
              value={value}
              onChange={(e) => handleFieldChange(field.key, e.target.value)}
              placeholder={field.placeholder}
            />
          </div>
        );
      
      case 'select':
        return (
          <div key={field.key} className="space-y-1">
            <label className="node-label">
              {field.label}
            </label>
            <select
              className="node-select"
              value={value}
              onChange={(e) => handleFieldChange(field.key, e.target.value)}
            >
              {field.options.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        );
      
      case 'textarea':
        return (
          <div key={field.key} className="space-y-1">
            <label className="node-label">
              {field.label}
            </label>
            <textarea
              className="node-textarea"
              value={value}
              onChange={(e) => handleFieldChange(field.key, e.target.value)}
              placeholder={field.placeholder}
              rows={field.rows || 3}
            />
          </div>
        );
      
      default:
        return null;
    }
  };

  const renderHandles = () => {
    return handles.map(handle => {
      const handleStyle = handle.style || {};
      
      return (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`}
          style={handleStyle}
        />
      );
    });
  };

  return (
    <div className="base-node" style={{
      width, 
      height, 
      border, 
      backgroundColor,
      padding: '12px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative'
    }}>
      {renderHandles()}
      
      <div className="mb-2">
        <span className="font-semibold text-slate-800 text-sm">{title}</span>
      </div>
      
      <div className="space-y-2 flex-1">
        {children}
        {fields.map(renderField)}
      </div>
      
      {renderHandles()}
    </div>
  );
};

export const createNodeConfig = (config) => {
  return {
    width: 200,
    height: 80,
    border: '1px solid #e2e8f0',
    backgroundColor: 'white',
    ...config
  };
};

// BaseNode.js

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
    border = '1px solid black',
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
          <label key={field.key}>
            {field.label}:
            <input
              type="text"
              value={value}
              onChange={(e) => handleFieldChange(field.key, e.target.value)}
              placeholder={field.placeholder}
            />
          </label>
        );
      
      case 'select':
        return (
          <label key={field.key}>
            {field.label}:
            <select
              value={value}
              onChange={(e) => handleFieldChange(field.key, e.target.value)}
            >
              {field.options.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        );
      
      case 'textarea':
        return (
          <label key={field.key}>
            {field.label}:
            <textarea
              value={value}
              onChange={(e) => handleFieldChange(field.key, e.target.value)}
              placeholder={field.placeholder}
              rows={field.rows || 3}
            />
          </label>
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
    <div style={{
      width, 
      height, 
      border, 
      backgroundColor,
      padding: '8px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      {renderHandles()}
      
      <div>
        <span style={{ fontWeight: 'bold' }}>{title}</span>
      </div>
      
      <div>
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
    border: '1px solid black',
    backgroundColor: 'white',
    ...config
  };
};

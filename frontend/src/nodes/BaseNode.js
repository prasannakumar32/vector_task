import { useState } from 'react';
import { Handle } from 'reactflow';
import { StyledField } from '../styles/components';

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
    fields = [],
    icon = null,
    badge = null,
    description = null
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
      
      values[field.key] = data?.[field.key] !== undefined ? data[field.key] : defaultValue;
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
    
    return (
      <StyledField
        key={field.key}
        label={field.label}
        type={field.type}
        value={value}
        onChange={(e) => handleFieldChange(field.key, e.target.value)}
        placeholder={field.placeholder}
        options={field.options}
        min={field.min}
        max={field.max}
        step={field.step}
        rows={field.rows}
      />
    );
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
          title={handle.title || handle.id}
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
        <div className="flex items-center justify-between">
          <span className="font-semibold text-slate-800 text-sm flex items-center">
            {icon && <span className="mr-2">{icon}</span>}
            {title}
          </span>
          {badge && (
            <span className={`text-xs px-2 py-1 rounded-full ${badge.className || 'bg-blue-100 text-blue-700'}`}>
              {badge.text}
            </span>
          )}
        </div>
        {description && (
          <p className="text-xs text-slate-500 mt-1">{description}</p>
        )}
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

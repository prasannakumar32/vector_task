import { useState, useEffect, useRef, useCallback } from 'react';
import { Handle, Position } from 'reactflow';

export const EnhancedTextNode = ({ id, data, onDataChange }) => {
  const [text, setText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const [dimensions, setDimensions] = useState({ width: 200, height: 80 });
  const textareaRef = useRef(null);
  const isMounted = useRef(true);
  const calculationTimeout = useRef(null);

  // Extract variables from text ({{variable_name}})
  const extractVariables = (text) => {
    const regex = /\{\{([a-zA-Z_$][a-zA-Z0-9_$]*)\}\}/g;
    const matches = [];
    let match;
    
    while ((match = regex.exec(text)) !== null) {
      matches.push(match[1]);
    }
    
    return [...new Set(matches)]; // Remove duplicates
  };

  // Calculate dynamic dimensions based on text content
  const calculateDimensions = useCallback((text) => {
    if (!isMounted.current || !textareaRef.current) {
      return { width: 200, height: 80 };
    }

    try {
      // Create a temporary div to measure text
      const tempDiv = document.createElement('div');
      const styles = window.getComputedStyle(textareaRef.current);
      
      tempDiv.style.position = 'absolute';
      tempDiv.style.visibility = 'hidden';
      tempDiv.style.width = 'auto';
      tempDiv.style.height = 'auto';
      tempDiv.style.whiteSpace = 'pre-wrap';
      tempDiv.style.wordWrap = 'break-word';
      tempDiv.style.padding = styles.padding;
      tempDiv.style.fontSize = styles.fontSize;
      tempDiv.style.fontFamily = styles.fontFamily;
      tempDiv.style.lineHeight = styles.lineHeight;
      tempDiv.style.width = '180px'; // Base width minus padding
      
      tempDiv.textContent = text;
      document.body.appendChild(tempDiv);
      
      const height = Math.max(80, Math.min(300, tempDiv.offsetHeight + 40)); // Min 80px, Max 300px
      const width = Math.max(200, Math.min(400, tempDiv.offsetWidth + 40)); // Min 200px, Max 400px
      
      // Clean up immediately
      if (tempDiv.parentNode) {
        document.body.removeChild(tempDiv);
      }
      
      return { width, height };
    } catch (error) {
      console.warn('Error calculating dimensions:', error);
      return { width: 200, height: 80 };
    }
  }, []);

  // Update variables and dimensions when text changes (combined to prevent race condition)
  useEffect(() => {
    // Clear any pending timeout
    if (calculationTimeout.current) {
      clearTimeout(calculationTimeout.current);
    }

    // Debounce the calculations to improve performance
    calculationTimeout.current = setTimeout(() => {
      if (!isMounted.current) return;
      
      const newVariables = extractVariables(text);
      const newDimensions = calculateDimensions(text);
      
      setVariables(newVariables);
      setDimensions(newDimensions);
    }, 100); // 100ms debounce

    return () => {
      if (calculationTimeout.current) {
        clearTimeout(calculationTimeout.current);
      }
    };
  }, [text, calculateDimensions]);

  // Sync text state back to parent data
  useEffect(() => {
    if (onDataChange && isMounted.current) {
      onDataChange({ ...data, text });
    }
  }, [text, data, onDataChange]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      isMounted.current = false;
      if (calculationTimeout.current) {
        clearTimeout(calculationTimeout.current);
      }
    };
  }, []);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const renderVariableHandles = () => {
    const maxHandles = Math.floor((dimensions.height - 60) / 25); // Calculate max handles based on height
    const displayVariables = variables.slice(0, maxHandles);
    
    return displayVariables.map((variable, index) => {
      const topPosition = 30 + (index * 25); // Space handles vertically
      
      return (
        <Handle
          key={variable}
          type="target"
          position={Position.Left}
          id={`${id}-input-${variable}`}
          style={{
            top: `${topPosition}px`,
            background: '#3b82f6',
            border: '2px solid white',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
          title={`Variable: ${variable}`}
        />
      );
    });
  };

  // Calculate max handles for overflow display
  const maxHandles = Math.floor((dimensions.height - 60) / 25);

  return (
    <div 
      className="base-node"
      style={{
        width: dimensions.width,
        height: dimensions.height,
        border: '1px solid #e2e8f0',
        backgroundColor: 'white',
        padding: '12px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        transition: 'all 0.2s ease-in-out'
      }}
    >
      {/* Variable handles on the left */}
      {renderVariableHandles()}
      
      {/* Node header */}
      <div className="mb-2">
        <span className="font-semibold text-slate-800 text-sm flex items-center">
          <span className="text-lg mr-2">📝</span>
          Text
          {variables.length > 0 && (
            <span className="ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
              {variables.length} variable{variables.length !== 1 ? 's' : ''}
            </span>
          )}
        </span>
      </div>
      
      {/* Text input area */}
      <div className="flex-1 flex flex-col">
        <label className="node-label">Text Content</label>
        <textarea
          ref={textareaRef}
          className="node-textarea"
          value={text}
          onChange={handleTextChange}
          placeholder="Enter text... Use {{variable}} for variables"
          style={{
            width: '100%',
            height: '100%',
            minHeight: '60px',
            resize: 'none',
            overflow: 'auto'
          }}
        />
        
        {variables.length > maxHandles && (
          <div className="text-xs text-orange-600 mt-1">
            +{variables.length - maxHandles} more variable{variables.length - maxHandles !== 1 ? 's' : ''}
          </div>
        )}
      </div>
      
      {/* Output handle on the right */}
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        style={{
          background: '#10b981',
          border: '2px solid white',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}
        title="Output"
      />
    </div>
  );
};

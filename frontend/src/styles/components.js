import React from 'react';
import { createStyles, getNodeColor, getBadgeColor } from './styles';
import { theme } from './theme';

// Higher-order component for styling
export const withStyles = (Component, styleKey) => {
  const styles = createStyles(theme);
  
  return React.forwardRef((props, ref) => {
    const style = styles[styleKey] || {};
    
    // Handle responsive styles
    const responsiveStyle = typeof style === 'object' ? style : {};
    
    return (
      <Component 
        ref={ref}
        {...props}
        style={{
          ...responsiveStyle,
          ...props.style,
        }}
        className={`${props.className || ''} styled-${styleKey}`}
      />
    );
  });
};

// Styled components for common UI elements
export const StyledCanvas = React.forwardRef(({ children, ...props }, ref) => {
  const styles = createStyles(theme);
  
  return (
    <div 
      ref={ref}
      {...props}
      style={styles.canvas}
      className={`pipeline-canvas ${props.className || ''}`}
    >
      {children}
    </div>
  );
});

export const StyledNode = React.forwardRef(({ 
  children, 
  nodeType, 
  badge, 
  icon, 
  title, 
  description, 
  selected = false,
  ...props 
}, ref) => {
  const styles = createStyles(theme);
  const badgeColor = badge ? getBadgeColor(badge.text, theme) : null;
  
  return (
    <div 
      ref={ref}
      {...props}
      style={{
        ...styles.node,
        ...(selected && styles.node['&.selected']),
        ...props.style,
      }}
      className={`base-node ${selected ? 'selected' : ''} ${props.className || ''}`}
    >
      {/* Handles will be rendered by ReactFlow */}
      {children}
      
      {/* Node Header */}
      <div style={styles.nodeHeader}>
        <div style={styles.nodeTitle}>
          {icon && <span>{icon}</span>}
          {title}
        </div>
        {badge && (
          <span 
            style={{
              ...styles.nodeBadge,
              backgroundColor: badgeColor.bg,
              color: badgeColor.text,
            }}
          >
            {badge.text}
          </span>
        )}
      </div>
      
      {description && (
        <p style={styles.toolbarDescription}>
          {description}
        </p>
      )}
      
      {/* Node Content */}
      <div style={styles.nodeContent}>
        {/* Field content will be rendered here */}
      </div>
    </div>
  );
});

export const StyledField = React.forwardRef(({ 
  label, 
  type = 'text', 
  options = [], 
  placeholder, 
  value, 
  onChange, 
  min, 
  max, 
  step, 
  rows = 3,
  ...props 
}, ref) => {
  const styles = createStyles(theme);
  
  const renderInput = () => {
    switch (type) {
      case 'select':
        return (
          <select
            ref={ref}
            value={value}
            onChange={onChange}
            style={styles.fieldSelect}
            {...props}
          >
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      
      case 'textarea':
        return (
          <textarea
            ref={ref}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            rows={rows}
            style={styles.fieldTextarea}
            {...props}
          />
        );
      
      case 'number':
        return (
          <input
            ref={ref}
            type="number"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            min={min}
            max={max}
            step={step}
            style={styles.fieldInput}
            {...props}
          />
        );
      
      default:
        return (
          <input
            ref={ref}
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            style={styles.fieldInput}
            {...props}
          />
        );
    }
  };
  
  return (
    <div style={styles.field}>
      {label && (
        <label style={styles.fieldLabel}>
          {label}
        </label>
      )}
      {renderInput()}
    </div>
  );
});

export const StyledToolbar = React.forwardRef(({ children, ...props }, ref) => {
  const styles = createStyles(theme);
  
  return (
    <div 
      ref={ref}
      {...props}
      style={styles.toolbar}
      className={`node-toolbar ${props.className || ''}`}
    >
      {children}
    </div>
  );
});

export const StyledToolbarHeader = React.forwardRef(({ 
  title, 
  icon, 
  status, 
  description, 
  ...props 
}, ref) => {
  const styles = createStyles(theme);
  
  return (
    <div ref={ref} {...props} style={styles.toolbarHeader}>
      <div>
        <div style={styles.toolbarTitle}>
          {icon && <span>{icon}</span>}
          {title}
        </div>
        {description && (
          <p style={styles.toolbarDescription}>
            {description}
          </p>
        )}
      </div>
      {status && (
        <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.sm }}>
          <div 
            style={{
              ...styles.statusIndicator,
              ...(status && styles.statusIndicator[status])
            }}
          />
          <span style={styles.fieldLabel}>
            {status}
          </span>
        </div>
      )}
    </div>
  );
});

export const StyledDraggableNode = React.forwardRef(({ 
  nodeType, 
  label, 
  icon, 
  ...props 
}, ref) => {
  const styles = createStyles(theme);
  const nodeColor = getNodeColor(nodeType, theme);
  
  return (
    <div 
      ref={ref}
      {...props}
      style={{
        ...styles.draggableNode,
        '--node-color': nodeColor,
        '--node-color-light': theme.colors.accent[`${nodeType}Light`] || theme.colors.accent.primaryLight,
        ...props.style,
      }}
      className={`draggable-node ${props.className || ''}`}
    >
      <div style={styles.draggableNodeIcon}>
        {icon}
      </div>
      <div style={styles.draggableNodeLabel}>
        {label}
      </div>
    </div>
  );
});

export const StyledButton = React.forwardRef(({ 
  variant = 'primary', 
  children, 
  ...props 
}, ref) => {
  const styles = createStyles(theme);
  const buttonStyle = variant === 'primary' ? styles.buttonPrimary : styles.button;
  
  return (
    <button 
      ref={ref}
      {...props}
      style={{
        ...styles.button,
        ...buttonStyle,
        ...props.style,
      }}
      className={`submit-button ${props.className || ''}`}
    >
      {children}
    </button>
  );
});

// Custom hook for using theme in components
export const useTheme = () => {
  return theme;
};

// Custom hook for using styles
export const useStyles = () => {
  return createStyles(theme);
};

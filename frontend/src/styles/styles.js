// Global Styles with Design Tokens
import { cssVariables } from './theme';

// Apply CSS custom properties to :root
export const injectThemeVariables = () => {
  const root = document.documentElement;
  Object.entries(cssVariables).forEach(([property, value]) => {
    root.style.setProperty(property, value);
  });
};

// CSS-in-JS style utilities
export const createStyles = (theme) => ({
  // Canvas Styles
  canvas: {
    width: '100%',
    height: '70vh',
    minHeight: '500px',
    backgroundColor: theme.colors.background.canvas,
    borderRadius: theme.borderRadius.lg,
    border: `1px solid ${theme.colors.border.light}`,
    boxShadow: theme.shadows.lg,
    position: 'relative',
    overflow: 'hidden',
  },
  
  // Node Styles
  node: {
    backgroundColor: theme.colors.background.node,
    border: `1px solid ${theme.colors.border.node}`,
    borderRadius: theme.borderRadius.lg,
    boxShadow: theme.shadows.node,
    padding: theme.spacing.md,
    minWidth: '180px',
    maxWidth: '400px',
    transition: theme.transitions.normal,
    cursor: 'default',
    fontFamily: theme.typography.fontFamily.sans,
    position: 'relative',
    
    '&:hover': {
      backgroundColor: theme.colors.background.nodeHover,
      boxShadow: theme.shadows.nodeHover,
      transform: 'translateY(-2px)',
    },
    
    '&:focus': {
      outline: `2px solid ${theme.colors.border.focus}`,
      outlineOffset: '2px',
    },
    
    '&.selected': {
      borderColor: theme.colors.accent.primary,
      boxShadow: `0 0 0 2px ${theme.colors.accent.primary}20`,
    },
  },
  
  // Node Header
  nodeHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.sm,
    paddingBottom: theme.spacing.sm,
    borderBottom: `1px solid ${theme.colors.border.light}`,
  },
  
  nodeTitle: {
    fontSize: theme.typography.fontSize.sm,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.text.primary,
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  
  nodeBadge: {
    fontSize: theme.typography.fontSize.xs,
    fontWeight: theme.typography.fontWeight.medium,
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.borderRadius.full,
    backgroundColor: theme.colors.accent.primary,
    color: theme.colors.text.inverse,
  },
  
  // Node Content
  nodeContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.sm,
  },
  
  // Field Styles
  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.xs,
  },
  
  fieldLabel: {
    fontSize: theme.typography.fontSize.xs,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.text.secondary,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  
  fieldInput: {
    padding: theme.spacing.sm,
    border: `1px solid ${theme.colors.border.light}`,
    borderRadius: theme.borderRadius.md,
    fontSize: theme.typography.fontSize.sm,
    fontFamily: theme.typography.fontFamily.sans,
    backgroundColor: theme.colors.background.node,
    color: theme.colors.text.primary,
    transition: theme.transitions.fast,
    
    '&:focus': {
      outline: 'none',
      borderColor: theme.colors.border.focus,
      boxShadow: `0 0 0 3px ${theme.colors.accent.primary}20`,
    },
    
    '&::placeholder': {
      color: theme.colors.text.muted,
    },
  },
  
  fieldSelect: {
    padding: theme.spacing.sm,
    border: `1px solid ${theme.colors.border.light}`,
    borderRadius: theme.borderRadius.md,
    fontSize: theme.typography.fontSize.sm,
    fontFamily: theme.typography.fontFamily.sans,
    backgroundColor: theme.colors.background.node,
    color: theme.colors.text.primary,
    cursor: 'pointer',
    transition: theme.transitions.fast,
    
    '&:focus': {
      outline: 'none',
      borderColor: theme.colors.border.focus,
      boxShadow: `0 0 0 3px ${theme.colors.accent.primary}20`,
    },
  },
  
  fieldTextarea: {
    padding: theme.spacing.sm,
    border: `1px solid ${theme.colors.border.light}`,
    borderRadius: theme.borderRadius.md,
    fontSize: theme.typography.fontSize.sm,
    fontFamily: theme.typography.fontFamily.sans,
    backgroundColor: theme.colors.background.node,
    color: theme.colors.text.primary,
    resize: 'vertical',
    minHeight: '60px',
    transition: theme.transitions.fast,
    
    '&:focus': {
      outline: 'none',
      borderColor: theme.colors.border.focus,
      boxShadow: `0 0 0 3px ${theme.colors.accent.primary}20`,
    },
    
    '&::placeholder': {
      color: theme.colors.text.muted,
    },
  },
  
  // Handle Styles
  handle: {
    width: '12px',
    height: '12px',
    border: '2px solid #ffffff',
    borderRadius: theme.borderRadius.full,
    transition: theme.transitions.fast,
    cursor: 'crosshair',
    
    '&.source': {
      backgroundColor: theme.colors.handles.source,
    },
    
    '&.target': {
      backgroundColor: theme.colors.handles.target,
    },
    
    '&:hover': {
      transform: 'scale(1.2)',
      boxShadow: theme.shadows.md,
    },
  },
  
  // Toolbar Styles
  toolbar: {
    backgroundColor: theme.colors.background.toolbar,
    border: `1px solid ${theme.colors.border.toolbar}`,
    borderRadius: theme.borderRadius.lg,
    boxShadow: theme.shadows.toolbar,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.xl,
  },
  
  toolbarHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.lg,
  },
  
  toolbarTitle: {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.text.primary,
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  
  toolbarDescription: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.text.secondary,
    lineHeight: theme.typography.lineHeight.relaxed,
  },
  
  // Draggable Node Styles
  draggableNode: {
    backgroundColor: theme.colors.background.node,
    border: `1px solid ${theme.colors.border.light}`,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.sm,
    minWidth: '80px',
    maxWidth: '120px',
    height: '60px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'grab',
    transition: theme.transitions.normal,
    boxShadow: theme.shadows.sm,
    
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: theme.shadows.md,
    },
    
    '&:active': {
      cursor: 'grabbing',
      transform: 'scale(0.95)',
    },
  },
  
  draggableNodeIcon: {
    fontSize: theme.typography.fontSize.lg,
    marginBottom: theme.spacing.xs,
  },
  
  draggableNodeLabel: {
    fontSize: theme.typography.fontSize.xs,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.text.primary,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  
  // Button Styles
  button: {
    padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
    border: 'none',
    borderRadius: theme.borderRadius.md,
    fontSize: theme.typography.fontSize.sm,
    fontWeight: theme.typography.fontWeight.semibold,
    fontFamily: theme.typography.fontFamily.sans,
    cursor: 'pointer',
    transition: theme.transitions.normal,
    display: 'inline-flex',
    alignItems: 'center',
    gap: theme.spacing.sm,
    
    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },
  },
  
  buttonPrimary: {
    backgroundColor: theme.colors.accent.primary,
    color: theme.colors.text.inverse,
    
    '&:hover:not(:disabled)': {
      backgroundColor: theme.colors.accent.secondary,
      transform: 'translateY(-1px)',
      boxShadow: theme.shadows.md,
    },
    
    '&:active:not(:disabled)': {
      transform: 'translateY(0)',
    },
  },
  
  // Status Indicators
  statusIndicator: {
    width: '8px',
    height: '8px',
    borderRadius: theme.borderRadius.full,
    display: 'inline-block',
    
    '&.ready': {
      backgroundColor: theme.colors.accent.success,
    },
    
    '&.processing': {
      backgroundColor: theme.colors.accent.warning,
      animation: 'pulse 2s infinite',
    },
    
    '&.error': {
      backgroundColor: theme.colors.accent.error,
    },
  },
  
  // Responsive Styles
  responsive: {
    '@media (max-width: 768px)': {
      toolbar: {
        padding: theme.spacing.md,
      },
      
      draggableNode: {
        minWidth: '70px',
        maxWidth: '100px',
        height: '50px',
      },
      
      node: {
        minWidth: '160px',
        maxWidth: '300px',
      },
    },
    
    '@media (max-width: 480px)': {
      toolbar: {
        padding: theme.spacing.sm,
      },
      
      draggableNode: {
        minWidth: '60px',
        maxWidth: '80px',
        height: '45px',
      },
      
      node: {
        minWidth: '140px',
        maxWidth: '250px',
      },
    },
  },
});

// Utility functions for dynamic styling
export const getNodeColor = (nodeType, theme) => {
  const colorMap = {
    customInput: theme.colors.accent.primary,
    customOutput: theme.colors.accent.success,
    llm: theme.colors.accent.secondary,
    text: theme.colors.accent.warning,
    math: theme.colors.accent.error,
    delay: theme.colors.accent.warning,
    condition: theme.colors.accent.info,
    formatter: theme.colors.accent.secondary,
    logger: theme.colors.accent.primary,
  };
  
  return colorMap[nodeType] || theme.colors.accent.primary;
};

export const getBadgeColor = (pattern, theme) => {
  const colorMap = {
    '2→1': { bg: theme.colors.accent.secondary, text: theme.colors.text.inverse },
    '1→1': { bg: theme.colors.accent.primary, text: theme.colors.text.inverse },
    '1→2': { bg: theme.colors.accent.error, text: theme.colors.text.inverse },
  };
  
  return colorMap[pattern] || { bg: theme.colors.accent.primary, text: theme.colors.text.inverse };
};

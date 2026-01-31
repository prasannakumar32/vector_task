// Professional Styles with Enhanced Design System
import { cssVariables } from './theme';

// Apply CSS custom properties to :root
export const injectThemeVariables = () => {
  const root = document.documentElement;
  Object.entries(cssVariables).forEach(([property, value]) => {
    root.style.setProperty(property, value);
  });
};

// CSS-in-JS style utilities with professional design
export const createStyles = (theme) => ({
  // Enhanced Canvas Styles
  canvas: {
    width: '100%',
    height: '70vh',
    minHeight: '500px',
    background: theme.colors.background.canvasGradient,
    borderRadius: theme.borderRadius.xl,
    border: `1px solid ${theme.colors.border.canvas}`,
    boxShadow: theme.shadows.canvas,
    position: 'relative',
    overflow: 'hidden',
    transition: theme.transitions.normal,
  },
  
  // Professional Node Styles
  node: {
    backgroundColor: theme.colors.background.node,
    border: `1px solid ${theme.colors.border.node}`,
    borderRadius: theme.borderRadius.lg,
    boxShadow: theme.shadows.node,
    padding: theme.spacing.lg,
    minWidth: '200px',
    maxWidth: '420px',
    minHeight: '100px',
    transition: theme.transitions.normal,
    cursor: 'default',
    fontFamily: theme.typography.fontFamily.sans,
    position: 'relative',
    backdropFilter: 'blur(10px)',
    
    '&:hover': {
      backgroundColor: theme.colors.background.nodeHover,
      borderColor: theme.colors.border.nodeHover,
      boxShadow: theme.shadows.nodeHover,
      transform: 'translateY(-2px)',
    },
    
    '&:focus': {
      outline: `2px solid ${theme.colors.border.focus}`,
      outlineOffset: '2px',
    },
    
    '&.selected': {
      borderColor: theme.colors.accent.primary,
      boxShadow: theme.shadows.nodeSelected,
      transform: 'translateY(-1px)',
    },
  },
  
  // Enhanced Node Header
  nodeHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.md,
    paddingBottom: theme.spacing.md,
    borderBottom: `1px solid ${theme.colors.border.light}`,
  },
  
  nodeTitle: {
    fontSize: theme.typography.fontSize.sm,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.text.primary,
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.sm,
    letterSpacing: theme.typography.letterSpacing.tight,
  },
  
  nodeBadge: {
    fontSize: theme.typography.fontSize.xs,
    fontWeight: theme.typography.fontWeight.medium,
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.borderRadius.full,
    backgroundColor: theme.colors.accent.primary,
    color: theme.colors.text.inverse,
    boxShadow: theme.shadows.sm,
    transition: theme.transitions.fast,
    
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  
  // Node Content
  nodeContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.sm,
  },
  
  // Enhanced Field Styles
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
    letterSpacing: theme.typography.letterSpacing.wide,
  },
  
  fieldInput: {
    padding: theme.spacing.sm,
    border: `1px solid ${theme.colors.border.light}`,
    borderRadius: theme.borderRadius.md,
    fontSize: theme.typography.fontSize.sm,
    fontFamily: theme.typography.fontFamily.sans,
    backgroundColor: theme.colors.background.node,
    color: theme.colors.text.primary,
    transition: theme.transitions.focus,
    boxShadow: theme.shadows.field,
    
    '&:focus': {
      outline: 'none',
      borderColor: theme.colors.border.focus,
      boxShadow: theme.shadows.fieldFocus,
      transform: 'translateY(-1px)',
    },
    
    '&::placeholder': {
      color: theme.colors.text.quaternary,
    },
    
    '&:hover:not(:focus)': {
      borderColor: theme.colors.border.medium,
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
    transition: theme.transitions.focus,
    boxShadow: theme.shadows.field,
    
    '&:focus': {
      outline: 'none',
      borderColor: theme.colors.border.focus,
      boxShadow: theme.shadows.fieldFocus,
      transform: 'translateY(-1px)',
    },
    
    '&:hover:not(:focus)': {
      borderColor: theme.colors.border.medium,
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
    minHeight: '80px',
    transition: theme.transitions.focus,
    boxShadow: theme.shadows.field,
    
    '&:focus': {
      outline: 'none',
      borderColor: theme.colors.border.focus,
      boxShadow: theme.shadows.fieldFocus,
      transform: 'translateY(-1px)',
    },
    
    '&::placeholder': {
      color: theme.colors.text.quaternary,
    },
    
    '&:hover:not(:focus)': {
      borderColor: theme.colors.border.medium,
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
  
  // Professional Toolbar Styles
  toolbar: {
    backgroundColor: theme.colors.background.toolbar,
    border: `1px solid ${theme.colors.border.toolbar}`,
    borderRadius: theme.borderRadius.xl,
    boxShadow: theme.shadows.toolbar,
    padding: theme.spacing.xl,
    marginBottom: theme.spacing.xxl,
    backdropFilter: 'blur(10px)',
  },
  
  toolbarHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.xl,
  },
  
  toolbarTitle: {
    fontSize: theme.typography.fontSize['2xl'],
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text.primary,
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.md,
    letterSpacing: theme.typography.letterSpacing.tight,
  },
  
  toolbarDescription: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.text.secondary,
    lineHeight: theme.typography.lineHeight.relaxed,
    marginTop: theme.spacing.xs,
  },
  
  // Enhanced Draggable Node Styles
  draggableNode: {
    backgroundColor: theme.colors.background.node,
    border: `1px solid ${theme.colors.border.light}`,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    minWidth: '90px',
    maxWidth: '130px',
    height: '70px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'grab',
    transition: theme.transitions.hover,
    boxShadow: theme.shadows.sm,
    position: 'relative',
    overflow: 'hidden',
    
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '3px',
      background: 'linear-gradient(90deg, var(--node-color, #3b82f6), var(--node-color-light, #60a5fa))',
      opacity: 0,
      transition: theme.transitions.fast,
    },
    
    '&:hover': {
      transform: 'translateY(-4px) scale(1.02)',
      boxShadow: theme.shadows.buttonHover,
      borderColor: theme.colors.border.focus,
      
      '&::before': {
        opacity: 1,
      },
    },
    
    '&:active': {
      cursor: 'grabbing',
      transform: 'translateY(-2px) scale(0.98)',
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
  
  // Professional Button Styles
  button: {
    padding: `${theme.spacing.md} ${theme.spacing.xl}`,
    border: 'none',
    borderRadius: theme.borderRadius.lg,
    fontSize: theme.typography.fontSize.sm,
    fontWeight: theme.typography.fontWeight.semibold,
    fontFamily: theme.typography.fontFamily.sans,
    cursor: 'pointer',
    transition: theme.transitions.hover,
    display: 'inline-flex',
    alignItems: 'center',
    gap: theme.spacing.sm,
    position: 'relative',
    overflow: 'hidden',
    letterSpacing: theme.typography.letterSpacing.wide,
    
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: '-100%',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
      transition: 'left 0.5s',
    },
    
    '&:hover::before': {
      left: '100%',
    },
    
    '&:disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
      
      '&::before': {
        display: 'none',
      },
    },
  },
  
  buttonPrimary: {
    background: `linear-gradient(135deg, ${theme.colors.accent.primary}, ${theme.colors.accent.primaryDark})`,
    color: theme.colors.text.inverse,
    boxShadow: theme.shadows.button,
    
    '&:hover:not(:disabled)': {
      background: `linear-gradient(135deg, ${theme.colors.accent.primaryDark}, ${theme.colors.accent.primary})`,
      transform: 'translateY(-2px)',
      boxShadow: theme.shadows.buttonHover,
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

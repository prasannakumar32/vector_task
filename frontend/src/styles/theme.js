// Design Tokens - Central Style Configuration
export const theme = {
  // Colors
  colors: {
    // Backgrounds
    background: {
      primary: '#0f172a',      // Dark slate
      secondary: '#1e293b',    // Darker slate
      tertiary: '#334155',     // Medium slate
      canvas: '#1e293b',       // Canvas background
      node: '#ffffff',         // Node background
      nodeHover: '#f8fafc',    // Node hover background
      toolbar: '#ffffff',      // Toolbar background
      overlay: 'rgba(0, 0, 0, 0.8)', // Modal overlay
    },
    
    // Text
    text: {
      primary: '#0f172a',      // Primary text
      secondary: '#64748b',    // Secondary text
      tertiary: '#94a3b8',     // Tertiary text
      inverse: '#ffffff',      // White text on dark
      muted: '#94a3b8',       // Muted text
    },
    
    // Accent Colors
    accent: {
      primary: '#3b82f6',     // Blue
      secondary: '#8b5cf6',    // Purple
      success: '#10b981',      // Green
      warning: '#f59e0b',      // Orange
      error: '#ef4444',        // Red
      info: '#06b6d4',         // Cyan
    },
    
    // Border Colors
    border: {
      light: '#e2e8f0',        // Light border
      medium: '#cbd5e1',       // Medium border
      dark: '#94a3b8',         // Dark border
      focus: '#3b82f6',        // Focus border
      node: '#e2e8f0',         // Node border
      toolbar: '#e2e8f0',      // Toolbar border
    },
    
    // Handle Colors
    handles: {
      source: '#10b981',       // Green for outputs
      target: '#3b82f6',       // Blue for inputs
      hover: '#1d4ed8',         // Darker blue on hover
      disabled: '#94a3b8',      // Gray for disabled
    },
  },
  
  // Spacing
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '20px',
    xxl: '24px',
    xxxl: '32px',
  },
  
  // Border Radius
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    full: '9999px',
  },
  
  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    node: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    nodeHover: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    toolbar: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  },
  
  // Typography
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      mono: ['Fira Code', 'JetBrains Mono', 'Consolas', 'monospace'],
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '20px',
      xxl: '24px',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
    },
  },
  
  // Transitions
  transitions: {
    fast: '150ms ease-in-out',
    normal: '250ms ease-in-out',
    slow: '350ms ease-in-out',
  },
  
  // Z-Index
  zIndex: {
    base: 0,
    overlay: 1000,
    modal: 1050,
    tooltip: 1100,
  },
  
  // Breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
};

// CSS Custom Properties for Dynamic Theming
export const cssVariables = {
  '--color-bg-primary': theme.colors.background.primary,
  '--color-bg-secondary': theme.colors.background.secondary,
  '--color-bg-tertiary': theme.colors.background.tertiary,
  '--color-bg-canvas': theme.colors.background.canvas,
  '--color-bg-node': theme.colors.background.node,
  '--color-bg-node-hover': theme.colors.background.nodeHover,
  '--color-bg-toolbar': theme.colors.background.toolbar,
  
  '--color-text-primary': theme.colors.text.primary,
  '--color-text-secondary': theme.colors.text.secondary,
  '--color-text-tertiary': theme.colors.text.tertiary,
  '--color-text-inverse': theme.colors.text.inverse,
  '--color-text-muted': theme.colors.text.muted,
  
  '--color-accent-primary': theme.colors.accent.primary,
  '--color-accent-secondary': theme.colors.accent.secondary,
  '--color-accent-success': theme.colors.accent.success,
  '--color-accent-warning': theme.colors.accent.warning,
  '--color-accent-error': theme.colors.accent.error,
  '--color-accent-info': theme.colors.accent.info,
  
  '--color-border-light': theme.colors.border.light,
  '--color-border-medium': theme.colors.border.medium,
  '--color-border-dark': theme.colors.border.dark,
  '--color-border-focus': theme.colors.border.focus,
  '--color-border-node': theme.colors.border.node,
  '--color-border-toolbar': theme.colors.border.toolbar,
  
  '--color-handle-source': theme.colors.handles.source,
  '--color-handle-target': theme.colors.handles.target,
  '--color-handle-hover': theme.colors.handles.hover,
  '--color-handle-disabled': theme.colors.handles.disabled,
  
  '--spacing-xs': theme.spacing.xs,
  '--spacing-sm': theme.spacing.sm,
  '--spacing-md': theme.spacing.md,
  '--spacing-lg': theme.spacing.lg,
  '--spacing-xl': theme.spacing.xl,
  '--spacing-xxl': theme.spacing.xxl,
  '--spacing-xxxl': theme.spacing.xxxl,
  
  '--border-radius-sm': theme.borderRadius.sm,
  '--border-radius-md': theme.borderRadius.md,
  '--border-radius-lg': theme.borderRadius.lg,
  '--border-radius-xl': theme.borderRadius.xl,
  '--border-radius-full': theme.borderRadius.full,
  
  '--shadow-sm': theme.shadows.sm,
  '--shadow-md': theme.shadows.md,
  '--shadow-lg': theme.shadows.lg,
  '--shadow-xl': theme.shadows.xl,
  '--shadow-node': theme.shadows.node,
  '--shadow-node-hover': theme.shadows.nodeHover,
  '--shadow-toolbar': theme.shadows.toolbar,
  
  '--transition-fast': theme.transitions.fast,
  '--transition-normal': theme.transitions.normal,
  '--transition-slow': theme.transitions.slow,
};

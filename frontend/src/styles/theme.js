// Professional Design System - Modern & Clean
export const theme = {
  // Professional Color Palette
  colors: {
    // Backgrounds - Sophisticated grays
    background: {
      primary: '#0f172a',      // Deep slate
      secondary: '#1e293b',    // Dark slate
      tertiary: '#334155',     // Medium slate
      quaternary: '#475569',   // Light slate
      canvas: '#f8fafc',       // Clean white canvas
      canvasGradient: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)',
      node: '#ffffff',         // Pure white nodes
      nodeHover: '#f8fafc',    // Subtle hover
      toolbar: '#ffffff',      // White toolbar
      overlay: 'rgba(15, 23, 42, 0.85)', // Dark overlay
    },
    
    // Text - Enhanced contrast and readability
    text: {
      primary: '#0f172a',      // Primary text
      secondary: '#475569',    // Secondary text
      tertiary: '#64748b',     // Tertiary text
      quaternary: '#94a3b8',   // Muted text
      inverse: '#ffffff',      // White text
      accent: '#3b82f6',       // Accent blue text
      success: '#059669',      // Success green
      warning: '#d97706',      // Warning orange
      error: '#dc2626',        // Error red
    },
    
    // Professional Accent Colors
    accent: {
      primary: '#3b82f6',     // Professional blue
      primaryLight: '#60a5fa', // Light blue
      primaryDark: '#1d4ed8', // Dark blue
      secondary: '#8b5cf6',    // Professional purple
      secondaryLight: '#a78bfa', // Light purple
      secondaryDark: '#6d28d9', // Dark purple
      success: '#10b981',      // Success green
      successLight: '#34d399',  // Light green
      successDark: '#059669',   // Dark green
      warning: '#f59e0b',      // Warning amber
      warningLight: '#fbbf24',  // Light amber
      warningDark: '#d97706',   // Dark amber
      error: '#ef4444',        // Error red
      errorLight: '#f87171',   // Light red
      errorDark: '#dc2626',     // Dark red
      info: '#06b6d4',         // Info cyan
      infoLight: '#22d3ee',    // Light cyan
      infoDark: '#0891b2',      // Dark cyan
    },
    
    // Enhanced Border Colors
    border: {
      light: '#e2e8f0',        // Light border
      medium: '#cbd5e1',       // Medium border
      dark: '#94a3b8',         // Dark border
      focus: '#3b82f6',        // Focus blue
      node: '#e2e8f0',         // Node border
      nodeHover: '#cbd5e1',    // Node hover border
      toolbar: '#e2e8f0',      // Toolbar border
      canvas: '#cbd5e1',        // Canvas border
    },
    
    // Professional Handle Colors
    handles: {
      source: '#10b981',       // Success green for outputs
      sourceHover: '#059669',   // Darker green on hover
      target: '#3b82f6',       // Professional blue for inputs
      targetHover: '#1d4ed8',   // Darker blue on hover
      disabled: '#cbd5e1',      // Light gray for disabled
      connecting: '#f59e0b',    // Amber while connecting
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
  
  // Professional Shadows
  shadows: {
    xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    // Professional element shadows
    node: '0 2px 8px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.1)',
    nodeHover: '0 8px 25px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(0, 0, 0, 0.08)',
    nodeSelected: '0 0 0 3px rgba(59, 130, 246, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)',
    toolbar: '0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.1)',
    canvas: 'inset 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.05)',
    button: '0 2px 4px rgba(0, 0, 0, 0.1)',
    buttonHover: '0 4px 12px rgba(0, 0, 0, 0.15)',
    field: 'inset 0 1px 2px rgba(0, 0, 0, 0.05)',
    fieldFocus: '0 0 0 3px rgba(59, 130, 246, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1)',
  },
  
  // Professional Typography System
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'monospace'],
      display: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
    },
    fontSize: {
      xs: '0.75rem',      // 12px
      sm: '0.875rem',     // 14px
      base: '1rem',       // 16px
      lg: '1.125rem',     // 18px
      xl: '1.25rem',      // 20px
      '2xl': '1.5rem',    // 24px
      '3xl': '1.875rem',  // 30px
      '4xl': '2.25rem',   // 36px
      '5xl': '3rem',      // 48px
    },
    fontWeight: {
      thin: 100,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    lineHeight: {
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
  },
  
  // Professional Transitions
  transitions: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    normal: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '350ms cubic-bezier(0.4, 0, 0.2, 1)',
    slower: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
    // Specific transitions
    hover: '200ms cubic-bezier(0.4, 0, 0.2, 1)',
    focus: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    transform: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
    shadow: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  
  // Enhanced Z-Index System
  zIndex: {
    base: 0,
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    overlay: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
    toast: 1080,
    // ReactFlow specific
    canvas: 1,
    selection: 2,
    nodes: 3,
    handles: 4,
    controls: 5,
    minimap: 6,
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

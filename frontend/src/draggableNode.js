export const DraggableNode = ({ type, label }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };

    const getNodeColors = (nodeType) => {
      const colorSchemes = {
        customInput: {
          start: '#3b82f6',
          end: '#1d4ed8',
          shadow: 'rgba(59, 130, 246, 0.3)',
          icon: '📥',
          gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 50%, #1e40af 100%)'
        },
        llm: {
          start: '#8b5cf6',
          end: '#6d28d9',
          shadow: 'rgba(139, 92, 246, 0.3)',
          icon: '🤖',
          gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 50%, #5b21b6 100%)'
        },
        customOutput: {
          start: '#10b981',
          end: '#059669',
          shadow: 'rgba(16, 185, 129, 0.3)',
          icon: '📤',
          gradient: 'linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)'
        },
        text: {
          start: '#f59e0b',
          end: '#d97706',
          shadow: 'rgba(245, 158, 11, 0.3)',
          icon: '📝',
          gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #b45309 100%)'
        },
        math: {
          start: '#ef4444',
          end: '#dc2626',
          shadow: 'rgba(239, 68, 68, 0.3)',
          icon: '🔢',
          gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 50%, #b91c1c 100%)'
        },
        condition: {
          start: '#06b6d4',
          end: '#0891b2',
          shadow: 'rgba(6, 182, 212, 0.3)',
          icon: '🔀',
          gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 50%, #0e7490 100%)'
        },
        transform: {
          start: '#ec4899',
          end: '#db2777',
          shadow: 'rgba(236, 72, 153, 0.3)',
          icon: '🔄',
          gradient: 'linear-gradient(135deg, #ec4899 0%, #db2777 50%, #be185d 100%)'
        },
        database: {
          start: '#6366f1',
          end: '#4f46e5',
          shadow: 'rgba(99, 102, 241, 0.3)',
          icon: '🗄️',
          gradient: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 50%, #4338ca 100%)'
        },
        api: {
          start: '#14b8a6',
          end: '#0d9488',
          shadow: 'rgba(20, 184, 166, 0.3)',
          icon: '🌐',
          gradient: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 50%, #0f766e 100%)'
        }
      };
      
      return colorSchemes[nodeType] || {
        start: '#64748b',
        end: '#475569',
        shadow: 'rgba(100, 116, 139, 0.3)',
        icon: '⚙️',
        gradient: 'linear-gradient(135deg, #64748b 0%, #475569 50%, #334155 100%)'
      };
    };

    const colors = getNodeColors(type);
  
    return (
      <div
        className={type}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        style={{
          '--node-color-start': colors.start,
          '--node-color-end': colors.end,
          '--node-shadow': colors.shadow,
        }}
        draggable
      >
        <div className="draggable-node min-w-[90px] h-[65px] px-4 py-3 flex flex-col items-center justify-center text-white shadow-colored">
          <div className="text-xl mb-1 animate-bounce-soft">{colors.icon}</div>
          <span className="text-xs font-bold text-center tracking-wide uppercase">{label}</span>
        </div>
      </div>
    );
  };
  
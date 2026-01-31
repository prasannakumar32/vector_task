import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import { cssVariables } from './styles/theme';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Inject CSS custom properties
    const root = document.documentElement;
    Object.entries(cssVariables).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });
  }, []);

  return (
    <div className="min-h-screen" style={{
      background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 25%, #e2e8f0 50%, #cbd5e1 75%, #94a3b8 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated background elements */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        left: '-50%',
        width: '200%',
        height: '200%',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
        animation: 'float 20s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-50%',
        right: '-50%',
        width: '200%',
        height: '200%',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
        animation: 'float 25s ease-in-out infinite reverse',
      }} />
      
      <div className="relative z-10 max-w-7xl mx-auto p-6 space-y-8">
        <header className="text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            Pipeline Builder
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Create powerful workflows with our intuitive drag-and-drop interface
          </p>
        </header>
        
        <main className="space-y-8">
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <PipelineToolbar />
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <PipelineUI />
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <SubmitButton />
          </div>
        </main>
        
        <footer className="text-center py-8 text-slate-500 text-sm">
          <p>Built with ❤️ using React, ReactFlow, and Tailwind CSS</p>
        </footer>
      </div>
      
      {/* Global styles for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
        }
        
        @keyframes fade-in {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes slide-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out both;
        }
      `}</style>
    </div>
  );
}

export default App;

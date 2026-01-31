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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
        <header className="text-center mb-12 floating">
          <div className="inline-block">
            <h1 className="text-5xl md:text-6xl font-bold text-gradient-primary mb-4 animate-glow">
              Pipeline Builder
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-4"></div>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Create powerful workflows with our intuitive drag-and-drop interface
            </p>
          </div>
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
    </div>
  );
}

export default App;

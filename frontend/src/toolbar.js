import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
    return (
        <div className="node-toolbar">
            <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gradient-primary">
                      Node Components
                    </h2>
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse-soft"></div>
                        <span className="text-sm text-slate-600">Ready to build</span>
                    </div>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Drag and drop these components to build your powerful pipeline workflow
                </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
                <div className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
                    <DraggableNode type='customInput' label='Input' />
                </div>
                <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
                    <DraggableNode type='llm' label='LLM' />
                </div>
                <div className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
                    <DraggableNode type='customOutput' label='Output' />
                </div>
                <div className="animate-scale-in" style={{ animationDelay: '0.4s' }}>
                    <DraggableNode type='text' label='Text' />
                </div>
                <div className="animate-scale-in" style={{ animationDelay: '0.5s' }}>
                    <DraggableNode type='math' label='Math' />
                </div>
                <div className="animate-scale-in" style={{ animationDelay: '0.6s' }}>
                    <DraggableNode type='condition' label='Condition' />
                </div>
                <div className="animate-scale-in" style={{ animationDelay: '0.7s' }}>
                    <DraggableNode type='transform' label='Transform' />
                </div>
                <div className="animate-scale-in" style={{ animationDelay: '0.8s' }}>
                    <DraggableNode type='database' label='Database' />
                </div>
                <div className="animate-scale-in" style={{ animationDelay: '0.9s' }}>
                    <DraggableNode type='api' label='API' />
                </div>
            </div>
            
            <div className="mt-6 p-4 bg-primary-50/50 rounded-xl border border-primary-200/50">
                <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <p className="text-sm text-primary-700">
                      <span className="font-semibold">Pro tip:</span> Start with an Input node, then add processing nodes, and finish with an Output node.
                    </p>
                </div>
            </div>
        </div>
    );
};

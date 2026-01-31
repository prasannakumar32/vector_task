import { useState } from 'react';
import { StyledButton } from './styles/components';

export const SubmitButton = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const handleSubmit = async () => {
        setIsSubmitting(true);
        
        setTimeout(() => {
            setIsSubmitting(false);
            alert('Pipeline submitted successfully! 🎉');
        }, 2000);
    };

    return (
        <div className="flex flex-col items-center space-y-6">
            <div className="text-center max-w-2xl">
                <div className="inline-flex items-center space-x-2 mb-4">
                    <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse-soft"></div>
                    <h3 className="text-2xl font-bold text-gradient-primary">
                      Ready to Execute
                    </h3>
                    <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse-soft"></div>
                </div>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Submit your pipeline to process the workflow and see the magic happen
                </p>
                
                <div className="flex items-center justify-center space-x-4 text-sm text-slate-500">
                    <div className="flex items-center space-x-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>Validated</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                        <span>Optimized</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                        </svg>
                        <span>Secure</span>
                    </div>
                </div>
            </div>
            
            <StyledButton
                type="submit"
                onClick={handleSubmit}
                disabled={isSubmitting}
                variant="primary"
                className="group relative"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {isSubmitting ? (
                    <div className="flex items-center space-x-3">
                        <svg className="animate-spin h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span className="font-semibold">Processing Pipeline...</span>
                    </div>
                ) : (
                    <div className="flex items-center space-x-3">
                        <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                        <span className="font-semibold">Submit Pipeline</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </div>
                )}
            </StyledButton>
            
            <div className="text-center space-y-2">
                <p className="text-xs text-slate-500 max-w-md">
                    Your pipeline will be processed and the results will be displayed here.
                </p>
                <div className="flex items-center justify-center space-x-2 text-xs text-slate-400">
                    <span>⚡ Fast processing</span>
                    <span>•</span>
                    <span>🔒 Secure execution</span>
                    <span>•</span>
                    <span>📊 Real-time results</span>
                </div>
            </div>
        </div>
    );
}

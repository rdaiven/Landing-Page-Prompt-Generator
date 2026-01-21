import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an error:", error, errorInfo);
    }

    handleReset = () => {
        this.setState({ hasError: false, error: null });
        if (this.props.onReset) {
            this.props.onReset();
        }
    };

    render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }

            return (
                <div className="p-4 rounded-lg bg-white border border-red-200 shadow-sm flex flex-col items-center justify-center text-center h-full min-h-[150px]">
                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mb-3">
                        <AlertCircle className="w-6 h-6 text-red-500" />
                    </div>
                    <h3 className="text-sm font-semibold text-slate-900 mb-1">
                        Something went wrong
                    </h3>
                    <p className="text-xs text-slate-500 mb-4 max-w-[200px]">
                        {this.props.label || 'This section could not normally be rendered.'}
                    </p>
                    <button
                        onClick={this.handleReset}
                        className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors"
                    >
                        <RefreshCw className="w-3 h-3" />
                        Try Again
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;

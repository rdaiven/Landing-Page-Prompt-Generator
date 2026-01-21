import React, { useState, useMemo } from 'react'
import VisualPreview from './VisualPreview'
import TutorialModal from './TutorialModal'
import { Smartphone, Tablet, Monitor, Code2, FileText, Layout, Copy, Check } from 'lucide-react'
import { generateCompleteHTML } from '../utils/htmlGenerator'


const PreviewPanel = ({ prompt, formData, activeSection }) => {
    const [isTutorialOpen, setIsTutorialOpen] = useState(false)
    const [copied, setCopied] = useState(false)
    const [viewMode, setViewMode] = useState('visual') // 'visual', 'prompt', 'code'
    const [viewport, setViewport] = useState('desktop') // 'mobile', 'tablet', 'desktop'

    const generatedHtml = useMemo(() => {
        return generateCompleteHTML(formData);
    }, [formData]);

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="preview-panel flex flex-col h-full bg-slate-50">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-slate-200 shadow-sm z-10">
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2 text-sm font-bold text-slate-800">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                        </span>
                        Live Output
                    </div>
                </div>

                <div className="flex items-center bg-slate-100 rounded-lg p-1 border border-slate-200">
                    <button
                        onClick={() => setViewMode('visual')}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${viewMode === 'visual' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                        <Layout className="w-3.5 h-3.5" />
                        Visual
                    </button>
                    <button
                        onClick={() => setViewMode('prompt')}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${viewMode === 'prompt' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                        <FileText className="w-3.5 h-3.5" />
                        Prompt
                    </button>
                    <button
                        onClick={() => setViewMode('code')}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${viewMode === 'code' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                        <Code2 className="w-3.5 h-3.5" />
                        Code
                    </button>
                </div>

                <div className="flex items-center gap-2">
                    {/* Visual Mode Tools */}
                    {viewMode === 'visual' && (
                        <div className="flex bg-white rounded-lg border border-slate-200 p-0.5">
                            <button
                                onClick={() => setViewport('mobile')}
                                className={`p-1.5 rounded-md transition-all ${viewport === 'mobile' ? 'bg-indigo-50 text-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}
                                title="Mobile View"
                            >
                                <Smartphone className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => setViewport('tablet')}
                                className={`p-1.5 rounded-md transition-all ${viewport === 'tablet' ? 'bg-indigo-50 text-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}
                                title="Tablet View"
                            >
                                <Tablet className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => setViewport('desktop')}
                                className={`p-1.5 rounded-md transition-all ${viewport === 'desktop' ? 'bg-indigo-50 text-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}
                                title="Desktop View"
                            >
                                <Monitor className="w-4 h-4" />
                            </button>
                        </div>
                    )}

                    {/* Copy Buttons Based on Mode */}
                    {viewMode === 'prompt' && (
                        <button
                            onClick={() => handleCopy(prompt)}
                            className="flex items-center gap-2 px-3 py-1.5 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors"
                        >
                            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                            {copied ? 'Copied!' : 'Copy Prompt'}
                        </button>
                    )}

                    {viewMode === 'code' && (
                        <button
                            onClick={() => handleCopy(generatedHtml)}
                            className="flex items-center gap-2 px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-xs font-semibold hover:bg-indigo-700 transition-colors"
                        >
                            {copied ? <Check className="w-3.5 h-3.5" /> : <Code2 className="w-3.5 h-3.5" />}
                            {copied ? 'Copied!' : 'Copy Code'}
                        </button>
                    )}
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-hidden relative">
                {viewMode === 'visual' && (
                    <div className="absolute inset-0 overflow-y-auto theme-scroll bg-slate-100/50 p-4">
                        <div className={`mx-auto transition-all duration-300 origin-top shadow-xl ${viewport === 'mobile' ? 'w-[375px]' :
                            viewport === 'tablet' ? 'w-[768px]' : 'w-full max-w-6xl'
                            }`}>
                            <VisualPreview formData={formData} activeSection={activeSection} />
                        </div>
                    </div>
                )}

                {viewMode === 'prompt' && (
                    <div className="absolute inset-0 p-0 bg-slate-900 text-slate-300 font-mono text-sm overflow-auto theme-scroll">
                        <div className="p-6 whitespace-pre-wrap">{prompt}</div>
                    </div>
                )}

                {viewMode === 'code' && (
                    <div className="absolute inset-0 p-0 bg-slate-50 overflow-auto theme-scroll">
                        <pre className="p-6 text-xs font-mono text-slate-800 whitespace-pre-wrap">{generatedHtml}</pre>
                    </div>
                )}
            </div>

            <TutorialModal
                isOpen={isTutorialOpen}
                onClose={() => setIsTutorialOpen(false)}
            />
        </div>
    )
}

export default PreviewPanel

import React, { useState } from 'react'
import VisualPreview from './VisualPreview'
import TutorialModal from './TutorialModal'
import { Smartphone, Tablet, Monitor } from 'lucide-react'

const PreviewPanel = ({ prompt, formData }) => {
    const [isTutorialOpen, setIsTutorialOpen] = useState(false)
    const [copied, setCopied] = useState(false)
    const [viewMode, setViewMode] = useState('visual') // 'code' or 'visual'
    const [viewport, setViewport] = useState('desktop') // 'mobile', 'tablet', 'desktop'

    const handleCopy = () => {
        navigator.clipboard.writeText(prompt)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="preview-panel">
            <div className="preview-header">
                <div className="status">
                    <span className="dot animate-pulse"></span>
                    Live Output
                </div>

                <div className="header-controls">
                    <button
                        className="help-btn"
                        onClick={() => setIsTutorialOpen(true)}
                        title="How to use"
                    >
                        <span style={{ fontSize: '1.2rem', marginRight: '0.25rem' }}>💡</span>
                        Guide
                    </button>

                    <div className="view-toggle">
                        <button
                            className={`toggle-btn ${viewMode === 'visual' ? 'active' : ''}`}
                            onClick={() => setViewMode('visual')}
                        >
                            Visual
                        </button>
                        <button
                            className={`toggle-btn ${viewMode === 'code' ? 'active' : ''}`}
                            onClick={() => setViewMode('code')}
                        >
                            Code
                        </button>
                    </div>
                    <button
                        className={`copy-btn ${copied ? 'copied' : ''}`}
                        onClick={handleCopy}
                    >
                        {copied ? 'Copied!' : 'Copy Code'}
                    </button>
                </div>
            </div>

            <div className="preview-content">
                {viewMode === 'visual' ? (
                    <>
                        <div className="viewport-toolbar" style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            padding: '0.75rem',
                            background: '#fff',
                            borderBottom: '1px solid var(--border)',
                            marginBottom: '1rem'
                        }}>
                            <div className="view-toggle">
                                <button
                                    className={`toggle-btn ${viewport === 'mobile' ? 'active' : ''}`}
                                    onClick={() => setViewport('mobile')}
                                    title="Mobile View"
                                    style={{ padding: '0.35rem' }}
                                >
                                    <Smartphone size={18} />
                                </button>
                                <button
                                    className={`toggle-btn ${viewport === 'tablet' ? 'active' : ''}`}
                                    onClick={() => setViewport('tablet')}
                                    title="Tablet View"
                                    style={{ padding: '0.35rem' }}
                                >
                                    <Tablet size={18} />
                                </button>
                                <button
                                    className={`toggle-btn ${viewport === 'desktop' ? 'active' : ''}`}
                                    onClick={() => setViewport('desktop')}
                                    title="Desktop View"
                                    style={{ padding: '0.35rem' }}
                                >
                                    <Monitor size={18} />
                                </button>
                            </div>
                        </div>
                        <div className={`viewport-container viewport-${viewport}`} style={{ flex: 1, overflowY: 'auto' }}>
                            <VisualPreview formData={formData} />
                        </div>
                    </>
                ) : (
                    <pre style={{ overflow: 'auto', height: '100%' }}>{prompt}</pre>
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

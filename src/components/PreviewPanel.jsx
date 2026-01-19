import React, { useState } from 'react'
import VisualPreview from './VisualPreview'
import TutorialModal from './TutorialModal'

const PreviewPanel = ({ prompt, formData }) => {
    const [isTutorialOpen, setIsTutorialOpen] = useState(false)
    const [copied, setCopied] = useState(false)
    const [viewMode, setViewMode] = useState('visual') // 'code' or 'visual'

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
                    <VisualPreview formData={formData} />
                ) : (
                    <pre>{prompt}</pre>
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

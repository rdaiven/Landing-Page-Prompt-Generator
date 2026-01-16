import React, { useState } from 'react'

const PreviewPanel = ({ prompt }) => {
    const [copied, setCopied] = useState(false)

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
                <button
                    className={`copy-btn ${copied ? 'copied' : ''}`}
                    onClick={handleCopy}
                >
                    {copied ? 'Copied!' : 'Copy Prompt'}
                </button>
            </div>
            <div className="preview-content">
                <pre>{prompt}</pre>
            </div>
        </div>
    )
}

export default PreviewPanel

import React, { useState } from 'react'

const PreviewPanel = ({ prompt }) => {
    const [showTutorial, setShowTutorial] = useState(true)
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
                {showTutorial && (
                    <div className="tutorial-card">
                        <div className="tutorial-header">
                            <h3>🚀 How to use this prompt</h3>
                            <button onClick={() => setShowTutorial(false)} className="tutorial-close">&times;</button>
                        </div>
                        <ol className="tutorial-steps">
                            <li><strong>Customize Settings</strong>: Tweak branding & sections on the left.</li>
                            <li><strong>Copy Prompt</strong>: Click the button top-right to grab the code.</li>
                            <li><strong>Open AI Tool</strong>: Go to ChatGPT (GPT-4o) or Gemini 1.5 Pro.</li>
                            <li>
                                <strong>Select "Canvas"</strong>: <span className="highlight">IMPORTANT!</span> Enable "Canvas" mode for the best coding workspace experience.
                                <div className="tutorial-images">
                                    <img src="/tutorial/gemini-canvas.png" alt="Gemini Canvas" title="Gemini Canvas" />
                                    <img src="/tutorial/chatgpt-canvas.png" alt="ChatGPT Canvas" title="ChatGPT Canvas" />
                                </div>
                            </li>
                            <li><strong>Paste & Run</strong>: Watch your high-conversion landing page appear!</li>
                        </ol>
                    </div>
                )}
                <pre>{prompt}</pre>
            </div>
        </div>
    )
}

export default PreviewPanel

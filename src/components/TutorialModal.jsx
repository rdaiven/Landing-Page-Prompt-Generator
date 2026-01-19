import React, { useState } from 'react';

const TutorialModal = ({ isOpen, onClose }) => {
    const [zoomedImage, setZoomedImage] = useState(null);

    if (!isOpen) return null;

    const handleImageClick = (src) => {
        setZoomedImage(src);
    };

    const closeZoom = (e) => {
        e.stopPropagation();
        setZoomedImage(null);
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h3>🚀 How to use this prompt</h3>
                    <button onClick={onClose} className="modal-close">&times;</button>
                </div>
                <div className="modal-body">
                    <ol className="tutorial-steps">
                        <li><strong>Customize Settings</strong>: Tweak branding & sections on the left.</li>
                        <li><strong>Copy Prompt</strong>: Click the button top-right to grab the code.</li>
                        <li><strong>Open AI Tool</strong>: Go to ChatGPT (GPT-4o) or Gemini 1.5 Pro.</li>
                        <li>
                            <strong>Select "Canvas"</strong>: <span className="highlight">IMPORTANT!</span> Enable "Canvas" mode for the best coding workspace experience.
                            <div className="tutorial-images">
                                <img
                                    src="/tutorial/gemini-canvas.png"
                                    alt="Gemini Canvas"
                                    title="Gemini Canvas - Click to Zoom"
                                    onClick={() => handleImageClick('/tutorial/gemini-canvas.png')}
                                />
                                <img
                                    src="/tutorial/chatgpt-canvas.png"
                                    alt="ChatGPT Canvas"
                                    title="ChatGPT Canvas - Click to Zoom"
                                    onClick={() => handleImageClick('/tutorial/chatgpt-canvas.png')}
                                />
                            </div>
                        </li>
                        <li><strong>Paste & Run</strong>: Watch your high-conversion landing page appear!</li>
                    </ol>
                </div>
            </div>

            {zoomedImage && (
                <div className="image-zoom-overlay" onClick={closeZoom}>
                    <div className="image-zoom-container">
                        <img src={zoomedImage} alt="Zoomed View" />
                        <button className="zoom-close" onClick={closeZoom}>&times;</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TutorialModal;

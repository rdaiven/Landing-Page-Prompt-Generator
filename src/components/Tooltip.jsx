import React, { useState, useRef, useEffect } from 'react'

const Tooltip = ({ text }) => {
    const [isVisible, setIsVisible] = useState(false)
    const tooltipRef = useRef(null)

    // Close when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
                setIsVisible(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <span className="tooltip-container" ref={tooltipRef} style={{ position: 'relative', display: 'inline-block', marginLeft: '0.5rem' }}>
            <button
                type="button"
                className={`tooltip-trigger ${isVisible ? 'active' : ''}`}
                onClick={() => setIsVisible(!isVisible)}
                aria-label="More information"
                style={{
                    background: 'transparent',
                    color: isVisible ? '#3b82f6' : '#94a3b8',
                    border: 'none',
                    padding: 0,
                    width: '16px',
                    height: '16px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'color 0.2s',
                    lineHeight: 1
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" style={{ width: '100%', height: '100%' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
            </button>
            {isVisible && (
                <div className="tooltip-bubble" style={{
                    position: 'absolute',
                    bottom: '125%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#1e293b',
                    color: '#fff',
                    padding: '0.75rem',
                    borderRadius: '6px',
                    fontSize: '0.85rem',
                    width: 'max-content',
                    maxWidth: '250px',
                    zIndex: 100,
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                    lineHeight: '1.4',
                    textAlign: 'center'
                }}>
                    {text}
                    <div style={{
                        position: 'absolute',
                        top: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        borderWidth: '6px',
                        borderStyle: 'solid',
                        borderColor: '#1e293b transparent transparent transparent'
                    }}></div>
                </div>
            )}
        </span>
    )
}

export default Tooltip

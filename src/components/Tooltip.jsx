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
                    background: isVisible ? '#2563eb' : '#e2e8f0',
                    color: isVisible ? '#fff' : '#64748b',
                    border: 'none',
                    borderRadius: '50%',
                    width: '20px',
                    height: '20px',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s',
                    lineHeight: 1
                }}
            >
                ?
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

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
        <span className="tooltip-container" ref={tooltipRef}>
            <button
                type="button"
                className={`tooltip-trigger ${isVisible ? 'active' : ''}`}
                onClick={() => setIsVisible(!isVisible)}
                aria-label="More information"
            >
                ?
            </button>
            {isVisible && (
                <div className="tooltip-bubble">
                    {text}
                </div>
            )}
        </span>
    )
}

export default Tooltip

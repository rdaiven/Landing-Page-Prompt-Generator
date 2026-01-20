import { useState, useRef, useEffect } from 'react'
import ReactDOM from 'react-dom'

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

    const [coords, setCoords] = useState({ left: 0, top: 0 })

    const updatePosition = () => {
        if (tooltipRef.current && isVisible) {
            const rect = tooltipRef.current.getBoundingClientRect()
            setCoords({
                left: rect.left + rect.width / 2,
                top: rect.top
            })
        }
    }

    useEffect(() => {
        if (isVisible) {
            updatePosition()
            window.addEventListener('resize', updatePosition)
            window.addEventListener('scroll', updatePosition, true)
        }
        return () => {
            window.removeEventListener('resize', updatePosition)
            window.removeEventListener('scroll', updatePosition, true)
        }
    }, [isVisible])

    return (
        <>
            <span className="tooltip-container" ref={tooltipRef}>
                <button
                    type="button"
                    className={`tooltip-trigger ${isVisible ? 'active' : ''}`}
                    onClick={() => setIsVisible(!isVisible)}
                    onMouseEnter={updatePosition}
                    aria-label="More information"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" style={{ width: '100%', height: '100%' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                    </svg>
                </button>
            </span>
            {isVisible && ReactDOM.createPortal(
                <div
                    className="tooltip-bubble"
                    style={{
                        position: 'fixed',
                        top: coords.top,
                        left: coords.left,
                        transform: 'translate(-50%, -100%)',
                        marginTop: '-10px',
                        zIndex: 9999
                    }}
                >
                    {text}
                    {/* Arrow (Visual only, simplified) */}
                    <div style={{
                        position: 'absolute',
                        top: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        borderWidth: '6px',
                        borderStyle: 'solid',
                        borderColor: '#1e293b transparent transparent transparent'
                    }}></div>
                </div>,
                document.body
            )}
        </>
    )
}

export default Tooltip

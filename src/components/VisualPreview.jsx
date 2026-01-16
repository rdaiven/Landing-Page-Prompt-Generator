import React from 'react'

const VisualPreview = ({ formData }) => {
    const { brandName, primaryColor, secondaryColor, accentColor, neutralColor, sections } = formData

    // Helper to get conditional styles
    const getBgStyle = (isDark = false) => ({
        backgroundColor: isDark ? primaryColor : (neutralColor || '#f9fafb'),
        color: isDark ? '#ffffff' : '#1f2937'
    })

    const getBtnStyle = () => ({
        backgroundColor: primaryColor || '#000000',
        color: '#ffffff'
    })

    return (
        <div className="visual-preview-container">
            {/* HEADER */}
            {sections.header.enabled && (
                <div className={`mock-header ${sections.header.layout === 'Smart Hide (Scroll Up to Show)' ? 'mock-header-smart' : ''}`}>
                    <div className="mock-logo">{brandName || 'Brand'}</div>
                    <div className="mock-nav">
                        <span className="mock-link"></span>
                        <span className="mock-link"></span>
                    </div>
                    <div className="mock-cta" style={getBtnStyle()}>Book</div>
                </div>
            )}

            {/* HERO */}
            {sections.hero.enabled && (
                <div className={`mock-section mock-hero layout-${sections.hero.layout.toLowerCase()}`} style={{ backgroundColor: secondaryColor || '#ffffff' }}>
                    {sections.hero.layout === 'Split' && (
                        <>
                            <div className="mock-content">
                                <div className="mock-h1"></div>
                                <div className="mock-p"></div>
                                <div className="mock-btn" style={getBtnStyle()}></div>
                            </div>
                            <div className="mock-media"></div>
                        </>
                    )}
                    {sections.hero.layout === 'Centered' && (
                        <div className="mock-centered-content">
                            <div className="mock-h1" style={{ margin: '0 auto' }}></div>
                            <div className="mock-p" style={{ margin: '1rem auto' }}></div>
                            <div className="mock-btn" style={getBtnStyle()}></div>
                        </div>
                    )}
                    {sections.hero.layout === 'Video-First' && (
                        <div className="mock-video-first">
                            <div className="mock-video-placeholder">Video</div>
                            <div className="mock-h1"></div>
                            <div className="mock-btn" style={getBtnStyle()}></div>
                        </div>
                    )}
                </div>
            )}

            {/* TRUST PRIMER */}
            {sections.trustPrimer.enabled && (
                <div className="mock-section mock-trust" style={{ borderBottom: `1px solid ${neutralColor}` }}>
                    {sections.trustPrimer.layout === 'Short Strip' && (
                        <div className="mock-trust-strip">
                            <span>★★★★★</span> <span>Trusted by 500+</span>
                        </div>
                    )}
                    {sections.trustPrimer.layout === 'Logo Grid' && (
                        <div className="mock-trust-grid">
                            <div className="mock-logo-box"></div><div className="mock-logo-box"></div><div className="mock-logo-box"></div>
                        </div>
                    )}
                </div>
            )}

            {/* TREATMENT LOGIC (Generic placeholder for content sections) */}
            {sections.treatmentLogic.enabled && (
                <div className="mock-section">
                    <div className="mock-h2">How it Works</div>
                    {sections.treatmentLogic.layout === 'Detailed' ? (
                        <div className="mock-split-small">
                            <div className="mock-img-small"></div>
                            <div className="mock-text-block"></div>
                        </div>
                    ) : (
                        <div className="mock-text-block" style={{ margin: '0 auto', maxWidth: '600px' }}></div>
                    )}
                </div>
            )}

            {/* SOCIAL PROOF */}
            {sections.socialProof.enabled && (
                <div className="mock-section mock-social" style={{ backgroundColor: neutralColor || '#f3f4f6' }}>
                    <div className="mock-h2">Results</div>
                    <div className={`mock-social-grid ${sections.socialProof.layout === 'Testimonials' ? 'cols-3' : 'cols-2'}`}>
                        <div className="mock-card"></div>
                        <div className="mock-card"></div>
                        <div className="mock-card"></div>
                    </div>
                </div>
            )}

            {/* CONVERSION */}
            {sections.conversion.enabled && (
                <div className="mock-section mock-conversion" style={getBgStyle(true)}>
                    <div className="mock-h2">Ready?</div>
                    <div className="mock-btn" style={{ backgroundColor: accentColor || '#ffffff', color: primaryColor }}>Book Now</div>
                </div>
            )}

            {/* FOOTER */}
            {sections.footer.enabled && (
                <div className="mock-footer" style={{ backgroundColor: '#111', color: '#fff' }}>
                    <div className="mock-footer-row"></div>
                </div>
            )}
        </div>
    )
}

export default VisualPreview

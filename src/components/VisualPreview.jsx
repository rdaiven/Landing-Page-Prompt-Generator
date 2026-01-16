import React from 'react'

const VisualPreview = ({ formData }) => {
    const { brandName, topic, primaryColor, secondaryColor, accentColor, neutralColor, sections } = formData

    // 1. HELPERS
    const getBgStyle = (isDark = false) => ({
        backgroundColor: isDark ? (primaryColor || '#000000') : (neutralColor || '#f9fafb'),
        color: isDark ? '#ffffff' : '#1e293b'
    })

    const getBtnStyle = () => ({
        backgroundColor: primaryColor || '#2563eb',
        color: '#ffffff',
        border: 'none'
    })

    // Smart Content Defaults
    const getContent = (userContent, defaultText) => {
        if (userContent && userContent.trim().length > 0) return userContent
        return defaultText
    }

    const getPlaceholder = (w, h, text) => {
        // Use primary color for image placeholder background (strip hash)
        const color = (primaryColor || '#cccccc').replace('#', '')
        return `https://placehold.co/${w}x${h}/${color}/FFFFFF?text=${encodeURIComponent(text)}`
    }

    const BRAND = brandName || 'Brand Name'
    const TOPIC = topic || 'Service'

    return (
        <div className="visual-preview-container" style={{ fontFamily: 'var(--font-sans)' }}>

            {/* HEADER */}
            {sections.header.enabled && (
                <div className={`mock-header ${sections.header.layout === 'Smart Hide (Scroll Up to Show)' ? 'mock-header-smart' : ''}`}>
                    <div className="mock-logo" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem' }}>{BRAND}</div>
                    <div className="mock-nav">
                        <span className="mock-link-text">About</span>
                        <span className="mock-link-text">Services</span>
                        <span className="mock-link-text">FAQ</span>
                    </div>
                    <div className="mock-cta" style={getBtnStyle()}>Book Now</div>
                </div>
            )}

            {/* HERO */}
            {sections.hero.enabled && (
                <div className={`mock-section mock-hero layout-${sections.hero.layout.toLowerCase()}`} style={{ backgroundColor: secondaryColor || '#ffffff' }}>

                    {/* SPLIT LAYOUT */}
                    {sections.hero.layout === 'Split' && (
                        <>
                            <div className="mock-content">
                                <h1 className="mock-h1-text" style={{ fontFamily: 'var(--font-serif)' }}>
                                    {getContent(sections.hero.content, `Transform your ${TOPIC} with ${BRAND}`)}
                                </h1>
                                <p className="mock-p-text">
                                    Experience world-class care and results. The premier destination for {TOPIC} treatments.
                                </p>
                                <button className="mock-btn-real" style={getBtnStyle()}>
                                    Book Consultation
                                </button>
                            </div>
                            <div className="mock-media-real">
                                <img src={getPlaceholder(600, 400, `${TOPIC} Hero Image`)} alt="Hero" />
                            </div>
                        </>
                    )}

                    {/* CENTERED LAYOUT */}
                    {sections.hero.layout === 'Centered' && (
                        <div className="mock-centered-content">
                            <h1 className="mock-h1-text" style={{ textAlign: 'center', fontFamily: 'var(--font-serif)' }}>
                                {getContent(sections.hero.content, `The Future of ${TOPIC} is Here`)}
                            </h1>
                            <p className="mock-p-text" style={{ textAlign: 'center', margin: '0 auto' }}>
                                Advanced aesthetics tailored to your unique needs.
                            </p>
                            <button className="mock-btn-real" style={getBtnStyle()}>
                                Schedule Your Visit
                            </button>
                            <div className="mock-media-real" style={{ marginTop: '2rem', width: '100%', height: '300px' }}>
                                <img src={getPlaceholder(800, 400, `${TOPIC} Banner`)} alt="Hero" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                            </div>
                        </div>
                    )}

                    {/* VIDEO FIRST */}
                    {sections.hero.layout === 'Video-First' && (
                        <div className="mock-video-first">
                            <div className="mock-media-real" style={{ width: '100%', height: '400px', marginBottom: '1.5rem' }}>
                                <img src={getPlaceholder(800, 450, `Video: ${TOPIC} Demo`)} alt="Video Placeholder" />
                            </div>
                            <h1 className="mock-h1-text" style={{ fontFamily: 'var(--font-serif)' }}>
                                {getContent(sections.hero.content, `See Real Results from ${BRAND}`)}
                            </h1>
                            <button className="mock-btn-real" style={getBtnStyle()}>
                                Watch Success Stories
                            </button>
                        </div>
                    )}
                </div>
            )}

            {/* TRUST PRIMER */}
            {sections.trustPrimer.enabled && (
                <div className="mock-section mock-trust" style={{ borderBottom: `1px solid ${neutralColor}` }}>
                    <div className="mock-trust-strip">
                        <span>★★★★★ 5.0 Rating</span>
                        <span style={{ margin: '0 1rem' }}>•</span>
                        <span>Trusted by 1,000+ Patients</span>
                        <span style={{ margin: '0 1rem' }}>•</span>
                        <span>Certified Experts</span>
                    </div>
                </div>
            )}

            {/* TREATMENT LOGIC (Generic placeholder for flow) */}
            {sections.treatmentLogic.enabled && (
                <div className="mock-section">
                    <h2 className="mock-h2-text">Why Choose {BRAND}?</h2>
                    <p className="mock-p-text">Our unique approach to {TOPIC} ensures safety and maximum efficacy.</p>
                </div>
            )}

            {/* SOCIAL PROOF */}
            {sections.socialProof.enabled && (
                <div className="mock-section mock-social" style={{ backgroundColor: neutralColor || '#f8fafc' }}>
                    <h2 className="mock-h2-text">Real Patient Results</h2>
                    <div className={`mock-social-grid ${sections.socialProof.layout === 'Testimonials' ? 'cols-3' : 'cols-2'}`}>
                        <div className="mock-card-real">
                            <div className="mock-avatar"></div>
                            <p>"Incredible results after just one session!"</p>
                        </div>
                        <div className="mock-card-real">
                            <div className="mock-avatar"></div>
                            <p>"The team at {BRAND} changed my life."</p>
                        </div>
                        {sections.socialProof.layout === 'Testimonials' && (
                            <div className="mock-card-real">
                                <div className="mock-avatar"></div>
                                <p>"Highly recommend to everyone."</p>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* CONVERSION */}
            {sections.conversion.enabled && (
                <div className="mock-section mock-conversion" style={getBgStyle(true)}>
                    <h2 className="mock-h2-text" style={{ color: 'white' }}>Ready to start your journey?</h2>
                    <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem' }}>Limited availability for new {TOPIC} patients this month.</p>
                    <button className="mock-btn-real" style={{ backgroundColor: accentColor || '#ffffff', color: primaryColor, fontWeight: 'bold' }}>
                        Book My Appointment
                    </button>
                </div>
            )}

            {/* FOOTER */}
            {sections.footer.enabled && (
                <div className="mock-footer" style={{ backgroundColor: '#0f172a', color: '#fff', padding: '3rem 2rem' }}>
                    <div className="mock-footer-row" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <strong>{BRAND}</strong>
                            <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>© 2024 All rights reserved.</p>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8rem' }}>
                            <span>Privacy</span>
                            <span>Terms</span>
                            <span>Contact</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default VisualPreview

import React from 'react'

const HeroSection = ({ data, layout, theme }) => {
    const { primaryColor, secondaryColor, neutralColor } = theme;

    // Helper for placeholder images
    const getPlaceholder = (w, h, text) => {
        const color = (primaryColor || '#cccccc').replace('#', '')
        return `https://placehold.co/${w}x${h}/${color}/FFFFFF?text=${encodeURIComponent(text)}`
    }

    const { headline, subheadline, ctaText, imagePrompt, videoUrl } = data;

    if (layout === 'Split') {
        return (
            <div className="mock-section mock-hero-split" style={{ backgroundColor: secondaryColor || '#ffffff', display: 'flex', alignItems: 'center', gap: '4rem', padding: '6rem 2rem' }}>
                <div style={{ flex: 1 }}>
                    <h1 className="mock-h1" style={{ fontSize: '3rem', lineHeight: '1.2', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)', color: '#1a1a1a' }}>
                        {headline}
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: '#4a4a4a', marginBottom: '2.5rem', lineHeight: '1.6' }}>
                        {subheadline}
                    </p>
                    <button style={{ backgroundColor: primaryColor || '#000', color: '#fff', padding: '1rem 2rem', border: 'none', borderRadius: '4px', fontSize: '1.1rem', cursor: 'pointer' }}>
                        {ctaText}
                    </button>
                </div>
                <div style={{ flex: 1 }}>
                    <img
                        src={getPlaceholder(600, 500, imagePrompt || 'Hero Image')}
                        alt="Hero"
                        style={{ width: '100%', borderRadius: '8px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                    />
                </div>
            </div>
        )
    }

    if (layout === 'Centered') {
        return (
            <div className="mock-section mock-hero-centered" style={{ backgroundColor: secondaryColor || '#ffffff', textAlign: 'center', padding: '6rem 2rem' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1 className="mock-h1" style={{ fontSize: '3.5rem', lineHeight: '1.1', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)', color: '#1a1a1a' }}>
                        {headline}
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: '#4a4a4a', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                        {subheadline}
                    </p>
                    <button style={{ backgroundColor: primaryColor || '#000', color: '#fff', padding: '1rem 2.5rem', border: 'none', borderRadius: '50px', fontSize: '1.1rem', cursor: 'pointer' }}>
                        {ctaText}
                    </button>
                </div>
                <div style={{ marginTop: '4rem', width: '100%', maxWidth: '1000px', margin: '4rem auto 0' }}>
                    <img
                        src={getPlaceholder(1000, 500, imagePrompt || 'Banner Image')}
                        alt="Hero Banner"
                        style={{ width: '100%', borderRadius: '12px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                    />
                </div>
            </div>
        )
    }

    if (layout === 'Video-First') {
        return (
            <div className="mock-section mock-hero-video" style={{ backgroundColor: '#000', color: '#fff', padding: '0', position: 'relative', height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <img
                    src={getPlaceholder(1200, 600, 'Background Video Loop')}
                    alt="Video Background"
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
                />
                <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '800px', padding: '2rem' }}>
                    <h1 style={{ fontSize: '4rem', marginBottom: '2rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)', fontFamily: 'var(--font-serif)' }}>{headline}</h1>
                    <button style={{ backgroundColor: '#fff', color: '#000', padding: '1.25rem 3rem', border: 'none', borderRadius: '4px', fontSize: '1.1rem', fontWeight: 'bold' }}>
                        {ctaText}
                    </button>
                </div>
            </div>
        )
    }

    if (layout === 'Full Width') {
        return (
            <div className="mock-section mock-hero-full" style={{ position: 'relative', height: '80vh', minHeight: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textAlign: 'center' }}>
                <img
                    src={getPlaceholder(1600, 900, imagePrompt || 'Full Width Background')}
                    alt="Background"
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
                />
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.4)', zIndex: 1 }}></div>
                <div style={{ position: 'relative', zIndex: 2, maxWidth: '900px', padding: '2rem' }}>
                    <h1 style={{ fontSize: '4.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)', lineHeight: 1.1 }}>{headline}</h1>
                    <p style={{ fontSize: '1.5rem', marginBottom: '3rem', opacity: 0.9 }}>{subheadline}</p>
                    <button style={{
                        backgroundColor: primaryColor || '#fff',
                        color: primaryColor ? '#fff' : '#000',
                        padding: '1.2rem 3.5rem',
                        border: 'none',
                        borderRadius: '2px',
                        fontSize: '1.1rem',
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        fontWeight: '600',
                        cursor: 'pointer'
                    }}>
                        {ctaText}
                    </button>
                </div>
            </div>
        )
    }

    if (layout === 'Minimal') {
        return (
            <div className="mock-section mock-hero-minimal" style={{ backgroundColor: '#fff', padding: '8rem 2rem', textAlign: 'left', maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '4rem' }}>
                <div style={{ flex: 1 }}>
                    <span style={{ display: 'inline-block', padding: '0.25rem 1rem', borderRadius: '50px', background: secondaryColor || '#f3f4f6', color: primaryColor || '#000', fontSize: '0.9rem', marginBottom: '2rem', fontWeight: 600 }}>New Arrival</span>
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)', color: '#111' }}>{headline}</h1>
                    <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem', maxWidth: '500px' }}>{subheadline}</p>
                    <button style={{ backgroundColor: 'transparent', border: `2px solid ${primaryColor || '#000'}`, color: primaryColor || '#000', padding: '0.75rem 2rem', borderRadius: '4px', fontSize: '1rem', fontWeight: 600, cursor: 'pointer' }}>
                        {ctaText} &rarr;
                    </button>
                </div>
                <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                    {/* Minimal geometric decoration instead of big image */}
                    <div style={{ width: '300px', height: '400px', backgroundColor: secondaryColor || '#eee', borderRadius: '200px 200px 0 0', position: 'relative' }}>
                        <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', width: '100px', height: '100px', borderRadius: '50%', background: primaryColor || '#000', opacity: 0.2 }}></div>
                    </div>
                </div>
            </div>
        )
    }

    return null;
}

export default HeroSection

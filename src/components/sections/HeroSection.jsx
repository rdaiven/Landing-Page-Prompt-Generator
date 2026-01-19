import React from 'react'
import { getContrastColor } from '../../utils/colors'

const HeroSection = ({ data, layout, theme }) => {
    const { primaryColor, secondaryColor, neutralColor } = theme;
    const buttonTextColor = getContrastColor(primaryColor);

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
                    <button style={{ backgroundColor: primaryColor || '#000', color: buttonTextColor, padding: '1rem 2rem', border: 'none', borderRadius: '4px', fontSize: '1.1rem', cursor: 'pointer' }}>
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
                    <button style={{ backgroundColor: primaryColor || '#000', color: buttonTextColor, padding: '1rem 2.5rem', border: 'none', borderRadius: '50px', fontSize: '1.1rem', cursor: 'pointer' }}>
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
                        color: primaryColor ? buttonTextColor : '#000',
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
                    <div style={{ width: '300px', height: '400px', backgroundColor: secondaryColor || '#eee', borderRadius: '200px 200px 0 0', position: 'relative' }}>
                        <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', width: '100px', height: '100px', borderRadius: '50%', background: primaryColor || '#000', opacity: 0.2 }}></div>
                    </div>
                </div>
            </div>
        )
    }

    if (layout === 'FloatUI - Centered') {
        return (
            <div className="relative" style={{ backgroundColor: secondaryColor || '#ffffff' }}>
                <div className="absolute top-0 left-0 w-full h-full opacity-40 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
                    <div className="space-y-5 max-w-4xl mx-auto text-center">
                        {data.priceText && (
                            <div className="flex justify-center mb-4">
                                <span className="px-3 py-1 rounded-full text-sm font-medium bg-[var(--primary)] bg-opacity-10 text-[var(--primary)] border border-[var(--primary)] border-opacity-20">
                                    {data.priceText}
                                </span>
                            </div>
                        )}
                        <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl" style={{ fontFamily: 'var(--font-serif)', color: 'var(--primary)' }}>
                            {headline}
                        </h2>
                        <p className="max-w-2xl mx-auto text-gray-600">
                            {subheadline}
                        </p>
                        <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                            <button className="block py-2 px-4 text-white font-medium duration-150 rounded-lg shadow-lg hover:shadow-none bg-[var(--primary)] hover:bg-[var(--primary)-hover]" style={{ color: buttonTextColor }}>
                                {ctaText}
                            </button>
                            {data.secondaryCta && (
                                <button className="block py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg">
                                    {data.secondaryCta}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    if (layout === 'Marketing Split') {
        const stats = [
            { label: 'Customers', value: '10k+' },
            { label: 'Rating', value: '4.9/5' },
            { label: 'Support', value: '24/7' },
        ];
        return (
            <section style={{ backgroundColor: secondaryColor || '#fff', padding: '6rem 2rem', overflow: 'hidden' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4rem' }}>
                    <div style={{ flex: '1 1 500px' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: '#f3f4f6', borderRadius: '50px', marginBottom: '2rem' }}>
                            <span style={{ width: '8px', height: '8px', background: primaryColor || '#000', borderRadius: '50%' }}></span>
                            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#374151' }}>No.1 Trending Solution</span>
                        </div>
                        <h1 style={{ fontSize: '3.75rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', color: '#111827', fontFamily: 'var(--font-serif)' }}>
                            {headline}
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: '#4b5563', lineHeight: 1.6, marginBottom: '2.5rem' }}>
                            {subheadline}
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}>
                            <button style={{ backgroundColor: primaryColor || '#000', color: buttonTextColor, padding: '1rem 2rem', borderRadius: '8px', fontWeight: 600, fontSize: '1rem', border: 'none', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                                {ctaText}
                            </button>
                            <button style={{ backgroundColor: '#fff', color: '#374151', padding: '1rem 2rem', borderRadius: '8px', fontWeight: 600, fontSize: '1rem', border: '1px solid #d1d5db' }}>
                                Learn more
                            </button>
                        </div>
                        <div style={{ display: 'flex', gap: '3rem', borderTop: '1px solid #e5e7eb', paddingTop: '2rem' }}>
                            {stats.map((stat, i) => (
                                <div key={i}>
                                    <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827' }}>{stat.value}</div>
                                    <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div style={{ flex: '1 1 500px', position: 'relative' }}>
                        <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '200px', height: '200px', background: primaryColor || '#000', opacity: 0.1, borderRadius: '50%', filter: 'blur(40px)' }}></div>
                        <img
                            src={getPlaceholder(600, 700, imagePrompt || 'Product Shot')}
                            alt="Product"
                            style={{ width: '100%', borderRadius: '24px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', position: 'relative', zIndex: 1, border: '8px solid #fff' }}
                        />
                    </div>
                </div>
            </section>
        )
    }

    return null;
}

export default HeroSection

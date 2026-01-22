// ===================================================================
// HERO SECTION
// Visual Preview (React) + Code Generation (HTML)
// ===================================================================

import React from 'react'
import { getContrastColor } from '../../utils/colors'
import { getEffectiveImage } from '../../utils/mediaUtils'

// ============================================================
// SHARED UTILITIES (used by both React and HTML)
// ============================================================

const getButtonStyle = (primaryColor) => {
    const textColor = getContrastColor(primaryColor)
    return {
        backgroundColor: primaryColor || '#000',
        color: textColor,
        padding: '1rem 2rem',
        border: 'none',
        borderRadius: '0.375rem',
        fontSize: '1.125rem',
        fontWeight: '600',
        cursor: 'pointer'
    }
}

// ============================================================
// REACT COMPONENT (Visual Preview)
// ============================================================

const HeroSection = ({ data, layout, theme }) => {
    const { primaryColor, secondaryColor, accentColor } = theme
    const buttonStyle = getButtonStyle(primaryColor)
    const { headline, subheadline, ctaText, imagePrompt, imageUrl, videoUrl, leftHeadline, leftText, rightHeadline, rightText, typedWords, card1Title, card2Title, card3Title } = data

    // 1. High Converting - 2-Column Split
    if (layout === 'High Converting') {
        const imageSrc = getEffectiveImage(imageUrl, imagePrompt || 'Hero Image', theme, { w: 800, h: 600 })
        return (
            <div className="flex flex-col md:flex-row items-center gap-12 p-8 md:p-24 bg-white" style={{ minHeight: '600px' }}>
                <div className="flex-1 space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight" style={{ fontFamily: 'var(--font-serif)', color: primaryColor }}>{headline}</h1>
                    <p className="text-xl text-gray-600 leading-relaxed">{subheadline}</p>
                    <button style={buttonStyle}>{ctaText}</button>
                </div>
                <div className="flex-1 w-full">
                    <img src={imageSrc} alt="Hero" className="w-full rounded-2xl shadow-xl object-cover h-[500px]" />
                </div>
            </div>
        )
    }

    // 2. Modern & Bold - Centered
    if (layout === 'Modern & Bold') {
        const imageSrc = getEffectiveImage(imageUrl, imagePrompt || 'Banner Image', theme, { w: 1200, h: 600 })
        return (
            <div className="flex flex-col items-center text-center p-8 md:p-24 bg-slate-50 relative overflow-hidden">
                <div className="max-w-4xl z-10 space-y-8 mb-16">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-serif)', color: primaryColor }}>{headline}</h1>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">{subheadline}</p>
                    <button style={{ ...buttonStyle, padding: '1.25rem 3rem', borderRadius: '9999px' }}>{ctaText}</button>
                </div>
                <div className="w-full max-w-6xl z-10">
                    <img src={imageSrc} alt="Banner" className="w-full rounded-3xl shadow-2xl" />
                </div>
            </div>
        )
    }

    // 3. Luxurious & Immersive - Full Width
    if (layout === 'Luxurious & Immersive') {
        const imageSrc = getEffectiveImage(imageUrl, imagePrompt || 'Luxury Background', theme, { w: 1920, h: 1080 })
        return (
            <div className="relative h-[80vh] min-h-[700px] flex items-center justify-center text-center px-4">
                <div className="absolute inset-0 z-0">
                    <img src={imageSrc} alt="Background" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>
                <div className="relative z-10 max-w-4xl space-y-8 text-white">
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter" style={{ fontFamily: 'var(--font-serif)' }}>{headline}</h1>
                    <p className="text-2xl md:text-3xl font-light opacity-90">{subheadline}</p>
                    <button className="uppercase tracking-widest hover:bg-white hover:text-black transition-colors" style={{ ...buttonStyle, backgroundColor: 'transparent', border: '2px solid white' }}>{ctaText}</button>
                </div>
            </div>
        )
    }

    // 4. Video Background
    if (layout === 'Video Background') {
        return (
            <div className="relative h-[80vh] min-h-[600px] flex items-center justify-center text-center px-4 overflow-hidden bg-black">
                {/* Simulated Video Placeholder for Preview */}
                <div className="absolute inset-0 opacity-40">
                    <div className="w-full h-full bg-gradient-to-br from-indigo-900 via-purple-900 to-black animate-pulse"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-white/20 text-9xl font-bold">VIDEO</div>
                </div>
                <div className="relative z-10 max-w-3xl space-y-6 text-white p-12 backdrop-blur-sm border border-white/10 rounded-2xl bg-black/20">
                    <h1 className="text-5xl md:text-7xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{headline}</h1>
                    <p className="text-xl md:text-2xl text-gray-200">{subheadline}</p>
                    <div className="flex gap-4 justify-center">
                        <button style={buttonStyle}>{ctaText}</button>
                        <button className="px-8 py-4 font-semibold text-white border border-white/30 rounded-md hover:bg-white/10">Play Reel ▶</button>
                    </div>
                </div>
            </div>
        )
    }

    // 5. Animated Gradient
    if (layout === 'Animated Gradient') {
        return (
            <div className="relative py-32 px-4 flex items-center justify-center text-center overflow-hidden">
                <div className="absolute inset-0 z-0" style={{
                    background: `linear-gradient(-45deg, ${primaryColor}, ${accentColor || '#3b82f6'}, #23d5ab)`,
                    backgroundSize: '400% 400%',
                    animation: 'gradient 15s ease infinite',
                    opacity: 0.15
                }}></div>
                <div className="relative z-10 max-w-4xl space-y-8">
                    <h1 className="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 mb-2"
                        style={{ fontFamily: 'var(--font-serif)', lineHeight: 1.1 }}>
                        {headline}
                    </h1>
                    <p className="text-2xl md:text-3xl text-gray-800 font-light">{subheadline}</p>
                    <button style={{ ...buttonStyle, padding: '1.5rem 4rem', fontSize: '1.25rem', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.3)' }}>{ctaText}</button>
                </div>
            </div>
        )
    }

    // 6. Split Screen
    if (layout === 'Split Screen') {
        return (
            <div className="flex flex-col md:flex-row min-h-[700px]">
                <div className="flex-1 bg-slate-50 p-12 md:p-24 flex flex-col justify-center items-start space-y-6 border-b md:border-r border-gray-200">
                    <span className="text-sm font-bold tracking-widest uppercase text-gray-400">01. Experts</span>
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-serif)' }}>{leftHeadline || headline}</h2>
                    <p className="text-xl text-gray-600 max-w-md">{leftText || subheadline}</p>
                    <div className="h-1 w-20" style={{ backgroundColor: accentColor || primaryColor }}></div>
                </div>
                <div className="flex-1 bg-white p-12 md:p-24 flex flex-col justify-center items-start space-y-6">
                    <span className="text-sm font-bold tracking-widest uppercase text-gray-400">02. Results</span>
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-serif)' }}>{rightHeadline || headline}</h2>
                    <p className="text-xl text-gray-600 max-w-md">{rightText || subheadline}</p>
                    <button style={buttonStyle}>{ctaText}</button>
                </div>
            </div>
        )
    }

    // 7. Minimal Clean
    if (layout === 'Minimal Clean') {
        return (
            <div className="py-24 md:py-40 px-6 max-w-screen-xl mx-auto flex flex-col items-start gap-12">
                <div className="w-full h-px bg-gray-200"></div>
                <div className="grid md:grid-cols-12 gap-12 w-full">
                    <div className="md:col-span-8">
                        <h1 className="text-6xl md:text-8xl font-medium tracking-tight text-gray-900 mb-8" style={{ fontFamily: 'var(--font-serif)' }}>{headline}</h1>
                    </div>
                    <div className="md:col-span-4 flex flex-col justify-end items-start space-y-8">
                        <p className="text-xl text-gray-600 leading-relaxed">{subheadline}</p>
                        <button className="text-lg font-semibold border-b-2 border-black pb-1 hover:text-gray-600 transition-colors">{ctaText} &rarr;</button>
                    </div>
                </div>
            </div>
        )
    }

    // 8. Cards Grid
    if (layout === 'Cards Grid') {
        const imageSrc = getEffectiveImage(imageUrl, imagePrompt || 'Clinic', theme, { w: 1200, h: 800 })
        return (
            <div className="relative py-24 px-4 bg-gray-900 text-white overflow-hidden">
                <img src={imageSrc} alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-20" />
                <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
                    <div className="md:col-span-5 space-y-8">
                        <h1 className="text-5xl md:text-7xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>{headline}</h1>
                        <p className="text-xl text-gray-300">{subheadline}</p>
                        <button className="bg-white text-black px-8 py-4 rounded-full font-bold">{ctaText}</button>
                    </div>
                    <div className="md:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[card1Title, card2Title, card3Title].filter(Boolean).map((title, i) => (
                            <div key={i} className={`p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all ${i === 2 ? 'md:col-span-2' : ''}`}>
                                <h3 className="text-2xl font-bold mb-4">{title}</h3>
                                <p className="text-gray-400">Explore treatments &rarr;</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    // 9. Asymmetric Layout
    if (layout === 'Asymmetric Layout') {
        const imageSrc = getEffectiveImage(imageUrl, imagePrompt || 'Fashion', theme, { w: 800, h: 1000 })
        return (
            <div className="max-w-7xl mx-auto py-24 px-6 grid md:grid-cols-12 gap-12 items-center">
                <div className="md:col-span-7 relative z-10">
                    <h1 className="text-6xl md:text-9xl font-bold leading-none mb-8" style={{ fontFamily: 'var(--font-serif)', color: primaryColor }}>
                        {headline.split(' ').slice(0, 2).join(' ')}<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-200">
                            {headline.split(' ').slice(2).join(' ')}
                        </span>
                    </h1>
                    <div className="bg-white p-8 md:-mr-24 relative z-20 shadow-2xl max-w-xl border-l-8" style={{ borderColor: accentColor || '#000' }}>
                        <p className="text-xl text-gray-600 mb-6">{subheadline}</p>
                        <button style={buttonStyle}>{ctaText}</button>
                    </div>
                </div>
                <div className="md:col-span-5 relative">
                    <div className="absolute top-10 -left-10 w-full h-full bg-gray-100 rounded-full z-0"></div>
                    <img src={imageSrc} alt="Hero" className="relative z-10 w-full rounded-b-full rounded-t-3xl shadow-2xl" />
                </div>
            </div>
        )
    }

    // 10. Typed Animation
    if (layout === 'Typed Animation') {
        const imageSrc = getEffectiveImage(imageUrl, imagePrompt || 'Elegant', theme, { w: 1600, h: 900 })
        return (
            <div className="relative h-[90vh] flex items-center justify-center text-center px-4 bg-gray-900 text-white">
                <img src={imageSrc} className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay" />
                <div className="relative z-10 max-w-5xl space-y-10">
                    <p className="text-xl tracking-[0.5em] uppercase border-b border-white/20 pb-4 inline-block">{subheadline}</p>
                    <h1 className="text-6xl md:text-8xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>
                        {headline} <br />
                        <span style={{ color: accentColor || '#4ade80' }}>{typedWords?.split(',')[0]}</span>
                        <span className="animate-pulse">|</span>
                    </h1>
                    <div className="pt-8">
                        <button className="px-12 py-5 bg-white text-black font-bold text-xl rounded-none hover:bg-gray-200 transition-colors uppercase tracking-wider">
                            {ctaText}
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return <div className="p-12 text-center text-gray-500">Layout "{layout}" preview not available</div>
}

import ReactDOMServer from 'react-dom/server';

// ... (existing imports and component definition)

// ============================================================
// HTML GENERATOR (Code View) - DRY Implementation
// ============================================================

export const generateHeroHTML = (layout, data, theme) => {
    // Render the React component directly to static HTML string
    // This ensures logical parity between Visual Preview and Code View
    const html = ReactDOMServer.renderToStaticMarkup(
        <HeroSection data={data} layout={layout} theme={theme} />
    );

    return `<!-- HERO: ${layout} -->
${html}`;
};


export default HeroSection

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

// ============================================================
// HTML GENERATOR (Code View)
// ============================================================

export const generateHeroHTML = (layout, data, theme) => {
    const { primaryColor, secondaryColor, accentColor } = theme
    const { headline, subheadline, ctaText, imagePrompt, imageUrl, videoUrl, leftHeadline, leftText, rightHeadline, rightText, typedWords, card1Title, card2Title, card3Title } = data

    // Utilities for HTML generation
    const buttonStyle = `background-color: ${primaryColor}; color: #fff; padding: 1rem 2rem; border-radius: 0.375rem; font-weight: 600; text-decoration: none; display: inline-block;`

    // 1. High Converting
    if (layout === 'High Converting') {
        const imageSrc = getEffectiveImage(imageUrl, imagePrompt || 'Hero', theme, { w: 800, h: 600 })
        return `<!-- HERO: High Converting (Split) -->
<section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        <div class="flex-1 space-y-6">
            <h1 class="text-5xl md:text-6xl font-bold leading-tight" style="font-family: 'Playfair Display', serif; color: var(--primary);">
                ${headline}
            </h1>
            <p class="text-xl text-gray-600 leading-relaxed">
                ${subheadline}
            </p>
            <a href="#book" class="inline-block px-8 py-4 rounded-lg text-white font-semibold text-lg transition-transform hover:scale-105" style="background-color: var(--primary);">
                ${ctaText}
            </a>
        </div>
        <div class="flex-1">
            <img src="${imageSrc}" alt="Hero" class="w-full rounded-2xl shadow-xl object-cover h-[500px]" />
        </div>
    </div>
</section>`
    }

    // 2. Modern & Bold
    if (layout === 'Modern & Bold') {
        const imageSrc = getEffectiveImage(imageUrl, imagePrompt || 'Banner', theme, { w: 1200, h: 600 })
        return `<!-- HERO: Modern & Bold (Centered) -->
<section class="relative py-24 bg-slate-50 overflow-hidden text-center">
    <div class="max-w-5xl mx-auto px-4 relative z-10 mb-16">
        <h1 class="text-6xl md:text-8xl font-bold tracking-tight mb-8" style="font-family: 'Playfair Display', serif; color: var(--primary);">
            ${headline}
        </h1>
        <p class="text-2xl text-gray-600 max-w-2xl mx-auto mb-10">
            ${subheadline}
        </p>
        <a href="#book" class="inline-block px-12 py-5 rounded-full text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all" style="background-color: var(--primary);">
            ${ctaText}
        </a>
    </div>
    <div class="max-w-7xl mx-auto px-4 relative z-10">
        <img src="${imageSrc}" alt="Banner" class="w-full rounded-3xl shadow-2xl transform hover:scale-[1.01] transition-transform duration-700" />
    </div>
</section>`
    }

    // 3. Luxurious & Immersive
    if (layout === 'Luxurious & Immersive') {
        const imageSrc = getEffectiveImage(imageUrl, imagePrompt || 'Luxury', theme, { w: 1920, h: 1080 })
        return `<!-- HERO: Luxurious & Immersive -->
<section class="relative h-screen min-h-[700px] flex items-center justify-center text-center px-4">
    <div class="absolute inset-0 z-0">
        <img src="${imageSrc}" alt="Background" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black/40"></div>
    </div>
    <div class="relative z-10 max-w-4xl space-y-10 text-white">
        <h1 class="text-7xl md:text-9xl font-bold tracking-tighter" style="font-family: 'Playfair Display', serif;">
            ${headline}
        </h1>
        <p class="text-2xl md:text-3xl font-light opacity-90 tracking-wide">
            ${subheadline}
        </p>
        <a href="#explore" class="inline-block px-12 py-4 border-2 border-white text-white uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300 font-semibold">
            ${ctaText}
        </a>
    </div>
</section>`
    }

    // 4. Video Background
    if (layout === 'Video Background') {
        return `<!-- HERO: Video Background -->
<section class="relative h-screen min-h-[600px] flex items-center justify-center text-center px-4 overflow-hidden bg-black">
    <video autoplay muted loop playsinline class="absolute inset-0 w-full h-full object-cover opacity-50">
        <source src="${videoUrl || 'https://assets.mixkit.co/videos/preview/mixkit-white-sand-beach-background-loop-1564-large.mp4'}" type="video/mp4">
    </video>
    <div class="relative z-10 max-w-3xl p-12 backdrop-blur-sm border border-white/10 rounded-3xl bg-black/20 text-white">
        <h1 class="text-6xl md:text-8xl font-bold mb-6" style="font-family: 'Playfair Display', serif;">
            ${headline}
        </h1>
        <p class="text-xl md:text-2xl text-gray-100 mb-10">
            ${subheadline}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#book" class="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-colors">
                ${ctaText}
            </a>
            <button class="px-8 py-4 border border-white/30 rounded-lg hover:bg-white/10 text-white font-semibold flex items-center justify-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Watch Story
            </button>
        </div>
    </div>
</section>`
    }

    // 5. Animated Gradient
    if (layout === 'Animated Gradient') {
        return `<!-- HERO: Animated Gradient -->
<style>
    @keyframes gradient-xy {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
    .animate-gradient {
        background-size: 400% 400%;
        animation: gradient-xy 15s ease infinite;
    }
</style>
<section class="relative py-40 px-4 flex items-center justify-center text-center overflow-hidden bg-white">
    <div class="absolute inset-0 z-0 animate-gradient opacity-10" 
         style="background-image: linear-gradient(-45deg, var(--primary), var(--accent), #23d5ab, #ee7752);">
    </div>
    <div class="relative z-10 max-w-5xl space-y-8">
        <h1 class="text-7xl md:text-9xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600" 
            style="font-family: 'Playfair Display', serif; line-height: 1.1;">
            ${headline}
        </h1>
        <p class="text-3xl text-gray-800 font-light mb-12">
            ${subheadline}
        </p>
        <a href="#start" class="inline-block px-16 py-6 text-xl text-white font-bold rounded-lg shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all"
           style="background-color: var(--primary);">
            ${ctaText}
        </a>
    </div>
</section>`
    }

    // 6. Split Screen
    if (layout === 'Split Screen') {
        return `<!-- HERO: Dual Split Screen -->
<section class="flex flex-col md:flex-row min-h-[800px]">
    <div class="flex-1 bg-gray-50 p-12 md:p-24 flex flex-col justify-center items-start border-b md:border-r border-gray-200">
        <span class="text-sm font-bold tracking-widest uppercase text-gray-400 mb-4">01. Experts</span>
        <h2 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style="font-family: 'Playfair Display', serif;">
            ${leftHeadline || headline}
        </h2>
        <p class="text-xl text-gray-600 max-w-md mb-8">
            ${leftText || subheadline}
        </p>
        <div class="h-1 w-24" style="background-color: var(--accent);"></div>
    </div>
    <div class="flex-1 bg-white p-12 md:p-24 flex flex-col justify-center items-start">
        <span class="text-sm font-bold tracking-widest uppercase text-gray-400 mb-4">02. Results</span>
        <h2 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style="font-family: 'Playfair Display', serif;">
            ${rightHeadline || headline}
        </h2>
        <p class="text-xl text-gray-600 max-w-md mb-10">
            ${rightText || subheadline}
        </p>
        <a href="#learn" class="px-8 py-4 bg-black text-white rounded font-bold hover:bg-gray-800 transition-colors" style="background-color: var(--primary);">
            ${ctaText}
        </a>
    </div>
</section>`
    }

    // 7. Minimal Clean
    if (layout === 'Minimal Clean') {
        return `<!-- HERO: Minimal Clean -->
<section class="py-32 md:py-48 px-6 max-w-screen-xl mx-auto flex flex-col items-start gap-12">
    <div class="w-full h-px bg-gray-200"></div>
    <div class="grid md:grid-cols-12 gap-12 w-full">
        <div class="md:col-span-8">
            <h1 class="text-7xl md:text-9xl font-medium tracking-tight text-gray-900 mb-8" style="font-family: 'Playfair Display', serif;">
                ${headline}
            </h1>
        </div>
        <div class="md:col-span-4 flex flex-col justify-end items-start space-y-8">
            <p class="text-2xl text-gray-600 leading-relaxed font-light">
                ${subheadline}
            </p>
            <a href="#next" class="text-xl font-semibold border-b-2 border-black pb-1 hover:text-gray-600 transition-colors">
                ${ctaText} &rarr;
            </a>
        </div>
    </div>
</section>`
    }

    // 8. Cards Grid
    if (layout === 'Cards Grid') {
        const imageSrc = getEffectiveImage(imageUrl, imagePrompt || 'Clinic', theme, { w: 1200, h: 800 })
        return `<!-- HERO: Cards Grid -->
<section class="relative py-32 px-4 bg-gray-900 text-white overflow-hidden">
    <img src="${imageSrc}" alt="Background" class="absolute inset-0 w-full h-full object-cover opacity-20" />
    <div class="relative z-10 max-w-7xl mx-auto grid md:grid-cols-12 gap-16 items-center">
        <div class="md:col-span-5 space-y-8">
            <h1 class="text-6xl md:text-7xl font-bold" style="font-family: 'Playfair Display', serif;">
                ${headline}
            </h1>
            <p class="text-xl text-gray-300 leading-relaxed">
                ${subheadline}
            </p>
            <a href="#book" class="inline-block bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-gray-200 transition-colors">
                ${ctaText}
            </a>
        </div>
        <div class="md:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            ${[card1Title, card2Title, card3Title].filter(Boolean).map((title, i) => `
            <div class="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all cursor-pointer group ${i === 2 ? 'md:col-span-2' : ''}">
                <h3 class="text-2xl font-bold mb-4">${title}</h3>
                <p class="text-gray-400 group-hover:text-white transition-colors">Explore treatments &rarr;</p>
            </div>`).join('')}
        </div>
    </div>
</section>`
    }

    // 9. Asymmetric Layout
    if (layout === 'Asymmetric Layout') {
        const imageSrc = getEffectiveImage(imageUrl, imagePrompt || 'Fashion', theme, { w: 800, h: 1000 })
        return `<!-- HERO: Asymmetric Layout -->
<section class="max-w-7xl mx-auto py-24 px-6 grid md:grid-cols-12 gap-12 items-center overflow-hidden">
    <div class="md:col-span-7 relative z-10">
       <h1 class="text-7xl md:text-9xl font-bold leading-none mb-10" style="font-family: 'Playfair Display', serif; color: var(--primary);">
           ${headline}
       </h1>
       <div class="bg-white p-10 md:-mr-32 relative z-20 shadow-2xl max-w-xl border-l-8" style="border-color: var(--accent);">
           <p class="text-xl text-gray-600 mb-8">
               ${subheadline}
           </p>
           <a href="#action" class="px-8 py-4 text-white font-bold rounded" style="background-color: var(--primary);">
               ${ctaText}
           </a>
       </div>
    </div>
    <div class="md:col-span-5 relative">
        <div class="absolute top-10 -left-10 w-full h-full bg-gray-100 rounded-full z-0 transform scale-110"></div>
        <img src="${imageSrc}" alt="Hero" class="relative z-10 w-full rounded-b-full rounded-t-3xl shadow-2xl" />
    </div>
</section>`
    }

    // 10. Typed Animation
    if (layout === 'Typed Animation') {
        const imageSrc = getEffectiveImage(imageUrl, imagePrompt || 'Elegant', theme, { w: 1600, h: 900 })
        return `<!-- HERO: Typed Animation -->
<section class="relative h-[90vh] flex items-center justify-center text-center px-4 bg-gray-900 text-white">
     <img src="${imageSrc}" class="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay" />
     <div class="relative z-10 max-w-6xl space-y-12">
         <p class="text-xl tracking-[0.5em] uppercase border-b border-white/20 pb-6 inline-block">
             ${subheadline}
         </p>
         <h1 class="text-7xl md:text-9xl font-bold" style="font-family: 'Playfair Display', serif;">
             ${headline} <br/>
             <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                 ${typedWords ? typedWords.split(',')[0] : 'Beautiful'}
             </span>
         </h1>
         <div class="pt-8">
            <a href="#book" class="inline-block px-16 py-6 bg-white text-black font-bold text-xl hover:bg-gray-200 transition-colors uppercase tracking-wider">
                ${ctaText}
            </a>
         </div>
     </div>
</section>`
    }

    return `<!-- Hero layout "${layout}" not implemented -->`
}

export default HeroSection

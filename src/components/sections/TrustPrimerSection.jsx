// ===================================================================
// TRUST PRIMER SECTION
// Visual Preview (React) + Code Generation (HTML)
// ===================================================================

import React from 'react'

// ============================================================
// REACT COMPONENT (Visual Preview)
// ============================================================

const TrustPrimerSection = ({ data, layout, theme }) => {
    const { neutralColor, primaryColor, accentColor } = theme
    const { items, heading, stats, badges, rating, totalReviews, platform, name, credential1, credential2, quotes, years, label, since, partners } = data

    // 1. Logo Showcase
    if (layout === 'Logo Showcase') {
        return (
            <div style={{ padding: '3rem 2rem', borderBottom: `1px solid ${neutralColor || '#e5e7eb'}`, backgroundColor: '#fff' }}>
                <div style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600 }}>
                        {heading}
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', alignItems: 'center', opacity: 0.8 }}>
                        {(items || []).map((item, i) => (
                            <div key={i} style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#cbd5e1', fontFamily: 'var(--font-serif)', filter: 'grayscale(100%)' }}>
                                {item.text || item.alt}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    // 2. Fast to Scan
    if (layout === 'Fast to Scan') {
        return (
            <div style={{ padding: '1.5rem 2rem', backgroundColor: neutralColor || '#f8fafc', borderBottom: '1px solid #e5e7eb' }}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', color: '#475569', fontSize: '0.9rem', fontWeight: '600' }}>
                    {(items || []).map((item, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ color: accentColor || '#3b82f6' }}>✓</span> {item.text}
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    // 3. Marquee Scroll
    if (layout === 'Marquee Scroll') {
        return (
            <div style={{ padding: '2rem 0', overflow: 'hidden', backgroundColor: '#fff', whiteSpace: 'nowrap' }}>
                {heading && <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">{heading}</p>}
                <div style={{ display: 'inline-flex', animation: 'marquee 20s linear infinite', gap: '4rem', paddingLeft: '2rem' }}>
                    {[...(items || []), ...(items || [])].map((item, i) => (
                        <span key={i} style={{ fontSize: '1.25rem', fontWeight: '700', color: '#cbd5e1', fontFamily: 'var(--font-serif)' }}>{item.text}</span>
                    ))}
                </div>
            </div>
        )
    }

    // 4. Key Metrics
    if (layout === 'Key Metrics') {
        return (
            <div style={{ padding: '3rem 2rem', backgroundColor: '#fff' }}>
                <div style={{ display: 'grid', gridTemplateColumns: `repeat(${(stats || []).length}, 1fr)`, gap: '2rem', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                    {(stats || []).map((stat, i) => (
                        <div key={i}>
                            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: accentColor || primaryColor, lineHeight: 1 }}>{stat.value}</div>
                            <div style={{ fontSize: '0.875rem', color: '#64748b', marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    // 5. Authority Badges
    if (layout === 'Authority Badges') {
        return (
            <div style={{ padding: '2rem', backgroundColor: neutralColor || '#f8fafc', textAlign: 'center' }}>
                <div style={{ display: 'inline-flex', gap: '3rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {(badges || []).map((badge, i) => (
                        <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ width: '40px', height: '40px', border: `2px solid ${primaryColor}`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem', color: primaryColor }}>🛡️</div>
                            <span style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{badge.title}</span>
                            <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{badge.subtext}</span>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    // 6. Compact Rating
    if (layout === 'Compact Rating') {
        return (
            <div style={{ padding: '1.5rem', backgroundColor: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', borderBottom: '1px solid #f1f5f9' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: primaryColor }}>{rating}</div>
                <div style={{ display: 'flex', gap: '2px', color: '#fbbf24' }}>{'★'.repeat(5)}</div>
                <div style={{ borderLeft: '1px solid #e2e8f0', paddingLeft: '1rem' }}>
                    <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>{totalReviews}</div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b' }}>{platform}</div>
                </div>
            </div>
        )
    }

    // 7. Doctor Credentials
    if (layout === 'Doctor Credentials') {
        return (
            <div style={{ padding: '2rem', backgroundColor: '#fff', textAlign: 'center' }}>
                <div style={{ display: 'inline-block', padding: '1.5rem 3rem', border: `1px solid ${neutralColor}`, borderRadius: '8px' }}>
                    <h4 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem', color: primaryColor }}>{name}</h4>
                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', fontSize: '0.9rem', color: '#64748b' }}>
                        <span>{credential1}</span>
                        <span>•</span>
                        <span>{credential2}</span>
                    </div>
                </div>
            </div>
        )
    }

    // 8. Press Mentions
    if (layout === 'Press Mentions') {
        return (
            <div style={{ padding: '3rem 2rem', backgroundColor: neutralColor || '#f8fafc' }}>
                <div style={{ display: 'grid', gridTemplateColumns: `repeat(${(quotes || []).length}, 1fr)`, gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
                    {(quotes || []).map((quote, i) => (
                        <div key={i} style={{ textAlign: 'center' }}>
                            <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '1rem', color: '#334155' }}>{quote.text}</p>
                            <p style={{ fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', color: '#94a3b8' }}>— {quote.source}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    // 9. Years of Excellence
    if (layout === 'Years of Excellence') {
        return (
            <div style={{ padding: '2rem', backgroundColor: primaryColor || '#000', color: '#fff', textAlign: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem' }}>
                    <div style={{ fontSize: '3rem', fontWeight: 'bold', lineHeight: 1 }}>{years}</div>
                    <div style={{ textAlign: 'left' }}>
                        <div style={{ fontSize: '1.1rem', fontWeight: '600' }}>{label}</div>
                        <div style={{ fontSize: '0.9rem', opacity: 0.7 }}>{since}</div>
                    </div>
                </div>
            </div>
        )
    }

    // 10. Medical Partners
    if (layout === 'Medical Partners') {
        return (
            <div style={{ padding: '3rem 2rem', backgroundColor: '#fff', textAlign: 'center' }}>
                <h4 style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '2rem' }}>{heading}</h4>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', alignItems: 'center' }}>
                    {(partners || []).map((partner, i) => (
                        <span key={i} style={{ fontSize: '1.25rem', fontWeight: '600', color: '#334155' }}>{partner.name}</span>
                    ))}
                </div>
            </div>
        )
    }

    return <div>Select a layout</div>
}

// ============================================================
// HTML GENERATOR (Code View)
// ============================================================

export const generateTrustPrimerHTML = (layout, data, theme) => {
    const { items, heading, stats, badges, rating, totalReviews, platform, name, credential1, credential2, quotes, years, label, since, partners } = data

    // 1. Logo Showcase
    if (layout === 'Logo Showcase') {
        return `<!-- TRUST: Logo Showcase -->
<section class="py-12 bg-white border-b border-gray-100">
    <div class="max-w-7xl mx-auto px-4 text-center">
        ${heading ? `<p class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">${heading}</p>` : ''}
        <div class="flex flex-wrap justify-center gap-12 md:gap-16 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            ${(items || []).map(item => `
            <span class="text-xl md:text-2xl font-bold text-gray-300 font-serif">${item.text || item.alt}</span>`).join('')}
        </div>
    </div>
</section>`
    }

    // 2. Fast to Scan
    if (layout === 'Fast to Scan') {
        return `<!-- TRUST: Fast to Scan -->
<section class="py-4 bg-slate-50 border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 text-sm md:text-base font-semibold text-slate-600">
        ${(items || []).map(item => `
        <div class="flex items-center gap-2">
            <svg class="w-5 h-5" style="color: var(--accent);" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
            ${item.text}
        </div>`).join('')}
    </div>
</section>`
    }

    // 3. Marquee Scroll
    if (layout === 'Marquee Scroll') {
        return `<!-- TRUST: Marquee Scroll -->
<section class="py-8 bg-white overflow-hidden border-b border-gray-100">
    ${heading ? `<p class="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">${heading}</p>` : ''}
    <div class="relative flex overflow-x-hidden group">
        <div class="animate-marquee whitespace-nowrap flex gap-16 px-8">
            ${[...items, ...items].map(item => `
            <span class="text-2xl font-bold text-gray-300 font-serif">${item.text}</span>`).join('')}
        </div>
        <div class="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-16 px-8">
             ${[...items, ...items].map(item => `
            <span class="text-2xl font-bold text-gray-300 font-serif">${item.text}</span>`).join('')}
        </div>
    </div>
    <style>
        .animate-marquee { animation: marquee 25s linear infinite; }
        .animate-marquee2 { animation: marquee2 25s linear infinite; }
        @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-100%); } }
        @keyframes marquee2 { 0% { transform: translateX(100%); } 100% { transform: translateX(0%); } }
    </style>
</section>`
    }

    // 4. Key Metrics
    if (layout === 'Key Metrics') {
        return `<!-- TRUST: Key Metrics -->
<section class="py-12 bg-white">
    <div class="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-${(stats || []).length} gap-8 text-center divide-x divide-gray-100">
        ${(stats || []).map(stat => `
        <div>
            <div class="text-4xl md:text-5xl font-bold mb-2" style="color: var(--primary);">${stat.value}</div>
            <div class="text-xs font-bold text-gray-500 uppercase tracking-wider">${stat.label}</div>
        </div>`).join('')}
    </div>
</section>`
    }

    // 5. Authority Badges
    if (layout === 'Authority Badges') {
        return `<!-- TRUST: Authority Badges -->
<section class="py-10 bg-slate-50 text-center">
    <div class="max-w-5xl mx-auto px-4 flex flex-wrap justify-center gap-12">
        ${(badges || []).map(badge => `
        <div class="flex flex-col items-center group">
            <div class="w-12 h-12 rounded-full border-2 flex items-center justify-center mb-3 transition-colors group-hover:bg-white" style="border-color: var(--primary); color: var(--primary);">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <span class="font-bold text-gray-900">${badge.title}</span>
            <span class="text-xs text-gray-500">${badge.subtext}</span>
        </div>`).join('')}
    </div>
</section>`
    }

    // 6. Compact Rating
    if (layout === 'Compact Rating') {
        return `<!-- TRUST: Compact Rating -->
<section class="py-6 bg-white border-b border-gray-100">
    <div class="flex justify-center items-center gap-4">
        <div class="text-3xl font-bold" style="color: var(--primary);">${rating}</div>
        <div class="flex flex-col">
            <div class="flex text-yellow-400 text-lg">★★★★★</div>
            <div class="text-xs text-gray-500 font-medium">Based on <strong>${totalReviews}</strong> ${platform}</div>
        </div>
    </div>
</section>`
    }

    // 7. Doctor Credentials
    if (layout === 'Doctor Credentials') {
        return `<!-- TRUST: Doctor Credentials -->
<section class="py-12 bg-white text-center">
    <div class="inline-block px-10 py-6 border border-gray-200 rounded-xl shadow-sm">
        <h4 class="text-xl mb-2" style="font-family: 'Playfair Display', serif; color: var(--primary);">${name}</h4>
        <div class="flex flex-wrap justify-center gap-4 text-sm text-gray-600 font-medium uppercase tracking-wide">
            <span>${credential1}</span>
            <span class="text-gray-300">•</span>
            <span>${credential2}</span>
        </div>
    </div>
</section>`
    }

    // 8. Press Mentions
    if (layout === 'Press Mentions') {
        return `<!-- TRUST: Press Mentions -->
<section class="py-16 bg-slate-50">
    <div class="max-w-5xl mx-auto px-4 grid md:grid-cols-${(quotes || []).length} gap-12">
        ${(quotes || []).map(quote => `
        <div class="text-center">
            <p class="text-lg italic text-slate-700 mb-4 leading-relaxed">"${quote.text}"</p>
            <p class="text-xs font-bold text-slate-400 uppercase tracking-widest">— ${quote.source}</p>
        </div>`).join('')}
    </div>
</section>`
    }

    // 9. Years of Excellence
    if (layout === 'Years of Excellence') {
        return `<!-- TRUST: Years of Excellence -->
<section class="py-10 text-white" style="background-color: var(--primary);">
    <div class="max-w-4xl mx-auto px-4 flex items-center justify-center gap-6">
        <div class="text-5xl font-bold">${years}</div>
        <div class="h-10 w-px bg-white/20"></div>
        <div>
            <div class="text-lg font-semibold tracking-wide">${label}</div>
            <div class="text-sm opacity-60">${since}</div>
        </div>
    </div>
</section>`
    }

    // 10. Medical Partners
    if (layout === 'Medical Partners') {
        return `<!-- TRUST: Medical Partners -->
<section class="py-12 bg-white text-center">
    <h4 class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">${heading}</h4>
    <div class="flex flex-wrap justify-center gap-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
        ${(partners || []).map(p => `
        <span class="text-xl font-bold text-slate-700">${p.name}</span>`).join('')}
    </div>
</section>`
    }

    return ''
}

export default TrustPrimerSection

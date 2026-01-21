// ===================================================================
// CONVERSION SECTION
// Visual Preview (React) + Code Generation (HTML)
// ===================================================================

import React from 'react'
import { getEffectiveImage } from '../../utils/mediaUtils'

// Keep existing React component (simplified)
const ConversionSection = ({ data, layout, theme }) => {
    const { primaryColor, accentColor } = theme
    const { heading, subtext, ctaText } = data

    if (layout === 'Best for Booking') {
        const imageSrc = getEffectiveImage(data.imageUrl, data.imagePrompt || 'Reception', theme, { w: 600, h: 400 })
        return (
            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff' }}>
                <div style={{ flex: 1, padding: '4rem 2rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>{heading}</h2>
                    <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#4b5563' }}>{subtext}</p>
                    <button style={{ backgroundColor: primaryColor || '#1d4ed8', color: '#fff', padding: '1rem 2.5rem', border: 'none', borderRadius: '4px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer' }}>
                        {ctaText}
                    </button>
                </div>
                <div style={{ flex: 1, height: '400px', overflow: 'hidden' }}>
                    <img src={imageSrc} alt={data.imagePrompt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
            </div>
        )
    }

    // High Urgency FOMO (default)
    return (
        <div style={{ padding: '8rem 2rem', backgroundColor: primaryColor || '#1d4ed8', color: '#fff', textAlign: 'center' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)' }}>{heading}</h2>
            <p style={{ fontSize: '1.25rem', marginBottom: '3rem' }}>{subtext}</p>
            <button style={{ backgroundColor: accentColor || '#fff', color: primaryColor || '#1d4ed8', padding: '1.25rem 3rem', border: 'none', borderRadius: '4px', fontSize: '1.2rem', fontWeight: 'bold', cursor: 'pointer' }}>
                {ctaText}
            </button>
        </div>
    )
}

// ============================================================
// HTML GENERATOR (Code View)
// ============================================================

export const generateConversionHTML = (layout, data, theme) => {
    const { heading, subtext, ctaText } = data

    return `<!-- CONVERSION SECTION -->
<section class="py-20 text-center" style="background-color: var(--primary); color: white;">
    <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-5xl font-bold mb-6">${heading || 'Ready to Transform?'}</h2>
        <p class="text-xl mb-8 opacity-90">${subtext || 'Book your consultation today.'}</p>
        <button class="px-8 py-4 bg-white text-[var(--primary)] rounded-lg text-lg font-bold hover:opacity-90 transition">
            ${ctaText || 'Book Now'}
        </button>
    </div>
</section>`
}

export default ConversionSection

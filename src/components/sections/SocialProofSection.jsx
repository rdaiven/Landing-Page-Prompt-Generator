// ===================================================================
// SOCIAL PROOF SECTION
// Visual Preview (React) + Code Generation (HTML)
// ===================================================================

import React from 'react'

// Keep existing React component (simplified)
const SocialProofSection = ({ data, layout, theme }) => {
    const { primaryColor } = theme
    const { heading, items } = data

    return (
        <div style={{ backgroundColor: '#f9fafb', padding: '6rem 2rem' }}>
            <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem', fontFamily: 'var(--font-serif)' }}>
                {heading}
            </h2>

            {layout === 'Best Conversion' ? (
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
                    {(data.stats || []).map((stat, i) => (
                        <div key={i} style={{ textAlign: 'center', padding: '2rem', background: 'white', borderRadius: '16px' }}>
                            <div style={{ fontSize: '3rem', fontWeight: 800, color: primaryColor || '#000', marginBottom: '0.5rem' }}>{stat.value}</div>
                            <div style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>{stat.label}</div>
                            <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>{stat.small}</div>
                        </div>
                    ))}
                </div>
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
                    {(items || []).map((item, i) => (
                        <div key={i} style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem', fontStyle: 'italic' }}>"{item.quote}"</p>
                            <div style={{ fontWeight: '600' }}>{item.author}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

// ============================================================
// HTML GENERATOR (Code View)
// ============================================================

export const generateSocialProofHTML = (layout, data, theme) => {
    const { heading, items } = data

    return `<!-- SOCIAL PROOF SECTION -->
<section class="py-16 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-4xl font-bold mb-12 text-center" style="color: var(--primary);">
            ${heading || 'What Our Clients Say'}
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
            ${(items || []).map(item => `
            <div class="bg-white p-6 rounded-xl shadow-sm">
                <p class="text-gray-700 italic mb-4">"${item.quote || 'Amazing results!'}"</p>
                <div class="font-semibold">${item.author || 'Client'}</div>
            </div>`).join('')}
        </div>
    </div>
</section>`
}

export default SocialProofSection

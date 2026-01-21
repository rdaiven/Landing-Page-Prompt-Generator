// ===================================================================
// CLINIC DETAILS SECTION
// Visual Preview (React) + Code Generation (HTML)
// ===================================================================

import React from 'react'
import { getEffectiveImage } from '../../utils/mediaUtils'

// Keep existing React component (simplified)
const ClinicDetailsSection = ({ data, layout, theme }) => {
    if (layout === 'With Interior View') {
        const imageSrc = getEffectiveImage(data.imageUrl, data.imagePrompt || 'Interior Shot', theme, { w: 800, h: 600 })
        return (
            <div style={{ padding: '6rem 2rem', backgroundColor: '#f9fafb' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
                    <div style={{ height: '400px', borderRadius: '16px', overflow: 'hidden' }}>
                        <img src={imageSrc} alt={data.imagePrompt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', marginBottom: '1.5rem' }}>{data.location}</h2>
                        <p style={{ fontSize: '1.1rem', color: '#4b5563', marginBottom: '2rem' }}>{data.description}</p>
                        <p>📍 {data.address}</p>
                    </div>
                </div>
            </div>
        )
    }

    // Simple & Clean (default)
    return (
        <div style={{ padding: '6rem 2rem', backgroundColor: '#f9fafb' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    <div style={{ padding: '2rem', background: '#fff', borderRadius: '12px' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Location</h3>
                        <p>{data.location}</p>
                        <p style={{ marginTop: '0.5rem' }}>{data.address}</p>
                    </div>
                    <div style={{ padding: '2rem', background: '#fff', borderRadius: '12px' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Hours</h3>
                        <p>{data.hours}</p>
                    </div>
                    <div style={{ padding: '2rem', background: '#fff', borderRadius: '12px' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Contact</h3>
                        <button style={{ padding: '0.5rem 1rem', background: theme.primaryColor || '#000', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
                            Get in Touch
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

// ============================================================
// HTML GENERATOR (Code View)
// ============================================================

export const generateClinicDetailsHTML = (layout, data, theme) => {
    return `<!-- CLINIC DETAILS SECTION -->
<section class="py-16 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4">
        <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white p-8 rounded-xl">
                <h3 class="text-xl font-semibold mb-4">Location</h3>
                <p class="text-gray-700">${data.location || ''}</p>
                <p class="text-gray-600 mt-2">${data.address || ''}</p>
            </div>
            <div class="bg-white p-8 rounded-xl">
                <h3 class="text-xl font-semibold mb-4">Hours</h3>
                <p class="text-gray-700">${data.hours || 'Mon-Fri: 9am-6pm'}</p>
            </div>
            <div class="bg-white p-8 rounded-xl">
                <h3 class="text-xl font-semibold mb-4">Contact</h3>
                <button class="px-6 py-2 bg-[var(--primary)] text-white rounded-lg font-medium">
                    Get in Touch
                </button>
            </div>
        </div>
    </div>
</section>`
}

export default ClinicDetailsSection

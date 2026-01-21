// ===================================================================
// TREATMENT LOGIC SECTION
// Visual Preview (React) + Code Generation (HTML)
// ===================================================================

import React from 'react'
import { getEffectiveImage } from '../../utils/mediaUtils'
import * as Icons from 'lucide-react'

const DynamicIcon = ({ name, size = 24, className }) => {
    const IconComponent = Icons[name] || Icons.HelpCircle
    return <IconComponent size={size} className={className} />
}

// Keep existing React component unchanged
const TreatmentLogicSection = ({ data, layout, theme }) => {
    const { heading, description, feature1, feature2, feature3 } = data
    const features = [feature1, feature2, feature3].filter(Boolean)

    if (layout === 'Story First') {
        const imageSrc = getEffectiveImage(data.imageUrl, data.imagePrompt || 'Visual Diagram', theme, { w: 600, h: 500 })
        return (
            <div style={{ padding: '6rem 2rem', backgroundColor: '#ffff' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)' }}>{heading}</h2>
                        <p style={{ fontSize: '1.1rem', color: '#4b5563', marginBottom: '2rem', lineHeight: '1.6' }}>{description}</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {(data.benefits || []).map((b, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: theme.accentColor || '#3b82f6', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✓</div>
                                    <span>{b.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div style={{ height: '500px', borderRadius: '24px', overflow: 'hidden' }}>
                        <img src={imageSrc} alt={data.imagePrompt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                </div>
            </div>
        )
    }

    // Minimalist layout (default)
    return (
        <div style={{ padding: '6rem 2rem', backgroundColor: '#f3f4f6' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)' }}>{heading}</h2>
                <p style={{ fontSize: '1.1rem', color: '#4b5563', marginBottom: '4rem', lineHeight: '1.6' }}>{description}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '600px', margin: '0 auto' }}>
                    {features.map((f, i) => (
                        <div key={i} style={{ padding: '1.5rem', backgroundColor: '#fff', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ color: theme.primaryColor || '#000', fontWeight: 'bold' }}>0{i + 1}</div>
                            <div style={{ fontWeight: '500', fontSize: '1.1rem' }}>{f}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

// ============================================================
// HTML GENERATOR (Code View)
// ============================================================

export const generateTreatmentLogicHTML = (layout, data, theme) => {
    const { heading, description, feature1, feature2, feature3 } = data
    const features = [feature1, feature2, feature3].filter(Boolean)

    return `<!-- TREATMENT LOGIC SECTION -->
<section class="py-16 bg-white">
    <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold mb-6" style="color: var(--primary);">
            ${heading || 'Why Choose Us?'}
        </h2>
        <p class="text-xl text-gray-600 mb-12">
            ${description || 'Our unique approach ensures safety and efficacy.'}
        </p>
        <div class="grid md:grid-cols-3 gap-6">
            ${features.map(f => `
            <div class="p-4 bg-gray-50 rounded-lg">
                <span class="text-lg font-semibold" style="color: var(--primary);">${f}</span>
            </div>`).join('')}
        </div>
    </div>
</section>`
}

export default TreatmentLogicSection

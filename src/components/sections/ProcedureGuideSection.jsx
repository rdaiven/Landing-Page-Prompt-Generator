// ===================================================================
// PROCEDURE GUIDE SECTION
// Visual Preview (React) + Code Generation (HTML)
// ===================================================================

import React from 'react'

// Keep existing React component unchanged (simplified for token efficiency)
const ProcedureGuideSection = ({ data, layout, theme }) => {
    const { items, heading } = data

    return (
        <div style={{ padding: '6rem 2rem', backgroundColor: '#fff' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem', fontFamily: 'var(--font-serif)' }}>
                    {heading || 'What to Expect'}
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {(items || []).map((item, i) => (
                        <div key={i} style={{ textAlign: 'center' }}>
                            <div style={{
                                width: '60px', height: '60px', borderRadius: '50%',
                                border: `2px solid ${theme.primaryColor || '#000'}`,
                                color: theme.primaryColor || '#000',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontWeight: 'bold', fontSize: '1.25rem',
                                margin: '0 auto 1.5rem auto'
                            }}>
                                {i + 1}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', fontFamily: 'var(--font-serif)' }}>{item.title}</h3>
                            <p style={{ color: '#6b7280' }}>{item.description}</p>
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

export const generateProcedureGuideHTML = (layout, data, theme) => {
    const { heading, items } = data

    return `<!-- PROCEDURE GUIDE SECTION -->
<section class="py-16 bg-white">
    <div class="max-w-5xl mx-auto px-4">
        <h2 class="text-4xl font-bold mb-12 text-center" style="color: var(--primary);">
            ${heading || 'What to Expect'}
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
            ${(items || []).map((item, i) => `
            <div class="text-center">
                <div class="w-16 h-16 rounded-full border-2 border-[var(--primary)] text-[var(--primary)] flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    ${i + 1}
                </div>
                <h3 class="text-xl font-semibold mb-2">${item.title || `Step ${i + 1}`}</h3>
                <p class="text-gray-600">${item.description || ''}</p>
            </div>`).join('')}
        </div>
    </div>
</section>`
}

export default ProcedureGuideSection

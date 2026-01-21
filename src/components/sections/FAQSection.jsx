// ===================================================================
// FAQ SECTION  
// Visual Preview (React) + Code Generation (HTML)
// ===================================================================

import React, { useState } from 'react'

// ============================================================
// REACT COMPONENT (Visual Preview)
// ============================================================

const FAQSection = ({ data, layout, theme }) => {
    const { items, heading } = data
    const [openIndex, setOpenIndex] = useState(0)

    return (
        <div style={{ padding: '6rem 2rem', backgroundColor: '#fff' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem', fontFamily: 'var(--font-serif)' }}>
                    {heading || 'Common Questions'}
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {(items || []).map((item, i) => (
                        <div key={i} style={{
                            border: '1px solid #e5e7eb',
                            borderRadius: '8px',
                            overflow: 'hidden'
                        }}>
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                style={{
                                    width: '100%',
                                    padding: '1.25rem',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    background: openIndex === i ? '#f9fafb' : '#fff',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontSize: '1.1rem',
                                    fontWeight: 600,
                                    color: '#1f2937',
                                    textAlign: 'left'
                                }}
                            >
                                {item.question}
                                <span>{openIndex === i ? '−' : '+'}</span>
                            </button>
                            {openIndex === i && (
                                <div style={{ padding: '1.25rem', borderTop: '1px solid #e5e7eb', color: '#4b5563', lineHeight: 1.6 }}>
                                    {item.answer}
                                </div>
                            )}
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

/**
 * Generates static HTML for the FAQ section
 */
export const generateFAQHTML = (layout, data, theme) => {
    const { heading, items } = data

    return `<!-- FAQ SECTION - ${layout} -->
<section class="py-16 bg-white">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-bold mb-12 text-center" style="color: var(--primary);">
            ${heading || 'Frequently Asked Questions'}
        </h2>
        <div class="space-y-4">
            ${(items || []).map(item => `
            <details class="group border border-gray-200 rounded-lg">
                <summary class="flex justify-between items-center p-6 cursor-pointer font-semibold text-lg">
                    <span>${item.question || 'Question'}</span>
                    <svg class="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </summary>
                <div class="px-6 pb-6 text-gray-600">
                    ${item.answer || 'Answer'}
                </div>
            </details>`).join('')}
        </div>
    </div>
</section>`
}

export default FAQSection

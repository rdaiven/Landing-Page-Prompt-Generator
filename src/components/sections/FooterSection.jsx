// ===================================================================
// FOOTER SECTION
// Visual Preview (React) + Code Generation (HTML)
// ===================================================================

import React from 'react'

// Keep existing React component (simplified)
const FooterSection = ({ data, layout, theme }) => {
    const { copyright, links } = data

    if (layout === 'Detailed & Informative') {
        return (
            <div style={{ padding: '4rem 2rem', backgroundColor: '#111827', color: '#9ca3af', fontSize: '0.9rem' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                    <div>
                        <div style={{ color: '#fff', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>{theme.brandName || 'Brand'}</div>
                        <p>{data.address}</p>
                        <div style={{ marginTop: '1rem' }}>{copyright}</div>
                    </div>
                    <div>
                        <h4 style={{ color: '#fff', fontWeight: '600', marginBottom: '1rem' }}>{data.column1}</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li>About Us</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ color: '#fff', fontWeight: '600', marginBottom: '1rem' }}>{data.column2}</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    // Minimal (default)
    return (
        <div style={{ padding: '3rem 2rem', backgroundColor: '#111827', color: '#9ca3af' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                <div>{copyright}</div>
                <div>{links}</div>
            </div>
        </div>
    )
}

// ============================================================
// HTML GENERATOR (Code View)
// ============================================================

export const generateFooterHTML = (layout, data, theme) => {
    const { copyright, links } = data

    return `<!-- FOOTER SECTION -->
<footer class="py-12 bg-gray-900 text-gray-400">
    <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between items-center">
            <div>${copyright || '© 2024 All rights reserved.'}</div>
            <div class="flex gap-6">
                ${(links || 'Privacy, Terms').split(',').map(link => `<a href="#" class="hover:text-white">${link.trim()}</a>`).join('')}
            </div>
        </div>
    </div>
</footer>`
}

export default FooterSection

import React from 'react'

const HeaderSection = ({ data, layout, theme }) => {
    const { primaryColor } = theme;
    const { navLinks, ctaText } = data;
    const links = navLinks ? navLinks.split(',').map(l => l.trim()) : [];

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1.5rem 2rem',
            backgroundColor: '#fff',
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            position: layout === 'Sticky' ? 'sticky' : 'relative',
            top: 0,
            zIndex: 100
        }}>
            <div style={{ fontWeight: 'bold', fontSize: '1.5rem', fontFamily: 'var(--font-serif)' }}>Brand</div>

            <nav style={{ display: 'flex', gap: '2rem' }}>
                {links.map((link, i) => (
                    <span key={i} style={{ cursor: 'pointer', color: '#4b5563' }}>{link}</span>
                ))}
            </nav>

            <button style={{
                backgroundColor: primaryColor || '#000',
                color: '#fff',
                padding: '0.75rem 1.5rem',
                border: 'none',
                borderRadius: '4px',
                fontWeight: '500'
            }}>
                {ctaText}
            </button>
        </div>
    )
}

export default HeaderSection

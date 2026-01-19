import React from 'react'
import { getContrastColor } from '../../utils/colors'

const HeaderSection = ({ data, layout, theme }) => {
    const { primaryColor, brandName } = theme;
    const { navLinks, ctaText } = data;
    const links = navLinks ? navLinks.split(',').map(l => l.trim()) : [];

    const buttonTextColor = getContrastColor(primaryColor);

    if (layout === 'Centered Logo') {
        return (
            <div style={{
                padding: '2rem',
                backgroundColor: '#fff',
                borderBottom: '1px solid #e5e7eb',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2rem',
                position: 'relative',
                zIndex: 100
            }}>
                <div style={{ fontWeight: '800', fontSize: '2rem', fontFamily: 'var(--font-serif)', color: '#0f172a', letterSpacing: '-0.02em' }}>{brandName || 'Brand'}</div>
                <nav style={{ display: 'flex', gap: '2.5rem' }}>
                    {links.map((link, i) => (
                        <a key={i} href="#" onClick={e => e.preventDefault()} style={{
                            cursor: 'pointer',
                            color: '#4b5563',
                            fontWeight: 600,
                            fontSize: '0.95rem',
                            textDecoration: 'none',
                            transition: 'color 0.2s',
                        }}
                            onMouseEnter={(e) => e.target.style.color = primaryColor || '#000'}
                            onMouseLeave={(e) => e.target.style.color = '#4b5563'}
                        >
                            {link}
                        </a>
                    ))}
                </nav>
            </div>
        )
    }

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1.25rem 3rem',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(8px)',
            borderBottom: '1px solid #f1f5f9',
            position: layout === 'Sticky' ? 'sticky' : 'relative',
            top: 0,
            zIndex: 100
        }}>
            <div style={{ fontWeight: '800', fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: '#0f172a', letterSpacing: '-0.02em' }}>
                {brandName || 'Brand'}
            </div>

            <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '2rem', marginRight: '1rem' }}>
                    {links.map((link, i) => (
                        <a key={i} href="#" onClick={e => e.preventDefault()} style={{
                            cursor: 'pointer',
                            color: '#475569',
                            fontWeight: 500,
                            fontSize: '0.95rem',
                            textDecoration: 'none',
                            transition: 'color 0.2s'
                        }}
                            onMouseEnter={(e) => e.target.style.color = primaryColor || '#000'}
                            onMouseLeave={(e) => e.target.style.color = '#475569'}
                        >
                            {link}
                        </a>
                    ))}
                </div>

                <button style={{
                    backgroundColor: primaryColor || '#000',
                    color: buttonTextColor,
                    padding: '0.75rem 1.75rem',
                    border: 'none',
                    borderRadius: '50px',
                    fontWeight: '600',
                    fontSize: '0.95rem',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    cursor: 'pointer',
                    transition: 'opacity 0.2s'
                }}
                    onMouseEnter={(e) => e.target.style.opacity = '0.9'}
                    onMouseLeave={(e) => e.target.style.opacity = '1'}
                >
                    {ctaText}
                </button>
            </nav>
        </div>
    )
}

export default HeaderSection

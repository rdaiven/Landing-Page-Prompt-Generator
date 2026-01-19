import React from 'react'

const TrustPrimerSection = ({ data, layout, theme }) => {
    const { neutralColor, primaryColor } = theme;
    const { items } = data;

    return (
        <div style={{ padding: '3rem 2rem', borderBottom: `1px solid ${neutralColor || '#e5e7eb'}`, backgroundColor: '#fff', borderTop: `1px solid ${neutralColor || '#e5e7eb'}` }}>
            {layout === 'Logo Grid' ? (
                <div style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600 }}>
                        {data.heading}
                    </p>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '4rem',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        opacity: 0.8
                    }}>
                        {(items || []).map((item, i) => (
                            <div key={i} style={{
                                fontSize: '1.25rem',
                                fontWeight: 'bold',
                                color: '#cbd5e1',
                                fontFamily: 'var(--font-serif)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                filter: 'grayscale(100%)',
                                transition: 'all 0.3s'
                            }}
                                onMouseEnter={(e) => { e.currentTarget.style.filter = 'grayscale(0%)'; e.currentTarget.style.color = primaryColor || '#000'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.filter = 'grayscale(100%)'; e.currentTarget.style.color = '#cbd5e1'; }}
                            >
                                {item.text || item.alt}
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '2rem',
                    flexWrap: 'wrap',
                    color: '#64748b',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                }}>
                    {(items || []).map((item, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: neutralColor || '#f8fafc', padding: '0.5rem 1rem', borderRadius: '4px' }}>
                            <span style={{ color: primaryColor || '#000' }}>★</span>
                            {item.text}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default TrustPrimerSection

import React from 'react'

const TrustPrimerSection = ({ data, layout, theme }) => {
    const { neutralColor } = theme;
    const { items } = data;

    return (
        <div style={{ padding: '2rem', borderBottom: `1px solid ${neutralColor || '#e5e7eb'}`, backgroundColor: '#fff' }}>
            {layout === 'Logo Grid' ? (
                <div style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: '0.875rem', color: '#9ca3af', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        {data.heading}
                    </p>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '4rem',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        opacity: 0.7
                    }}>
                        {(items || []).map((item, i) => (
                            <div key={i} style={{
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                color: '#d1d5db',
                                fontFamily: 'var(--font-serif)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}>
                                {item.text || item.alt}
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '3rem',
                    flexWrap: 'wrap',
                    color: '#4b5563',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                }}>
                    {(items || []).map((item, i) => (
                        <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            {item.text}
                        </span>
                    ))}
                </div>
            )}
        </div>
    )
}

export default TrustPrimerSection

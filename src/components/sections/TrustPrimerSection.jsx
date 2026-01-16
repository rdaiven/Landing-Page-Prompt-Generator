import React from 'react'

const TrustPrimerSection = ({ data, layout, theme }) => {
    const { neutralColor } = theme;
    const { items } = data;

    return (
        <div style={{ padding: '2rem', borderBottom: `1px solid ${neutralColor || '#e5e7eb'}`, backgroundColor: '#fff' }}>
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
        </div>
    )
}

export default TrustPrimerSection

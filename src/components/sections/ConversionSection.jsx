import React from 'react'

const ConversionSection = ({ data, layout, theme }) => {
    const { primaryColor, accentColor } = theme;
    const { heading, subtext, ctaText } = data;

    return (
        <div style={{
            padding: '8rem 2rem',
            backgroundColor: primaryColor || '#1d4ed8',
            color: '#fff',
            textAlign: 'center'
        }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)' }}>{heading}</h2>
            <p style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>{subtext}</p>
            <button style={{
                backgroundColor: accentColor || '#fff',
                color: primaryColor || '#1d4ed8',
                padding: '1.25rem 3rem',
                border: 'none',
                borderRadius: '4px',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.2)'
            }}>
                {ctaText}
            </button>
        </div>
    )
}

export default ConversionSection

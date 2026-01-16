import React from 'react'

const FooterSection = ({ data, layout, theme }) => {
    const { copyright, links } = data;

    return (
        <div style={{ padding: '3rem 2rem', backgroundColor: '#111827', color: '#9ca3af', fontSize: '0.9rem' }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem'
            }}>
                <div>{copyright}</div>
                <div>{links}</div>
            </div>
        </div>
    )
}

export default FooterSection

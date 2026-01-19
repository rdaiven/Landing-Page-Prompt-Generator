import React from 'react'

const FooterSection = ({ data, layout, theme }) => {
    const { copyright, links } = data;

    if (layout === 'Expanded') {
        return (
            <div style={{ padding: '4rem 2rem', backgroundColor: '#111827', color: '#9ca3af', fontSize: '0.9rem' }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '2rem'
                }}>
                    <div>
                        <div style={{ color: '#fff', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>{theme.brandName || 'Brand'}</div>
                        <p style={{ lineHeight: 1.6 }}>{data.address}</p>
                        <div style={{ marginTop: '1rem' }}>{copyright}</div>
                    </div>
                    <div>
                        <h4 style={{ color: '#fff', fontWeight: '600', marginBottom: '1rem' }}>{data.column1}</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Press</li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ color: '#fff', fontWeight: '600', marginBottom: '1rem' }}>{data.column2}</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li>Blog</li>
                            <li>Help Center</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

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

import React from 'react'

const ProblemConcernSection = ({ data, layout, theme }) => {
    const { heading, items } = data;

    return (
        <div style={{ padding: '6rem 2rem', backgroundColor: '#fff' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', fontFamily: 'var(--font-serif)', textAlign: 'center' }}>{heading}</h2>

                {layout === 'Feature Grid' ? (
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem'
                    }}>
                        {(items || []).map((item, i) => (
                            <div key={i} style={{
                                padding: '2rem',
                                border: '1px solid #e5e7eb',
                                borderRadius: '12px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem',
                                transition: 'all 0.2s',
                                cursor: 'default'
                            }}>
                                <span style={{ fontSize: '2rem' }}>{item.icon}</span>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{item.title}</h3>
                                <p style={{ color: '#6b7280', lineHeight: 1.5 }}>{item.description}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                        {(items || []).map((item, i) => (
                            <div key={i} style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                fontSize: '1.2rem',
                                color: '#374151',
                                background: '#f9fafb',
                                padding: '1rem 1.5rem',
                                borderRadius: '9999px'
                            }}>
                                <span style={{ color: '#ef4444' }}>✕</span>
                                {item.text}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProblemConcernSection

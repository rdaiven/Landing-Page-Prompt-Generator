import React from 'react'

const ProcedureGuideSection = ({ data, layout, theme }) => {
    const { items, heading } = data;

    return (
        <div style={{ padding: '6rem 2rem', backgroundColor: '#fff' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                {layout === 'Timeline' && (
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem', fontFamily: 'var(--font-serif)' }}>
                        {heading}
                    </h2>
                )}

                {layout === 'Timeline' ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', position: 'relative' }}>
                        {/* Vertical Line */}
                        <div style={{ position: 'absolute', left: '24px', top: 0, bottom: 0, width: '2px', background: '#e5e7eb', zIndex: 0 }}></div>

                        {(items || []).map((item, i) => (
                            <div key={i} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
                                <div style={{
                                    width: '50px', height: '50px',
                                    borderRadius: '50%',
                                    background: theme.primaryColor || '#000',
                                    color: 'white',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontWeight: 'bold',
                                    flexShrink: 0,
                                    border: '4px solid #fff'
                                }}>
                                    {i + 1}
                                </div>
                                <div style={{ flex: 1, paddingTop: '0.5rem' }}>
                                    <span style={{ fontSize: '0.875rem', fontWeight: 600, color: theme.accentColor || '#3b82f6', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                        {item.time}
                                    </span>
                                    <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', margin: '0.5rem 0' }}>{item.title}</h3>
                                    <p style={{ color: '#6b7280', fontSize: '1.1rem' }}>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    // 3-Step Default
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        {(items || []).map((item, i) => (
                            <div key={i} style={{ textAlign: 'center' }}>
                                <div style={{
                                    width: '60px', height: '60px',
                                    borderRadius: '50%',
                                    border: `2px solid ${theme.primaryColor || '#000'}`,
                                    color: theme.primaryColor || '#000',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontWeight: 'bold', fontSize: '1.25rem',
                                    margin: '0 auto 1.5rem auto'
                                }}>
                                    {i + 1}
                                </div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', fontFamily: 'var(--font-serif)' }}>{item.title}</h3>
                                <p style={{ color: '#6b7280' }}>{item.description}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProcedureGuideSection

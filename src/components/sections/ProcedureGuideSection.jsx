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
                ) : layout === 'Vertical Tabs' ? (
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontFamily: 'var(--font-serif)' }}>{heading}</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {(data.steps || []).map((step, i) => (
                                    <div key={i} style={{
                                        padding: '1rem 1.5rem',
                                        background: i === 0 ? (theme.surfaceAlt || '#f3f4f6') : 'transparent',
                                        borderLeft: i === 0 ? `4px solid ${theme.primaryColor}` : '4px solid transparent',
                                        fontWeight: 600,
                                        cursor: 'pointer'
                                    }}>
                                        {step.step}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div style={{ background: '#f9fafb', padding: '3rem', borderRadius: '24px', minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{(data.steps?.[0]?.step) || 'Step 1'}</h3>
                            <p style={{ color: '#6b7280', marginBottom: '2rem' }}>{(data.steps?.[0]?.detail) || 'Details...'}</p>
                            <div style={{ height: '200px', background: '#e5e7eb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af' }}>
                                {(data.steps?.[0]?.imagePrompt) || 'Image'}
                            </div>
                        </div>
                    </div>
                ) : layout === 'Masonry Steps' ? (
                    <div>
                        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem', fontFamily: 'var(--font-serif)' }}>{heading}</h2>
                        <div style={{ columns: '2 250px', gap: '1.5rem' }}>
                            {(data.cards || []).map((card, i) => (
                                <div key={i} style={{
                                    breakInside: 'avoid',
                                    marginBottom: '1.5rem',
                                    background: '#f9fafb',
                                    padding: '2rem',
                                    borderRadius: '16px',
                                    border: '1px solid #f3f4f6'
                                }}>
                                    <div style={{
                                        display: 'inline-block', padding: '0.25rem 0.75rem',
                                        background: theme.primaryColor || '#000', color: '#fff',
                                        borderRadius: '99px', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '1rem'
                                    }}>
                                        0{i + 1}
                                    </div>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{card.title}</h3>
                                    <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>{card.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : layout === 'Carousel Steps' ? (
                    <div>
                        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', fontFamily: 'var(--font-serif)' }}>{heading}</h2>
                        <div style={{ display: 'flex', overflowX: 'auto', gap: '1.5rem', paddingBottom: '1rem', scrollSnapType: 'x mandatory' }}>
                            {(data.slides || []).map((slide, i) => (
                                <div key={i} style={{
                                    minWidth: '280px',
                                    scrollSnapAlign: 'center',
                                    background: '#fff',
                                    border: '1px solid #e5e7eb',
                                    borderRadius: '16px',
                                    padding: '2rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'
                                }}>
                                    <div>
                                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{slide.title}</h3>
                                        <p style={{ color: '#6b7280' }}>{slide.desc}</p>
                                    </div>
                                    <div style={{ marginTop: '2rem', height: '4px', background: '#f3f4f6', borderRadius: '2px', overflow: 'hidden' }}>
                                        <div style={{ width: '50%', height: '100%', background: theme.primaryColor || '#000' }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
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

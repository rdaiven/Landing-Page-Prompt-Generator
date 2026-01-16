import React from 'react'

const ClinicDetailsSection = ({ data, layout, theme }) => {
    return (
        <div style={{ padding: '6rem 2rem', backgroundColor: '#f9fafb' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                {layout === 'Gallery Split' ? (
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
                        <div style={{
                            height: '400px',
                            borderRadius: '16px',
                            background: '#e5e7eb',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            overflow: 'hidden'
                        }}>
                            <span style={{ color: '#9ca3af' }}>{data.imagePrompt || 'Interior Shot'}</span>
                        </div>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', marginBottom: '1.5rem' }}>{data.location}</h2>
                            <p style={{ fontSize: '1.1rem', color: '#4b5563', marginBottom: '2rem', lineHeight: 1.6 }}>{data.description}</p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <span style={{ fontSize: '1.25rem' }}>📍</span>
                                    <p>{data.address}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    // Grid Default
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        <div style={{ padding: '2rem', background: '#fff', borderRadius: '12px' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Location</h3>
                            <p className="text-muted">{data.location}</p>
                            <p style={{ marginTop: '0.5rem' }}>{data.address}</p>
                        </div>
                        <div style={{ padding: '2rem', background: '#fff', borderRadius: '12px' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Hours</h3>
                            <p>{data.hours}</p>
                        </div>
                        <div style={{ padding: '2rem', background: '#fff', borderRadius: '12px' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Contact</h3>
                            <button style={{
                                padding: '0.5rem 1rem',
                                background: theme.primaryColor || '#000',
                                color: 'white',
                                border: 'none',
                                borderRadius: '6px',
                                cursor: 'pointer'
                            }}>
                                Get in Touch
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ClinicDetailsSection

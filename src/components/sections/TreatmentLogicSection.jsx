import React from 'react'

const TreatmentLogicSection = ({ data, layout, theme }) => {
    const { heading, description, feature1, feature2, feature3 } = data;
    const features = [feature1, feature2, feature3].filter(Boolean);

    if (layout === 'Detailed Split') {
        return (
            <div style={{ padding: '6rem 2rem', backgroundColor: '#ffff' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <div className="content">
                        <span style={{ color: theme.accentColor || '#3b82f6', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', display: 'block' }}>
                            {data.subheading}
                        </span>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)', lineHeight: 1.2 }}>{heading}</h2>
                        <p style={{ fontSize: '1.1rem', color: '#4b5563', marginBottom: '2rem', lineHeight: '1.6' }}>{description}</p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {(data.benefits || []).map((b, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: theme.accentColor || '#3b82f6', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem' }}>✓</div>
                                    <span style={{ fontWeight: 500 }}>{b.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="visual" style={{
                        height: '500px',
                        background: '#f3f4f6',
                        borderRadius: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#9ca3af',
                        fontSize: '1.5rem',
                        textAlign: 'center',
                        padding: '2rem'
                    }}>
                        {data.imagePrompt || 'Visual Diagram'}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div style={{ padding: '6rem 2rem', backgroundColor: '#f3f4f6' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)' }}>{heading}</h2>
                <p style={{ fontSize: '1.1rem', color: '#4b5563', marginBottom: '4rem', lineHeight: '1.6' }}>{description}</p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                    {features.map((f, i) => (
                        <div key={i} style={{ padding: '2rem', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                            <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{f}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TreatmentLogicSection

import React from 'react'

const TreatmentLogicSection = ({ data, layout, theme }) => {
    const { heading, description, feature1, feature2, feature3 } = data;
    const features = [feature1, feature2, feature3].filter(Boolean);

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

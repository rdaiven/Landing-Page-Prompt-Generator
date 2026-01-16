import React from 'react'

const ProblemConcernSection = ({ data, layout, theme }) => {
    const { heading, items } = data;

    return (
        <div style={{ padding: '6rem 2rem', backgroundColor: '#fff', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '3rem', fontFamily: 'var(--font-serif)' }}>{heading}</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                {(items || []).map((item, i) => (
                    <div key={i} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        fontSize: '1.2rem',
                        color: '#374151'
                    }}>
                        <span style={{ color: '#ef4444' }}>✕</span>
                        {item.text}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProblemConcernSection

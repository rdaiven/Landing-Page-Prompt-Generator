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
                ) : layout === 'Cards Grid' ? (
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2rem'
                    }}>
                        {(items || []).map((item, i) => (
                            <div key={i} style={{
                                background: '#fff',
                                padding: '2.5rem',
                                borderRadius: '12px',
                                borderTop: `6px solid ${theme.primaryColor || '#3b82f6'}`,
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem',
                                transition: 'transform 0.2s',
                                cursor: 'default'
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1e293b' }}>{item.title}</h3>
                                <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: 1.6 }}>{item.text}</p>
                            </div>
                        ))}
                    </div>
                ) : layout === 'FloatUI - Grid' ? (
                    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                        <div className="max-w-2xl mx-auto text-center mb-10">
                            <h2 className="text-3xl font-bold sm:text-4xl" style={{ fontFamily: 'var(--font-serif)' }}>{heading}</h2>
                            <p className="mt-3 text-gray-600 text-lg">{data.subheading}</p>
                        </div>
                        <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                            {(items || []).map((item, i) => (
                                <li key={i} className="flex gap-x-4">
                                    <div className="flex-none w-12 h-12 rounded-lg flex items-center justify-center text-2xl" style={{ backgroundColor: `${theme.primaryColor}20`, color: theme.primaryColor }}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg text-gray-800 font-semibold">
                                            {item.title}
                                        </h4>
                                        <p className="mt-3 text-gray-600">
                                            {item.description}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
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

import React, { useState } from 'react'

const FAQSection = ({ data, layout, theme }) => {
    const { items, heading } = data;
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div style={{ padding: '6rem 2rem', backgroundColor: '#fff' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem', fontFamily: 'var(--font-serif)' }}>
                    {heading || 'Common Questions'}
                </h2>

                {layout === 'Accordion' ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {(items || []).map((item, i) => (
                            <div key={i} style={{
                                border: '1px solid #e5e7eb',
                                borderRadius: '8px',
                                overflow: 'hidden'
                            }}>
                                <button
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    style={{
                                        width: '100%',
                                        padding: '1.25rem',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        background: openIndex === i ? '#f9fafb' : '#fff',
                                        border: 'none',
                                        cursor: 'pointer',
                                        fontSize: '1.1rem',
                                        fontWeight: 600,
                                        color: '#1f2937',
                                        textAlign: 'left'
                                    }}
                                >
                                    {item.question}
                                    <span>{openIndex === i ? '−' : '+'}</span>
                                </button>
                                {openIndex === i && (
                                    <div style={{ padding: '1.25rem', borderTop: '1px solid #e5e7eb', color: '#4b5563', lineHeight: 1.6 }}>
                                        {item.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ) : layout === 'Side-by-Side Category' ? (
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem' }}>
                        {(data.categories || []).map((cat, i) => (
                            <React.Fragment key={i}>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: theme.primaryColor }}>{cat.catName}</h3>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                    {(cat.questions || '').split(',').map((q, j) => (
                                        <div key={j}>
                                            <h4 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>{q.trim()}</h4>
                                            <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>Detailed answer would go here...</p>
                                        </div>
                                    ))}
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                ) : layout === 'Grid Cards' ? (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {(data.cards || []).map((card, i) => (
                            <div key={i} style={{ padding: '2rem', background: '#f9fafb', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1rem' }}>{card.q}</h3>
                                <p style={{ color: '#4b5563', lineHeight: 1.6 }}>{card.a}</p>
                            </div>
                        ))}
                    </div>

                ) : layout === 'Search + List' ? (
                    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                        <div style={{ marginBottom: '3rem', position: 'relative' }}>
                            <input
                                type="text"
                                placeholder={data.placeholder}
                                style={{
                                    width: '100%',
                                    padding: '1rem 1.5rem',
                                    borderRadius: '50px',
                                    border: '1px solid #e5e7eb',
                                    fontSize: '1rem',
                                    paddingLeft: '3rem',
                                    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
                                }}
                            />
                            <span style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }}>🔍</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {(data.topQuestions || []).map((q, i) => (
                                <div key={i} style={{ padding: '1.5rem', borderBottom: '1px solid #f3f4f6' }}>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: 500, color: theme.primaryColor, marginBottom: '0.5rem', cursor: 'pointer' }}>{q.q}</h3>
                                    <p style={{ color: '#6b7280' }}>{q.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    // Objection-Only Left/Right
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                        {(items || []).map((item, i) => (
                            <div key={i}>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: 600 }}>{item.question}</h3>
                                <p style={{ color: '#6b7280', lineHeight: 1.6 }}>{item.answer}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default FAQSection

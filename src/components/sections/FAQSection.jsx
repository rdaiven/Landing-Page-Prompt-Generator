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

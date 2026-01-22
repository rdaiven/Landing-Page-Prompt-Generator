// ===================================================================
// FAQ SECTION  
// Visual Preview (React) + Code Generation (HTML)
// ===================================================================

import React, { useState } from 'react'
import * as Icons from 'lucide-react'
import ReactDOMServer from 'react-dom/server';

// ============================================================
// REACT COMPONENT (Visual Preview)
// ============================================================

const FAQSection = ({ data, layout, theme }) => {
    const { heading, items } = data

    // Layout Implementation Map
    const layouts = {
        'Simple Accordion': () => (
            <div style={{ padding: '6rem 2rem', backgroundColor: '#fff' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem', fontFamily: 'var(--font-serif)' }}>
                        {heading || 'Common Questions'}
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {(items || []).map((item, i) => (
                            <details key={i} className="group" style={{ border: '1px solid #e5e7eb', borderRadius: '8px', overflow: 'hidden' }}>
                                <summary style={{ padding: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontWeight: 600, listStyle: 'none' }}>
                                    {item.question}
                                    <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>+</span>
                                </summary>
                                <div style={{ padding: '0 1.25rem 1.25rem', color: '#4b5563', lineHeight: 1.6 }}>
                                    {item.answer}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </div>
        ),
        'Two-Column Grid': () => (
            <div style={{ padding: '6rem 2rem', backgroundColor: '#f9fafb' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', fontFamily: 'var(--font-serif)', textAlign: 'center' }}>
                        {heading || 'FAQ'}
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
                        {(items || []).map((item, i) => (
                            <div key={i} style={{ background: '#fff', padding: '2rem', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                                <h3 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '0.75rem' }}>{item.question}</h3>
                                <p style={{ color: '#4b5563', lineHeight: 1.6 }}>{item.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ),
        'Minimal List': () => (
            <div style={{ padding: '6rem 2rem', backgroundColor: '#fff' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {(items || []).map((item, i) => (
                        <div key={i} style={{ borderBottom: '1px solid #e5e7eb', padding: '2rem 0' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>{item.question}</h3>
                            <p style={{ color: '#4b5563', lineHeight: 1.6 }}>{item.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        ),
        'Highlight First': () => (
            <div style={{ padding: '6rem 2rem', backgroundColor: '#fff' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem' }}>
                    <div>
                        <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', lineHeight: 1.1, marginBottom: '1.5rem', color: theme.primaryColor }}>{heading || 'Detailed Answers'}</h2>
                        <p style={{ color: '#6b7280' }}>Everything you need to know about the treatment.</p>
                    </div>
                    <div>
                        {(items || []).map((item, i) => (
                            <details key={i} style={{ borderBottom: '1px solid #e5e7eb', marginBottom: '1rem', paddingBottom: '1rem' }}>
                                <summary style={{ fontSize: '1.125rem', fontWeight: '600', cursor: 'pointer', padding: '0.5rem 0', listStyle: 'none', display: 'flex', justifyContent: 'space-between' }}>
                                    {item.question}
                                    <Icons.ChevronDown size={20} />
                                </summary>
                                <p style={{ marginTop: '0.75rem', color: '#4b5563', lineHeight: 1.6 }}>{item.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </div>
        ),
        'Dark Mode': () => (
            <div style={{ padding: '6rem 2rem', backgroundColor: '#111827', color: 'white' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem', fontFamily: 'var(--font-serif)' }}>{heading || 'Questions?'}</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {(items || []).map((item, i) => (
                            <details key={i} style={{ background: '#1f2937', borderRadius: '12px', overflow: 'hidden' }}>
                                <summary style={{ padding: '1.25rem', cursor: 'pointer', fontWeight: 600, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    {item.question}
                                    <Icons.Plus size={20} />
                                </summary>
                                <div style={{ padding: '0 1.25rem 1.25rem', opacity: 0.8, lineHeight: 1.6 }}>
                                    {item.answer}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </div>
        ),
        'Sidebar Navigation': () => (
            <div style={{ padding: '6rem 2rem', backgroundColor: '#f9fafb' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', gap: '4rem' }}>
                    <div className="hidden md:block" style={{ flex: '0 0 250px' }}>
                        <div style={{ position: 'sticky', top: '2rem' }}>
                            <h3 style={{ fontWeight: 'bold', marginBottom: '1rem', textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '0.1em', color: '#9ca3af' }}>Categories</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '0.5rem', fontWeight: '600', color: theme.primaryColor }}>General</li>
                                <li style={{ marginBottom: '0.5rem', color: '#6b7280' }}>Procedure</li>
                                <li style={{ marginBottom: '0.5rem', color: '#6b7280' }}>Recovery</li>
                            </ul>
                        </div>
                    </div>
                    <div style={{ flex: 1 }}>
                        {(items || []).map((item, i) => (
                            <div key={i} style={{ marginBottom: '2.5rem' }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{item.question}</h3>
                                <p style={{ color: '#4b5563', lineHeight: 1.6 }}>{item.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ),
        'Boxed Cards': () => (
            <div style={{ padding: '6rem 2rem', backgroundColor: '#fff' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <span style={{ fontSize: '0.875rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', color: theme.primaryColor }}>Support</span>
                        <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', marginTop: '0.5rem' }}>Frequently Asked</h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                        {(items || []).map((item, i) => (
                            <div key={i} style={{ padding: '2rem', border: '1px solid #e5e7eb', borderRadius: '8px', transition: 'box-shadow 0.3s' }}>
                                <Icons.HelpCircle size={24} style={{ marginBottom: '1rem', color: theme.primaryColor }} />
                                <h4 style={{ fontWeight: '600', marginBottom: '0.75rem' }}>{item.question}</h4>
                                <p style={{ fontSize: '0.9rem', color: '#6b7280', lineHeight: 1.5 }}>{item.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ),
        'Visual Intro': () => (
            <div style={{ padding: '6rem 2rem', backgroundColor: '#f0f9ff' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <div style={{ display: 'inline-flex', padding: '1rem', background: 'white', borderRadius: '50%', marginBottom: '2rem', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}>
                        <Icons.MessageCircle size={48} style={{ color: theme.primaryColor }} />
                    </div>
                    <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', marginBottom: '3rem' }}>We're here to answer every question</h2>
                    <div style={{ textAlign: 'left', background: 'white', borderRadius: '24px', padding: '2rem', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)' }}>
                        {(items || []).map((item, i) => (
                            <details key={i} style={{ borderBottom: i !== (items || []).length - 1 ? '1px solid #f3f4f6' : 'none', padding: '1.5rem 0' }}>
                                <summary style={{ fontWeight: '600', cursor: 'pointer', listStyle: 'none' }}>{item.question}</summary>
                                <p style={{ marginTop: '1rem', color: '#6b7280' }}>{item.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </div>
        ),
        'Categorized Tabs': () => (
            <div style={{ padding: '6rem 2rem', backgroundColor: '#fff' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
                        <button style={{ padding: '0.5rem 1.5rem', background: '#1f2937', color: 'white', borderRadius: '99px', border: 'none' }}>All</button>
                        <button style={{ padding: '0.5rem 1.5rem', background: '#f3f4f6', color: '#4b5563', borderRadius: '99px', border: 'none' }}>Treatment</button>
                        <button style={{ padding: '0.5rem 1.5rem', background: '#f3f4f6', color: '#4b5563', borderRadius: '99px', border: 'none' }}>Pricing</button>
                    </div>
                    <div>
                        {(items || []).map((item, i) => (
                            <div key={i} style={{ marginBottom: '2rem', display: 'flex', gap: '2rem', alignItems: 'baseline' }}>
                                <span style={{ fontWeight: 'bold', color: theme.primaryColor, minWidth: '30px' }}>0{i + 1}</span>
                                <div>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{item.question}</h3>
                                    <p style={{ color: '#4b5563' }}>{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ),
        'Chat Style': () => (
            <div style={{ padding: '6rem 2rem', backgroundColor: '#f9fafb' }}>
                <div style={{ maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {(items || []).map((item, i) => (
                        <div key={i}>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '0.5rem' }}>
                                <div style={{ background: theme.primaryColor, color: 'white', padding: '1rem 1.5rem', borderRadius: '16px 16px 0 16px', maxWidth: '80%' }}>
                                    {item.question}
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                <div style={{ background: 'white', color: '#374151', padding: '1.5rem', borderRadius: '16px 16px 16px 0', maxWidth: '85%', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    // SAFE FALLBACK: If layout is not found, default to 'Simple Accordion'
    const RenderLayout = layouts[layout] || layouts['Simple Accordion']
    return <RenderLayout />
}

// ============================================================
// HTML GENERATOR (Code View) - DRY Implementation
// ============================================================

export const generateFAQHTML = (layout, data, theme) => {
    // Render the React component directly to static HTML string
    const html = ReactDOMServer.renderToStaticMarkup(
        <FAQSection data={data} layout={layout} theme={theme} />
    );

    return `<!-- FAQ: ${layout} -->
${html}`;
};

export default FAQSection

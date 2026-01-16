import React from 'react'

const SocialProofSection = ({ data, layout, theme }) => {
    const { primaryColor, neutralColor } = theme;
    const { heading, items } = data;

    const scrollLeft = () => {
        document.getElementById('testimonial-carousel').scrollBy({ left: -300, behavior: 'smooth' });
    }

    const scrollRight = () => {
        document.getElementById('testimonial-carousel').scrollBy({ left: 300, behavior: 'smooth' });
    }

    return (
        <div className="mock-section mock-social-proof" style={{ backgroundColor: neutralColor || '#f9fafb', padding: '6rem 2rem', position: 'relative' }}>
            <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem', fontFamily: 'var(--font-serif)' }}>
                {heading}
            </h2>

            {layout === 'Carousel' ? (
                <div style={{ position: 'relative' }}>
                    <button
                        onClick={scrollLeft}
                        style={{
                            position: 'absolute', left: '-1rem', top: '50%', transform: 'translateY(-50%)',
                            zIndex: 10, width: '40px', height: '40px', borderRadius: '50%',
                            backgroundColor: '#fff', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}
                    >
                        ←
                    </button>
                    <div id="testimonial-carousel" className="carousel-container" style={{
                        display: 'flex',
                        gap: '2rem',
                        overflowX: 'auto',
                        padding: '2rem 1rem',
                        scrollSnapType: 'x mandatory',
                        scrollbarWidth: 'none',
                        scrollBehavior: 'smooth'
                    }}>
                        {(items || []).map((item, i) => (
                            <div key={i} style={{
                                minWidth: '350px',
                                backgroundColor: '#fff',
                                padding: '3rem',
                                borderRadius: '16px',
                                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05)',
                                border: '1px solid #f3f4f6',
                                scrollSnapAlign: 'center',
                                flexShrink: 0
                            }}>
                                <div style={{ marginBottom: '1.5rem', color: primaryColor || '#000' }}>
                                    ★★★★★
                                </div>
                                <p style={{ fontSize: '1.25rem', lineHeight: '1.5', color: '#1f2937', marginBottom: '2rem', fontFamily: 'var(--font-serif)' }}>
                                    "{item.quote}"
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid #f3f4f6', paddingTop: '1.5rem' }}>
                                    <div style={{ width: '48px', height: '48px', backgroundColor: secondaryColor || '#e5e7eb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: primaryColor }}>
                                        {item.author.charAt(0)}
                                    </div>
                                    <span style={{ fontWeight: '700', color: '#111827' }}>{item.author}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={scrollRight}
                        style={{
                            position: 'absolute', right: '-1rem', top: '50%', transform: 'translateY(-50%)',
                            zIndex: 10, width: '40px', height: '40px', borderRadius: '50%',
                            backgroundColor: '#fff', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}
                    >
                        →
                    </button>
                </div>
            ) : (
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {(items || []).map((item, i) => (
                        <div key={i} style={{
                            backgroundColor: '#fff',
                            padding: '2rem',
                            borderRadius: '8px',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                            border: '1px solid #e5e7eb'
                        }}>
                            <div style={{ color: primaryColor, fontSize: '2rem', lineHeight: 1, marginBottom: '1rem' }}>"</div>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#4b5563', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                                {item.quote}
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ width: '40px', height: '40px', backgroundColor: '#e5e7eb', borderRadius: '50%' }}></div>
                                <span style={{ fontWeight: '600', color: '#111827' }}>{item.author}</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SocialProofSection

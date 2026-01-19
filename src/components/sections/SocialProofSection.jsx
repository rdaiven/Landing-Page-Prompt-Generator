import React from 'react'

const SocialProofSection = ({ data, layout, theme }) => {
    const { primaryColor, secondaryColor, neutralColor } = theme;
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
                                <div style={{ marginBottom: '1.5rem', color: primaryColor || '#000', display: 'flex', gap: '0.2rem' }}>
                                    {'★'.repeat(5)}
                                </div>
                                <p style={{ fontSize: '1.15rem', lineHeight: '1.6', color: '#374151', marginBottom: '2rem', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
                                    "{item.quote}"
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid #f3f4f6', paddingTop: '1.5rem' }}>
                                    <img
                                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(item.author)}&background=random&color=fff`}
                                        alt={item.author}
                                        style={{ width: '48px', height: '48px', borderRadius: '50%' }}
                                    />
                                    <span style={{ fontWeight: '700', color: '#111827', fontSize: '0.95rem' }}>{item.author}</span>
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
            ) : layout === 'Grid' ? (
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
                                <img
                                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(item.author)}&background=random&color=fff`}
                                    alt={item.author}
                                    style={{ width: '40px', height: '40px', borderRadius: '50%' }}
                                />
                                <span style={{ fontWeight: '600', color: '#111827', fontSize: '0.9rem' }}>{item.author}</span>
                            </div>
                        </div>
                    ))}
                </div>
            ) : layout === 'Wall of Love' ? (
                <div style={{
                    columns: '3 300px',
                    gap: '1.5rem',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {(data.items || []).map((item, i) => (
                        <div key={i} style={{
                            breakInside: 'avoid',
                            background: '#fff',
                            padding: '1.5rem',
                            borderRadius: '16px',
                            marginBottom: '1.5rem',
                            border: '1px solid #f3f4f6'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                                <div style={{ width: '32px', height: '32px', background: primaryColor || '#000', borderRadius: '50%', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem' }}>
                                    {item.user.charAt(1).toUpperCase()}
                                </div>
                                <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{item.user}</span>
                            </div>
                            <p style={{ fontSize: '0.95rem', lineHeight: 1.5, color: '#374151' }}>{item.text}</p>
                        </div>
                    ))}
                </div>
            ) : layout === 'Video Highlight' ? (
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{
                        aspectRatio: '16/9',
                        background: '#000',
                        borderRadius: '24px',
                        marginBottom: '3rem',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <span style={{ color: 'white', fontSize: '1.25rem' }}>▶ {data.mainVideo}</span>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                        {(data.thumbnails || []).map((vid, i) => (
                            <div key={i} style={{ cursor: 'pointer' }}>
                                <div style={{ aspectRatio: '16/9', background: '#e5e7eb', borderRadius: '12px', marginBottom: '0.75rem' }}></div>
                                <h4 style={{ fontWeight: 600, fontSize: '0.95rem' }}>{vid.name}'s Story</h4>
                                <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>{vid.duration}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ) : layout === 'Stat-Backed Trust' ? (
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
                    {(data.stats || []).map((stat, i) => (
                        <div key={i} style={{
                            textAlign: 'center',
                            padding: '2rem',
                            background: 'white',
                            borderRadius: '16px',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.03)'
                        }}>
                            <div style={{ fontSize: '3rem', fontWeight: 800, color: primaryColor || '#000', marginBottom: '0.5rem', lineHeight: 1 }}>{stat.value}</div>
                            <div style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>{stat.label}</div>
                            <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>{stat.small}</div>
                        </div>
                    ))}
                </div>
            ) : (
                // Fallback (Grid again if needed, or null)
                null
            )}
        </div>
    )
}

export default SocialProofSection

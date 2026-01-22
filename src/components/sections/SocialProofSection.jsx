import React from 'react'
import * as Icons from 'lucide-react'
import ReactDOMServer from 'react-dom/server';

const SocialProofSection = ({ data, layout, theme }) => {
    const { heading, items, stats } = data
    const primaryColor = theme.primaryColor || '#3b82f6'

    // Layout Implementation Map
    const layouts = {
        'Stats Grid': () => (
            <div style={{ backgroundColor: '#f9fafb', padding: '6rem 2rem' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem', fontFamily: 'var(--font-serif)' }}>{heading || 'Our Impact'}</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                        {(data.stats || []).map((stat, i) => (
                            <div key={i} style={{ textAlign: 'center', padding: '2rem', background: 'white', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                                <div style={{ fontSize: '3rem', fontWeight: 800, color: primaryColor, marginBottom: '0.5rem' }}>{stat.value || '0+'}</div>
                                <div style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>{stat.label || 'Metric'}</div>
                                <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>{stat.small || ''}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ),
        'Testimonial Cards': () => (
            <div style={{ backgroundColor: '#fff', padding: '6rem 2rem' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem', fontFamily: 'var(--font-serif)' }}>{heading || 'Client Stories'}</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {(data.items || []).map((item, i) => (
                            <div key={i} style={{ backgroundColor: '#f9fafb', padding: '2rem', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
                                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem', color: '#fbbf24' }}>
                                    {[...Array(5)].map((_, j) => <Icons.Star key={j} size={16} fill="currentColor" />)}
                                </div>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem', fontStyle: 'italic', color: '#4b5563' }}>"{item.quote}"</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#d1d5db', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'white' }}>
                                        {item.author ? item.author.charAt(0) : 'U'}
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: '700' }}>{item.author}</div>
                                        <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>{item.role || 'Verified Customer'}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ),
        'Logo Stripe': () => (
            <div style={{ backgroundColor: '#fff', padding: '4rem 2rem', borderTop: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                    <p style={{ marginBottom: '2rem', fontSize: '0.875rem', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9ca3af' }}>{heading || 'Trusted By Industry Leaders'}</p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap', alignItems: 'center', opacity: 0.6 }}>
                        {(data.logos || []).map((logo, i) => (
                            <div key={i} style={{ fontSize: '1.5rem', fontWeight: '900', color: '#9ca3af' }}>{logo.name || 'Brand'}</div>
                        ))}
                    </div>
                </div>
            </div>
        ),
        'Masonry Wall': () => (
            <div style={{ backgroundColor: '#f3f4f6', padding: '6rem 2rem' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem', fontFamily: 'var(--font-serif)' }}>{heading || 'Love from our Community'}</h2>
                    <div style={{ columnCount: 3, columnGap: '1.5rem' }}>
                        {(data.items || []).map((item, i) => (
                            <div key={i} style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '12px', marginBottom: '1.5rem', breakInside: 'avoid', border: '1px solid #e5e7eb' }}>
                                <p style={{ fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '1rem' }}>{item.quote}</p>
                                <div style={{ fontSize: '0.85rem', fontWeight: 'bold', color: primaryColor }}>{item.author}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ),
        'Featured Review': () => (
            <div style={{ backgroundColor: '#fff', padding: '8rem 2rem' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                    <Icons.Quote size={48} style={{ color: primaryColor, opacity: 0.3, margin: '0 auto 2rem' }} />
                    <blockquote style={{ fontSize: '2.25rem', fontWeight: '500', lineHeight: '1.2', marginBottom: '3rem', fontFamily: 'var(--font-serif)' }}>
                        "{data.quote || "This changed my life entirely."}"
                    </blockquote>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>{data.author || "Jane Doe"}</div>
                        <div style={{ color: '#6b7280' }}>{data.role || 'Verified Purchase'}</div>
                    </div>
                </div>
            </div>
        ),
        'Carousel': () => (
            <div style={{ backgroundColor: '#111827', padding: '6rem 0', color: 'white', overflow: 'hidden' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                    <h2 style={{ marginBottom: '3rem', fontFamily: 'var(--font-serif)', fontSize: '2rem' }}>{heading || 'Recent Feedback'}</h2>
                    <div style={{ display: 'flex', gap: '2rem', overflowX: 'auto', paddingBottom: '2rem', scrollSnapType: 'x mandatory' }}>
                        {(data.items || []).map((item, i) => (
                            <div key={i} style={{ flex: '0 0 350px', background: '#1f2937', padding: '2rem', borderRadius: '12px', scrollSnapAlign: 'start' }}>
                                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem', color: primaryColor }}>
                                    {[...Array(5)].map((_, j) => <Icons.Star key={j} size={14} fill="currentColor" />)}
                                </div>
                                <p style={{ marginBottom: '1.5rem', lineHeight: 1.6 }}>"{item.quote}"</p>
                                <div style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{item.author}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ),
        'Trust Badges': () => (
            <div style={{ backgroundColor: '#fff', padding: '4rem 2rem' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem', fontFamily: 'var(--font-serif)' }}>{heading || 'Our Certifications'}</h2>
                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '3rem' }}>
                        {(data.badges || []).map((badge, i) => {
                            const Icon = Icons[badge.icon] || Icons.Award;
                            return (
                                <div key={i} style={{ textAlign: 'center' }}>
                                    <Icon size={48} style={{ color: primaryColor, margin: '0 auto 1rem' }} />
                                    <div style={{ fontWeight: 'bold' }}>{badge.label || 'Certified'}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        ),
        'Video Thumbnails': () => (
            <div style={{ backgroundColor: '#fff', padding: '6rem 2rem' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem', fontFamily: 'var(--font-serif)' }}>{heading || 'Real Stories, Real People'}</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {(data.videos || []).map((video, i) => (
                            <div key={i} style={{ borderRadius: '16px', overflow: 'hidden', position: 'relative', aspectRatio: '16/9', background: '#374151' }}>
                                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.2)' }}>
                                        <Icons.Play size={24} style={{ color: primaryColor, marginLeft: '4px' }} />
                                    </div>
                                </div>
                                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', color: 'white' }}>
                                    <div style={{ fontWeight: 'bold' }}>{video.title || `Story ${i + 1}`}</div>
                                    <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>{video.duration}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ),
        'Comparison Table': () => (
            <div style={{ backgroundColor: '#fff', padding: '6rem 2rem' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem', fontFamily: 'var(--font-serif)' }}>{heading || 'Why Choose Us'}</h2>
                    <div style={{ border: '1px solid #e5e7eb', borderRadius: '16px', overflow: 'hidden' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '1.5rem', background: '#f9fafb', borderBottom: '1px solid #e5e7eb', fontWeight: 'bold' }}>
                            <div>Feature</div>
                            <div style={{ color: primaryColor, textAlign: 'center' }}>Us</div>
                            <div style={{ color: '#9ca3af', textAlign: 'center' }}>Others</div>
                        </div>
                        {(data.features || []).map((item, i) => (
                            <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '1.5rem', borderBottom: '1px solid #e5e7eb', alignItems: 'center' }}>
                                <div>{item.feature}</div>
                                <div style={{ textAlign: 'center' }}>
                                    {item.us === 'Yes' ? <Icons.CheckCircle size={24} style={{ display: 'inline', color: primaryColor }} /> : item.us}
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    {item.them === 'No' ? <Icons.XCircle size={24} style={{ display: 'inline', color: '#d1d5db' }} /> : item.them}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ),
        'Large Number Impact': () => (
            <div style={{ backgroundColor: primaryColor, color: 'white', padding: '8rem 2rem', textAlign: 'center' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ fontSize: '10rem', fontWeight: '900', lineHeight: 1, marginBottom: '1rem', opacity: 0.9 }}>{data.number || '10k+'}</div>
                    <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', marginBottom: '2rem' }}>{data.label || 'Lives Transformed'}</h2>
                    <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>
                        {data.description || 'Join the movement.'}
                    </p>
                </div>
            </div>
        )
    }

    // SAFE FALLBACK: If layout is not found, default to 'Testimonial Cards'
    const RenderLayout = layouts[layout] || layouts['Testimonial Cards']
    return <RenderLayout />
}

export const generateSocialProofHTML = (layout, data, theme) => {
    const html = ReactDOMServer.renderToStaticMarkup(
        <SocialProofSection data={data} layout={layout} theme={theme} />
    );
    return `<!-- SOCIAL PROOF: ${layout} -->\n${html}`;
};

export default SocialProofSection

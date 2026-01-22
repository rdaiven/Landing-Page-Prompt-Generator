// ===================================================================
// TRUST PRIMER SECTION
// Visual Preview (React) + Code Generation (HTML)
// ===================================================================

import React from 'react'
import ReactDOMServer from 'react-dom/server';

// ============================================================
// REACT COMPONENT (Visual Preview)
// ============================================================

const TrustPrimerSection = ({ data, layout, theme }) => {
    const { neutralColor, primaryColor, accentColor } = theme
    const { items, heading, stats, badges, rating, totalReviews, platform, name, credential1, credential2, quotes, years, label, since, partners } = data

    // 1. Logo Showcase
    if (layout === 'Logo Showcase') {
        return (
            <div style={{ padding: '3rem 2rem', borderBottom: `1px solid ${neutralColor || '#e5e7eb'}`, backgroundColor: '#fff' }}>
                <div style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600 }}>
                        {heading}
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', alignItems: 'center', opacity: 0.8 }}>
                        {(items || []).map((item, i) => (
                            <div key={i} style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#cbd5e1', fontFamily: 'var(--font-serif)', filter: 'grayscale(100%)' }}>
                                {item.text || item.alt}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    // 2. Fast to Scan
    if (layout === 'Fast to Scan') {
        return (
            <div style={{ padding: '1.5rem 2rem', backgroundColor: neutralColor || '#f8fafc', borderBottom: '1px solid #e5e7eb' }}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', color: '#475569', fontSize: '0.9rem', fontWeight: '600' }}>
                    {(items || []).map((item, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ color: accentColor || '#3b82f6' }}>✓</span> {item.text}
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    // 3. Marquee Scroll
    if (layout === 'Marquee Scroll') {
        return (
            <div style={{ padding: '2rem 0', overflow: 'hidden', backgroundColor: '#fff', whiteSpace: 'nowrap' }}>
                {heading && <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">{heading}</p>}
                <div style={{ display: 'inline-flex', animation: 'marquee 20s linear infinite', gap: '4rem', paddingLeft: '2rem' }}>
                    {[...(items || []), ...(items || [])].map((item, i) => (
                        <span key={i} style={{ fontSize: '1.25rem', fontWeight: '700', color: '#cbd5e1', fontFamily: 'var(--font-serif)' }}>{item.text}</span>
                    ))}
                </div>
            </div>
        )
    }

    // 4. Key Metrics
    if (layout === 'Key Metrics') {
        return (
            <div style={{ padding: '3rem 2rem', backgroundColor: '#fff' }}>
                <div style={{ display: 'grid', gridTemplateColumns: `repeat(${(stats || []).length}, 1fr)`, gap: '2rem', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                    {(stats || []).map((stat, i) => (
                        <div key={i}>
                            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: accentColor || primaryColor, lineHeight: 1 }}>{stat.value}</div>
                            <div style={{ fontSize: '0.875rem', color: '#64748b', marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    // 5. Authority Badges
    if (layout === 'Authority Badges') {
        return (
            <div style={{ padding: '2rem', backgroundColor: neutralColor || '#f8fafc', textAlign: 'center' }}>
                <div style={{ display: 'inline-flex', gap: '3rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {(badges || []).map((badge, i) => (
                        <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ width: '40px', height: '40px', border: `2px solid ${primaryColor}`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem', color: primaryColor }}>🛡️</div>
                            <span style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{badge.title}</span>
                            <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{badge.subtext}</span>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    // 6. Compact Rating
    if (layout === 'Compact Rating') {
        return (
            <div style={{ padding: '1.5rem', backgroundColor: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', borderBottom: '1px solid #f1f5f9' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: primaryColor }}>{rating}</div>
                <div style={{ display: 'flex', gap: '2px', color: '#fbbf24' }}>{'★'.repeat(5)}</div>
                <div style={{ borderLeft: '1px solid #e2e8f0', paddingLeft: '1rem' }}>
                    <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>{totalReviews}</div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b' }}>{platform}</div>
                </div>
            </div>
        )
    }

    // 7. Doctor Credentials
    if (layout === 'Doctor Credentials') {
        return (
            <div style={{ padding: '2rem', backgroundColor: '#fff', textAlign: 'center' }}>
                <div style={{ display: 'inline-block', padding: '1.5rem 3rem', border: `1px solid ${neutralColor}`, borderRadius: '8px' }}>
                    <h4 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem', color: primaryColor }}>{name}</h4>
                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', fontSize: '0.9rem', color: '#64748b' }}>
                        <span>{credential1}</span>
                        <span>•</span>
                        <span>{credential2}</span>
                    </div>
                </div>
            </div>
        )
    }

    // 8. Press Mentions
    if (layout === 'Press Mentions') {
        return (
            <div style={{ padding: '3rem 2rem', backgroundColor: neutralColor || '#f8fafc' }}>
                <div style={{ display: 'grid', gridTemplateColumns: `repeat(${(quotes || []).length}, 1fr)`, gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
                    {(quotes || []).map((quote, i) => (
                        <div key={i} style={{ textAlign: 'center' }}>
                            <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '1rem', color: '#334155' }}>{quote.text}</p>
                            <p style={{ fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', color: '#94a3b8' }}>— {quote.source}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    // 9. Years of Excellence
    if (layout === 'Years of Excellence') {
        return (
            <div style={{ padding: '2rem', backgroundColor: primaryColor || '#000', color: '#fff', textAlign: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem' }}>
                    <div style={{ fontSize: '3rem', fontWeight: 'bold', lineHeight: 1 }}>{years}</div>
                    <div style={{ textAlign: 'left' }}>
                        <div style={{ fontSize: '1.1rem', fontWeight: '600' }}>{label}</div>
                        <div style={{ fontSize: '0.9rem', opacity: 0.7 }}>{since}</div>
                    </div>
                </div>
            </div>
        )
    }

    // 10. Medical Partners
    if (layout === 'Medical Partners') {
        return (
            <div style={{ padding: '3rem 2rem', backgroundColor: '#fff', textAlign: 'center' }}>
                <h4 style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '2rem' }}>{heading}</h4>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', alignItems: 'center' }}>
                    {(partners || []).map((partner, i) => (
                        <span key={i} style={{ fontSize: '1.25rem', fontWeight: '600', color: '#334155' }}>{partner.name}</span>
                    ))}
                </div>
            </div>
        )
    }

    return <div>Select a layout</div>
}

// ============================================================
// HTML GENERATOR (Code View)
// ============================================================

// ============================================================
// HTML GENERATOR (Code View) - DRY Implementation
// ============================================================

export const generateTrustPrimerHTML = (layout, data, theme) => {
    // Render the React component directly to static HTML string
    const html = ReactDOMServer.renderToStaticMarkup(
        <TrustPrimerSection data={data} layout={layout} theme={theme} />
    );

    return `<!-- TRUST PRIMER: ${layout} -->
${html}`;
};

export default TrustPrimerSection

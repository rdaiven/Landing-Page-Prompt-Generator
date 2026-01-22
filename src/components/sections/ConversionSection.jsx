import React from 'react'
import * as Icons from 'lucide-react'
import ReactDOMServer from 'react-dom/server';
import { getEffectiveImage } from '../../utils/mediaUtils'

const ConversionSection = ({ data, layout, theme }) => {
    const { primaryColor, accentColor, secondaryColor } = theme
    const { heading, subtext, ctaText } = data

    // Layout Implementation Map
    const layouts = {
        'Best for Booking': () => (
            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', minHeight: '500px' }}>
                <div style={{ flex: 1, padding: '4rem', paddingRight: '2rem' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)', lineHeight: 1.1, color: '#111827' }}>
                        {heading || 'Ready to Transform?'}
                    </h2>
                    <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', color: '#4b5563', lineHeight: 1.6 }}>
                        {subtext || 'Book your consultation today and start your journey.'}
                    </p>
                    <button style={{ backgroundColor: primaryColor || '#1d4ed8', color: '#fff', padding: '1rem 2.5rem', border: 'none', borderRadius: '4px', fontSize: '1.1rem', fontWeight: '600', cursor: 'pointer' }}>
                        {ctaText || 'Book Appointment'}
                    </button>
                </div>
                <div style={{ flex: 1, height: '500px', overflow: 'hidden' }}>
                    <img src={getEffectiveImage(data.imageUrl, data.imagePrompt || 'Luxury Clinic Reception', theme, { w: 800, h: 600 })} alt={data.imagePrompt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
            </div>
        ),
        'High Urgency FOMO': () => (
            <div style={{ padding: '8rem 2rem', backgroundColor: primaryColor || '#1d4ed8', color: '#fff', textAlign: 'center' }}>
                <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                    {heading || 'Limited Time Offer'}
                </h2>
                <p style={{ fontSize: '1.5rem', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem auto', opacity: 0.9 }}>
                    {subtext || 'Spots are filling up fast. Secure your consultation now.'}
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', alignItems: 'center' }}>
                    <button style={{ backgroundColor: '#fff', color: primaryColor || '#1d4ed8', padding: '1.25rem 3.5rem', border: 'none', borderRadius: '4px', fontSize: '1.25rem', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
                        {ctaText || 'Claim Offer'}
                    </button>
                </div>
                <p style={{ marginTop: '2rem', fontSize: '0.9rem', opacity: 0.8, fontStyle: 'italic' }}>
                    *Only 3 spots remaining for this month
                </p>
            </div>
        ),
        'Minimal Centered': () => (
            <div style={{ padding: '8rem 2rem', backgroundColor: '#f9fafb', textAlign: 'center' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)', color: '#111827' }}>{heading}</h2>
                    <p style={{ fontSize: '1.125rem', color: '#6b7280', marginBottom: '3rem', lineHeight: 1.6 }}>{subtext}</p>
                    <button style={{ backgroundColor: '#111827', color: 'white', padding: '1rem 3rem', borderRadius: '9999px', fontWeight: '600', border: 'none', cursor: 'pointer', fontSize: '1rem', transition: 'transform 0.2s' }}>
                        {ctaText || 'Get Started'}
                    </button>
                </div>
            </div>
        ),
        'Split Screen Image': () => (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '600px' }}>
                <div style={{ position: 'relative' }}>
                    <img src={getEffectiveImage(data.imageUrl, 'Modern Medical Device', theme, { w: 800, h: 800 })} alt="Feature" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.1)' }}></div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '6rem', backgroundColor: '#fff' }}>
                    <div style={{ width: '60px', height: '4px', backgroundColor: primaryColor, marginBottom: '2rem' }}></div>
                    <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', marginBottom: '1.5rem', color: '#111827' }}>{heading}</h2>
                    <p style={{ fontSize: '1.125rem', color: '#4b5563', marginBottom: '3rem', lineHeight: 1.6 }}>{subtext}</p>
                    <button style={{ alignSelf: 'flex-start', border: `2px solid ${primaryColor}`, color: primaryColor, backgroundColor: 'transparent', padding: '1rem 2.5rem', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s' }}>
                        {ctaText}
                    </button>
                </div>
            </div>
        ),
        'Dark Mode Emphasis': () => (
            <div style={{ padding: '8rem 2rem', backgroundColor: '#0f172a', color: 'white', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, right: 0, width: '50%', height: '100%', background: `radial-gradient(circle at center, ${primaryColor}20 0%, transparent 70%)` }}></div>
                <div style={{ position: 'relative', zIndex: 1, maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                    <span style={{ color: accentColor || '#38bdf8', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'block' }}>Limited Availability</span>
                    <h2 style={{ fontSize: '4rem', fontFamily: 'var(--font-serif)', marginBottom: '2rem', lineHeight: 1.1 }}>{heading}</h2>
                    <p style={{ fontSize: '1.25rem', color: '#94a3b8', marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem auto' }}>{subtext}</p>
                    <button style={{ backgroundColor: primaryColor || '#3b82f6', color: 'white', padding: '1.25rem 4rem', borderRadius: '12px', fontSize: '1.25rem', fontWeight: 'bold', border: 'none', cursor: 'pointer', boxShadow: `0 0 20px ${primaryColor}40` }}>
                        {ctaText}
                    </button>
                </div>
            </div>
        ),
        'Video Background': () => (
            <div style={{ position: 'relative', padding: '10rem 2rem', textAlign: 'center', color: 'white' }}>
                <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                    <img src={getEffectiveImage(data.imageUrl, 'Abstract Medical Background', theme, { w: 1200, h: 800 })} alt="Background" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.4)' }} />
                </div>
                <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '80px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.3)', marginBottom: '2rem' }}>
                        <Icons.Play size={32} fill="white" />
                    </div>
                    <h2 style={{ fontSize: '3.5rem', fontFamily: 'var(--font-serif)', marginBottom: '1.5rem' }}>{heading}</h2>
                    <p style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '3rem' }}>{subtext}</p>
                    <button style={{ backgroundColor: 'white', color: '#000', padding: '1rem 3rem', borderRadius: '4px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
                        {ctaText}
                    </button>
                </div>
            </div>
        ),
        'Floating Card': () => (
            <div style={{ backgroundColor: '#f3f4f6', padding: '6rem 2rem' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', backgroundColor: 'white', borderRadius: '24px', padding: '4rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '8px', background: `linear-gradient(90deg, ${primaryColor}, ${accentColor || primaryColor})` }}></div>
                    <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', marginBottom: '1.5rem', color: '#111827' }}>{heading}</h2>
                    <p style={{ fontSize: '1.125rem', color: '#4b5563', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>{subtext}</p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                        <button style={{ backgroundColor: primaryColor, color: 'white', padding: '1rem 2.5rem', borderRadius: '8px', fontWeight: '600', border: 'none', cursor: 'pointer' }}>
                            {ctaText}
                        </button>
                        <button style={{ backgroundColor: '#fff', color: '#4b5563', padding: '1rem 2.5rem', borderRadius: '8px', fontWeight: '600', border: '1px solid #d1d5db', cursor: 'pointer' }}>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        ),
        'Feature List CTA': () => (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', maxWidth: '1200px', margin: '4rem auto', gap: '4rem', padding: '2rem', alignItems: 'center' }}>
                <div>
                    <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', marginBottom: '1.5rem', color: '#111827' }}>{heading}</h2>
                    <p style={{ fontSize: '1.1rem', color: '#4b5563', marginBottom: '2rem' }}>{subtext}</p>
                    <ul style={{ display: 'grid', gap: '1rem', marginBottom: '2.5rem' }}>
                        {['Free Consultation', 'Customized Treatment Plan', '0% Financing Available', 'Satisfaction Guaranteed'].map((item, i) => (
                            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.05rem', color: '#374151' }}>
                                <Icons.CheckCircle size={20} color={primaryColor} />
                                {item}
                            </li>
                        ))}
                    </ul>
                    <button style={{ backgroundColor: primaryColor, color: 'white', padding: '1rem 3rem', borderRadius: '6px', fontWeight: '600', border: 'none', cursor: 'pointer', width: '100%' }}>
                        {ctaText}
                    </button>
                </div>
                <div style={{ backgroundColor: '#f9fafb', padding: '3rem', borderRadius: '16px', border: '1px solid #e5e7eb' }}>
                    <div style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#6b7280', textTransform: 'uppercase', marginBottom: '1.5rem' }}>What's Included</div>
                    <div style={{ display: 'grid', gap: '1.5rem' }}>
                        {[1, 2, 3].map((_, i) => (
                            <div key={i} style={{ display: 'flex', gap: '1rem' }}>
                                <div style={{ width: '48px', height: '48px', background: 'white', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #e5e7eb' }}>
                                    <Icons.Star size={20} color={primaryColor} />
                                </div>
                                <div>
                                    <h4 style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>Premium Service {i + 1}</h4>
                                    <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>Detailed description of this premium service inclusion.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ),
        'Countdown Timer': () => (
            <div style={{ padding: '6rem 2rem', backgroundColor: '#111827', color: 'white', textAlign: 'center' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '99px', fontSize: '0.875rem', fontWeight: 'bold', marginBottom: '2rem', color: accentColor || '#38bdf8' }}>
                        Offer Ends Soon
                    </div>
                    <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', marginBottom: '1.5rem' }}>{heading}</h2>
                    <p style={{ fontSize: '1.25rem', opacity: 0.8, marginBottom: '3rem' }}>{subtext}</p>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '4rem' }}>
                        {[{ v: '02', l: 'Days' }, { v: '14', l: 'Hours' }, { v: '45', l: 'Minutes' }, { v: '12', l: 'Seconds' }].map((t, i) => (
                            <div key={i} style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', fontWeight: 'bold', fontFamily: 'monospace', lineHeight: 1 }}>{t.v}</div>
                                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', opacity: 0.5 }}>{t.l}</div>
                            </div>
                        ))}
                    </div>

                    <button style={{ backgroundColor: 'white', color: '#000', padding: '1rem 4rem', borderRadius: '99px', fontSize: '1.1rem', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
                        {ctaText}
                    </button>
                </div>
            </div>
        ),
        'Review-Backed CTA': () => (
            <div style={{ padding: '6rem 2rem', backgroundColor: '#fff', textAlign: 'center' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '1.5rem' }}>
                        {[1, 2, 3, 4, 5].map(i => <Icons.Star key={i} size={24} fill="#fbbf24" color="#fbbf24" />)}
                    </div>
                    <h2 style={{ fontSize: '3.5rem', fontFamily: 'var(--font-serif)', marginBottom: '1rem', color: '#111827' }}>{heading}</h2>
                    <p style={{ fontSize: '1.25rem', color: '#4b5563', marginBottom: '2.5rem' }}>{subtext}</p>
                    <button style={{ backgroundColor: primaryColor, color: 'white', padding: '1.25rem 3rem', borderRadius: '8px', fontSize: '1.125rem', fontWeight: '600', border: 'none', cursor: 'pointer', marginBottom: '2rem' }}>
                        {ctaText}
                    </button>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', fontSize: '0.9rem', color: '#6b7280' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Icons.ShieldCheck size={16} style={{ marginRight: '0.25rem', color: 'green' }} />
                            <span>No-Obligation Consultation</span>
                        </div>
                        <div>|</div>
                        <div>Rated 4.9/5 by 500+ Patients</div>
                    </div>
                </div>
            </div>
        )
    }

    // SAFE FALLBACK: If layout is not found, default to 'Best for Booking'
    const RenderLayout = layouts[layout] || layouts['Best for Booking']
    return <RenderLayout />
}

// ============================================================
// HTML GENERATOR (Code View) - DRY Implementation
// ============================================================

export const generateConversionHTML = (layout, data, theme) => {
    // Render the React component directly to static HTML string
    // This ensures strict parity between Visual Preview and Code View
    const html = ReactDOMServer.renderToStaticMarkup(
        <ConversionSection data={data} layout={layout} theme={theme} />
    );

    return `<!-- CONVERSION: ${layout} -->
${html}`;
};

export default ConversionSection

// ===================================================================
// CLINIC DETAILS SECTION
// Visual Preview (React) + Code Generation (HTML)
// ===================================================================

import React from 'react'
import { getEffectiveImage } from '../../utils/mediaUtils'
import * as Icons from 'lucide-react' // Added Icons import
import ReactDOMServer from 'react-dom/server';

const ClinicDetailsSection = ({ data, layout, theme }) => {

    // Layout Implementation Map
    const layouts = {
        'Simple & Clean': () => (
            <div style={{ padding: '6rem 2rem', backgroundColor: '#f9fafb' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        <div style={{ padding: '2rem', background: '#fff', borderRadius: '12px' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Location</h3>
                            <p>{data.location}</p>
                            <p style={{ marginTop: '0.5rem', color: '#6b7280' }}>{data.address}</p>
                        </div>
                        <div style={{ padding: '2rem', background: '#fff', borderRadius: '12px' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Hours</h3>
                            <p style={{ whiteSpace: 'pre-line' }}>{data.hours}</p>
                        </div>
                        <div style={{ padding: '2rem', background: '#fff', borderRadius: '12px' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Contact</h3>
                            <button style={{ padding: '0.75rem 1.5rem', background: theme.primaryColor || '#000', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>
                                Get in Touch
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        ),
        'With Interior View': () => (
            <div style={{ padding: '6rem 2rem', backgroundColor: '#fff' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <div style={{ height: '400px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)' }}>
                        <img src={getEffectiveImage(data.imageUrl, data.imagePrompt || 'Luxury Clinic Interior', theme, { w: 800, h: 600 })} alt={data.imagePrompt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div>
                        <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', marginBottom: '1.5rem', lineHeight: 1.1 }}>{data.location}</h2>
                        <p style={{ fontSize: '1.125rem', color: '#4b5563', marginBottom: '2rem', lineHeight: 1.6 }}>{data.description}</p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem', fontWeight: '500' }}>
                            <Icons.MapPin size={24} style={{ color: theme.primaryColor }} />
                            <span>{data.address}</span>
                        </div>
                    </div>
                </div>
            </div>
        ),
        'Grid with Map': () => (
            <div style={{ padding: '6rem 2rem', backgroundColor: '#f9fafb' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        <div style={{ display: 'grid', gap: '2rem' }}>
                            <div style={{ padding: '2rem', background: '#fff', borderRadius: '16px' }}>
                                <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>Visit Us</h3>
                                <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>{data.location}</p>
                                <p style={{ color: '#6b7280' }}>{data.address}</p>
                            </div>
                            <div style={{ padding: '2rem', background: '#fff', borderRadius: '16px' }}>
                                <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>Opening Hours</h3>
                                <p style={{ whiteSpace: 'pre-line', fontSize: '1.1rem' }}>{data.hours}</p>
                            </div>
                        </div>
                        <div style={{ background: '#e5e7eb', borderRadius: '24px', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ color: '#9ca3af', fontWeight: '600' }}>Interactive Map Placeholder</span>
                        </div>
                    </div>
                </div>
            </div>
        ),
        'Floating Card': () => (
            <div style={{ padding: '6rem 2rem', position: 'relative', minHeight: '600px', display: 'flex', alignItems: 'center', color: 'white' }}>
                <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                    <img src={getEffectiveImage(data.imageUrl, data.imagePrompt || 'Modern Building Exterior', theme, { w: 1200, h: 800 })} alt="Background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)' }}></div>
                </div>
                <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
                    <div style={{ background: 'white', color: '#1f2937', padding: '3rem', borderRadius: '24px', maxWidth: '500px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
                        <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', marginBottom: '1.5rem' }}>{data.location}</h2>
                        <p style={{ marginBottom: '1.5rem', lineHeight: 1.6 }}>{data.description}</p>
                        <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '1.5rem' }}>
                            <div style={{ fontWeight: '700', marginBottom: '0.5rem' }}>Address</div>
                            <p style={{ color: '#6b7280' }}>{data.address}</p>
                        </div>
                    </div>
                </div>
            </div>
        ),
        'Minimal Grid': () => (
            <div style={{ padding: '6rem 2rem', backgroundColor: '#fff' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', textAlign: 'center', marginBottom: '4rem' }}>Clinic Information</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', textAlign: 'center' }}>
                        <div>
                            <div style={{ width: '64px', height: '64px', background: `${theme.primaryColor}10`, color: theme.primaryColor, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                                <Icons.MapPin size={32} />
                            </div>
                            <h3 style={{ fontWeight: '700', marginBottom: '0.5rem' }}>Visit</h3>
                            <p style={{ color: '#6b7280' }}>{data.address}</p>
                        </div>
                        <div>
                            <div style={{ width: '64px', height: '64px', background: `${theme.primaryColor}10`, color: theme.primaryColor, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                                <Icons.Clock size={32} />
                            </div>
                            <h3 style={{ fontWeight: '700', marginBottom: '0.5rem' }}>Hours</h3>
                            <p style={{ color: '#6b7280', whiteSpace: 'pre-line' }}>{data.hours}</p>
                        </div>
                        <div>
                            <div style={{ width: '64px', height: '64px', background: `${theme.primaryColor}10`, color: theme.primaryColor, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                                <Icons.Phone size={32} />
                            </div>
                            <h3 style={{ fontWeight: '700', marginBottom: '0.5rem' }}>Contact</h3>
                            <button style={{ background: 'none', border: 'none', color: theme.primaryColor, fontWeight: '600', cursor: 'pointer', textDecoration: 'underline' }}>
                                Get Details
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        ),
        'Modern Clean': () => (
            <div style={{ padding: '6rem 2rem', backgroundColor: '#fff' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '4rem', fontFamily: 'var(--font-serif)', marginBottom: '1rem', lineHeight: 1 }}>{data.location}</h2>
                    <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '3rem' }}>{data.address}</p>
                    <div style={{ display: 'inline-block', padding: '2rem 4rem', background: '#f9fafb', borderRadius: '24px' }}>
                        <div style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '700', color: '#9ca3af', marginBottom: '1rem' }}>Open Hours</div>
                        <p style={{ fontSize: '1.125rem', fontWeight: '500', whiteSpace: 'pre-line' }}>{data.hours}</p>
                    </div>
                </div>
            </div>
        ),
        'Contact Centric': () => (
            <div style={{ padding: '6rem 2rem', backgroundColor: theme.primaryColor, color: 'white' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', marginBottom: '2rem' }}>Ready to visit {data.location}?</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                        <div style={{ fontSize: '1.5rem', opacity: 0.9 }}>{data.address}</div>
                        <div style={{ width: '50px', height: '1px', background: 'white', margin: '1rem 0', opacity: 0.5 }}></div>
                        <div style={{ fontSize: '1.25rem', opacity: 0.8 }}>{data.hours}</div>
                        <button style={{ marginTop: '2rem', padding: '1rem 2rem', background: 'white', color: theme.primaryColor, border: 'none', borderRadius: '99px', fontWeight: 'bold', cursor: 'pointer', fontSize: '1.125rem' }}>
                            Book Appointment Now
                        </button>
                    </div>
                </div>
            </div>
        ),
        'Luxury Boutique': () => (
            <div style={{ padding: '6rem 2rem', backgroundColor: '#fdfcf8', borderBottom: '1px solid #e5e5e5', borderTop: '1px solid #e5e5e5' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '2rem' }}>
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.3em', color: theme.primaryColor }}>Our Location</div>
                    <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>{data.location}</h2>
                    <div style={{ width: '1px', height: '60px', background: '#d1d5db' }}></div>
                    <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap', justifyItems: 'center' }}>
                        <div>
                            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Address</div>
                            <div style={{ color: '#6b7280' }}>{data.address}</div>
                        </div>
                        <div>
                            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Hours</div>
                            <div style={{ color: '#6b7280' }}>{data.hours}</div>
                        </div>
                    </div>
                </div>
            </div>
        ),
        'Split with Image': () => (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '600px' }}>
                <div style={{ padding: '6rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#fff' }}>
                    <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', marginBottom: '2rem', color: theme.primaryColor }}>{data.location}</h2>
                    <div style={{ spaceY: '2rem' }}>
                        <div style={{ marginBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Find Us</h3>
                            <p style={{ color: '#4b5563', fontSize: '1.1rem' }}>{data.address}</p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Opening Hours</h3>
                            <p style={{ color: '#4b5563', fontSize: '1.1rem', whiteSpace: 'pre-line' }}>{data.hours}</p>
                        </div>
                    </div>
                </div>
                <div style={{ position: 'relative' }}>
                    <img src={getEffectiveImage(data.imageUrl, 'Reception Desk', theme, { w: 800, h: 800 })} alt="Clinic" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
            </div>
        ),
        'Footer Style': () => (
            <div style={{ padding: '4rem 2rem', backgroundColor: '#111827', color: 'white' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
                    <div>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{data.location}</h2>
                        <p style={{ opacity: 0.7 }}>{data.description}</p>
                    </div>
                    <div style={{ display: 'flex', gap: '3rem' }}>
                        <div>
                            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5, marginBottom: '0.5rem' }}>Visit</div>
                            <div>{data.address}</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5, marginBottom: '0.5rem' }}>Contact</div>
                            <div style={{ textDecoration: 'underline', cursor: 'pointer' }}>Get in Touch</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    // SAFE FALLBACK: If layout is not found, default to 'Simple & Clean'
    const RenderLayout = layouts[layout] || layouts['Simple & Clean']
    return <RenderLayout />
}

// ============================================================
// HTML GENERATOR (Code View) - DRY Implementation
// ============================================================

export const generateClinicDetailsHTML = (layout, data, theme) => {
    // Render the React component directly to static HTML string
    const html = ReactDOMServer.renderToStaticMarkup(
        <ClinicDetailsSection data={data} layout={layout} theme={theme} />
    );

    return `<!-- CLINIC DETAILS: ${layout} -->
${html}`;
};

export default ClinicDetailsSection

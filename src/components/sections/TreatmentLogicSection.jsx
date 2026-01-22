// ===================================================================
// TREATMENT LOGIC SECTION
// Visual Preview (React) + Code Generation (HTML)
// ===================================================================

import React from 'react'
import { getEffectiveImage } from '../../utils/mediaUtils'
import * as Icons from 'lucide-react'
import ReactDOMServer from 'react-dom/server';

const DynamicIcon = ({ name, size = 24, className }) => {
    const IconComponent = Icons[name] || Icons.HelpCircle
    return <IconComponent size={size} className={className} />
}

const TreatmentLogicSection = ({ data, layout, theme }) => {
    // Shared Data Extraction
    const { heading, description, subheading } = data

    // Layout Implementation Map
    const layouts = {
        'Minimalist': () => (
            <div style={{ padding: '6rem 2rem', backgroundColor: '#f9fafb' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)', color: '#111827' }}>{heading}</h2>
                    <p style={{ fontSize: '1.25rem', color: '#4b5563', marginBottom: '3rem', lineHeight: '1.6' }}>{description}</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '600px', margin: '0 auto' }}>
                        {[data.feature1, data.feature2, data.feature3].filter(Boolean).map((f, i) => (
                            <div key={i} style={{ padding: '1.5rem', backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', gap: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                                <div style={{ color: theme.primaryColor || '#000', fontWeight: 'bold', fontSize: '1.5rem', opacity: 0.3 }}>0{i + 1}</div>
                                <div style={{ fontWeight: '600', fontSize: '1.1rem', color: '#374151' }}>{f}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ),
        'Story First': () => (
            <div style={{ padding: '6rem 2rem', backgroundColor: '#fff' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1fr', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <div style={{ textTransform: 'uppercase', letterSpacing: '0.05em', color: theme.primaryColor, fontWeight: '700', fontSize: '0.875rem', marginBottom: '1rem' }}>{subheading}</div>
                        <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)', lineHeight: '1.1' }}>{heading}</h2>
                        <p style={{ fontSize: '1.125rem', color: '#4b5563', marginBottom: '2rem', lineHeight: '1.7' }}>{description}</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: '1px solid #e5e7eb', paddingTop: '2rem' }}>
                            {(data.benefits || []).map((b, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ color: theme.accentColor || '#10b981' }}><Icons.CheckCircle2 size={20} /></div>
                                    <span style={{ fontWeight: '500', color: '#1f2937' }}>{b.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)' }}>
                        <img src={getEffectiveImage(data.imageUrl, data.imagePrompt || 'Scientific Diagram', theme, { w: 800, h: 600 })} alt="Science" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>
                </div>
            </div>
        ),
        'Step-by-Step Cards': () => (
            <div style={{ padding: '6rem 2rem', backgroundColor: '#fff' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', marginInline: 'auto' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>{heading}</h2>
                        <p style={{ color: '#6b7280', fontSize: '1.1rem' }}>{description}</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {(data.steps || []).map((step, i) => (
                            <div key={i} style={{ padding: '2rem', borderRadius: '16px', backgroundColor: '#f9fafb', border: '1px solid #f3f4f6', position: 'relative' }}>
                                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: `${theme.primaryColor}20`, color: theme.primaryColor, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                                    <DynamicIcon name={step.icon} size={24} />
                                </div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem', color: '#111827' }}>{step.title}</h3>
                                <p style={{ color: '#6b7280', lineHeight: '1.6' }}>{step.description}</p>
                                {i < (data.steps || []).length - 1 && (
                                    <div className="hidden lg:block" style={{ position: 'absolute', top: '50%', right: '-1rem', transform: 'translateY(-50%)', zIndex: 1, color: '#d1d5db' }}>
                                        <Icons.ArrowRight size={24} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ),
        'Scientific Diagram': () => (
            <div style={{ padding: '6rem 2rem', backgroundColor: '#111827', color: 'white' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>{heading}</h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '3rem', alignItems: 'center' }}>
                        <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', border: '1px solid #374151' }}>
                            <img src={getEffectiveImage(data.imageUrl, data.imagePrompt || 'Anatomy Diagram', theme, { w: 800, h: 600 })} alt="Diagram" style={{ width: '100%', display: 'block' }} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {(data.points || []).map((p, i) => (
                                <div key={i} style={{ paddingLeft: '1.5rem', borderLeft: `2px solid ${theme.accentColor || '#3b82f6'}` }}>
                                    <div style={{ fontWeight: '700', fontSize: '1.1rem', marginBottom: '0.25rem', color: theme.accentColor || '#60a5fa' }}>{p.label}</div>
                                    <div style={{ fontSize: '0.9rem', color: '#9ca3af' }}>{p.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        ),
        'Mechanism of Action': () => (
            <div style={{ padding: '6rem 2rem', backgroundColor: '#000', color: 'white' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)' }}>{heading}</h2>
                    <p style={{ fontSize: '1.25rem', color: '#9ca3af', marginBottom: '3rem', maxWidth: '700px', marginInline: 'auto' }}>{description}</p>

                    <div style={{ aspectRatio: '16/9', backgroundColor: '#1f2937', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', border: '1px solid #374151' }}>
                        <div style={{ position: 'absolute', inset: 0, opacity: 0.3, background: `repeating-linear-gradient(45deg, transparent, transparent 10px, #374151 10px, #374151 20px)` }}></div>
                        <div style={{ zIndex: 1, textAlign: 'center' }}>
                            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'white', color: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto', cursor: 'pointer' }}>
                                <Icons.Play fill="black" size={32} />
                            </div>
                            <div style={{ fontSize: '0.875rem', fontWeight: '600', letterSpacing: '0.05em' }}>WATCH ANIMATION</div>
                        </div>
                    </div>
                </div>
            </div>
        ),
        'Interactive Tabs': () => (
            <div style={{ padding: '6rem 2rem', backgroundColor: '#f9fafb' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', fontFamily: 'var(--font-serif)', textAlign: 'center' }}>{heading}</h2>

                    {/* Simulated Tabs */}
                    <div style={{ backgroundColor: 'white', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                        <div style={{ display: 'flex', borderBottom: '1px solid #e5e7eb' }}>
                            {[1, 2, 3].map(n => (
                                <div key={n} style={{ flex: 1, padding: '1.5rem', textAlign: 'center', cursor: 'pointer', backgroundColor: n === 1 ? 'white' : '#f9fafb', borderBottom: n === 1 ? `3px solid ${theme.primaryColor}` : '3px solid transparent', fontWeight: n === 1 ? '700' : '500', color: n === 1 ? theme.primaryColor : '#6b7280' }}>
                                    {data[`tab${n}`]}
                                </div>
                            ))}
                        </div>
                        <div style={{ padding: '4rem', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>{data.tab1} Phase</h3>
                            <p style={{ fontSize: '1.125rem', color: '#4b5563', lineHeight: '1.7', maxWidth: '600px', margin: '0 auto' }}>{data.content1}</p>
                        </div>
                    </div>
                </div>
            </div>
        ),
        'Benefit Stack': () => (
            <div style={{ padding: '6rem 2rem', backgroundColor: '#fff' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <h2 style={{ fontSize: '3rem', marginBottom: '3rem', fontFamily: 'var(--font-serif)', lineHeight: 1.1 }}>{heading}</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {(data.benefits || []).map((b, i) => (
                                <div key={i} style={{ display: 'flex', gap: '1.5rem' }}>
                                    <div style={{ flexShrink: 0, width: '48px', height: '48px', borderRadius: '12px', background: `${theme.primaryColor}15`, color: theme.primaryColor, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <DynamicIcon name={b.icon} size={24} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '0.25rem', color: '#111827' }}>{b.title}</h4>
                                        <p style={{ color: '#6b7280', lineHeight: 1.5 }}>{b.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Abstract visual */}
                    <div style={{ position: 'relative', height: '600px', backgroundColor: '#f3f4f6', borderRadius: '30px', overflow: 'hidden' }}>
                        <img src={getEffectiveImage(null, 'Abstract Technology', theme)} alt="Tech" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                </div>
            </div>
        ),
        'Comparison (The Science)': () => (
            <div style={{ padding: '6rem 2rem', backgroundColor: '#f8fafc' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>{heading}</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        {/* Them */}
                        <div style={{ padding: '3rem', backgroundColor: '#fff', borderRadius: '20px', border: '1px solid #e2e8f0', opacity: 0.8 }}>
                            <div style={{ fontSize: '0.875rem', fontWeight: '700', textTransform: 'uppercase', color: '#94a3b8', marginBottom: '1rem' }}>Traditional Methods</div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', color: '#64748b' }}>{data.othersMethod}</h3>
                            <p style={{ color: '#64748b', lineHeight: 1.6 }}>{data.othersDesc}</p>
                            <div style={{ marginTop: '2rem', display: 'flex', gap: '0.5rem', color: '#cbd5e1' }}>
                                <Icons.XCircle size={20} /> <span style={{ fontSize: '0.875rem' }}>Higher Risk</span>
                            </div>
                        </div>

                        {/* Us */}
                        <div style={{ padding: '3rem', backgroundColor: '#fff', borderRadius: '20px', border: `2px solid ${theme.primaryColor || '#3b82f6'}`, boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)', position: 'relative', transform: 'scale(1.05)' }}>
                            <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', background: theme.primaryColor, color: 'white', px: '1rem', py: '0.25rem', borderRadius: '99px', fontSize: '0.75rem', fontWeight: '700', padding: '0.5rem 1rem' }}>RECOMMENDED</div>
                            <div style={{ fontSize: '0.875rem', fontWeight: '700', textTransform: 'uppercase', color: theme.primaryColor, marginBottom: '1rem' }}>Our Approach</div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>{data.ourMethod}</h3>
                            <p style={{ color: '#334155', lineHeight: 1.6, fontSize: '1.1rem' }}>{data.ourDesc}</p>
                            <div style={{ marginTop: '2rem', display: 'flex', gap: '0.5rem', color: theme.accentColor || '#10b981' }}>
                                <Icons.CheckCircle2 size={20} /> <span style={{ fontSize: '0.875rem', fontWeight: '600' }}>Proven Safety</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
        'Timeline Flow': () => (
            <div style={{ padding: '6rem 2rem', backgroundColor: '#fff' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '5rem', fontFamily: 'var(--font-serif)', textAlign: 'center' }}>{heading}</h2>

                    <div style={{ position: 'relative' }}>
                        {/* Line */}
                        <div style={{ position: 'absolute', top: '24px', left: 0, right: 0, height: '2px', background: '#e5e7eb', zIndex: 0 }}></div>

                        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${(data.events || []).length}, 1fr)`, gap: '2rem', position: 'relative', zIndex: 1 }}>
                            {(data.events || []).map((e, i) => (
                                <div key={i} style={{ textAlign: 'center' }}>
                                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: i === (data.events || []).length - 1 ? theme.primaryColor : 'white', border: `2px solid ${theme.primaryColor}`, color: i === (data.events || []).length - 1 ? 'white' : theme.primaryColor, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto', fontWeight: '700' }}>{i + 1}</div>
                                    <div style={{ fontWeight: '700', fontSize: '1.1rem', marginBottom: '0.5rem', color: '#111827' }}>{e.time}</div>
                                    <div style={{ fontSize: '0.95rem', color: '#6b7280', lineHeight: 1.5 }}>{e.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        ),
        'Expert Explainer': () => (
            <div style={{ padding: '6rem 2rem', backgroundColor: '#f9fafb' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', backgroundColor: 'white', borderRadius: '32px', padding: '4rem', display: 'grid', gridTemplateColumns: 'minmax(250px, 300px) 1fr', gap: '4rem', alignItems: 'center', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ width: '200px', height: '200px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 1.5rem auto', border: `4px solid ${theme.primaryColor}20` }}>
                            <img src={getEffectiveImage(data.imageUrl, data.imagePrompt || 'Doctor Portrait', theme, { w: 400, h: 400 })} alt={data.doctorName} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ fontWeight: '700', fontSize: '1.25rem' }}>{data.doctorName}</div>
                        <div style={{ fontSize: '0.875rem', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Medical Director</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '3rem', color: theme.primaryColor, fontFamily: 'serif', lineHeight: 1 }}>"</div>
                        <p style={{ fontSize: '1.5rem', lineHeight: 1.5, color: '#1f2937', marginBottom: '2rem', fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>{data.explanation}</p>
                        <div style={{ fontSize: '1.1rem', fontWeight: '600', color: theme.accentColor || '#3b82f6' }}>— {data.quote}</div>
                    </div>
                </div>
            </div>
        )
    }

    // SAFE FALLBACK: If layout is not found, default to 'Minimalist'
    const RenderLayout = layouts[layout] || layouts['Minimalist']
    return <RenderLayout />
}

// ============================================================
// HTML GENERATOR (Code View) - DRY Implementation
// ============================================================

export const generateTreatmentLogicHTML = (layout, data, theme) => {
    // Render the React component directly to static HTML string
    const html = ReactDOMServer.renderToStaticMarkup(
        <TreatmentLogicSection data={data} layout={layout} theme={theme} />
    );

    return `<!-- TREATMENT LOGIC: ${layout} -->
${html}`;
};

export default TreatmentLogicSection

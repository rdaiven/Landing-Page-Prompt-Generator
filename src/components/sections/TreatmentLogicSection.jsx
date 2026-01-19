import React from 'react'
import { getEffectiveImage } from '../../utils/mediaUtils'
import * as Icons from 'lucide-react'

const DynamicIcon = ({ name, size = 24, className }) => {
    const IconComponent = Icons[name] || Icons.HelpCircle;
    return <IconComponent size={size} className={className} />;
}

const TreatmentLogicSection = ({ data, layout, theme }) => {
    const { heading, description, feature1, feature2, feature3 } = data;
    const features = [feature1, feature2, feature3].filter(Boolean);

    if (layout === 'Detailed Split') {
        const imageSrc = getEffectiveImage(data.imageUrl, data.imagePrompt || 'Visual Diagram', theme, { w: 600, h: 500 });
        return (
            <div style={{ padding: '6rem 2rem', backgroundColor: '#ffff' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <div className="content">
                        <span style={{ color: theme.accentColor || '#3b82f6', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', display: 'block' }}>
                            {data.subheading}
                        </span>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)', lineHeight: 1.2 }}>{heading}</h2>
                        <p style={{ fontSize: '1.1rem', color: '#4b5563', marginBottom: '2rem', lineHeight: '1.6' }}>{description}</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {(data.benefits || []).map((b, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: theme.accentColor || '#3b82f6', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem' }}>✓</div>
                                    <span style={{ fontWeight: 500 }}>{b.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="visual" style={{
                        height: '500px',
                        background: '#f3f4f6',
                        borderRadius: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#9ca3af',
                        fontSize: '1.5rem',
                        textAlign: 'center',
                        padding: '0',
                        overflow: 'hidden'
                    }}>
                        <img
                            src={imageSrc}
                            alt={data.imagePrompt}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </div>
        )
    }

    if (layout === 'Bento Grid') {
        const items = data.items || [];
        return (
            <div style={{ padding: '6rem 2rem', backgroundColor: '#fff' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', fontFamily: 'var(--font-serif)', textAlign: 'center' }}>{heading}</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridAutoRows: '200px', gap: '1.5rem' }}>
                        {items.map((item, i) => (
                            <div key={i} style={{
                                gridColumn: i === 0 ? 'span 2' : i === 3 ? 'span 2' : 'span 1',
                                gridRow: i === 0 ? 'span 2' : 'span 1',
                                background: item.type === 'Image' ? '#e5e7eb' : theme.surface || '#f9fafb',
                                padding: '1.5rem',
                                borderRadius: '16px',
                                border: '1px solid #e5e7eb',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                overflow: 'hidden',
                                position: 'relative'
                            }}>
                                {item.type === 'Image' && (
                                    <img
                                        src={getEffectiveImage(null, item.title, theme, { w: 400, h: 400 })}
                                        alt={item.title}
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                )}
                                <div style={{ position: 'relative', zIndex: 1, color: item.type === 'Image' ? '#fff' : 'inherit' }}>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 600, textShadow: item.type === 'Image' ? '0 1px 2px rgba(0,0,0,0.5)' : 'none' }}>{item.title}</h3>
                                    <p style={{ fontSize: '0.9rem', color: item.type === 'Image' ? '#f3f4f6' : '#6b7280' }}>{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    if (layout === 'Feature Cards') {
        const items = data.items || [];
        return (
            <div style={{ padding: '6rem 2rem', backgroundColor: '#f9fafb' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', fontFamily: 'var(--font-serif)', textAlign: 'center' }}>{heading}</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {items.map((item, i) => (
                            <div key={i} style={{
                                padding: '2rem',
                                background: '#fff',
                                borderRadius: '12px',
                                border: '1px solid #e5e7eb',
                                textAlign: 'left',
                                transition: 'transform 0.2s',
                                cursor: 'default'
                            }}>
                                <div style={{ fontSize: '2rem', marginBottom: '1rem', color: theme.primaryColor || '#000' }}>
                                    <DynamicIcon name={item.icon} size={40} />
                                </div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: 600 }}>{item.title}</h3>
                                <p style={{ color: '#6b7280', lineHeight: 1.6 }}>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    if (layout === 'Interactive Hotspots') {
        const hotspots = data.hotspots || [];
        const imageSrc = getEffectiveImage(data.imageUrl, data.imagePrompt || 'Device Close Up', theme, { w: 1000, h: 600 });

        return (
            <div style={{ padding: '6rem 2rem', backgroundColor: '#fff' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', fontFamily: 'var(--font-serif)' }}>{heading}</h2>
                    <div style={{
                        position: 'relative',
                        height: '500px',
                        background: '#f3f4f6',
                        borderRadius: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden'
                    }}>
                        <img
                            src={imageSrc}
                            alt={data.imagePrompt}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        {/* Mock Hotspots */}
                        {hotspots.map((h, i) => (
                            <div key={i} style={{
                                position: 'absolute',
                                left: `${20 + (i * 20)}%`,
                                top: `${30 + (i * 15)}%`,
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                background: theme.accentColor || '#3b82f6',
                                border: '4px solid rgba(255,255,255,0.8)',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontWeight: 'bold',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                            }}
                                title={`${h.label}: ${h.description}`}
                            >
                                +
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div style={{ padding: '6rem 2rem', backgroundColor: '#f3f4f6' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)' }}>{heading}</h2>
                <p style={{ fontSize: '1.1rem', color: '#4b5563', marginBottom: '4rem', lineHeight: '1.6' }}>{description}</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
                    {features.map((f, i) => (
                        <div key={i} style={{ padding: '1.5rem', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ color: theme.primaryColor || '#000', fontWeight: 'bold' }}>0{i + 1}</div>
                            <div style={{ fontWeight: '500', fontSize: '1.1rem' }}>{f}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TreatmentLogicSection

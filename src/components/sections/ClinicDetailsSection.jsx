import React from 'react'
import { getEffectiveImage } from '../../utils/mediaUtils'

const ClinicDetailsSection = ({ data, layout, theme }) => {
    if (layout === 'Gallery Split') {
        const imageSrc = getEffectiveImage(data.imageUrl, data.imagePrompt || 'Interior Shot', theme, { w: 800, h: 600 });
        return (
            <div style={{ padding: '6rem 2rem', backgroundColor: '#f9fafb' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
                    <div style={{
                        height: '400px',
                        borderRadius: '16px',
                        background: '#e5e7eb',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        overflow: 'hidden'
                    }}>
                        <img
                            src={imageSrc}
                            alt={data.imagePrompt}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', marginBottom: '1.5rem' }}>{data.location}</h2>
                        <p style={{ fontSize: '1.1rem', color: '#4b5563', marginBottom: '2rem', lineHeight: 1.6 }}>{data.description}</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <span style={{ fontSize: '1.25rem' }}>📍</span>
                                <p>{data.address}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    if (layout === 'Map Overlay') {
        const mapUrl = data.googleMapsUrl && data.googleMapsUrl.startsWith('http') ? data.googleMapsUrl : null;
        return (
            <div style={{ height: '600px', position: 'relative', overflow: 'hidden' }}>
                {/* Map Background */}
                <div style={{ position: 'absolute', inset: 0, background: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {mapUrl ? (
                        <iframe width="100%" height="100%" frameBorder="0" style={{ border: 0 }} src={mapUrl} allowFullScreen></iframe>
                    ) : (
                        <span style={{ color: '#9ca3af', fontSize: '1.5rem' }}>Map Placeholder</span>
                    )}
                </div>
                {/* Overlay Card */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '10%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(255, 255, 255, 0.95)',
                    padding: '2.5rem',
                    borderRadius: '16px',
                    maxWidth: '400px',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                    backdropFilter: 'blur(4px)'
                }}>
                    <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>{data.location}</h2>
                    <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 500 }}>{data.address}</p>
                    <button style={{
                        marginTop: '1.5rem',
                        padding: '0.75rem 1.5rem',
                        background: theme.primaryColor || '#000',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontWeight: 600
                    }}>
                        Get Directions
                    </button>
                </div>
            </div>
        )
    }

    if (layout === 'Minimal List') {
        const details = data.details || [];
        return (
            <div style={{ padding: '6rem 2rem', backgroundColor: '#fff' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', marginBottom: '3rem', textAlign: 'center' }}>{data.heading}</h2>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {details.map((item, i) => (
                            <div key={i} style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '1.5rem 0',
                                borderBottom: '1px solid #e5e7eb'
                            }}>
                                <span style={{ color: '#6b7280', fontSize: '1.1rem' }}>{item.label}</span>
                                <span style={{ fontWeight: 600, fontSize: '1.1rem', color: theme.primaryColor || '#000' }}>{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    if (layout === 'Business Card') {
        return (
            <div style={{ padding: '8rem 2rem', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{
                    background: '#fff',
                    maxWidth: '500px',
                    width: '100%',
                    padding: '3rem',
                    borderRadius: '2px', // Sharp corners for card look
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    textAlign: 'center',
                    border: '1px solid #e5e7eb'
                }}>
                    <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>{data.clinicName}</h2>
                    <p style={{ textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '0.1em', color: '#6b7280', marginBottom: '2rem' }}>{data.tagline}</p>
                    <div style={{ width: '40px', height: '1px', background: '#d1d5db', margin: '0 auto 2rem' }}></div>
                    <div style={{ whiteSpace: 'pre-line', lineHeight: 1.8, color: '#374151' }}>
                        {data.contactInfo}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div style={{ padding: '6rem 2rem', backgroundColor: '#f9fafb' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    <div style={{ padding: '2rem', background: '#fff', borderRadius: '12px' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Location</h3>
                        <p className="text-muted">{data.location}</p>
                        <p style={{ marginTop: '0.5rem' }}>{data.address}</p>
                    </div>
                    <div style={{ padding: '2rem', background: '#fff', borderRadius: '12px' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Hours</h3>
                        <p>{data.hours}</p>
                    </div>
                    <div style={{ padding: '2rem', background: '#fff', borderRadius: '12px' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Contact</h3>
                        <button style={{
                            padding: '0.5rem 1rem',
                            background: theme.primaryColor || '#000',
                            color: 'white',
                            border: 'none',
                            borderRadius: '6px',
                            cursor: 'pointer'
                        }}>
                            Get in Touch
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClinicDetailsSection

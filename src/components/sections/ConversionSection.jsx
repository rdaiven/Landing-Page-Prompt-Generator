import React from 'react'
import { getEffectiveImage } from '../../utils/mediaUtils'

const ConversionSection = ({ data, layout, theme }) => {
    const { primaryColor, secondaryColor, accentColor } = theme;
    const { heading, subtext, ctaText } = data;

    if (layout === 'Split Booking') {
        const imageSrc = getEffectiveImage(data.imageUrl, data.imagePrompt || 'Reception', theme, { w: 600, h: 400 });
        return (
            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ flex: 1, padding: '4rem 2rem', textAlign: 'left' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', color: '#111827' }}>{heading}</h2>
                    <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#4b5563' }}>{subtext}</p>
                    <button style={{
                        backgroundColor: primaryColor || '#1d4ed8',
                        color: '#fff',
                        padding: '1rem 2.5rem',
                        border: 'none',
                        borderRadius: '4px',
                        fontSize: '1rem',
                        fontWeight: '600',
                        cursor: 'pointer'
                    }}>
                        {ctaText}
                    </button>
                </div>
                <div style={{ flex: 1, height: '400px', backgroundColor: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                    <img
                        src={imageSrc}
                        alt={data.imagePrompt}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
            </div>
        )
    }

    if (layout === 'FloatUI - Simple') {
        return (
            <div className="py-14" style={{ backgroundColor: secondaryColor || '#ffffff' }}>
                <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                    <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                        <div className="flex-1 sm:hidden lg:block">
                            <div className="w-full h-full bg-gray-100 rounded-lg min-h-[300px] flex items-center justify-center text-gray-400">
                                Image Placeholder
                            </div>
                        </div>
                        <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                            {data.priceText && (
                                <span className="text-[var(--primary)] font-semibold text-sm tracking-wider uppercase">
                                    {data.priceText}
                                </span>
                            )}
                            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl" style={{ fontFamily: 'var(--font-serif)', color: 'var(--primary)' }}>
                                {heading}
                            </h3>
                            <p className="text-gray-600 text-lg">
                                {subtext}
                            </p>
                            <div className="mt-6">
                                <button className="inline-block py-2 px-4 text-white font-medium bg-[var(--primary)] duration-150 hover:bg-[var(--primary)-hover] rounded-lg shadow-md hover:shadow-none">
                                    {ctaText}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    if (layout === 'Sticky Bar') {
        return (
            <div style={{
                position: 'sticky', bottom: '0', left: '0', right: '0',
                backgroundColor: '#fff',
                borderTop: `4px solid ${primaryColor || '#1d4ed8'}`,
                padding: '1rem 2rem',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                boxShadow: '0 -4px 6px -1px rgba(0, 0, 0, 0.1)',
                zIndex: 100
            }}>
                <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827' }}>{heading}</span>
                <button style={{
                    backgroundColor: primaryColor || '#1d4ed8',
                    color: '#fff',
                    padding: '0.75rem 2rem',
                    border: 'none',
                    borderRadius: '999px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer'
                }}>
                    {ctaText}
                </button>
            </div>
        )
    }

    // Default 'Urgency' Layout
    return (
        <div style={{
            padding: '8rem 2rem',
            backgroundColor: primaryColor || '#1d4ed8',
            color: '#fff',
            textAlign: 'center'
        }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)' }}>{heading}</h2>
            <p style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>{subtext}</p>
            <button style={{
                backgroundColor: accentColor || '#fff',
                color: primaryColor || '#1d4ed8',
                padding: '1.25rem 3rem',
                border: 'none',
                borderRadius: '4px',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.2)'
            }}>
                {ctaText}
            </button>
        </div>
    )
}

export default ConversionSection

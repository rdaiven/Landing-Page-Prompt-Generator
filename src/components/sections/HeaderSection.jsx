// ===================================================================
// HEADER SECTION
// Visual Preview (React) + Code Generation (HTML)
// ===================================================================

import React from 'react'
import ReactDOMServer from 'react-dom/server';
import { getContrastColor } from '../../utils/colors'

// ============================================================
// SHARED UTILITIES
// ============================================================

const getButtonStyle = (primaryColor) => ({
    backgroundColor: primaryColor || '#000',
    color: getContrastColor(primaryColor),
    padding: '0.75rem 1.75rem',
    border: 'none',
    borderRadius: '50px',
    fontWeight: '600',
    fontSize: '0.95rem',
    cursor: 'pointer'
})

const parseLinks = (navLinks) => {
    return navLinks ? navLinks.split(',').map(l => l.trim()).filter(Boolean) : []
}

// ============================================================
// REACT COMPONENT (Visual Preview)
// ============================================================

const HeaderSection = ({ data, layout, theme, styles }) => {
    const { primaryColor, brandName } = theme
    const { navLinks, ctaText } = data
    const links = parseLinks(navLinks)

    // Dynamic Button Style based on 'styles.buttonShape' props
    const getShapeRadius = (shape) => {
        if (shape === 'square') return '0px'
        if (shape === 'pill') return '9999px'
        return '8px' // Default rounded
    }

    const buttonStyle = {
        ...getButtonStyle(primaryColor),
        borderRadius: getShapeRadius(styles?.buttonShape)
    }

    // Layout Implementation Map
    // This pattern enables "Safe Fallback" by default
    const layouts = {
        'Centered Logo': () => (
            <div className="mock-header-centered" style={{ backgroundColor: '#fff', borderBottom: '1px solid #e5e7eb' }}>
                <div style={{ fontWeight: '800', fontSize: '2rem', fontFamily: 'var(--font-serif)', color: '#0f172a', letterSpacing: '-0.02em' }}>
                    {brandName || 'Brand'}
                </div>
                <nav className="mock-nav">
                    {links.map((link, i) => (
                        <a key={i} href="#" onClick={e => e.preventDefault()} style={{
                            cursor: 'pointer',
                            color: '#4b5563',
                            fontWeight: 600,
                            fontSize: '0.95rem',
                            textDecoration: 'none',
                            transition: 'color 0.2s',
                        }}
                            onMouseEnter={(e) => e.target.style.color = primaryColor || '#000'}
                            onMouseLeave={(e) => e.target.style.color = '#4b5563'}
                        >
                            {link}
                        </a>
                    ))}
                </nav>
            </div>
        ),
        'Sticky': () => (
            <div className="mock-header-standard" style={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(8px)',
                borderBottom: '1px solid #f1f5f9',
                position: 'sticky',
                top: 0,
                zIndex: 100
            }}>
                <div style={{ fontWeight: '800', fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: '#0f172a', letterSpacing: '-0.02em' }}>
                    {brandName || 'Brand'}
                </div>
                <nav className="mock-nav-group">
                    <div className="mock-nav-links">
                        {links.map((link, i) => (
                            <a key={i} href="#" onClick={e => e.preventDefault()} style={{ cursor: 'pointer', color: '#475569', fontWeight: 500, fontSize: '0.95rem', textDecoration: 'none' }}>{link}</a>
                        ))}
                    </div>
                    <div className="mock-nav-cta">
                        <button style={buttonStyle}>{ctaText}</button>
                    </div>
                </nav>
            </div>
        ),
        'Smart Hide': () => (
            <div className="mock-header-standard" style={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(8px)',
                borderBottom: '1px solid #f1f5f9',
                position: 'relative', // Simulated for preview
                zIndex: 100
            }}>
                <div style={{ fontWeight: '800', fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: '#0f172a', letterSpacing: '-0.02em' }}>
                    {brandName || 'Brand'}
                </div>
                <nav className="mock-nav-group">
                    <div className="mock-nav-links">
                        {links.map((link, i) => (
                            <a key={i} href="#" onClick={e => e.preventDefault()} style={{ cursor: 'pointer', color: '#475569', fontWeight: 500, fontSize: '0.95rem', textDecoration: 'none' }}>{link}</a>
                        ))}
                    </div>
                    <div className="mock-nav-cta">
                        <button style={buttonStyle}>{ctaText}</button>
                    </div>
                </nav>
            </div>
        ),
        'Split Navigation': () => (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem', backgroundColor: 'white', borderBottom: '1px solid #e5e7eb' }}>
                <div style={{ fontWeight: 'bold', fontSize: '1.5rem', color: primaryColor }}>{brandName}</div>
                <nav style={{ display: 'flex', gap: '2rem' }}>
                    {links.map((link, i) => <a key={i} href="#" style={{ textDecoration: 'none', color: '#374151', fontWeight: 500 }}>{link}</a>)}
                </nav>
                <button style={buttonStyle}>{ctaText}</button>
            </div>
        ),
        'Mega Menu': () => (
            <div style={{ backgroundColor: '#fff', borderBottom: '1px solid #e5e7eb', paddingBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem' }}>
                    <div style={{ fontWeight: '800', fontSize: '1.5rem' }}>{brandName}</div>
                    <nav style={{ display: 'flex', gap: '2rem' }}>
                        {links.map((link, i) => (
                            <div key={i} style={{ position: 'relative', cursor: 'pointer' }}>
                                <span style={{ fontWeight: 600 }}>{link} ▼</span>
                            </div>
                        ))}
                    </nav>
                </div>
                <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '1rem', paddingLeft: '2rem', fontSize: '0.9rem', color: '#6b7280', display: 'flex', gap: '2rem' }}>
                    <span>Feature 1</span><span>Feature 2</span><span>Special Offers</span>
                </div>
            </div>
        ),
        'Transparent Overlay': () => (
            <div style={{ backgroundColor: 'transparent', position: 'absolute', top: 0, left: 0, width: '100%', padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white', zIndex: 10 }}>
                <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>{brandName}</div>
                <nav style={{ display: 'flex', gap: '2rem' }}>
                    {links.map((link, i) => <a key={i} href="#" style={{ color: 'white', textDecoration: 'none', textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}>{link}</a>)}
                </nav>
                <button style={{ ...buttonStyle, backgroundColor: 'rgba(255,255,255,0.2)', border: '1px solid white' }}>{ctaText}</button>
            </div>
        ),
        'Hamburger Mobile': () => (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem', backgroundColor: 'white', borderBottom: '1px solid #eee' }}>
                <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>{brandName}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <button style={{ ...buttonStyle, padding: '0.5rem 1rem', fontSize: '0.9rem' }}>{ctaText}</button>
                    <div style={{ fontSize: '1.5rem', cursor: 'pointer' }}>☰</div>
                </div>
            </div>
        ),
        'Minimal Line': () => (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', backgroundColor: 'white', borderBottom: `2px solid ${primaryColor}` }}>
                <div style={{ fontWeight: '600', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '2px' }}>{brandName}</div>
                <nav style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem' }}>
                    {links.map((link, i) => <a key={i} href="#" style={{ textDecoration: 'none', color: '#000' }}>{link}</a>)}
                </nav>
            </div>
        ),
        'Full Width Banner': () => (
            <div>
                <div style={{ backgroundColor: primaryColor, color: 'white', textAlign: 'center', padding: '0.5rem', fontSize: '0.8rem' }}>Welcome to our official website. Book online today!</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', backgroundColor: 'white' }}>
                    <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>{brandName}</div>
                    <nav style={{ display: 'flex', gap: '1.5rem' }}>
                        {links.map((link, i) => <a key={i} href="#" style={{ textDecoration: 'none', color: '#333' }}>{link}</a>)}
                    </nav>
                </div>
            </div>
        ),
        'Floating Pill': () => (
            <div style={{ padding: '2rem', display: 'flex', justifyContent: 'center' }}>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)', padding: '0.75rem 2rem', borderRadius: '50px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <div style={{ fontWeight: 'bold', color: primaryColor }}>{brandName}</div>
                    <div style={{ width: '1px', height: '20px', backgroundColor: '#e5e7eb' }}></div>
                    <nav style={{ display: 'flex', gap: '1.5rem' }}>
                        {links.map((link, i) => <a key={i} href="#" style={{ textDecoration: 'none', color: '#4b5563', fontSize: '0.9rem' }}>{link}</a>)}
                    </nav>
                </div>
            </div>
        )
    }

    // SAFE FALLBACK: If layout is not found, default to 'Sticky'
    const RenderLayout = layouts[layout] || layouts['Sticky']
    return <RenderLayout />
}

// ============================================================
// HTML GENERATOR (Code View) - DRY Implementation
// ============================================================

export const generateHeaderHTML = (layout, data, theme, styles) => {
    // Render the React component directly to static HTML string
    // This ensures strict parity between Visual Preview and Code View
    const html = ReactDOMServer.renderToStaticMarkup(
        <HeaderSection data={data} layout={layout} theme={theme} styles={styles} />
    );

    return `<!-- HEADER: ${layout} -->
${html}`;
};

export default HeaderSection

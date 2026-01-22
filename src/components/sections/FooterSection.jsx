import React from 'react'
import * as Icons from 'lucide-react'
import ReactDOMServer from 'react-dom/server';

const FooterSection = ({ data, layout, theme, styles }) => {
    const { copyright, links, address, column1, column2, column3 } = data
    const primaryColor = theme.primaryColor || '#1d4ed8'
    const linkList = links ? links.split(',').map(l => l.trim()) : ['Privacy', 'Terms', 'Sitemap']

    // Dynamic Shape Radius
    const getShapeRadius = (shape) => {
        if (shape === 'square') return '0px'
        if (shape === 'pill') return '9999px'
        return '6px' // Default
    }
    const borderRadius = getShapeRadius(styles?.buttonShape)

    // Layout Implementation Map
    const layouts = {
        'Detailed & Informative': () => (
            <div style={{ padding: '4rem 2rem', backgroundColor: '#111827', color: '#9ca3af', fontSize: '0.9rem' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
                    <div>
                        <div style={{ color: '#fff', fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)' }}>{theme.brandName || 'Brand'}</div>
                        <p style={{ lineHeight: 1.6, marginBottom: '1.5rem' }}>{address || '123 Aesthetic Blvd, \nBeverly Hills, CA 90210'}</p>
                        <div style={{ marginTop: '1rem', opacity: 0.7 }}>{copyright}</div>
                    </div>
                    <div>
                        <h4 style={{ color: '#fff', fontWeight: '600', marginBottom: '1.5rem', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em' }}>{column1 || 'Company'}</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '0.8rem' }}>
                            {['About Us', 'Careers', 'Press', 'Blog'].map((item, i) => (
                                <li key={i}><a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>{item}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ color: '#fff', fontWeight: '600', marginBottom: '1.5rem', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em' }}>{column2 || 'Services'}</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '0.8rem' }}>
                            {['Facials', 'Injectables', 'Lasers', 'Body'].map((item, i) => (
                                <li key={i}><a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>{item}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ color: '#fff', fontWeight: '600', marginBottom: '1.5rem', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em' }}>Stay Connected</h4>
                        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                            <Icons.Instagram size={20} />
                            <Icons.Facebook size={20} />
                            <Icons.Twitter size={20} />
                        </div>
                        <p style={{ fontSize: '0.85rem' }}>Subscribe to our newsletter for updates.</p>
                    </div>
                </div>
            </div>
        ),
        'Minimal': () => (
            <div style={{ padding: '3rem 2rem', backgroundColor: '#111827', color: '#9ca3af', borderTop: '1px solid #1f2937' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
                    <div>{copyright}</div>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        {linkList.map((link, i) => (
                            <a key={i} href="#" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.9rem' }}>{link}</a>
                        ))}
                    </div>
                </div>
            </div>
        ),
        'Simplified Centered': () => (
            <div style={{ padding: '4rem 2rem', backgroundColor: '#fff', color: '#4b5563', textAlign: 'center' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ color: theme.primaryColor, fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '2rem', fontFamily: 'var(--font-serif)' }}>{theme.brandName || 'Brand'}</div>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                        {linkList.map((link, i) => (
                            <a key={i} href="#" style={{ color: '#111827', textDecoration: 'none', fontWeight: '500' }}>{link}</a>
                        ))}
                    </div>
                    <div style={{ width: '50px', height: '2px', background: '#e5e7eb', margin: '0 auto 2rem auto' }}></div>
                    <div style={{ fontSize: '0.9rem', color: '#9ca3af' }}>{copyright}</div>
                </div>
            </div>
        ),
        'Social Heavy': () => (
            <div style={{ padding: '5rem 2rem', backgroundColor: '#000', color: 'white', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', marginBottom: '2rem' }}>Follow Our Journey</h2>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '4rem' }}>
                    {[Icons.Instagram, Icons.Facebook, Icons.Youtube, Icons.Linkedin].map((Icon, i) => (
                        <div key={i} style={{ padding: '1rem', border: '1px solid #333', borderRadius: '50%', cursor: 'pointer', transition: 'all 0.3s' }}>
                            <Icon size={24} />
                        </div>
                    ))}
                </div>
                <div style={{ borderTop: '1px solid #333', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', maxWidth: '800px', margin: '0 auto', color: '#666', fontSize: '0.9rem' }}>
                    <div>{copyright}</div>
                    <div>Designed with Care</div>
                </div>
            </div>
        ),
        'Newsletter Focus': () => (
            <div style={{ padding: '5rem 2rem', backgroundColor: '#f9fafb' }}>
                <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Join our inner circle</h3>
                    <p style={{ color: '#6b7280', marginBottom: '2rem' }}>Get exclusive offers and beauty tips delivered to your inbox.</p>
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '3rem' }}>
                        <input type="email" placeholder="Enter your email" style={{ flex: 1, padding: '0.75rem 1rem', borderRadius: '6px', border: '1px solid #d1d5db' }} />
                        <button style={{ backgroundColor: primaryColor, color: 'white', border: 'none', padding: '0.75rem 1.5rem', borderRadius: borderRadius, fontWeight: '600', cursor: 'pointer' }}>Subscribe</button>
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#9ca3af' }}>
                        {copyright} • <a href="#" style={{ color: '#9ca3af' }}>Privacy Policy</a>
                    </div>
                </div>
            </div>
        ),
        'Legal Stripped': () => (
            <div style={{ padding: '2rem', backgroundColor: '#fff', borderTop: '1px solid #e5e7eb', fontSize: '0.75rem', color: '#9ca3af' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>{copyright}</div>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <span>Medical Disclaimer</span>
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                        <span>Cookie Settings</span>
                    </div>
                </div>
            </div>
        ),
        'Brand Big Logo': () => (
            <div style={{ padding: '6rem 2rem 2rem 2rem', backgroundColor: theme.primaryColor, color: 'white', position: 'relative', overflow: 'hidden' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                    <div style={{ fontSize: '15vw', fontWeight: '900', opacity: 0.1, lineHeight: 0.8, textAlign: 'center', marginBottom: '2rem' }}>
                        {theme.brandName || 'BRAND'}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '2rem' }}>
                        <div>
                            <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Contact</div>
                            <div style={{ opacity: 0.8 }}>hello@brand.com</div>
                            <div style={{ opacity: 0.8 }}>+1 (555) 123-4567</div>
                        </div>
                        <div style={{ textAlign: 'right', opacity: 0.6, fontSize: '0.9rem' }}>
                            {copyright}
                        </div>
                    </div>
                </div>
            </div>
        ),
        'Multi-Column Link Grid': () => (
            <div style={{ padding: '5rem 2rem', backgroundColor: '#fff', borderTop: '4px solid', borderColor: primaryColor }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
                    {[1, 2, 3, 4].map((col, i) => (
                        <div key={i}>
                            <h4 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#111827' }}>Category {col}</h4>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '0.75rem' }}>
                                {['Link Item 1', 'Link Item 2', 'Link Item 3', 'Link Item 4'].map((link, j) => (
                                    <li key={j}><a href="#" style={{ color: '#6b7280', textDecoration: 'none', fontSize: '0.95rem' }}>{link}</a></li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div style={{ maxWidth: '1200px', margin: '3rem auto 0 auto', paddingTop: '2rem', borderTop: '1px solid #e5e7eb', textAlign: 'center', color: '#9ca3af', fontSize: '0.9rem' }}>
                    {copyright}
                </div>
            </div>
        ),
        'Map Integration': () => (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', backgroundColor: '#111827', color: 'white' }}>
                <div style={{ padding: '5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', marginBottom: '2rem' }}>Visit Our Clinic</h2>
                    <p style={{ marginBottom: '2rem', lineHeight: 1.6, opacity: 0.8 }}>
                        {address || '123 Aesthetic Blvd, Suite 100\nBeverly Hills, CA 90210'}
                    </p>
                    <button style={{ alignSelf: 'flex-start', border: '1px solid white', background: 'transparent', color: 'white', padding: '0.75rem 2rem', borderRadius: '4px', cursor: 'pointer' }}>
                        Get Directions
                    </button>
                    <div style={{ marginTop: '4rem', opacity: 0.5, fontSize: '0.9rem' }}>{copyright}</div>
                </div>
                <div style={{ minHeight: '400px', backgroundColor: '#374151', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ color: '#9ca3af' }}>Interactive Map Integration</span>
                </div>
            </div>
        ),
        'Dark Luxury': () => (
            <div style={{ padding: '6rem 2rem', backgroundColor: '#000', color: '#e5e7eb' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                    <div style={{ width: '60px', height: '1px', background: primaryColor, margin: '0 auto 2rem auto' }}></div>
                    <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', letterSpacing: '0.05em', marginBottom: '3rem' }}>{theme.brandName}</div>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginBottom: '4rem', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.2em' }}>
                        {linkList.map((link, i) => (
                            <a key={i} href="#" style={{ color: 'white', textDecoration: 'none' }}>{link}</a>
                        ))}
                    </div>
                    <div style={{ color: '#6b7280', fontSize: '0.8rem' }}>
                        {copyright} <br /> Created by {theme.brandName}
                    </div>
                </div>
            </div>
        )
    }

    // SAFE FALLBACK: If layout is not found, default to 'Minimal'
    const RenderLayout = layouts[layout] || layouts['Minimal']
    return <RenderLayout />
}

// ============================================================
// HTML GENERATOR (Code View) - DRY Implementation
// ============================================================

export const generateFooterHTML = (layout, data, theme, styles) => {
    // Render the React component directly to static HTML string
    // This ensures strict parity between Visual Preview and Code View
    const html = ReactDOMServer.renderToStaticMarkup(
        <FooterSection data={data} layout={layout} theme={theme} styles={styles} />
    );

    return `<!-- FOOTER: ${layout} -->
${html}`;
};

export default FooterSection

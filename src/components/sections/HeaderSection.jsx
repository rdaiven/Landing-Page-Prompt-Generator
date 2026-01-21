// ===================================================================
// HEADER SECTION
// Visual Preview (React) + Code Generation (HTML)
// ===================================================================

import React from 'react'
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

const HeaderSection = ({ data, layout, theme }) => {
    const { primaryColor, brandName } = theme
    const { navLinks, ctaText } = data
    const links = parseLinks(navLinks)
    const buttonStyle = getButtonStyle(primaryColor)

    if (layout === 'Centered Logo') {
        return (
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
        )
    }

    // Sticky and Smart Hide layouts
    return (
        <div className="mock-header-standard" style={{
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(8px)',
            borderBottom: '1px solid #f1f5f9',
            position: layout === 'Sticky' ? 'sticky' : 'relative',
            top: 0,
            zIndex: 100
        }}>
            <div style={{ fontWeight: '800', fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: '#0f172a', letterSpacing: '-0.02em' }}>
                {brandName || 'Brand'}
            </div>

            <nav className="mock-nav-group">
                <div className="mock-nav-links">
                    {links.map((link, i) => (
                        <a key={i} href="#" onClick={e => e.preventDefault()} style={{
                            cursor: 'pointer',
                            color: '#475569',
                            fontWeight: 500,
                            fontSize: '0.95rem',
                            textDecoration: 'none',
                            transition: 'color 0.2s'
                        }}
                            onMouseEnter={(e) => e.target.style.color = primaryColor || '#000'}
                            onMouseLeave={(e) => e.target.style.color = '#475569'}
                        >
                            {link}
                        </a>
                    ))}
                </div>

                <div className="mock-nav-cta">
                    <button style={buttonStyle}
                        onMouseEnter={(e) => e.target.style.opacity = '0.9'}
                        onMouseLeave={(e) => e.target.style.opacity = '1'}
                    >
                        {ctaText}
                    </button>
                    <button className="mobile-menu-btn">☰</button>
                </div>
            </nav>
        </div>
    )
}

// ============================================================
// HTML GENERATOR (Code View)
// ============================================================

/**
 * Generates static HTML for the header/navigation section
 */
export const generateHeaderHTML = (layout, data, theme) => {
    const { navLinks, ctaText } = data
    const links = parseLinks(navLinks)

    // Sticky Header - Always visible
    if (layout === 'Sticky') {
        return `<!-- HEADER - Sticky (Always Visible) -->
<header class="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
            <div class="flex-shrink-0 font-bold text-xl" style="color: var(--primary);">
                ${theme.brandName || 'Logo'}
            </div>
            <nav class="hidden md:flex space-x-8">
                ${links.map(link => `<a href="#" class="text-gray-700 hover:text-gray-900 font-medium">${link}</a>`).join('\n                ')}
            </nav>
            <button class="px-6 py-2 rounded-lg font-semibold text-white" style="background-color: var(--primary);">
                ${ctaText || 'Book Now'}
            </button>
        </div>
    </div>
</header>`
    }

    // Smart Hide - Hides on scroll down, shows on scroll up
    if (layout === 'Smart Hide') {
        return `<!-- HEADER - Smart Hide (Scroll Behavior) -->
<header id="smart-header" class="fixed top-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm transition-transform duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
            <div class="flex-shrink-0 font-bold text-xl" style="color: var(--primary);">
                ${theme.brandName || 'Logo'}
            </div>
            <nav class="hidden md:flex space-x-8">
                ${links.map(link => `<a href="#" class="text-gray-700 hover:text-gray-900 font-medium">${link}</a>`).join('\n                ')}
            </nav>
            <button class="px-6 py-2 rounded-lg font-semibold text-white" style="background-color: var(--primary);">
                ${ctaText || 'Book Now'}
            </button>
        </div>
    </div>
</header>
<script>
// Smart Hide: Hide on scroll down, show on scroll up
let lastScroll = 0;
const header = document.getElementById('smart-header');
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll && currentScroll > 80) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;
});
</script>`
    }

    // Centered Logo - Logo in center with links around it
    if (layout === 'Centered Logo') {
        const leftLinks = links.slice(0, Math.floor(links.length / 2))
        const rightLinks = links.slice(Math.floor(links.length / 2))

        return `<!-- HEADER - Centered Logo -->
<header class="bg-white border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-center gap-12 h-20">
            <nav class="hidden md:flex items-center gap-8">
                ${leftLinks.map(link => `<a href="#" class="text-gray-700 hover:text-gray-900 font-medium">${link}</a>`).join('\n                ')}
            </nav>
            <div class="font-bold text-2xl" style="color: var(--primary);">
                ${theme.brandName || 'Logo'}
            </div>
            <nav class="hidden md:flex items-center gap-8">
                ${rightLinks.map(link => `<a href="#" class="text-gray-700 hover:text-gray-900 font-medium">${link}</a>`).join('\n                ')}
            </nav>
        </div>
    </div>
</header>`
    }

    // Fallback
    return `<!-- Header layout "${layout}" not implemented -->`
}

export default HeaderSection

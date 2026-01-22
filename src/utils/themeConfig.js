
// ============================================================================
// THEME CONFIGURATION
// Central source of truth for all design tokens.
// ============================================================================

export const THEME_CONFIG = {
    // 1. VISUAL STYLES (The "Vibe" of the layout)
    styles: [
        {
            id: 'modern',
            name: 'Modern Clean',
            description: 'Balanced rounding, soft shadows, clean lines.',
            radius: '0.75rem', // rounded-xl
            shadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)', // shadow-md
            borderWidth: '1px',
            borderStyle: 'solid'
        },
        {
            id: 'playful',
            name: 'Soft & Friendly',
            description: 'Extra rounded corners, pill shapes, floating elements.',
            radius: '1.5rem', // rounded-3xl
            shadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)', // shadow-xl
            borderWidth: '2px',
            borderStyle: 'solid'
        },
        {
            id: 'brutalist',
            name: 'Sharp / Technical',
            description: 'Zero radius, high contrast borders, raw look.',
            radius: '0px', // sharp
            shadow: '4px 4px 0px 0px rgba(0,0,0,1)', // hard shadow
            borderWidth: '2px',
            borderStyle: 'solid'
        },
        {
            id: 'elegant',
            name: 'Luxury / Minimal',
            description: 'Slightly rounded, zero borders, atmospheric shadows.',
            radius: '0.25rem', // rounded
            shadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)', // shadow-2xl
            borderWidth: '0px',
            borderStyle: 'solid'
        },
        {
            id: 'cyber',
            name: 'Futuristic',
            description: 'Angled edges, tech-inspired layout, thin borders.',
            radius: '0px',
            shadow: '0 0 15px rgba(59, 130, 246, 0.5)', // glow
            borderWidth: '1px',
            borderStyle: 'solid'
        },
        {
            id: 'corporate',
            name: 'Corporate Trust',
            description: 'Conservative rounding, subtle borders, professional.',
            radius: '0.375rem', // rounded-md
            shadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)', // shadow-sm
            borderWidth: '1px',
            borderStyle: 'solid'
        }
    ],

    // 2. COLOR PALETTES (The "Core Palette" System)
    // Structure: Primary, Secondary, Accent, Neutral, Surfaces, Text
    palettes: [
        {
            id: 'modern_slate',
            name: 'Modern Slate',
            colors: {
                primary: '#0f172a',      // Slate 900
                secondary: '#334155',    // Slate 700
                accent: '#3b82f6',       // Blue 500
                neutral: '#f8fafc',      // Slate 50
                surface: '#ffffff',
                border: '#e2e8f0',       // Slate 200
                textPrimary: '#0f172a',
                textSecondary: '#64748b',
                textOnPrimary: '#ffffff'
            }
        },
        {
            id: 'midnight_gold',
            name: 'Midnight Gold',
            colors: {
                primary: '#1a1a1a',      // Near Black
                secondary: '#d4af37',    // Gold
                accent: '#d4af37',       // Gold
                neutral: '#f9f9f9',      // Off White
                surface: '#ffffff',
                border: '#e5e5e5',
                textPrimary: '#1a1a1a',
                textSecondary: '#525252',
                textOnPrimary: '#ffffff'
            }
        },
        {
            id: 'electric_violet',
            name: 'Electric Violet',
            colors: {
                primary: '#7c3aed',      // Violet 600
                secondary: '#a78bfa',    // Violet 400
                accent: '#f472b6',       // Pink 400
                neutral: '#f5f3ff',      // Violet 50
                surface: '#ffffff',
                border: '#ddd6fe',
                textPrimary: '#4c1d95',
                textSecondary: '#6d28d9',
                textOnPrimary: '#ffffff'
            }
        },
        {
            id: 'forest_sage',
            name: 'Forest Sage',
            colors: {
                primary: '#166534',      // Green 700
                secondary: '#dcfce7',    // Green 100
                accent: '#84cc16',       // Lime 500
                neutral: '#f0fdf4',      // Green 50
                surface: '#ffffff',
                border: '#bbf7d0',
                textPrimary: '#14532d',
                textSecondary: '#166534',
                textOnPrimary: '#ffffff'
            }
        },
        {
            id: 'ocean_breeze',
            name: 'Ocean Breeze',
            colors: {
                primary: '#0e7490',      // Cyan 700
                secondary: '#cffafe',    // Cyan 100
                accent: '#06b6d4',       // Cyan 500
                neutral: '#ecfeff',      // Cyan 50
                surface: '#ffffff',
                border: '#a5f3fc',
                textPrimary: '#155e75',
                textSecondary: '#0e7490',
                textOnPrimary: '#ffffff'
            }
        },
        {
            id: 'sunset_warmth',
            name: 'Sunset Warmth',
            colors: {
                primary: '#c2410c',      // Orange 700
                secondary: '#ffedd5',    // Orange 100
                accent: '#f97316',       // Orange 500
                neutral: '#fff7ed',      // Orange 50
                surface: '#ffffff',
                border: '#fed7aa',
                textPrimary: '#7c2d12',
                textSecondary: '#c2410c',
                textOnPrimary: '#ffffff'
            }
        },
        {
            id: 'royal_velvet',
            name: 'Royal Velvet',
            colors: {
                primary: '#4c1d95',      // Violet 900
                secondary: '#ede9fe',    // Violet 100
                accent: '#8b5cf6',       // Violet 500
                neutral: '#f5f3ff',      // Violet 50
                surface: '#ffffff',
                border: '#ddd6fe',
                textPrimary: '#2e1065',
                textSecondary: '#5b21b6',
                textOnPrimary: '#ffffff'
            }
        },
        {
            id: 'cherry_blossom',
            name: 'Cherry Blossom',
            colors: {
                primary: '#be185d',      // Pink 700
                secondary: '#fce7f3',    // Pink 100
                accent: '#ec4899',       // Pink 500
                neutral: '#fdf2f8',      // Pink 50
                surface: '#ffffff',
                border: '#fbcfe8',
                textPrimary: '#831843',
                textSecondary: '#be185d',
                textOnPrimary: '#ffffff'
            }
        }
    ],

    // 3. TYPOGRAPHY (Google Fonts Pairings)
    fonts: [
        {
            id: 'modern_sans',
            name: 'Modern Sans',
            heading: 'Inter',
            body: 'Inter',
            desc: 'Clean, neutral, and highly readable.',
            url: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
        },
        {
            id: 'elegant_serif',
            name: 'Elegant Serif',
            heading: 'Playfair Display',
            body: 'Lato',
            desc: 'Sophisticated and trusted.',
            url: 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Playfair+Display:wght@400;600;700&display=swap'
        },
        {
            id: 'tech_mono',
            name: 'Tech Mono',
            heading: 'Space Grotesk',
            body: 'Inter',
            desc: 'Futuristic and forward-thinking.',
            url: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Space+Grotesk:wght@500;700&display=swap'
        },
        {
            id: 'friendly_round',
            name: 'Friendly',
            heading: 'Quicksand',
            body: 'Nunito',
            desc: 'Approachable and warm.',
            url: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600&family=Quicksand:wght@500;700&display=swap'
        },
        {
            id: 'bold_impact',
            name: 'Bold Impact',
            heading: 'Oswald',
            body: 'Roboto',
            desc: 'Strong, impactful headlines.',
            url: 'https://fonts.googleapis.com/css2?family=Oswald:wght@500;700&family=Roboto:wght@400;500&display=swap'
        }
    ]
};

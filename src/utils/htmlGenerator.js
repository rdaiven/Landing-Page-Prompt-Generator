import { getDataWithDefaults } from './dataHelpers'
import { THEME_CONFIG } from './themeConfig'
import { getEffectiveImage } from './mediaUtils'
import { generateHeroHTML } from '../components/sections/HeroSection'
import { generateHeaderHTML } from '../components/sections/HeaderSection'
import { generateFAQHTML } from '../components/sections/FAQSection'
import { generateTrustPrimerHTML } from '../components/sections/TrustPrimerSection'
import { generateProblemConcernHTML } from '../components/sections/ProblemConcernSection'
import { generateTreatmentLogicHTML } from '../components/sections/TreatmentLogicSection'
import { generateProcedureGuideHTML } from '../components/sections/ProcedureGuideSection'
import { generateClinicDetailsHTML } from '../components/sections/ClinicDetailsSection'
import { generateSocialProofHTML } from '../components/sections/SocialProofSection'
import { generateConversionHTML } from '../components/sections/ConversionSection'
import { generateFooterHTML } from '../components/sections/FooterSection'

/**
 * Generates complete HTML for a landing page based on form data
 */
export const generateCompleteHTML = (formData) => {
    const { brandName, primaryColor, secondaryColor, accentColor, neutralColor, sections } = formData

    const theme = { primaryColor, secondaryColor, accentColor, neutralColor, brandName }

    // Generate HTML for each enabled section
    const sectionsHTML = Object.entries(sections)
        .filter(([_, sectionData]) => sectionData.enabled)
        .map(([key, sectionData]) => generateSectionHTML(key, sectionData, theme))
        .join('\n\n')



    // Calculate Font
    const fontPairing = THEME_CONFIG.fonts.find(f => f.id === formData.fontPairing) || THEME_CONFIG.fonts[0];
    const fontUrl = fontPairing.url;
    const headingFont = fontPairing.heading;
    const bodyFont = fontPairing.body;

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${brandName || 'Landing Page'}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="${fontUrl}" rel="stylesheet">
    <style>
        :root {
            --primary: ${primaryColor || '#000000'};
            --secondary: ${secondaryColor || '#ffffff'};
            --accent: ${accentColor || '#3b82f6'};
            --neutral: ${neutralColor || '#f3f4f6'};
            
            /* Extended Palette Support if needed */
            --color-primary: var(--primary);
            --color-secondary: var(--secondary);
            --color-accent: var(--accent);
        }
        body {
            font-family: '${bodyFont}', sans-serif;
        }
        h1, h2, h3, h4, h5, h6 {
            font-family: '${headingFont}', sans-serif;
        }
    </style>
</head>
<body class="bg-slate-50">
${sectionsHTML}
</body>
</html>`
}

/**
 * Generates HTML for a single section
 */
export const generateSectionHTML = (sectionKey, sectionData, theme) => {
    const { layout, data, styles } = sectionData

    // Merge user data with defaults to ensure HTML output matches Visual Preview
    const dataWithDefaults = getDataWithDefaults(sectionKey, layout, data)

    const generators = {
        header: generateHeaderHTML,
        hero: generateHeroHTML,
        trustPrimer: generateTrustPrimerHTML,
        problemConcern: generateProblemConcernHTML,
        treatmentLogic: generateTreatmentLogicHTML,
        procedureGuide: generateProcedureGuideHTML,
        clinicDetails: generateClinicDetailsHTML,
        faq: generateFAQHTML,
        socialProof: generateSocialProofHTML,
        conversion: generateConversionHTML,
        footer: generateFooterHTML
    }

    const generator = generators[sectionKey]
    if (!generator) return `<!-- Section ${sectionKey} not implemented -->`

    // Pass styles to generator
    return generator(layout, dataWithDefaults, theme, styles)
}

// ============================================================
// ALL SECTION GENERATORS ARE NOW IMPORTED FROM THEIR RESPECTIVE FILES
// This implements the hybrid architecture where HTML generation
// is co-located with React components
// ============================================================

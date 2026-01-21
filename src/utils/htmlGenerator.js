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

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${brandName || 'Landing Page'}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary: ${primaryColor || '#000000'};
            --secondary: ${secondaryColor || '#ffffff'};
            --accent: ${accentColor || '#3b82f6'};
            --neutral: ${neutralColor || '#f3f4f6'};
        }
        body {
            font-family: 'Inter', sans-serif;
        }
        h1, h2, h3, h4, h5, h6 {
            font-family: 'Playfair Display', serif;
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
    const { layout, data } = sectionData

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

    return generator(layout, data, theme)
}

// ============================================================
// ALL SECTION GENERATORS ARE NOW IMPORTED FROM THEIR RESPECTIVE FILES
// This implements the hybrid architecture where HTML generation
// is co-located with React components
// ============================================================

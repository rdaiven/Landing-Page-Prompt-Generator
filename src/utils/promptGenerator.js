export const generatePrompt = (data) => {
    const { brandName, topic, vibe, primaryColor, secondaryColor, audience, assets, sections } = data

    let p = `ACT AS A WORLD-CLASS CONVERSION COPYWRITER AND WEB DESIGNER.
  
GOAL: Create a HIGH-CONVERSION landing page for "${brandName || '[BRAND NAME]'}" focusing on "${topic || '[TOPIC/SERVICE]'}".
TARGET AUDIENCE: ${audience || 'General audience interested in ' + (topic || 'the brand')}
BRAND VIBE: ${vibe}
BRANDING COLORS: Primary: ${primaryColor}, Secondary: ${secondaryColor}
ASSETS TO USE:
${assets.filter(a => a.url).map(a => `- ${a.type.toUpperCase()}: ${a.url}`).join('\n') || 'None provided. Use relevant placeholders.'}

INSTRUCTIONS:
Generate a complete, comprehensive landing page mockup code (HTML/CSS) following the "SELF-BOOKING TEMPLATE - LONG" structure. 
Each section must adhere to the specific Goals and "Must Include" rules below.

---

`

    p += `0. HEADER / NAVIGATION (Layout: ${sections.header.layout})
- GOAL: distinct navigation that follows user or stays at top.
- MUST INCLUDE: Brand Logo, "Book Now" CTA Button (Highlighted).
- MOBILE BEHAVIOR:
  ${sections.header.layout === 'Smart Hide (Scroll Up to Show)'
            ? '- Implement "Smart Sticky" behavior: Header slides up/hides when scrolling down to maximize screen space for content. Header slides down/shows immediately when scrolling up to allow navigation.'
            : sections.header.layout === 'Always Sticky'
                ? '- Header MUST remain fixed/sticky at the top of the viewport at all times.'
                : '- Header checks in at top but scrolls away with content (Static).'}
- RESPONSIVENESS: On mobile, use a hamburger menu or simplified layout ensuring CTA is always visible/accessible (unless hidden by smart scroll).
${sections.header.content ? `- SPECIFIC CONTENT/COPY: ${sections.header.content}` : ''}

`

    if (sections.hero.enabled) {
        p += `1. HERO SECTION (Layout: ${sections.hero.layout})
- GOAL: Immediately answer “Is this for me, is this legit, and how much?”
- MUST INCLUDE: 
    - Outcome-driven headline (Describe result, NOT technology names).
    - Sub-headline (Brief treatment explanation).
    - Video (D2C, testimonial, or demo).
    - Primary CTA button.
    - Trust micro-signal (Optional).
${sections.hero.content ? `- SPECIFIC CONTENT/COPY: ${sections.hero.content}` : ''}

`
    }

    if (sections.trustPrimer.enabled) {
        p += `2. TRUST PRIMER (Layout: ${sections.trustPrimer.layout})
- GOAL: Provide instant assurance with 1-2 critical trust elements only.
- ELEMENTS: Pick 1-2 from: 5-star rating, patient count, or doctor credentials.
${sections.trustPrimer.content ? `- SPECIFIC CONTENT/COPY: ${sections.trustPrimer.content}` : ''}

`
    }

    if (sections.problemConcern.enabled) {
        p += `3. PROBLEM / CONCERN SECTION (Layout: ${sections.problemConcern.layout})
- GOAL: Confirm relevance filter. Diagnostic, not emotional or fear-based.
- RULES: 3–5 bullets only. No paragraphs. No medical jargon.
- TITLE: "Is this your concern?" or "This treatment may be right for you if..."
${sections.problemConcern.content ? `- SPECIFIC CONTENT/COPY: ${sections.problemConcern.content}` : ''}

`
    }

    if (sections.treatmentLogic.enabled) {
        p += `4. WHAT THE TREATMENT DOES (Layout: ${sections.treatmentLogic.layout})
- GOAL: Explain value with non-medical clarity. Outcome-focused simple biology.
- STRUCTURE: Outcome focused. Avoid marketing hype. Simple clarity.
${sections.treatmentLogic.content ? `- SPECIFIC CONTENT/COPY: ${sections.treatmentLogic.content}` : ''}

`
    }

    if (sections.procedureGuide.enabled) {
        p += `5. WHAT TO EXPECT (Layout: ${sections.procedureGuide.layout})
- GOAL: Reduce fear of the unknown.
- STRUCTURE: Before session (prep), During session (sensation/duration), After session (results/aftercare).
${sections.procedureGuide.content ? `- SPECIFIC CONTENT/COPY: ${sections.procedureGuide.content}` : ''}

`
    }

    if (sections.socialProof.enabled) {
        p += `6. SOCIAL PROOF SECTION (Non-Negotiable) (Layout: ${sections.socialProof.layout})
- GOAL: Reinforce credibility. One real proof > five fake ones.
- MINIMUM: Short testimonials (1-2 lines), Before & After thumbnails, Doctor endorsement video.
${sections.socialProof.content ? `- SPECIFIC CONTENT/COPY: ${sections.socialProof.content}` : ''}

`
    }

    if (sections.conversion.enabled) {
        p += `7. CONVERSION BLOCK (Layout: ${sections.conversion.layout})
- GOAL: Moment of commitment. Clear offer and logical CTA.
- MUST INCLUDE: Urgency copy (discounted slots or time-bound), CTA Button, Reassurance (e.g., 'No payment required').
${sections.conversion.content ? `- SPECIFIC CONTENT/COPY: ${sections.conversion.content}` : ''}

`
    }

    if (sections.clinicDetails.enabled) {
        p += `8. CLINIC DETAILS (Layout: ${sections.clinicDetails.layout})
- GOAL: Confirm legitimacy and demand.
- MUST INCLUDE: Clinic name, Neutral descriptor, Location (City), Visual proof (Interior, Exterior, Doctor-in-clinic), Operating signals (Mon-Sat, by appointment).
${sections.clinicDetails.content ? `- SPECIFIC CONTENT/COPY: ${sections.clinicDetails.content}` : ''}

`
    }

    if (sections.faq.enabled) {
        p += `9. FAQ — OBJECTION HANDLING ONLY (Layout: ${sections.faq.layout})
- GOAL: Remove final friction points (Safety, Pain, Sessions, Eligibility).
- RULE: Do NOT educate. Only answer silent objections stopping a book.
${sections.faq.content ? `- SPECIFIC CONTENT/COPY: ${sections.faq.content}` : ''}

`
    }

    if (sections.footer.enabled) {
        p += `10. FINAL DETAILS / FOOTER (Layout: ${sections.footer.layout})
- INCLUDE: Clinic name, Location, Medical disclaimer (light tone), Privacy/ToS.
${sections.footer.content ? `- SPECIFIC CONTENT/COPY: ${sections.footer.content}` : ''}

`
    }

    p += `---
DESIGN RULES:
- Use HSL colors based on the BRANDING COLORS provided.
- Typography: Use Playfair Display for headers and Inter for body.
- Contrast: Ensure accessibility and high-contrast for CTA buttons.
- Modern aesthetics: Subtle gradients, glassmorphism for containers, and smooth micro-animations.
- Mobile responsiveness is critical. ADOPT A MOBILE-FIRST APPROACH.
- CSS MUST be Mobile First: Define base styles for mobile (vertical stacking, 100% width) first, then use @media (min-width: 768px) { ... } to enhance for tablet/desktop.
- Ensure touch targets (buttons) are at least 44px height for mobile.
- Use Flexbox/Grid for layout. Default to single-column flex-col for mobile, then switch to multi-column grid/flex-row for larger screens.
- Avoid fixed widths. Use max-width and percentages/fractions.

---
SPECIFIC LAYOUT INSTRUCTIONS:
`

    // Helper to get specific design rules based on section and layout
    const getDesignRules = (section, layout) => {
        const rules = {
            hero: {
                'Split': 'LAYOUT: Mobile = Stacked (Image Top, Text Bottom). Desktop = 2-Column Grid (50/50). content-center.',
                'Centered': 'LAYOUT: Text centered in max-w-4xl container. Background image with heavy overlay or gradient fade.',
                'Video-First': 'LAYOUT: Video aspect-ratio 16:9 takes full width or 60% of viewport. Headline overlay or immediately below.'
            },
            trustPrimer: {
                'Short Strip': 'LAYOUT: Single row flex-wrap. Logos grayscale with opacity-50, hover:opacity-100.',
                'Logo Grid': 'LAYOUT: Simple grid. Mobile: 2 cols, Desktop: 4-6 cols. Gap-6.'
            },
            problemConcern: {
                'Bullets': 'STYLE: Standard checklist with checkmark icons. Vertical stack.',
                'Feature Grid': 'LAYOUT: Mobile: 1 col, Desktop: 3 col grid. Each concern in a card with icon.'
            },
            treatmentLogic: {
                'Simple': 'STYLE: Clean typography, ample whitespace. 1-col text focus.',
                'Detailed': 'STYLE: 2-col layout on desktop: Diagram/Image Left, Explanation Text Right.'
            },
            socialProof: {
                'Testimonials': 'LAYOUT: Carousel/Slider on Mobile. Grid of 3 cards on Desktop.',
                'Before & After': 'STYLE: Side-by-side comparison images. Slider handle if possible, else stacked images.'
            },
            conversion: {
                'Urgency': 'STYLE: Floating bottom bar or sticky component. Highlighted countdown timer.',
                'Benefit-Driven': 'LAYOUT: Split layout (Text Left, CTA Right). Focus on value proposition.'
            },
            clinicDetails: {
                'Grid': 'LAYOUT: 2x2 Grid for gallery. Contact info below.',
                'List': 'STYLE: Clean distinct rows for Location, Hours, Contact. Map embed full width.'
            },
            faq: {
                'Objection-Only': 'STYLE: Accordion style (details/summary tags). Minimalist borders.',
                'Comprehensive': 'LAYOUT: Categorized tabs or long scrolling list with jump links.'
            },
            footer: {
                'Minimal': 'STYLE: Simple centered branding and links. No background distraction.',
                'Detailed': 'LAYOUT: 4-column link grid. Newsletter signup form included.'
            }
        }
        return rules[section]?.[layout] ? `- DESIGN SPEC: ${rules[section][layout]}` : ''
    }

    // Iterate through sections to append specific design rules if available
    Object.keys(sections).forEach(key => {
        if (sections[key].enabled) {
            const rule = getDesignRules(key, sections[key].layout)
            if (rule) p += `${key.toUpperCase()}: ${rule}\n`
        }
    })


    return p
}

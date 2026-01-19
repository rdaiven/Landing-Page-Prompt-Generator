export const generatePrompt = (data) => {
    const { brandName, topic, vibe, primaryColor, secondaryColor, accentColor, neutralColor, audience, assets, sections } = data

    // Helper to format structured data into readable text for the prompt
    const formatSectionData = (data) => {
        if (!data || Object.keys(data).length === 0) return '';

        return Object.entries(data).map(([key, value]) => {
            if (key === 'imageUrl' && value) return `- IMAGE OVERRIDE: Use specific image at URL "${value}"`;
            if (key === 'videoUrl' && value) return `- VIDEO OVERRIDE: Use specific video at URL "${value}"`;
            if (key === 'icon' && value && value !== 'undefined') return `- ICON: Use Lucide icon "<${value} />"`;

            // Handle arrays (collections like testimonials)
            if (Array.isArray(value)) {
                return `- ${key.toUpperCase()}:\n` + value.map(item =>
                    `  * ` + Object.entries(item).map(([k, v]) => {
                        if (k === 'icon' && v) return `Icon: <${v} />`;
                        return `${k}: "${v || `[Generate high-quality ${k} content based on topic: ${topic}]`}"`
                    }).join(', ')
                ).join('\n');
            }
            // Handle regular strings/text
            return `- ${key.toUpperCase()}: "${value || `[GENERATE high-converting copy for ${key} relevant to ${topic || 'the brand'}]`}"`;
        }).join('\n');
    }

    // Helper to get styling instructions
    const getStyleInstruction = (sectionObj) => {
        if (!sectionObj.styles) return '';
        let s = '';
        const { backgroundColor, textColor } = sectionObj.styles;
        if (backgroundColor) s += `\n- BACKGROUND COLOR: Force background to '${backgroundColor}' theme color.`;
        if (textColor) s += `\n- TEXT COLOR: Force text color to '${textColor}'.`;
        return s;
    }

    // Helper to infer vibe from color if missing
    const getVibeFromColor = (hex) => {
        if (!hex) return 'Professional & Trustworthy';
        // Simple hex analysis
        const c = hex.substring(1);      // strip #
        const rgb = parseInt(c, 16);   // convert rrggbb to decimal
        const r = (rgb >> 16) & 0xff;  // extract red
        const g = (rgb >> 8) & 0xff;  // extract green
        const b = (rgb >> 0) & 0xff;  // extract blue

        // Simple dominant color logic
        if (r > g && r > b) return 'Warm, Energetic, & Bold';
        if (b > r && b > g) return 'Calm, Professional, & Medical';
        if (g > r && g > b) return 'Natural, Organic, & Serene';
        if (r > 200 && g > 200 && b > 200) return 'Clean, Minimalist, & Airy';
        if (r < 50 && g < 50 && b < 50) return 'Luxury, Exclusive, & Modern';
        return 'Professional & Balanced';
    }

    const finalVibe = vibe || getVibeFromColor(primaryColor);
    const finalBrand = brandName || 'The Clinic';
    const finalTopic = topic || 'Aesthetic Treatments';

    let p = `ACT AS A WORLD-CLASS CONVERSION COPYWRITER AND WEB DESIGNER.
  
GOAL: Create a HIGH-CONVERSION landing page for "${finalBrand}" focusing on "${finalTopic}".
TARGET AUDIENCE: ${audience || 'General audience interested in ' + finalTopic}
BRAND VIBE: ${finalVibe}
BRANDING COLORS: Primary: ${primaryColor || 'AI Decision'}, Secondary: ${secondaryColor || 'AI Decision'}, Accent: ${accentColor || 'AI Decision'}, Neutral: ${neutralColor || 'AI Decision'}
ASSETS TO USE:
${assets.filter(a => a.url).map(a => `- ${a.type.toUpperCase()}: ${a.url}`).join('\n') || 'None provided. Use relevant placeholders.'}

INSTRUCTIONS:
Generate a complete, comprehensive landing page mockup code (HTML/CSS) following the "SELF-BOOKING TEMPLATE - LONG" structure. 
Each section must adhere to the specific Goals and "Must Include" rules below.

IMPORTANT: "STRICT LAYOUT COMPLIANCE"
- You must follow the defined "DESIGN SPEC" for each section exactly.
- If a section says "Split Layout", do NOT make it centered.
- If a section says "Grid", do NOT make it a list.
- Do NOT hallucinate new layouts. Stick to the requested structure.
- If data fields are marked [GENERATE...], you MUST write creative, high-quality, conversion-focused copy for that slot. Do not leave it as a placeholder.

---

`

    // Helper to get specific design rules based on section and layout
    const getDesignRules = (section, layout) => {
        const rules = {
            hero: {
                'Split': 'LAYOUT: Mobile = Stacked (Image Top, Text Bottom). Desktop = 2-Column Grid (50/50). content-center. Background color: Secondary.',
                'Centered': 'LAYOUT: Text centered in max-w-4xl container. Background image with heavy overlay or gradient fade.',
                'Video-First': 'LAYOUT: Video aspect-ratio 16:9 takes full width or 60% of viewport. Headline overlay or immediately below.',
                'Full Width': 'LAYOUT: Full viewport height (100vh) background image with semi-transparent dark overlay. White text centered over image.',
                'Minimal': 'LAYOUT: High-end editorial style. Left-aligned text, ample whitespace. Small decorative visual or color block instead of large hero image.'
            },
            trustPrimer: {
                'Short Strip': 'LAYOUT: Single row flex-wrap. Logos grayscale with opacity-50, hover:opacity-100.',
                'Logo Grid': 'LAYOUT: Simple grid. Mobile 2-cols, Desktop 4-cols. Center logos vertically.'
            },
            problemConcern: {
                'Bullets': 'STYLE: Standard checklist with checkmark icons. Vertical stack.',
                'Feature Grid': 'LAYOUT: Card grid style. Icon top-left, bold title, light text description. Mobile 1-col, Desktop 3-col.'
            },
            treatmentLogic: {
                'Simple': 'STYLE: Clean typography, ample whitespace. 1-col text focus.',
                'Detailed Split': 'LAYOUT: Split 50/50. Left: Benefits text + visual bullets. Right: Technical diagram or illustration.',
                'Bento Grid': 'LAYOUT: Grid of boxy "bento" style cards of varying sizes (spans). Rounded corners, partial borders. Modern tech aesthetic.',
                'Feature Cards': 'LAYOUT: Horizontal row of equal height cards. Icon focus. Minimalist borders.',
                'Interactive Hotspots': 'LAYOUT: Central large image with absolute positioned "Hotspot" dots. Hovering usually reveals tooltips (describe as such).'
            },
            procedureGuide: {
                '3-Step': 'LAYOUT: 3 simple columns. Numbered circle (1, 2, 3) centered above text.',
                'Timeline': 'LAYOUT: Vertical timeline with connecting line. Alternating content or Left-aligned with line on left.',
                'Vertical Tabs': 'LAYOUT: Left side list of tabs/steps, Right side content panel that changes. (Implement as standard flex/grid for static preview).',
                'Masonry Steps': 'LAYOUT: Masonry layout (columns count depends on screen size). Fluid logical flow.',
                'Carousel Steps': 'LAYOUT: Swipeable cards for mobile. Horizontal scroll snap. Progress dots.'
            },
            socialProof: {
                'Grid': 'LAYOUT: Responsive Grid (Mobile 1-col, Desktop 3-col). Cards with shadow-sm and rounded corners.',
                'Carousel': 'LAYOUT: Horizontal scrolling container (overflow-x-auto). Cards snap to center. Use JS for nav buttons.',
                'Testimonials': 'LAYOUT: Simple vertical list or grid. Focus on readability.',
                'Before & After': 'STYLE: Side-by-side comparison images. Slider handle if possible, else stacked images.',
                'Wall of Love': 'LAYOUT: Dense masonry grid of tweets/reviews. Varying heights. "Infinite scroll" feel.',
                'Video Highlight': 'LAYOUT: Large featured video player + row of smaller thumbnails below.',
                'Stat-Backed Trust': 'LAYOUT: Row of large numbers (Typography focus) with explanatory text below. Icons optional.'
            },
            conversion: {
                'Urgency': 'STYLE: Floating bottom bar or sticky component. Highlighted countdown timer.',
                'Benefit-Driven': 'LAYOUT: Split layout (Text Left, CTA Right). Focus on value proposition.',
                'Split Booking': 'LAYOUT: 50/50 Split. Image on one side (warm reception), Form/CTA on other.',
                'Sticky Bar': 'LAYOUT: Fixed position at bottom (or top) of screen. Slim bar with Text + Button.',
                'FloatUI - Simple': 'LAYOUT: Minimal clean centered section. Price badge -> Heading -> Subtext -> Button.'
            },
            clinicDetails: {
                'Grid': 'LAYOUT: 3-column grid for Location, Hours, Contact. Map below.',
                'Gallery Split': 'LAYOUT: 50/50 Split. Left: Large Interior Image (Mockup). Right: Details & Address.',
                'Map Overlay': 'LAYOUT: Full height background map. Floating card/modal on top (Left or Right) containing address/details.',
                'Minimal List': 'LAYOUT: Simple clean list, left aligned. Icons + Text. No heavy backgrounds.',
                'Business Card': 'LAYOUT: Centered "Card" style container. Shadowed. Contains Logo, Address, Contact. mimicking a physical card.'
            },
            faq: {
                'Objection-Only': 'STYLE: Simple list or grid of Q&A blocks.',
                'Accordion': 'STYLE: Interactive accordion. Click to expand answer. Border separators.',
                'Side-by-Side Category': 'LAYOUT: Left col: Category Menu. Right col: List of Questions for that category.',
                'Grid Cards': 'LAYOUT: Grid of simple cards, each containing one Q&A pair. Exposed answers (no click needed).',
                'Search + List': 'LAYOUT: Large Search Bar at top. List of popular questions below.'
            },
            footer: {
                'Minimal': 'STYLE: Simple centered branding and links. No background distraction.',
                'Detailed': 'LAYOUT: 4-column link grid. Newsletter signup form included.'
            }
        }
        return rules[section]?.[layout] ? `- DESIGN SPEC: ${rules[section][layout]}` : ''
    }

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
${getStyleInstruction(sections.header)}
SPECIFIC CONTENT:
${formatSectionData(sections.header.data)}

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
${getDesignRules('hero', sections.hero.layout)}
${getStyleInstruction(sections.hero)}
SPECIFIC CONTENT:
${formatSectionData(sections.hero.data)}

`
    }

    if (sections.trustPrimer.enabled) {
        p += `2. TRUST PRIMER (Layout: ${sections.trustPrimer.layout})
- GOAL: Provide instant assurance with 1-2 critical trust elements only.
- ELEMENTS: Pick 1-2 from: 5-star rating, patient count, or doctor credentials.
${getDesignRules('trustPrimer', sections.trustPrimer.layout)}
${getStyleInstruction(sections.trustPrimer)}
SPECIFIC CONTENT:
${formatSectionData(sections.trustPrimer.data)}

`
    }

    if (sections.problemConcern.enabled) {
        p += `3. PROBLEM / CONCERN SECTION (Layout: ${sections.problemConcern.layout})
- GOAL: Confirm relevance filter. Diagnostic, not emotional or fear-based.
- RULES: 3–5 bullets only. No paragraphs. No medical jargon.
- TITLE: "Is this your concern?" or "This treatment may be right for you if..."
${getDesignRules('problemConcern', sections.problemConcern.layout)}
${getStyleInstruction(sections.problemConcern)}
SPECIFIC CONTENT:
${formatSectionData(sections.problemConcern.data)}

`
    }

    if (sections.treatmentLogic.enabled) {
        p += `4. WHAT THE TREATMENT DOES (Layout: ${sections.treatmentLogic.layout})
- GOAL: Explain value with non-medical clarity. Outcome-focused simple biology.
- STRUCTURE: Outcome focused. Avoid marketing hype. Simple clarity.
${getDesignRules('treatmentLogic', sections.treatmentLogic.layout)}
${getStyleInstruction(sections.treatmentLogic)}
SPECIFIC CONTENT:
${formatSectionData(sections.treatmentLogic.data)}

`
    }

    if (sections.procedureGuide.enabled) {
        p += `5. WHAT TO EXPECT (Layout: ${sections.procedureGuide.layout})
- GOAL: Reduce fear of the unknown.
- STRUCTURE: Before session (prep), During session (sensation/duration), After session (results/aftercare).
${getStyleInstruction(sections.procedureGuide)}
SPECIFIC CONTENT:
${formatSectionData(sections.procedureGuide.data)}

`
    }

    if (sections.socialProof.enabled) {
        p += `6. SOCIAL PROOF SECTION (Non-Negotiable) (Layout: ${sections.socialProof.layout})
- GOAL: Reinforce credibility. One real proof > five fake ones.
- MINIMUM: Short testimonials (1-2 lines), Before & After thumbnails, Doctor endorsement video.
${getDesignRules('socialProof', sections.socialProof.layout)}
${getStyleInstruction(sections.socialProof)}
SPECIFIC CONTENT:
${formatSectionData(sections.socialProof.data)}

`
    }

    if (sections.conversion.enabled) {
        p += `7. CONVERSION BLOCK (Layout: ${sections.conversion.layout})
- GOAL: Moment of commitment. Clear offer and logical CTA.
- MUST INCLUDE: Urgency copy (discounted slots or time-bound), CTA Button, Reassurance (e.g., 'No payment required').
${getDesignRules('conversion', sections.conversion.layout)}
${getStyleInstruction(sections.conversion)}
SPECIFIC CONTENT:
${formatSectionData(sections.conversion.data)}

`
    }

    if (sections.clinicDetails.enabled) {
        p += `8. CLINIC DETAILS (Layout: ${sections.clinicDetails.layout})
- GOAL: Confirm legitimacy and demand.
- MUST INCLUDE: Clinic name, Neutral descriptor, Location (City), Visual proof (Interior, Exterior, Doctor-in-clinic), Operating signals (Mon-Sat, by appointment).
${getDesignRules('clinicDetails', sections.clinicDetails.layout)}
${getStyleInstruction(sections.clinicDetails)}
SPECIFIC CONTENT:
${formatSectionData(sections.clinicDetails.data)}

`
    }

    if (sections.faq.enabled) {
        p += `9. FAQ — OBJECTION HANDLING ONLY (Layout: ${sections.faq.layout})
- GOAL: Remove final friction points (Safety, Pain, Sessions, Eligibility).
- RULE: Do NOT educate. Only answer silent objections stopping a book.
${getDesignRules('faq', sections.faq.layout)}
${getStyleInstruction(sections.faq)}
SPECIFIC CONTENT:
${formatSectionData(sections.faq.data)}

`
    }

    if (sections.footer.enabled) {
        p += `10. FINAL DETAILS / FOOTER (Layout: ${sections.footer.layout})
- INCLUDE: Clinic name, Location, Medical disclaimer (light tone), Privacy/ToS.
${getDesignRules('footer', sections.footer.layout)}
${getStyleInstruction(sections.footer)}
SPECIFIC CONTENT:
${formatSectionData(sections.footer.data)}

`
    }

    p += `---
DESIGN RULES:
- STRICTLY USE the provided Hex Codes for colors. Do not hallucinate other colors.
  - Primary: ${primaryColor || 'Use default black/dark'}
  - Secondary: ${secondaryColor || 'Use default white/light'}
  - Accent: ${accentColor || 'Use default accent'}
  - Neutral: ${neutralColor || 'Use default gray'}
- Use HSL values derived from these hex codes for CSS variables if needed for transparency (e.g., --primary: 220 90% 56%; --primary-10: 220 90% 56% / 0.1;).
- Typography: Use Playfair Display for headers and Inter for body.
- Contrast: Ensure accessibility and high-contrast for CTA buttons.
- Modern aesthetics: Subtle gradients, glassmorphism for containers, and smooth micro-animations.
- Mobile responsiveness is critical. ADOPT A MOBILE-FIRST APPROACH.
- CSS MUST be Mobile First: Define base styles for mobile (vertical stacking, 100% width) first, then use @media (min-width: 768px) { ... } to enhance for tablet/desktop.
- Ensure touch targets (buttons) are at least 44px height for mobile.
- Use Flexbox/Grid for layout. Default to single-column flex-col for mobile, then switch to multi-column grid/flex-row for larger screens.
- Avoid fixed widths. Use max-width and percentages/fractions.
- CONTRAST RULE:
  - If the Background Color (Secondary/Primary) is DARK (e.g., Black, Navy), the Text Color MUST be WHITE.
  - If the Background Color is LIGHT, the Text Color MUST be BLACK or Dark Gray.
  - Do NOT create dark text on dark backgrounds.
`

    return p
}

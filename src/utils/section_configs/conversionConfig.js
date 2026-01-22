export const conversionConfig = {
    label: "Call to Action",
    description: "Final push to convert visitors.",
    icon: "🚀",
    layouts: {
        'High Urgency FOMO': {
            tag: "Urgency banner",
            description: "Full-width banner with urgency messaging.",
            fields: [
                { name: 'heading', label: 'Heading', type: 'text', default: 'Ready to start your journey?' },
                { name: 'subtext', label: 'Subtext', type: 'textarea', default: 'Limited availability for new patients this month.' },
                { name: 'ctaText', label: 'Button Text', type: 'text', default: 'Book My Appointment' }
            ]
        },
        'Best for Booking': {
            tag: "2-column split",
            description: "Image on one side, CTA form on other.",
            fields: [
                { name: 'heading', label: 'Headline', type: 'text', default: 'Secure Your Spot' },
                { name: 'subtext', label: 'Details', type: 'textarea', default: 'Our experts are ready to guide you.' },
                { name: 'ctaText', label: 'Button Label', type: 'text', default: 'Check Availability' },
                { name: 'imagePrompt', label: 'Image Description', type: 'text', default: 'Reception area' },
                { name: 'imageUrl', label: 'Image URL (Optional)', type: 'text', default: '' }
            ]
        },
        'Minimal Centered': {
            tag: "Clean Focus",
            description: "Centered text with plenty of whitespace.",
            fields: [
                { name: 'heading', label: 'Headline', type: 'text', default: 'Simple Steps to Beauty' },
                { name: 'subtext', label: 'Details', type: 'textarea', default: 'Join us today.' },
                { name: 'ctaText', label: 'Button Label', type: 'text', default: 'Get Started' }
            ]
        },
        'Split Screen Image': {
            tag: "Visual Impact",
            description: "Large feature image side-by-side with text.",
            fields: [
                { name: 'heading', label: 'Headline', type: 'text', default: 'See the Difference' },
                { name: 'subtext', label: 'Details', type: 'textarea', default: 'Advanced technology.' },
                { name: 'ctaText', label: 'Button Label', type: 'text', default: 'Learn More' },
                { name: 'imagePrompt', label: 'Image Description', type: 'text', default: 'Medical device' },
                { name: 'imageUrl', label: 'Image URL', type: 'text', default: '' }
            ]
        },
        'Dark Mode Emphasis': {
            tag: "Premium",
            description: "Dark background with high contrast text.",
            fields: [
                { name: 'heading', label: 'Headline', type: 'text', default: 'Exclusive Offer' },
                { name: 'subtext', label: 'Details', type: 'textarea', default: 'Only for new clients.' },
                { name: 'ctaText', label: 'Button Label', type: 'text', default: 'Claim Now' }
            ]
        },
        'Video Background': {
            tag: "Cinematic",
            description: "Background video loop for immersion.",
            fields: [
                { name: 'heading', label: 'Headline', type: 'text', default: 'Experience It' },
                { name: 'subtext', label: 'Details', type: 'textarea', default: 'Watch our story.' },
                { name: 'ctaText', label: 'Button Label', type: 'text', default: 'Play Video' },
                { name: 'imageUrl', label: 'Fallback Image URL', type: 'text', default: '' }
            ]
        },
        'Floating Card': {
            tag: "Modern",
            description: "Card element floating over background.",
            fields: [
                { name: 'heading', label: 'Headline', type: 'text', default: 'Special Package' },
                { name: 'subtext', label: 'Details', type: 'textarea', default: 'All inclusive.' },
                { name: 'ctaText', label: 'Button Label', type: 'text', default: 'View Package' }
            ]
        },
        'Feature List CTA': {
            tag: "Informative",
            description: "Bullet points outlining benefits next to CTA.",
            fields: [
                { name: 'heading', label: 'Headline', type: 'text', default: 'Why Choose Us?' },
                { name: 'subtext', label: 'Details', type: 'textarea', default: 'Top reasons.' },
                { name: 'ctaText', label: 'Button Label', type: 'text', default: 'Book Now' }
            ]
        },
        'Countdown Timer': {
            tag: "Urgency",
            description: "Visual countdown timer for timed offers.",
            fields: [
                { name: 'heading', label: 'Headline', type: 'text', default: 'Flash Sale' },
                { name: 'subtext', label: 'Details', type: 'textarea', default: 'Ends soon.' },
                { name: 'ctaText', label: 'Button Label', type: 'text', default: 'Grab Deal' }
            ]
        },
        'Review-Backed CTA': {
            tag: "Trust",
            description: "CTA combined with star rating or testimonial.",
            fields: [
                { name: 'heading', label: 'Headline', type: 'text', default: 'Join 500+ Happy Patients' },
                { name: 'subtext', label: 'Details', type: 'textarea', default: 'Risk free consultation.' },
                { name: 'ctaText', label: 'Button Label', type: 'text', default: 'Book Free Consult' }
            ]
        }
    }
}

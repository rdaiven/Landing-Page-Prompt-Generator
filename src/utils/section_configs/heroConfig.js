export const heroConfig = {
    label: "Immediate Hook (Hero)",
    description: "First screen visitors see — headline, proof, and next step.",
    icon: "✨",
    layouts: {
        'High Converting': {
            tag: "2-column split",
            description: "Text on one side, image on the other. Best for booking.",
            fields: [
                { name: 'headline', label: 'Headline', type: 'text', default: 'Transform Your Look' },
                { name: 'subheadline', label: 'Subheadline', type: 'textarea', default: 'Experience world-class care and results.' },
                { name: 'ctaText', label: 'Primary Button', type: 'text', default: 'Book Consultation' },
                { name: 'imagePrompt', label: 'Image Description', type: 'text', default: 'Hero Image' },
                { name: 'imageUrl', label: 'Image URL (Optional)', type: 'text', default: '' }
            ]
        },
        'Modern & Bold': {
            tag: "Centered",
            description: "Single column, centered text with banner image below.",
            fields: [
                { name: 'headline', label: 'Headline', type: 'text', default: 'The Future of Aesthetics' },
                { name: 'subheadline', label: 'Subheadline', type: 'textarea', default: 'Advanced aesthetics tailored to you.' },
                { name: 'ctaText', label: 'Primary Button', type: 'text', default: 'Schedule Visit' },
                { name: 'imagePrompt', label: 'Banner Image', type: 'text', default: 'Wide Banner' },
                { name: 'imageUrl', label: 'Image URL (Optional)', type: 'text', default: '' }
            ]
        },
        'Luxurious & Immersive': {
            tag: "Full-width bg",
            description: "Full-screen background image with text overlay.",
            fields: [
                { name: 'headline', label: 'Headline', type: 'text', default: 'Radiance Defined' },
                { name: 'subheadline', label: 'Subheadline', type: 'textarea', default: 'Luxury aesthetics for the modern individual.' },
                { name: 'ctaText', label: 'Primary Button', type: 'text', default: 'Discover More' },
                { name: 'imagePrompt', label: 'Background Image', type: 'text', default: 'Luxury texture' },
                { name: 'imageUrl', label: 'Image URL (Optional)', type: 'text', default: '' }
            ]
        },
        'Video Background': {
            tag: "Video hero",
            description: "Autoplay background video with text overlay for maximum impact.",
            fields: [
                { name: 'headline', label: 'Headline', type: 'text', default: 'Experience Excellence' },
                { name: 'subheadline', label: 'Subheadline', type: 'textarea', default: 'See the difference for yourself.' },
                { name: 'ctaText', label: 'Primary Button', type: 'text', default: 'Watch Our Story' },
                { name: 'videoUrl', label: 'Video URL', type: 'text', default: '' },
                { name: 'imagePrompt', label: 'Fallback Image', type: 'text', default: 'Video thumbnail' }
            ]
        },
        'Animated Gradient': {
            tag: "Gradient bg",
            description: "Moving color gradient background with centered content.",
            fields: [
                { name: 'headline', label: 'Headline', type: 'text', default: 'Bold. Beautiful. You.' },
                { name: 'subheadline', label: 'Subheadline', type: 'textarea', default: 'Unlock your potential.' },
                { name: 'ctaText', label: 'Primary Button', type: 'text', default: 'Start Journey' }
            ]
        },
        'Split Screen': {
            tag: "Dual content",
            description: "Two equal sections side-by-side with distinct content areas.",
            fields: [
                { name: 'leftHeadline', label: 'Left Headline', type: 'text', default: 'Expert Care' },
                { name: 'leftText', label: 'Left Text', type: 'textarea', default: 'Trusted by thousands' },
                { name: 'rightHeadline', label: 'Right Headline', type: 'text', default: 'Proven Results' },
                { name: 'rightText', label: 'Right Text', type: 'textarea', default: '98% satisfaction rate' },
                { name: 'ctaText', label: 'Primary Button', type: 'text', default: 'Learn More' },
                { name: 'imagePrompt', label: 'Left Image (Optional)', type: 'text', default: 'Doctor' },
                { name: 'imageUrl', label: 'Left Image URL (Optional)', type: 'text', default: '' }
            ]
        },
        'Minimal Clean': {
            tag: "Minimalist",
            description: "Maximum whitespace, minimal elements, elegant typography.",
            fields: [
                { name: 'headline', label: 'Headline', type: 'text', default: 'Simply Beautiful' },
                { name: 'subheadline', label: 'Subheadline', type: 'textarea', default: 'Less is more.' },
                { name: 'ctaText', label: 'Primary Button', type: 'text', default: 'Explore' }
            ]
        },
        'Cards Grid': {
            tag: "3-card layout",
            description: "Three feature cards below headline for multi-service clinics.",
            fields: [
                { name: 'headline', label: 'Main Headline', type: 'text', default: 'Your Beauty Destination' },
                { name: 'subheadline', label: 'Subheadline', type: 'textarea', default: 'Multiple treatments, one location.' },
                { name: 'card1Title', label: 'Card 1 Title', type: 'text', default: 'Face' },
                { name: 'card2Title', label: 'Card 2 Title', type: 'text', default: 'Body' },
                { name: 'card3Title', label: 'Card 3 Title', type: 'text', default: 'Skin' },
                { name: 'ctaText', label: 'Primary Button', type: 'text', default: 'Book Now' }
            ]
        },
        'Asymmetric Layout': {
            tag: "Offset design",
            description: "Text and image offset diagonally for modern feel.",
            fields: [
                { name: 'headline', label: 'Headline', type: 'text', default: 'Redefine Beauty' },
                { name: 'subheadline', label: 'Subheadline', type: 'textarea', default: 'On your terms.' },
                { name: 'ctaText', label: 'Primary Button', type: 'text', default: 'Get Started' },
                { name: 'imagePrompt', label: 'Image Description', type: 'text', default: 'Modern aesthetic' },
                { name: 'imageUrl', label: 'Image URL (Optional)', type: 'text', default: '' }
            ]
        },
        'Typed Animation': {
            tag: "Animated text",
            description: "Typing animation effect on headline for dynamic entrance.",
            fields: [
                { name: 'headline', label: 'Headline', type: 'text', default: 'Your Best Self Awaits' },
                { name: 'typedWords', label: 'Rotating Words (comma separated)', type: 'text', default: 'Beautiful, Confident, Radiant, Amazing' },
                { name: 'subheadline', label: 'Subheadline', type: 'textarea', default: 'Professional treatments, personal results.' },
                { name: 'ctaText', label: 'Primary Button', type: 'text', default: 'Book Consultation' },
                { name: 'imagePrompt', label: 'Background Image', type: 'text', default: 'Elegant background' },
                { name: 'imageUrl', label: 'Image URL (Optional)', type: 'text', default: '' }
            ]
        }
    }
}

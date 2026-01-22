export const heroConfig = {
    label: "Immediate Hook (Hero)",
    description: "First screen visitors see — headline, proof, and next step.",
    icon: "✨",
    layouts: {
        'High Converting': {
            tag: "2-column split",
            description: "Text on one side, image on the other. Best for booking.",
            fields: [
                { name: 'headline', label: 'What is the main message you want visitors to see first?', helperText: "This is your big hook. Keep it short and benefit-driven.", type: 'text', default: 'Achieve Your Dream Outcome' },
                { name: 'subheadline', label: 'How would you explain this in one supporting sentence?', helperText: "Expand on the promise or address a key objection.", type: 'textarea', default: 'Experience professional guidance and guaranteed results.' },
                { name: 'ctaText', label: 'What is the primary action they should take?', helperText: "Button label (e.g., Book Consultation, See Pricing).", type: 'text', default: 'Book Consultation' },
                { name: 'imagePrompt', label: 'What kind of image supports this message?', helperText: "Describe the visual mood or subject.", type: 'text', default: 'Professional Environment' },
                { name: 'imageUrl', label: 'Do you have a specific image URL? (Optional)', helperText: "Leave empty to use AI generation based on description.", type: 'text', default: '' }
            ]
        },
        'Modern & Bold': {
            tag: "Centered",
            description: "Single column, centered text with banner image below.",
            fields: [
                { name: 'headline', label: 'What is the main message?', helperText: "Center-aligned main title.", type: 'text', default: 'The Future of [Industry]' },
                { name: 'subheadline', label: 'How would you support this claim?', helperText: "Short supporting text.", type: 'textarea', default: 'Advanced solutions tailored to your unique needs.' },
                { name: 'ctaText', label: 'What should the button say?', helperText: "Primary call to action.", type: 'text', default: 'Start Today' },
                { name: 'imagePrompt', label: 'What image should span the width?', helperText: "Wide banner image description.", type: 'text', default: 'Modern Workspace' },
                { name: 'imageUrl', label: 'Specific Image URL (Optional)', helperText: "Leave empty to autogenerate.", type: 'text', default: '' }
            ]
        },
        'Luxurious & Immersive': {
            tag: "Full-width bg",
            description: "Full-screen background image with text overlay.",
            fields: [
                { name: 'headline', label: 'What is the main headline?', helperText: "Appears over the image.", type: 'text', default: 'Premium Excellence' },
                { name: 'subheadline', label: 'What is the supporting subtext?', helperText: "Keep it short for readability over image.", type: 'textarea', default: 'Uncompromising quality for those who expect the best.' },
                { name: 'ctaText', label: 'What is the button text?', helperText: "Call to action.", type: 'text', default: 'Discover More' },
                { name: 'imagePrompt', label: 'Describe the background atmosphere', helperText: "Mood, texture, or scene.", type: 'text', default: 'Abstract Luxury Texture' },
                { name: 'imageUrl', label: 'Background Image URL (Optional)', helperText: "Leave empty to autogenerate.", type: 'text', default: '' }
            ]
        },
        'Video Background': {
            tag: "Video hero",
            description: "Autoplay background video with text overlay for maximum impact.",
            fields: [
                { name: 'headline', label: 'What is the main headline?', helperText: "Bold text over video.", type: 'text', default: 'See The Difference' },
                { name: 'subheadline', label: 'What is the supporting message?', helperText: "Short text.", type: 'textarea', default: 'Watch how we transform possibilities into reality.' },
                { name: 'ctaText', label: 'What is the button text?', helperText: "Action button.", type: 'text', default: 'Get Started' },
                { name: 'videoUrl', label: 'Video URL (mp4/webm)', helperText: "Direct link to a video file.", type: 'text', default: '' },
                { name: 'imagePrompt', label: 'Fallback Image Description', helperText: "Shown if video fails to load.", type: 'text', default: 'Video thumbnail' }
            ]
        },
        'Animated Gradient': {
            tag: "Gradient bg",
            description: "Moving color gradient background with centered content.",
            fields: [
                { name: 'headline', label: 'What is the main headline?', helperText: "High-contrast text.", type: 'text', default: 'Bold. Simple. Effective.' },
                { name: 'subheadline', label: 'What is the supporting text?', helperText: "Subtext.", type: 'textarea', default: 'The smart choice for forward-thinking leaders.' },
                { name: 'ctaText', label: 'What is the button text?', helperText: "Action.", type: 'text', default: 'Join Now' }
            ]
        },
        'Split Screen': {
            tag: "Dual content",
            description: "Two equal sections side-by-side with distinct content areas.",
            fields: [
                { name: 'leftHeadline', label: 'What is the left-side headline?', helperText: "First value prop.", type: 'text', default: 'Expert Care' },
                { name: 'leftText', label: 'Left side details?', helperText: "Explanation.", type: 'textarea', default: 'Trusted by thousands' },
                { name: 'rightHeadline', label: 'What is the right-side headline?', helperText: "Second value prop.", type: 'text', default: 'Proven Results' },
                { name: 'rightText', label: 'Right side details?', helperText: "Explanation.", type: 'textarea', default: '98% satisfaction rate' },
                { name: 'ctaText', label: 'Button Text', helperText: "Shared CTA.", type: 'text', default: 'Learn More' },
                { name: 'imagePrompt', label: 'Left Image Description', helperText: "Visual for left side.", type: 'text', default: 'Doctor' },
                { name: 'imageUrl', label: 'Left Image URL', helperText: "Optional.", type: 'text', default: '' }
            ]
        },
        'Minimal Clean': {
            tag: "Minimalist",
            description: "Maximum whitespace, minimal elements, elegant typography.",
            fields: [
                { name: 'headline', label: 'What is the main message?', helperText: "Simple and clean.", type: 'text', default: 'Simply Beautiful' },
                { name: 'subheadline', label: 'Supporting text?', helperText: "Minimal explanation.", type: 'textarea', default: 'Less is more.' },
                { name: 'ctaText', label: 'Button text', helperText: "Small, elegant button.", type: 'text', default: 'Explore' }
            ]
        },
        'Cards Grid': {
            tag: "3-card layout",
            description: "Three feature cards below headline for multi-service clinics.",
            fields: [
                { name: 'headline', label: 'Main Headline', helperText: "Overall promise.", type: 'text', default: 'Your Beauty Destination' },
                { name: 'subheadline', label: 'Subheadline', helperText: "Supporting text.", type: 'textarea', default: 'Multiple treatments, one location.' },
                { name: 'card1Title', label: 'First Card Title', helperText: "Service 1 (e.g. Face).", type: 'text', default: 'Face' },
                { name: 'card2Title', label: 'Second Card Title', helperText: "Service 2 (e.g. Body).", type: 'text', default: 'Body' },
                { name: 'card3Title', label: 'Third Card Title', helperText: "Service 3 (e.g. Skin).", type: 'text', default: 'Skin' },
                { name: 'ctaText', label: 'Button Text', helperText: "Main CTA.", type: 'text', default: 'Book Now' }
            ]
        },
        'Asymmetric Layout': {
            tag: "Offset design",
            description: "Text and image offset diagonally for modern feel.",
            fields: [
                { name: 'headline', label: 'Main Headline', helperText: "Bold, modern title.", type: 'text', default: 'Redefine Beauty' },
                { name: 'subheadline', label: 'Subheadline', helperText: "Short text.", type: 'textarea', default: 'On your terms.' },
                { name: 'ctaText', label: 'Button Text', helperText: "Action.", type: 'text', default: 'Get Started' },
                { name: 'imagePrompt', label: 'Image Description', helperText: "Abstract or lifestyle image.", type: 'text', default: 'Modern aesthetic' },
                { name: 'imageUrl', label: 'Image URL', helperText: "Optional.", type: 'text', default: '' }
            ]
        },
        'Typed Animation': {
            tag: "Animated text",
            description: "Typing animation effect on headline for dynamic entrance.",
            fields: [
                { name: 'headline', label: 'Fixed Headline Part', helperText: "The static part of the title.", type: 'text', default: 'Your Best Self Awaits' },
                { name: 'typedWords', label: 'What words should rotate? (comma separated)', helperText: "e.g. 'Beautiful, Confident, Radiant'", type: 'text', default: 'Beautiful, Confident, Radiant, Amazing' },
                { name: 'subheadline', label: 'Subheadline', helperText: "Supporting text.", type: 'textarea', default: 'Professional treatments, personal results.' },
                { name: 'ctaText', label: 'Button Text', helperText: "Action.", type: 'text', default: 'Book Consultation' },
                { name: 'imagePrompt', label: 'Background Image', helperText: "Background visual.", type: 'text', default: 'Elegant background' },
                { name: 'imageUrl', label: 'Image URL', helperText: "Optional.", type: 'text', default: '' }
            ]
        }
    }
}

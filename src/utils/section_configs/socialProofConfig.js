export const socialProofConfig = {
    label: "Social Proof",
    description: "Show authority and trust.",
    icon: "🌟",
    layouts: {
        'Stats Grid': {
            tag: "Data Driven",
            description: "Grid of key statistics and numbers.",
            fields: [
                { name: 'heading', label: 'Section Heading', helperText: "e.g. Our Impact", type: 'text', default: 'Our Impact' },
                { name: 'stats', label: 'Statistics (JSON Format)', helperText: "Edit the data structure below.", type: 'textarea', default: '[{"value":"98%","label":"Satisfaction","small":"Based on surveys"},{"value":"50k+","label":"Patients","small":"Served annually"},{"value":"15","label":"Years","small":"Experience"}]' }
            ]
        },
        'Testimonial Cards': {
            tag: "Standard",
            description: "Classic grid of patient testimonials.",
            fields: [
                { name: 'heading', label: 'Section Heading', helperText: "Header.", type: 'text', default: 'Client Stories' }
            ]
        },
        'Logo Stripe': {
            tag: "Authority",
            description: "Row of logos from press or partners.",
            fields: [
                { name: 'heading', label: 'Heading (Optional)', helperText: "e.g. Trusted By", type: 'text', default: 'Trusted By' }
            ]
        },
        'Masonry Wall': {
            tag: "Community",
            description: "Dense wall of love from social media comments.",
            fields: [
                { name: 'heading', label: 'Section Heading', helperText: "Header.", type: 'text', default: 'Community Love' }
            ]
        },
        'Featured Review': {
            tag: "Spotlight",
            description: "Single large quote for maximum impact.",
            fields: [
                { name: 'heading', label: 'Section Heading', helperText: "Header.", type: 'text', default: '' }
            ]
        },
        'Carousel': {
            tag: "Interactive",
            description: "Swipeable row of reviews.",
            fields: [
                { name: 'heading', label: 'Section Heading', helperText: "Header.", type: 'text', default: 'Recent Feedback' }
            ]
        },
        'Trust Badges': {
            tag: "Credibility",
            description: "Row of icons showing certifications and awards.",
            fields: [
                { name: 'heading', label: 'Section Heading', helperText: "Header.", type: 'text', default: '' }
            ]
        },
        'Video Thumbnails': {
            tag: "Video",
            description: "Grid of video testimonial covers.",
            fields: [
                { name: 'heading', label: 'Section Heading', helperText: "Header.", type: 'text', default: 'Real Stories, Real People' }
            ]
        },
        'Comparison Table': {
            tag: "Logic",
            description: "Table comparing you vs competitors.",
            fields: [
                { name: 'heading', label: 'Section Heading', helperText: "Header.", type: 'text', default: 'Why Choose Us' }
            ]
        },
        'Large Number Impact': {
            tag: "Bold",
            description: "Massive number background for scale.",
            fields: [
                { name: 'heading', label: 'Main Text', helperText: "Short text.", type: 'text', default: 'Lives Transformed' }
            ]
        }
    }
}

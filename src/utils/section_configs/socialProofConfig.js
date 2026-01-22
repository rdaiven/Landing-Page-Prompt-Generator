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
                {
                    name: 'stats', label: 'Key Statistics', helperText: "Add 3-4 key metrics.", type: 'collection', min: 3, max: 4, fields: [
                        { name: 'value', label: 'Value', helperText: "e.g. 10k+", type: 'text', default: '10k+' },
                        { name: 'label', label: 'Label', helperText: "e.g. Clients", type: 'text', default: 'Clients' },
                        { name: 'small', label: 'Subtext', helperText: "e.g. Annually", type: 'text', default: 'Annually' }
                    ]
                }
            ],
            defaultData: {
                heading: 'Our Impact',
                stats: [
                    { value: '98%', label: 'Satisfaction', small: 'Based on surveys' },
                    { value: '50k+', label: 'Users', small: 'Worldwide' },
                    { value: '15', label: 'Years', small: 'Experience' }
                ]
            }
        },
        'Testimonial Cards': {
            tag: "Standard",
            description: "Classic grid of patient testimonials.",
            fields: [
                { name: 'heading', label: 'Section Heading', helperText: "Header.", type: 'text', default: 'Client Stories' },
                {
                    name: 'items', label: 'Testimonials', helperText: "Add 3-6 reviews.", type: 'collection', min: 3, max: 6, fields: [
                        { name: 'quote', label: 'Review Text', helperText: "The feedback.", type: 'textarea', default: 'Amazing service! Highly recommended.' },
                        { name: 'author', label: 'Author Name', helperText: "Who said it?", type: 'text', default: 'Jane Doe' },
                        { name: 'role', label: 'Role/Location', helperText: "e.g. CEO or Verified Customer", type: 'text', default: 'Verified Customer' }
                    ]
                }
            ],
            defaultData: {
                heading: 'Client Stories',
                items: [
                    { quote: 'This service completely transformed my business. The results were immediate and sustained.', author: 'Sarah J.', role: 'CEO, TechFlow' },
                    { quote: 'I was skeptical at first, but the team proved their expertise from day one.', author: 'Mike T.', role: 'Founder' },
                    { quote: 'The best investment we have made this year. Period.', author: 'Jessica R.', role: 'Director' }
                ]
            }
        },
        'Logo Stripe': {
            tag: "Authority",
            description: "Row of logos from press or partners.",
            fields: [
                { name: 'heading', label: 'Heading (Optional)', helperText: "e.g. Trusted By", type: 'text', default: 'Trusted By' },
                {
                    name: 'logos', label: 'Logos', helperText: "List brand names or upload (future).", type: 'collection', min: 4, max: 6, fields: [
                        { name: 'name', label: 'Brand Name', helperText: "e.g. Forbes", type: 'text', default: 'Brand Name' }
                    ]
                }
            ],
            defaultData: {
                heading: 'Trusted By Industry Leaders',
                logos: [{ name: 'Forbes' }, { name: 'TechCrunch' }, { name: 'Wired' }, { name: 'The Verge' }]
            }
        },
        'Masonry Wall': {
            tag: "Community",
            description: "Dense wall of love from social media comments.",
            fields: [
                { name: 'heading', label: 'Section Heading', helperText: "Header.", type: 'text', default: 'Community Love' },
                {
                    name: 'items', label: 'Comments', helperText: "Short social comments.", type: 'collection', min: 6, max: 9, fields: [
                        { name: 'quote', label: 'Comment', helperText: "Short text.", type: 'text', default: 'Love this!' },
                        { name: 'author', label: 'User', helperText: "Handle or Name.", type: 'text', default: '@user' }
                    ]
                }
            ],
            defaultData: {
                heading: 'Love from our Community',
                items: [
                    { quote: 'Can’t recommend this enough!', author: '@sarah_designs' },
                    { quote: 'Best decision ever.', author: '@mike_builds' },
                    { quote: 'Quality is unmatched.', author: '@jen_creative' },
                    { quote: 'Customer support is A+.', author: '@tom_tech' },
                    { quote: 'Just wow.', author: '@lisa_art' },
                    { quote: 'Game changer.', author: '@alex_dev' }
                ]
            }
        },
        'Featured Review': {
            tag: "Spotlight",
            description: "Single large quote for maximum impact.",
            fields: [
                { name: 'quote', label: 'The Quote', helperText: "Make it powerful.", type: 'textarea', default: 'This changed my life entirely.' },
                { name: 'author', label: 'Author', helperText: "Name.", type: 'text', default: 'Jane Doe' },
                { name: 'role', label: 'Role', helperText: "e.g. Verified Client", type: 'text', default: 'Verified Client' }
            ]
        },
        'Carousel': {
            tag: "Interactive",
            description: "Swipeable row of reviews.",
            fields: [
                { name: 'heading', label: 'Section Heading', helperText: "Header.", type: 'text', default: 'Recent Feedback' },
                {
                    name: 'items', label: 'Reviews', helperText: "Add 4-6 reviews.", type: 'collection', min: 4, max: 6, fields: [
                        { name: 'quote', label: 'Review', helperText: "Text.", type: 'textarea', default: 'Great experience.' },
                        { name: 'author', label: 'Author', helperText: "Name.", type: 'text', default: 'Customer' }
                    ]
                }
            ],
            defaultData: {
                heading: 'Recent Feedback',
                items: [
                    { quote: 'Professional and efficient.', author: 'Client A' },
                    { quote: 'Exceeded expectations.', author: 'Client B' },
                    { quote: 'Would hire again.', author: 'Client C' },
                    { quote: 'Five stars.', author: 'Client D' }
                ]
            }
        },
        'Trust Badges': {
            tag: "Credibility",
            description: "Row of icons showing certifications and awards.",
            fields: [
                { name: 'heading', label: 'Section Heading', helperText: "Header.", type: 'text', default: 'Our Certifications' },
                {
                    name: 'badges', label: 'Badges', helperText: "List awards.", type: 'collection', min: 3, max: 5, fields: [
                        { name: 'label', label: 'Badge Title', helperText: "e.g. FDA Approved", type: 'text', default: 'Award' },
                        { name: 'icon', label: 'Icon', helperText: "Select icon.", type: 'icon', default: 'Award' }
                    ]
                }
            ],
            defaultData: {
                heading: 'Our Certifications',
                badges: [
                    { label: 'Certified Pro', icon: 'CheckCircle' },
                    { label: 'Top Rated', icon: 'Star' },
                    { label: 'Secure', icon: 'Shield' },
                    { label: 'Verified', icon: 'UserCheck' }
                ]
            }
        },
        'Video Thumbnails': {
            tag: "Video",
            description: "Grid of video testimonial covers.",
            fields: [
                { name: 'heading', label: 'Section Heading', helperText: "Header.", type: 'text', default: 'Real Stories, Real People' },
                {
                    name: 'videos', label: 'Videos', helperText: "Add video placeholders.", type: 'collection', min: 2, max: 3, fields: [
                        { name: 'title', label: 'Video Title', helperText: "e.g. Sarah's Story", type: 'text', default: 'Success Story' },
                        { name: 'duration', label: 'Duration', helperText: "e.g. 2:30", type: 'text', default: '2:30' }
                    ]
                }
            ],
            defaultData: {
                heading: 'Real Stories, Real People',
                videos: [
                    { title: 'Case Study: Tech Corp', duration: '3:45' },
                    { title: 'Interview: Founder', duration: '5:20' },
                    { title: 'Client Reviews Compilation', duration: '1:30' }
                ]
            }
        },
        'Comparison Table': {
            tag: "Logic",
            description: "Table comparing you vs competitors.",
            fields: [
                { name: 'heading', label: 'Section Heading', helperText: "Header.", type: 'text', default: 'Why Choose Us' },
                {
                    name: 'features', label: 'Comparison Points', helperText: "List features.", type: 'collection', min: 3, max: 5, fields: [
                        { name: 'feature', label: 'Feature Name', helperText: "e.g. 24/7 Support", type: 'text', default: 'Feature' },
                        { name: 'us', label: 'We Have It?', helperText: "Yes/No text (or use icon logic).", type: 'text', default: 'Yes' },
                        { name: 'them', label: 'They Have It?', helperText: "Yes/No text.", type: 'text', default: 'No' }
                    ]
                }
            ],
            defaultData: {
                heading: 'Why Choose Us',
                features: [
                    { feature: 'Dedicated Support', us: 'Yes', them: 'No' },
                    { feature: 'Advanced Analytics', us: 'Yes', them: 'Extra Cost' },
                    { feature: 'Custom Branding', us: 'Yes', them: 'Limited' },
                    { feature: 'Unlimited Users', us: 'Yes', them: 'No' }
                ]
            }
        },
        'Large Number Impact': {
            tag: "Bold",
            description: "Massive number background for scale.",
            fields: [
                { name: 'number', label: 'The Big Number', helperText: "e.g. 1M+", type: 'text', default: '10,000+' },
                { name: 'label', label: 'Label', helperText: "e.g. Active Users", type: 'text', default: 'Lives Transformed' },
                { name: 'description', label: 'Description', helperText: "Short explanation.", type: 'textarea', default: 'Join the thousands of happy users who have rediscovered their confidence.' }
            ]
        }
    }
}

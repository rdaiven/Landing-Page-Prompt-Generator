export const trustPrimerConfig = {
    label: "Assurance Strip (Trust)",
    description: "Quick credibility statements right after the hero.",
    icon: "🏆",
    layouts: {
        'Fast to Scan': {
            tag: "Horizontal strip",
            description: "Single row of trust badges or ratings.",
            fields: [
                {
                    name: 'items', label: 'Trust Signals (e.g. "5-Star Rated", "FDA Approved")', type: 'collection', min: 3, max: 4, fields: [
                        { name: 'text', label: 'What is the trust signal?', type: 'text', default: '5.0 Rating' }
                    ]
                }
            ],
            defaultData: {
                items: [
                    { text: '★★★★★ 5.0 Rating' },
                    { text: 'Trusted by 1000+ Clients' },
                    { text: 'Certified Experts' }
                ]
            }
        },
        'Logo Showcase': {
            tag: "Media Authority",
            description: "Grid layout for partner logos or media features.",
            fields: [
                { name: 'heading', label: 'Context Header (e.g. "As Featured In")', type: 'text', default: 'As Featured In' },
                {
                    name: 'items', label: 'Logos/Badges', type: 'collection', min: 4, max: 6, fields: [
                        { name: 'alt', label: 'Organization Name', type: 'text', default: 'Media Outlet' },
                        { name: 'text', label: 'Label (if no logo)', type: 'text', default: '' }
                    ]
                }
            ],
            defaultData: {
                heading: 'As Featured In',
                items: [
                    { alt: 'Vogue', text: 'Vogue' },
                    { alt: 'Allure', text: 'Allure' },
                    { alt: 'Elle', text: 'Elle' },
                    { alt: 'Harper\'s Bazaar', text: 'Harper\'s Bazaar' }
                ]
            }
        },
        'Marquee Scroll': {
            tag: "Dynamic Movement",
            description: "Infinite scrolling loop of logos for high-energy brands.",
            fields: [
                { name: 'heading', label: 'Optional Header (e.g. "Trusted By")', type: 'text', default: '' },
                {
                    name: 'items', label: 'Scrolling Items', type: 'collection', min: 5, max: 10, fields: [
                        { name: 'text', label: 'Brand/Partner Name', type: 'text', default: 'Partner' }
                    ]
                }
            ],
            defaultData: {
                items: [{ text: 'Google' }, { text: 'Meta' }, { text: 'Forbes' }, { text: 'Inc' }, { text: 'Vogue' }, { text: 'Vanity Fair' }]
            }
        },
        'Key Metrics': {
            tag: "By the Numbers",
            description: "Highlight quantifiable success metrics to build logical trust.",
            fields: [
                {
                    name: 'stats', label: 'Key Statistics', type: 'collection', min: 3, max: 4, fields: [
                        { name: 'value', label: 'The Number (e.g. "10k+")', type: 'text', default: '98%' },
                        { name: 'label', label: 'What does this represent?', type: 'text', default: 'Satisfaction Rate' }
                    ]
                }
            ],
            defaultData: {
                stats: [{ value: '10k+', label: 'Happy Patients' }, { value: '15+', label: 'Years Experience' }, { value: '4.9/5', label: 'Average Rating' }]
            }
        },
        'Authority Badges': {
            tag: "Certifications",
            description: "Display official accreditations or security seals.",
            fields: [
                {
                    name: 'badges', label: 'Certifications', type: 'collection', min: 3, max: 5, fields: [
                        { name: 'title', label: 'Organization Name', type: 'text', default: 'Board Certified' },
                        { name: 'subtext', label: 'Small Detail (Optional)', type: 'text', default: 'Since 2010' }
                    ]
                }
            ],
            defaultData: {
                badges: [{ title: 'Board Certified' }, { title: 'FDA Approved' }, { title: 'Safety First' }]
            }
        },
        'Compact Rating': {
            tag: "Review Focus",
            description: "A simple, centralized star rating or review summary.",
            fields: [
                { name: 'rating', label: 'Aggregate Score (e.g. "4.9")', type: 'text', default: '4.9' },
                { name: 'totalReviews', label: 'Review Count (e.g. "500+ Reviews")', type: 'text', default: '500+ Verified Reviews' },
                { name: 'platform', label: 'Source Platform (e.g. "on Google")', type: 'text', default: 'on Google' }
            ]
        },
        'Doctor Credentials': {
            tag: "Expert Assurance",
            description: "Highlights the lead practitioner's top qualifications.",
            fields: [
                { name: 'name', label: 'Doctor/Practitioner Name', type: 'text', default: 'Dr. Sarah Smith' },
                { name: 'credential1', label: 'Primary Credential (e.g. "MD, FACS")', type: 'text', default: 'Double Board Certified' },
                { name: 'credential2', label: 'Secondary Credential (e.g. "Ivy League")', type: 'text', default: 'Top 1% Injector' }
            ]
        },
        'Press Mentions': {
            tag: "Quotable Authority",
            description: "Pull quotes from reputable media sources.",
            fields: [
                {
                    name: 'quotes', label: 'Media Snippets', type: 'collection', min: 2, max: 3, fields: [
                        { name: 'text', label: 'Short Quote Snippet', type: 'text', default: '"Best in class results"' },
                        { name: 'source', label: 'Publication Name', type: 'text', default: 'Vogue' }
                    ]
                }
            ],
            defaultData: {
                quotes: [{ text: '"Revolutionary"', source: 'Vogue' }, { text: '"The gold standard"', source: 'Harper\'s Bazaar' }]
            }
        },
        'Years of Excellence': {
            tag: "Heritage",
            description: "Emphasizes longevity and stability in the market.",
            fields: [
                { name: 'years', label: 'Number of Years', type: 'text', default: '15+' },
                { name: 'label', label: 'Context Text', type: 'text', default: 'Years of Excellence in Aesthetic Medicine' },
                { name: 'since', label: 'Established Year (Optional)', type: 'text', default: 'Est. 2008' }
            ]
        },
        'Medical Partners': {
            tag: "Professional Network",
            description: "Shows relationships with top medical brands (Allergan, Galderma, etc).",
            fields: [
                { name: 'heading', label: 'Section Header', type: 'text', default: 'Official Partners With' },
                {
                    name: 'partners', label: 'Partner Names', type: 'collection', min: 3, max: 5, fields: [
                        { name: 'name', label: 'Brand Name', type: 'text', default: 'Allergan' }
                    ]
                }
            ],
            defaultData: {
                partners: [{ name: 'Allergan' }, { name: 'Galderma' }, { name: 'Merz Aesthetics' }]
            }
        }
    }
}

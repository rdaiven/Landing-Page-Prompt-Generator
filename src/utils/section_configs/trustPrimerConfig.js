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
                    name: 'items', label: 'What are your top trust signals?', helperText: "Add 3-4 short proofs.", type: 'collection', min: 3, max: 4, fields: [
                        { name: 'text', label: 'Signal Text', helperText: "e.g. 5.0 Rating", type: 'text', default: '5.0 Rating' }
                    ]
                }
            ],
            defaultData: {
                items: [
                    { text: '★★★★★ 5.0 Rating' },
                    { text: 'Trusted by 1000+ Clients' },
                    { text: 'Certified Excellence' }
                ]
            }
        },
        'Logo Showcase': {
            tag: "Media Authority",
            description: "Grid layout for partner logos or media features.",
            fields: [
                { name: 'heading', label: 'Context Header', helperText: "e.g. As Featured In", type: 'text', default: 'As Featured In' },
                {
                    name: 'items', label: 'Logos/Badges', helperText: "Add media outlets or partners.", type: 'collection', min: 4, max: 6, fields: [
                        { name: 'alt', label: 'Organization Name', helperText: "Used for alt text.", type: 'text', default: 'Media Outlet' },
                        { name: 'text', label: 'Label (if no logo)', helperText: "Text fallback.", type: 'text', default: '' }
                    ]
                }
            ],
            defaultData: {
                heading: 'As Featured In',
                items: [
                    { alt: 'Industry Leader', text: 'Industry Leader' },
                    { alt: 'Global Press', text: 'Global Press' },
                    { alt: 'Top Review', text: 'Top Review' },
                    { alt: 'Awards', text: 'Awards' }
                ]
            }
        },
        'Marquee Scroll': {
            tag: "Dynamic Movement",
            description: "Infinite scrolling loop of logos for high-energy brands.",
            fields: [
                { name: 'heading', label: 'Optional Header', helperText: "e.g. Trusted By", type: 'text', default: '' },
                {
                    name: 'items', label: 'Scrolling Items', helperText: "Add 5-10 brands.", type: 'collection', min: 5, max: 10, fields: [
                        { name: 'text', label: 'Brand/Partner Name', helperText: "e.g. Google", type: 'text', default: 'Partner' }
                    ]
                }
            ],
            defaultData: {
                items: [{ text: 'Partner A' }, { text: 'Partner B' }, { text: 'Partner C' }, { text: 'Partner D' }, { text: 'Partner E' }, { text: 'Partner F' }]
            }
        },
        'Key Metrics': {
            tag: "By the Numbers",
            description: "Highlight quantifiable success metrics to build logical trust.",
            fields: [
                {
                    name: 'stats', label: 'Key Statistics', helperText: "Add 3-4 data points.", type: 'collection', min: 3, max: 4, fields: [
                        { name: 'value', label: 'The Number', helperText: "e.g. 10k+", type: 'text', default: '99%' },
                        { name: 'label', label: 'What does this represent?', helperText: "e.g. Satisfaction Rate", type: 'text', default: 'Client Satisfaction' }
                    ]
                }
            ],
            defaultData: {
                stats: [{ value: '10k+', label: 'Happy Clients' }, { value: '15+', label: 'Years Experience' }, { value: '4.9/5', label: 'Average Rating' }]
            }
        },
        'Authority Badges': {
            tag: "Certifications",
            description: "Display official accreditations or security seals.",
            fields: [
                {
                    name: 'badges', label: 'Certifications', helperText: "Add official seals.", type: 'collection', min: 3, max: 5, fields: [
                        { name: 'title', label: 'Organization Name', helperText: "e.g. ISO Certified", type: 'text', default: 'Certified Professional' },
                        { name: 'subtext', label: 'Small Detail (Optional)', helperText: "e.g. Since 2010", type: 'text', default: 'Since 2010' }
                    ]
                }
            ],
            defaultData: {
                badges: [{ title: 'Certified Pro' }, { title: 'Award Winner' }, { title: 'Industry Standard' }]
            }
        },
        'Compact Rating': {
            tag: "Review Focus",
            description: "A simple, centralized star rating or review summary.",
            fields: [
                { name: 'rating', label: 'Aggregate Score', helperText: "e.g. 4.9", type: 'text', default: '4.9' },
                { name: 'totalReviews', label: 'Review Count Text', helperText: "e.g. 500+ Verified Reviews", type: 'text', default: '500+ Verified Reviews' },
                { name: 'platform', label: 'Source Platform', helperText: "e.g. on Google", type: 'text', default: 'on Google' }
            ]
        },
        'Doctor Credentials': {
            tag: "Expert Assurance",
            description: "Highlights the lead practitioner's top qualifications.",
            fields: [
                { name: 'name', label: 'Expert/Leader Name', helperText: "Who is the expert?", type: 'text', default: 'Expert Name' },
                { name: 'credential1', label: 'Primary Credential', helperText: "e.g. Board Certified", type: 'text', default: 'Lead Specialist' },
                { name: 'credential2', label: 'Secondary Credential', helperText: "e.g. Top Rated", type: 'text', default: 'Award Winning' }
            ]
        },
        'Press Mentions': {
            tag: "Quotable Authority",
            description: "Pull quotes from reputable media sources.",
            fields: [
                {
                    name: 'quotes', label: 'Media Snippets', helperText: "Add 2-3 short quotes.", type: 'collection', min: 2, max: 3, fields: [
                        { name: 'text', label: 'Short Quote Snippet', helperText: "Keep it punchy.", type: 'text', default: '"Best in class results"' },
                        { name: 'source', label: 'Publication Name', helperText: "Who said it?", type: 'text', default: 'Industry Journal' }
                    ]
                }
            ],
            defaultData: {
                quotes: [{ text: '"Revolutionary approach"', source: 'Industry Journal' }, { text: '"The gold standard"', source: 'Top Publication' }]
            }
        },
        'Years of Excellence': {
            tag: "Heritage",
            description: "Emphasizes longevity and stability in the market.",
            fields: [
                { name: 'years', label: 'Number of Years', helperText: "e.g. 15+", type: 'text', default: '15+' },
                { name: 'label', label: 'Context Text', helperText: "e.g. Years of Excellence", type: 'text', default: 'Years of Excellence' },
                { name: 'since', label: 'Established Year (Optional)', helperText: "e.g. Est 2008", type: 'text', default: 'Est. 2008' }
            ]
        },
        'Medical Partners': {
            tag: "Professional Network",
            description: "Shows relationships with top industry brands.",
            fields: [
                { name: 'heading', label: 'Section Header', type: 'text', default: 'Official Partners With' },
                {
                    name: 'partners', label: 'Partner Names', helperText: "Add 3-5 partners.", type: 'collection', min: 3, max: 5, fields: [
                        { name: 'name', label: 'Brand Name', helperText: "e.g. Partner A", type: 'text', default: 'Partner Brand' }
                    ]
                }
            ],
            defaultData: {
                partners: [{ name: 'Partner Brand A' }, { name: 'Partner Brand B' }, { name: 'Partner Brand C' }]
            }
        }
    }
}

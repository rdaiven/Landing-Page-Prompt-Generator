
export const sectionConfigs = {
    header: {
        label: "Navigation Header",
        description: "Top bar with logo and primary action.",
        icon: "🧭",
        layouts: {
            'Sticky': {
                tag: "Fixed position",
                description: "Always visible — stays at the top as users scroll.",
                fields: [
                    { name: 'navLinks', label: 'Navigation Links (comma separated)', type: 'text', default: 'About, Services, FAQ' },
                    { name: 'ctaText', label: 'Header Button Text', type: 'text', default: 'Book Now' }
                ]
            },
            'Smart Hide': {
                tag: "Auto-hide",
                description: "Hides on scroll down, reveals on scroll up for clean reading.",
                fields: [
                    { name: 'navLinks', label: 'Navigation Links', type: 'text', default: 'About, Services, FAQ' },
                    { name: 'ctaText', label: 'Header Button Text', type: 'text', default: 'Book Now' }
                ]
            },
            'Centered Logo': {
                tag: "Centered layout",
                description: "Logo centered, navigation links on both sides.",
                fields: [
                    { name: 'navLinks', label: 'Navigation Links', type: 'text', default: 'Home, About, Services, Contact' },
                    { name: 'ctaText', label: 'Button Text', type: 'text', default: 'Get Started' }
                ]
            }
        }
    },
    hero: {
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
                    { name: 'ctaText', label: 'Primary Button', type: 'text', default: 'Learn More' }
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
    },
    trustPrimer: {
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
    },
    problemConcern: {
        label: "Problem / Relevance",
        description: "Help visitors feel understood by articulating their specific challenges.",
        icon: "🤔",
        layouts: {
            'Simple & Scannable': {
                tag: "List based",
                description: "A clear, bulleted list of common issues.",
                fields: [
                    { name: 'heading', label: 'Main Question (e.g. "Does this sound like you?")', type: 'text', default: 'Is this you?' },
                    {
                        name: 'items', label: 'Pain Points', type: 'collection', min: 3, max: 5, fields: [
                            { name: 'text', label: 'Describe the specific issue', type: 'text', default: 'Problem description' }
                        ]
                    }
                ],
                defaultData: {
                    heading: 'Does this sound familiar?',
                    items: [{ text: 'Tired of looking tired?' }, { text: 'Stubborn pockets of fat?' }, { text: 'Skin lacking radiance?' }]
                }
            },
            'Visual & Engaging': {
                tag: "Icon cards",
                description: "Cards with icons to visually represent each problem.",
                fields: [
                    { name: 'heading', label: 'Main Question', type: 'text', default: 'Whatever your concern, we can help.' },
                    {
                        name: 'items', label: 'Concern Cards', type: 'collection', min: 3, max: 4, fields: [
                            { name: 'title', label: 'Concern Name', type: 'text', default: 'Aging Skin' },
                            { name: 'description', label: 'How does it feel? (Short description)', type: 'textarea', default: 'Fine lines and lost volume.' }
                        ]
                    }
                ],
                defaultData: {
                    heading: 'Common Concerns We Treat',
                    items: [
                        { title: 'Fine Lines', description: 'Smoothing out early signs of aging.' },
                        { title: 'Skin Texture', description: 'Restoring a smooth, even complexion.' },
                        { title: 'Volume Loss', description: 'Replenishing youthful fullness.' }
                    ]
                }
            },
            'Agitation Scale': {
                tag: "Emotional Arc",
                description: "Visually moving from the 'Problem state' to the 'Solution state'.",
                fields: [
                    { name: 'problemHeading', label: 'The Struggle (Headline)', type: 'text', default: 'Frustrated by ineffective creams?' },
                    { name: 'problemText', label: 'The Struggle (Details)', type: 'textarea', default: 'You spend hundreds on skincare but see no real difference.' },
                    { name: 'solutionHeading', label: 'The Relief (Headline)', type: 'text', default: 'Real results, fast.' },
                    { name: 'solutionText', label: 'The Relief (Details)', type: 'textarea', default: 'Our clinical treatments go deeper than any cream can.' }
                ]
            },
            'Symptoms Grid': {
                tag: "Checklist",
                description: "A grid of checkboxes for visitors to self-identify symptoms.",
                fields: [
                    { name: 'heading', label: 'Header Question', type: 'text', default: 'Are you experiencing...' },
                    {
                        name: 'symptoms', label: 'Symptoms Checklist', type: 'collection', min: 4, max: 8, fields: [
                            { name: 'text', label: 'Symptom Description', type: 'text', default: 'Dull skin tone' }
                        ]
                    }
                ],
                defaultData: {
                    heading: 'Do you notice any of these?',
                    symptoms: [{ text: 'Dullness' }, { text: 'Uneven Texture' }, { text: 'Pigmentation' }, { text: 'Sagging' }, { text: 'Wrinkles' }, { text: 'Redness' }]
                }
            },
            'Empathy Statement': {
                tag: "Bold Statement",
                description: "A single, powerful statement that resonates with the user's core feeling.",
                fields: [
                    { name: 'statement', label: 'The "We Get It" Statement', type: 'textarea', default: 'You deserve to look as young as you feel.' },
                    { name: 'subtext', label: 'Supporting Reassurance', type: 'textarea', default: 'Aging is natural, but we can help you age on your terms.' }
                ]
            },
            'Comparison Table': {
                tag: "Us vs Others",
                description: "Compare 'Standard Solutions' (inadequate) vs 'Our Approach'.",
                fields: [
                    { name: 'badHeading', label: 'The Old Way (Heading)', type: 'text', default: 'Standard Facials' },
                    { name: 'badText', label: 'Why it fails', type: 'textarea', default: 'Relaxing but temporary results.' },
                    { name: 'goodHeading', label: 'Our Medical Approach', type: 'text', default: 'Clinical Results' },
                    { name: 'goodText', label: 'Why it works', type: 'textarea', default: 'Long-term cellular change.' }
                ]
            },
            'Interactive Quiz': {
                tag: "Engagement",
                description: "3 clickable cards asking 'Which one is you?'",
                fields: [
                    { name: 'question', label: 'Quiz Question', type: 'text', default: 'What is your primary goal?' },
                    { name: 'option1', label: 'Option 1 Label', type: 'text', default: 'Smooth Wrinkles' },
                    { name: 'option2', label: 'Option 2 Label', type: 'text', default: 'Improve Texture' },
                    { name: 'option3', label: 'Option 3 Label', type: 'text', default: 'Tighten Skin' }
                ]
            },
            'Persona Cards': {
                tag: "Identity",
                description: "Define specific patient archetypes so users say 'That's me'.",
                fields: [
                    {
                        name: 'personas', label: 'Patient Personas', type: 'collection', min: 2, max: 3, fields: [
                            { name: 'type', label: 'Archetype Name (e.g. "The Busy Mom")', type: 'text', default: 'The Professional' },
                            { name: 'desc', label: 'Description', type: 'text', default: 'Needs zero downtime.' }
                        ]
                    }
                ],
                defaultData: {
                    personas: [
                        { type: 'The Busy Professional', desc: 'Needs effective treatments with zero downtime.' },
                        { type: 'The Perfectionist', desc: 'Wants subtle, natural-looking refinement.' },
                        { type: 'The First-Timer', desc: 'Nervous but ready to start their journey.' }
                    ]
                }
            },
            'Myth vs Fact': {
                tag: "Education",
                description: "Debunk a common objection or misconception directly.",
                fields: [
                    { name: 'myth', label: 'The Myth', type: 'text', default: 'Myth: Botox makes you look frozen.' },
                    { name: 'fact', label: 'The Fact', type: 'textarea', default: 'Fact: Done right, you look rested and expressive, just smoother.' }
                ]
            },
            'Before/After Text': {
                tag: "Transformation Text",
                description: "Two contrasting text blocks: 'Now' vs 'Potential'.",
                fields: [
                    { name: 'beforeHeading', label: 'Current State Header', type: 'text', default: 'Feeling Invisible?' },
                    { name: 'beforeText', label: 'Current Feelings', type: 'textarea', default: 'Noticing changes in the mirror that don\'t reflect your energy.' },
                    { name: 'afterHeading', label: 'Future State Header', type: 'text', default: 'Get Your Glow Back' },
                    { name: 'afterText', label: 'Future Feelings', type: 'textarea', default: 'Walk into any room with renewed confidence.' }
                ]
            }
        }
    },

    treatmentLogic: {
        label: "How it Works / Key Benefits",
        description: "Explain the approach simply and highlight outcomes.",
        icon: "💡",
        layouts: {
            'Minimalist': {
                tag: "Single column",
                description: "Single column text layout. Direct and simple.",
                fields: [
                    { name: 'heading', label: 'Heading', type: 'text', default: 'Why Choose Us?' },
                    { name: 'description', label: 'Description', type: 'textarea', default: 'Our unique approach ensures safety and maximum efficacy.' },
                    { name: 'feature1', label: 'Feature 1', type: 'text', default: 'Advanced Technology' },
                    { name: 'feature2', label: 'Feature 2', type: 'text', default: 'Expert Care' },
                    { name: 'feature3', label: 'Feature 3', type: 'text', default: 'Personalized Plans' }
                ]
            },
            'Story First': {
                tag: "2-column split",
                description: "Two columns: text with benefits, plus diagram.",
                fields: [
                    { name: 'heading', label: 'Heading', type: 'text', default: 'The Science Behind It' },
                    { name: 'subheading', label: 'Subheading', type: 'text', default: 'Advanced Technology' },
                    { name: 'description', label: 'Deep Dive Text', type: 'textarea', default: 'Using controlled cooling to eliminate unwanted cells gently and effectively, without harming surrounding tissue.' },
                    { name: 'imagePrompt', label: 'Image Description', type: 'text', default: 'Diagram of process' },
                    { name: 'imageUrl', label: 'Image URL (Optional)', type: 'text', default: '' },
                    {
                        name: 'benefits', label: 'Key Benefits', type: 'collection', min: 3, max: 3, fields: [
                            { name: 'text', label: 'Benefit', type: 'text', default: 'Clinically Proven' }
                        ]
                    }
                ],
                defaultData: {
                    heading: 'The Science Behind It',
                    subheading: 'Advanced Technology',
                    description: 'Using controlled methods to target specific areas gently and effectively.',
                    imagePrompt: 'Scientific diagram of process',
                    benefits: [
                        { text: 'Permanent Reduction' },
                        { text: 'Non-Surgical & Safe' },
                        { text: 'Natural-Looking Results' }
                    ]
                }
            }
        }
    },
    treatmentLogic: {
        label: "How it Works / Key Benefits",
        description: "Explain the science or approach simply to build confidence.",
        icon: "💡",
        layouts: {
            'Minimalist': {
                tag: "Pure Text",
                description: "Single column text layout. Direct, simple, and confidence-inspiring.",
                fields: [
                    { name: 'heading', label: 'Main Benefit Heading', type: 'text', default: 'Why Choose Us?' },
                    { name: 'description', label: 'The "Secret Sauce" (Explanation)', type: 'textarea', default: 'Our unique approach ensures safety and maximum efficacy.' },
                    { name: 'feature1', label: 'Key Feature 1', type: 'text', default: 'Advanced Technology' },
                    { name: 'feature2', label: 'Key Feature 2', type: 'text', default: 'Expert Care' },
                    { name: 'feature3', label: 'Key Feature 3', type: 'text', default: 'Personalized Plans' }
                ]
            },
            'Story First': {
                tag: "Editorial",
                description: "Two columns: Rich narrative text + supporting visual.",
                fields: [
                    { name: 'heading', label: 'The Science Heading', type: 'text', default: 'The Science Behind It' },
                    { name: 'subheading', label: 'Sub-header', type: 'text', default: 'Advanced Technology' },
                    { name: 'description', label: 'Deep Dive Explanation', type: 'textarea', default: 'Using controlled cooling to eliminate unwanted cells gently and effectively.' },
                    { name: 'imagePrompt', label: 'Visual Description', type: 'text', default: 'Diagram of process' },
                    {
                        name: 'benefits', label: 'Key Benefit Points', type: 'collection', min: 3, max: 3, fields: [
                            { name: 'text', label: 'Benefit', type: 'text', default: 'Clinically Proven' }
                        ]
                    }
                ],
                defaultData: {
                    heading: 'The Science Behind It',
                    subheading: 'Advanced Technology',
                    description: 'Using controlled methods to target specific areas gently and effectively.',
                    benefits: [{ text: 'Permanent Reduction' }, { text: 'Non-Surgical & Safe' }, { text: 'Natural-Looking Results' }]
                }
            },
            'Step-by-Step Cards': {
                tag: "Process",
                description: "Three sequential cards explaining the mechanism.",
                fields: [
                    { name: 'heading', label: 'Process Heading', type: 'text', default: 'How It Works' },
                    {
                        name: 'steps', label: 'Mechanism Steps', type: 'collection', min: 3, max: 3, fields: [
                            { name: 'title', label: 'Phase Name', type: 'text', default: 'Target' },
                            { name: 'description', label: 'What happens?', type: 'textarea', default: 'We identify the area.' },
                            { name: 'icon', label: 'Icon', type: 'icon', default: 'Target' }
                        ]
                    }
                ],
                defaultData: {
                    heading: 'How It Works',
                    steps: [
                        { title: 'Target', description: 'Precision targeting of problem areas.', icon: 'Target' },
                        { title: 'Treat', description: 'Advanced energy delivery stimulating collagen.', icon: 'Zap' },
                        { title: 'Transform', description: 'Natural healing process reveals results.', icon: 'Sparkles' }
                    ]
                }
            },
            'Scientific Diagram': {
                tag: "Visual Heavy",
                description: "Large central diagram with annotated points.",
                fields: [
                    { name: 'heading', label: 'Diagram Title', type: 'text', default: 'Anatomy of Treatment' },
                    { name: 'imagePrompt', label: 'Diagram Description', type: 'text', default: 'Cross-section of skin layers' },
                    {
                        name: 'points', label: 'Annotation Points', type: 'collection', min: 3, max: 4, fields: [
                            { name: 'label', label: 'Point Label', type: 'text', default: 'Dermis Layer' },
                            { name: 'desc', label: 'Short Explanation', type: 'text', default: 'Where collagen lives' }
                        ]
                    }
                ],
                defaultData: {
                    heading: 'Deep Actions',
                    points: [
                        { label: 'Surface', desc: 'Remains cool and protected' },
                        { label: 'Target Zone', desc: 'Precision energy delivery' },
                        { label: 'Deep Structure', desc: 'Structural support renewal' }
                    ]
                }
            },
            'Mechanism of Action': {
                tag: "Animation Placeholder",
                description: "Space for a loop/video showing the biological process.",
                fields: [
                    { name: 'heading', label: 'Mechanism Heading', type: 'text', default: 'See It In Action' },
                    { name: 'description', label: 'Process Description', type: 'textarea', default: 'Watch how the treatment targets only the cells you want to remove.' },
                    { name: 'videoPrompt', label: 'Animation Description', type: 'text', default: '3D animation of fat cell reduction' }
                ]
            },
            'Interactive Tabs': {
                tag: "Clickable",
                description: "Tabbed interface to explore different aspects (Preparation, Action, Result).",
                fields: [
                    { name: 'heading', label: 'Explore the Process', type: 'text', default: 'Understanding the Tech' },
                    { name: 'tab1', label: 'Tab 1 Title', type: 'text', default: 'Preparation' },
                    { name: 'content1', label: 'Tab 1 Content', type: 'textarea', default: 'No anesthesia required.' },
                    { name: 'tab2', label: 'Tab 2 Title', type: 'text', default: 'The Action' },
                    { name: 'content2', label: 'Tab 2 Content', type: 'textarea', default: 'Painless energy pulses.' },
                    { name: 'tab3', label: 'Tab 3 Title', type: 'text', default: 'The Outcome' },
                    { name: 'content3', label: 'Tab 3 Content', type: 'textarea', default: 'Gradual, natural improvement.' }
                ]
            },
            'Benefit Stack': {
                tag: "List",
                description: "A stacked list of major technical benefits with detailed icons.",
                fields: [
                    { name: 'heading', label: 'Why It\'s Superior', type: 'text', default: 'The Clinical Advantage' },
                    {
                        name: 'benefits', label: 'Major Benefits', type: 'collection', min: 4, max: 5, fields: [
                            { name: 'title', label: 'Benefit Feature', type: 'text', default: 'FDA Cleared' },
                            { name: 'desc', label: 'Why it matters', type: 'text', default: 'Proven safety profile.' },
                            { name: 'icon', label: 'Icon', type: 'icon', default: 'Shield' }
                        ]
                    }
                ],
                defaultData: {
                    heading: 'The Clinical Advantage',
                    benefits: [
                        { title: 'No Downtime', desc: 'Return to work immediately.', icon: 'Clock' },
                        { title: 'fda Cleared', desc: 'Proven safety and efficacy.', icon: 'Shield' },
                        { title: 'Pain Free', desc: 'Most patients read or nap.', icon: 'Smile' },
                        { title: 'Lasting Results', desc: 'Once treated, cells are gone.', icon: 'Infinity' }
                    ]
                }
            },
            'Comparison (The Science)': {
                tag: "Contrast",
                description: "Compare 'Generic Method' vs 'Our Method' scientifically.",
                fields: [
                    { name: 'heading', label: 'The Difference', type: 'text', default: 'Why We Are Different' },
                    { name: 'ourMethod', label: 'Our Method Name', type: 'text', default: 'Cryolipolysis' },
                    { name: 'ourDesc', label: 'Our Mechanism', type: 'textarea', default: 'Selective cooling kills fat cells only.' },
                    { name: 'othersMethod', label: 'Other Methods', type: 'text', default: 'Laser/Heat' },
                    { name: 'othersDesc', label: 'Their Mechanism', type: 'textarea', default: 'Can damage surrounding tissue.' }
                ]
            },
            'Timeline Flow': {
                tag: "Horizontal",
                description: "A horizontal timeline showing the biological reaction over time.",
                fields: [
                    { name: 'heading', label: 'Biological Timeline', type: 'text', default: 'What Happens Inside' },
                    {
                        name: 'events', label: 'Timeline Events', type: 'collection', min: 4, max: 4, fields: [
                            { name: 'time', label: 'Time', type: 'text', default: 'Immedately' },
                            { name: 'desc', label: 'Reaction', type: 'text', default: 'Cooling applied' }
                        ]
                    }
                ],
                defaultData: {
                    heading: 'Biological Timeline',
                    events: [
                        { time: 'Day 0', desc: 'Treatment applied' },
                        { time: 'Day 3', desc: 'Cell breakdown begins' },
                        { time: 'Week 4', desc: 'Metabolic flushing' },
                        { time: 'Month 3', desc: 'Full reduction visible' }
                    ]
                }
            },
            'Expert Explainer': {
                tag: "Authority",
                description: "A 'Doctor's Perspective' layout explaining the logic.",
                fields: [
                    { name: 'heading', label: 'Heading', type: 'text', default: 'Doctor\'s Note' },
                    { name: 'doctorName', label: 'Expert Name', type: 'text', default: 'Dr. Smith' },
                    { name: 'explanation', label: 'The Explanation', type: 'textarea', default: 'This technology targets the structural causes of aging, not just the surface symptoms.' },
                    { name: 'quote', label: 'Pull Quote', type: 'text', default: '"It effectively resets the clock."' },
                    { name: 'imagePrompt', label: 'Doctor Photo', type: 'text', default: 'Doctor in lab coat' }
                ]
            }
        }
    },
    procedureGuide: {
        label: "Procedure Guide (Steps)",
        description: "Walk them through the journey so they know what to expect.",
        icon: "👣",
        layouts: {
            'Quick & Clear': {
                tag: "3-column steps",
                description: "Three columns with numbered steps.",
                fields: [
                    {
                        name: 'items', label: 'Steps', type: 'collection', min: 3, max: 3, fields: [
                            { name: 'title', label: 'Step Title', type: 'text', default: 'Consultation' },
                            { name: 'description', label: 'Step Description', type: 'textarea', default: 'We discuss your goals.' }
                        ]
                    }
                ],
                defaultData: {
                    items: [
                        { title: 'Consultation', description: 'We map out your plan.' },
                        { title: 'Treatment', description: 'Relax while we treat.' },
                        { title: 'Results', description: 'See changes in weeks.' }
                    ]
                }
            },
            'Detailed Journey': {
                tag: "Vertical timeline",
                description: "Vertical timeline with connecting line.",
                fields: [
                    { name: 'heading', label: 'Timeline Heading', type: 'text', default: 'Your Journey' },
                    {
                        name: 'items', label: 'Milestones', type: 'collection', min: 4, max: 5, fields: [
                            { name: 'time', label: 'Timeframe', type: 'text', default: 'Day 1' },
                            { name: 'title', label: 'Event', type: 'text', default: 'Consultation' },
                            { name: 'description', label: 'What happens', type: 'textarea', default: 'Initial mapping and photos.' }
                        ]
                    }
                ],
                defaultData: {
                    heading: 'Your Journey to Results',
                    items: [
                        { time: 'Day 1', title: 'Consultation', description: 'In-depth assessment.' },
                        { time: 'Day 7', title: 'Treatment', description: '1-hour session.' },
                        { time: 'Week 4', title: 'Early Changes', description: 'Noticeable difference.' },
                        { time: 'Week 12', title: 'Full Results', description: 'Optimal transformation.' }
                    ]
                }
            }
        }
    },
    clinicDetails: {
        label: "Visit Us (Details)",
        description: "Location, hours, and contact info.",
        icon: "🏥",
        layouts: {
            'Simple & Clean': {
                tag: "3-column grid",
                description: "Three columns for location, hours, contact.",
                fields: [
                    { name: 'location', label: 'Location Name', type: 'text', default: 'Beverly Hills Clinic' },
                    { name: 'address', label: 'Address', type: 'textarea', default: '123 Luxury Lane, CA 90210' },
                    { name: 'hours', label: 'Hours', type: 'text', default: 'Mon-Sat: 9am - 6pm' }
                ]
            },
            'With Interior View': {
                tag: "2-column split",
                description: "Image on one side, location details on other.",
                fields: [
                    { name: 'location', label: 'Location Name', type: 'text', default: '[Clinic Name] Medical Spa' },
                    { name: 'description', label: 'About the Space', type: 'textarea', default: 'A serene oasis in the city.' },
                    { name: 'address', label: 'Address', type: 'textarea', default: '123 Main St, City, State' },
                    { name: 'imagePrompt', label: 'Gallery Image', type: 'text', default: 'Interior of waiting room' },
                    { name: 'imageUrl', label: 'Image URL (Optional)', type: 'text', default: '' }
                ],
                defaultData: {
                    location: '[Clinic Name] Medical Spa',
                    description: 'Relax in our state-of-the-art facility featuring private suites.',
                    address: '123 Main St, City, State',
                    imagePrompt: 'Modern luxury spa interior'
                }
            }
        }
    },
    faq: {
        label: "Common Questions (FAQ)",
        description: "Overcome objections and clarify details.",
        icon: "❓",
        layouts: {
            'Space Saving': {
                tag: "Accordion",
                description: "Expandable Q&A to save vertical space.",
                fields: [
                    { name: 'heading', label: 'Heading', type: 'text', default: 'Frequently Asked Questions' },
                    {
                        name: 'items', label: 'Q&A Items', type: 'collection', min: 4, max: 6, fields: [
                            { name: 'question', label: 'Question', type: 'text', default: 'Cost?' },
                            { name: 'answer', label: 'Answer', type: 'textarea', default: 'Starts at $X.' }
                        ]
                    }
                ],
                defaultData: {
                    heading: 'Frequently Asked Questions',
                    items: [
                        { question: 'How much does it cost?', answer: 'Pricing depends on the treatment area.' },
                        { question: 'Is it permanent?', answer: 'Yes, treated cells are gone for good.' },
                        { question: 'Can I finance it?', answer: 'We offer payment plans.' },
                        { question: 'Who performs the procedure?', answer: 'Our licensed medical experts.' }
                    ]
                }
            }
        }
    },
    socialProof: {
        label: "Real Results (Proof)",
        description: "Testimonials and social proof to build trust.",
        icon: "💬",
        layouts: {
            'High Engagement': {
                tag: "Testimonial grid",
                description: "Grid layout of client testimonials.",
                fields: [
                    { name: 'heading', label: 'Section Heading', type: 'text', default: 'Real Patient Results' },
                    {
                        name: 'items', label: 'Testimonials', type: 'collection', min: 3, max: 6, fields: [ // Allow more for grid
                            { name: 'quote', label: 'Quote', type: 'textarea', default: 'Amazing results!' },
                            { name: 'author', label: 'Name', type: 'text', default: 'Jane D.' }
                        ]
                    }
                ],
                defaultData: {
                    heading: 'Real Patient Results',
                    items: [
                        { quote: 'Incredible results.', author: 'Sarah J.' },
                        { quote: 'Changed my life.', author: 'Mike T.' },
                        { quote: 'Highly recommend.', author: 'Emily R.' },
                        { quote: 'Best decision ever.', author: 'Anna K.' },
                        { quote: 'Professional staff.', author: 'David L.' },
                        { quote: 'Will come again.', author: 'Sophia M.' }
                    ]
                }
            },
            'Compact & Modern': {
                tag: "Carousel",
                description: "Horizontal scrolling testimonials.",
                fields: [
                    { name: 'heading', label: 'Section Heading', type: 'text', default: 'Client Love' },
                    {
                        name: 'items', label: 'Testimonials', type: 'collection', min: 3, max: 5, fields: [
                            { name: 'quote', label: 'Quote', type: 'textarea', default: 'Amazing results!' },
                            { name: 'author', label: 'Name', type: 'text', default: 'Jane D.' }
                        ]
                    }
                ],
                defaultData: {
                    heading: 'Client Love',
                    items: [
                        { quote: 'This place is magical.', author: 'Jessica' },
                        { quote: 'I feel 10 years younger.', author: 'Robert' },
                        { quote: 'Truly world class.', author: 'Amanda' }
                    ]
                }
            },
            'Best Conversion': {
                tag: "Stats row",
                description: "Row of large numbers with explanatory text.",
                fields: [
                    { name: 'heading', label: 'Heading', type: 'text', default: 'Proven Results' },
                    {
                        name: 'stats', label: 'Statistics', type: 'collection', min: 3, max: 4, fields: [
                            { name: 'value', label: 'Value', type: 'text', default: '98%' },
                            { name: 'label', label: 'Label', type: 'text', default: 'Satisfaction' },
                            { name: 'small', label: 'Small Text', type: 'text', default: 'Based on 500 reviews' }
                        ]
                    }
                ],
                defaultData: {
                    heading: 'Proven Results',
                    stats: [
                        { value: '98%', label: 'Patient Satisfaction', small: 'Based on post-op surveys' },
                        { value: '5k+', label: 'Procedures Performed', small: 'Since 2020' },
                        { value: '15', label: 'Industry Awards', small: 'For excellence in care' },
                        { value: '0', label: 'Wait Time', small: 'With scheduled appointments' }
                    ]
                }
            }
        }
    },
    conversion: {
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
            }
        }
    },
    footer: {
        label: "Footer",
        description: "Legal info and final links.",
        icon: "🏁",
        layouts: {
            'Minimal': {
                tag: "Single row",
                fields: [
                    { name: 'copyright', label: 'Copyright Text', type: 'text', default: '© 2024 All rights reserved.' },
                    { name: 'links', label: 'Footer Links', type: 'text', default: 'Privacy, Terms, Contact' }
                ]
            },
            'Detailed & Informative': {
                tag: "4-column grid",
                fields: [
                    { name: 'copyright', label: 'Copyright Text', type: 'text', default: '© 2024 Brand Name.' },
                    { name: 'column1', label: 'Column 1 Title', type: 'text', default: 'Company' },
                    { name: 'column2', label: 'Column 2 Title', type: 'text', default: 'Resources' },
                    { name: 'address', label: 'Address', type: 'textarea', default: '123 Main St, City, State' }
                ]
            }
        }
    }
}

export const getInitialSectionState = () => {
    const initialState = {};
    for (const [key, config] of Object.entries(sectionConfigs)) {
        const firstLayoutName = Object.keys(config.layouts)[0];
        const layoutConfig = config.layouts[firstLayoutName];

        // Build initial data from defaults
        const data = {};
        if (layoutConfig.defaultData) {
            Object.assign(data, layoutConfig.defaultData);
        }

        // Also fill in individual field defaults if not in defaultData
        if (layoutConfig.fields) {
            layoutConfig.fields.forEach(field => {
                if (field.type !== 'collection' && data[field.name] === undefined) {
                    data[field.name] = field.default || '';
                }
            });
        }

        initialState[key] = {
            enabled: true,
            layout: firstLayoutName,
            data: data,
            styles: {}
        };
    }
    return initialState;
};

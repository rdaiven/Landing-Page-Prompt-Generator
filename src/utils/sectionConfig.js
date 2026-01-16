
export const sectionConfigs = {
    header: {
        label: "Navigation Header",
        layouts: {
            'Sticky': {
                fields: [
                    { name: 'navLinks', label: 'Navigation Links (comma separated)', type: 'text', default: 'About, Services, FAQ' },
                    { name: 'ctaText', label: 'Header Button Text', type: 'text', default: 'Book Now' }
                ]
            },
            'Smart Hide (Scroll Up to Show)': {
                fields: [
                    { name: 'navLinks', label: 'Navigation Links', type: 'text', default: 'About, Services, FAQ' },
                    { name: 'ctaText', label: 'Header Button Text', type: 'text', default: 'Book Now' }
                ]
            }
        }
    },
    hero: {
        label: "Immediate Hook (Hero)",
        layouts: {
            'Split': {
                fields: [
                    { name: 'headline', label: 'Headline', type: 'text', default: 'Transform Your Look' },
                    { name: 'subheadline', label: 'Subheadline', type: 'textarea', default: 'Experience world-class care and results. The premier destination for your aesthetic needs.' },
                    { name: 'ctaText', label: 'Primary Button', type: 'text', default: 'Book Consultation' },
                    { name: 'imagePrompt', label: 'Image Description', type: 'text', default: 'Hero Image' }
                ]
            },
            'Centered': {
                fields: [
                    { name: 'headline', label: 'Headline', type: 'text', default: 'The Future of Aesthetics is Here' },
                    { name: 'subheadline', label: 'Subheadline', type: 'textarea', default: 'Advanced aesthetics tailored to your unique needs.' },
                    { name: 'ctaText', label: 'Primary Button', type: 'text', default: 'Schedule Your Visit' },
                    { name: 'imagePrompt', label: 'Banner Image Description', type: 'text', default: 'Wide Banner Image' }
                ]
            },
            'Video-First': {
                fields: [
                    { name: 'videoUrl', label: 'Video URL (Placeholder)', type: 'text', default: '' },
                    { name: 'headline', label: 'Headline', type: 'text', default: 'See Real Results' },
                    { name: 'ctaText', label: 'Primary Button', type: 'text', default: 'Watch Success Stories' }
                ]
            }
        }
    },
    trustPrimer: {
        label: "Assurance Strip (Trust)",
        layouts: {
            'Short Strip': {
                fields: [
                    {
                        name: 'items', label: 'Trust Items', type: 'collection', min: 3, max: 4, fields: [
                            { name: 'text', label: 'Text', type: 'text', default: '5.0 Rating' }
                        ]
                    }
                ],
                defaultData: {
                    items: [
                        { text: '★★★★★ 5.0 Rating' },
                        { text: 'Trusted by 1000+ Patients' },
                        { text: 'Certified Experts' }
                    ]
                }
            }
        }
    },
    problemConcern: {
        label: "Confirm Relevance (Filter)",
        layouts: {
            'Bullets': {
                fields: [
                    { name: 'heading', label: 'Section Heading', type: 'text', default: 'Is this for you?' },
                    {
                        name: 'items', label: 'Concerns', type: 'collection', min: 3, max: 5, fields: [
                            { name: 'text', label: 'Concern text', type: 'text', default: 'Struggling with stubborn fat?' }
                        ]
                    }
                ],
                defaultData: {
                    heading: 'Is this for you?',
                    items: [
                        { text: 'Struggling with stubborn fat?' },
                        { text: 'Want non-invasive solutions?' },
                        { text: 'Looking for quick recovery?' }
                    ]
                }
            }
        }
    },
    treatmentLogic: {
        label: "How it Works (Logic)",
        layouts: {
            'Simple': {
                fields: [
                    { name: 'heading', label: 'Heading', type: 'text', default: 'Why Choose Us?' },
                    { name: 'description', label: 'Description', type: 'textarea', default: 'Our unique approach ensures safety and maximum efficacy.' },
                    { name: 'feature1', label: 'Feature 1', type: 'text', default: 'Advanced Technology' },
                    { name: 'feature2', label: 'Feature 2', type: 'text', default: 'Expert Care' },
                    { name: 'feature3', label: 'Feature 3', type: 'text', default: 'Personalized Plans' }
                ]
            }
        }
    },
    procedureGuide: {
        label: "Procedure Guide (Steps)",
        layouts: {
            '3-Step': {
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
                        { title: 'Consultation', description: 'Metus poten. Urna sed in.' },
                        { title: 'Treatment', description: 'Metus poten. Urna sed in.' },
                        { title: 'Results', description: 'Metus poten. Urna sed in.' }
                    ]
                }
            }
        }
    },
    clinicDetails: {
        label: "Visit Us (Details)",
        layouts: {
            'Grid': {
                fields: [
                    { name: 'location', label: 'Location Name', type: 'text', default: 'Beverly Hills Clinic' },
                    { name: 'address', label: 'Address', type: 'textarea', default: '123 Luxury Lane, CA 90210' },
                    { name: 'hours', label: 'Hours', type: 'text', default: 'Mon-Sat: 9am - 6pm' }
                ]
            }
        }
    },
    faq: {
        label: "Common Questions (FAQ)",
        layouts: {
            'Objection-Only': {
                fields: [
                    {
                        name: 'items', label: 'Questions', type: 'collection', min: 3, max: 5, fields: [
                            { name: 'question', label: 'Question', type: 'text', default: 'Is it painful?' },
                            { name: 'answer', label: 'Answer', type: 'textarea', default: 'Most patients report minimal discomfort.' }
                        ]
                    }
                ],
                defaultData: {
                    items: [
                        { question: 'Is it painful?', answer: 'Most patients report minimal discomfort.' },
                        { question: 'How long until I see results?', answer: 'Results are typically visible within 2 weeks.' },
                        { question: 'Is there downtime?', answer: 'No, you can return to work immediately.' }
                    ]
                }
            }
        }
    },
    socialProof: {
        label: "Real Results (Proof)",
        layouts: {
            'Testimonials': {
                fields: [
                    { name: 'heading', label: 'Section Heading', type: 'text', default: 'Real Patient Results' },
                    {
                        name: 'items', label: 'Testimonials', type: 'collection', min: 3, max: 3, fields: [
                            { name: 'quote', label: 'Quote', type: 'textarea', default: 'Amazing results!' },
                            { name: 'author', label: 'Name', type: 'text', default: 'Jane D.' }
                        ]
                    }
                ],
                defaultData: {
                    heading: 'Real Patient Results',
                    items: [
                        { quote: 'Incredible results after just one session!', author: 'Sarah J.' },
                        { quote: 'The team changed my life.', author: 'Mike T.' },
                        { quote: 'Highly recommend to everyone.', author: 'Emily R.' }
                    ]
                }
            }
        }
    },
    conversion: {
        label: "Check Availability (CTA)",
        layouts: {
            'Urgency': {
                fields: [
                    { name: 'heading', label: 'Heading', type: 'text', default: 'Ready to start your journey?' },
                    { name: 'subtext', label: 'Subtext', type: 'textarea', default: 'Limited availability for new patients this month.' },
                    { name: 'ctaText', label: 'Button Text', type: 'text', default: 'Book My Appointment' }
                ]
            }
        }
    },
    footer: {
        label: "Footer",
        layouts: {
            'Minimal': {
                fields: [
                    { name: 'copyright', label: 'Copyright Text', type: 'text', default: '© 2024 All rights reserved.' },
                    { name: 'links', label: 'Footer Links', type: 'text', default: 'Privacy, Terms, Contact' }
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
            data: data
        };
    }
    return initialState;
};

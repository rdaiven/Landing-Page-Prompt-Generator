
export const sectionConfigs = {
    header: {
        label: "Navigation Header",
        icon: "🧭",
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
            },
            'Centered Logo': {
                fields: [
                    { name: 'navLinks', label: 'Navigation Links', type: 'text', default: 'Home, About, Services, Contact' },
                    { name: 'ctaText', label: 'Button Text', type: 'text', default: 'Get Started' }
                ]
            }
        }
    },
    hero: {
        label: "Immediate Hook (Hero)",
        icon: "✨",
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
            'Full Width': {
                fields: [
                    { name: 'headline', label: 'Headline', type: 'text', default: 'Radiance Define' },
                    { name: 'subheadline', label: 'Subheadline', type: 'textarea', default: 'Luxury aesthetics for the modern individual.' },
                    { name: 'ctaText', label: 'Primary Button', type: 'text', default: 'Discover More' },
                    { name: 'imagePrompt', label: 'Background Image Description', type: 'text', default: 'High-res texture or landscape' }
                ]
            },
            'Minimal': {
                fields: [
                    { name: 'headline', label: 'Headline', type: 'text', default: 'Simply Beautiful' },
                    { name: 'subheadline', label: 'Subheadline', type: 'textarea', default: 'No clutter. Just results.' },
                    { name: 'ctaText', label: 'Primary Button', type: 'text', default: 'Get Started' }
                ]
            },
            'Video-First': {
                fields: [
                    { name: 'videoUrl', label: 'Video URL (Placeholder)', type: 'text', default: '' },
                    { name: 'headline', label: 'Headline', type: 'text', default: 'See Real Results' },
                    { name: 'ctaText', label: 'Primary Button', type: 'text', default: 'Watch Success Stories' }
                ]
            },
            'FloatUI - Centered': {
                fields: [
                    { name: 'priceText', label: 'Price Badge', type: 'text', default: 'Starts at $49/mo' },
                    { name: 'headline', label: 'Headline', type: 'text', default: 'Build your SaaS solution with ease' },
                    { name: 'subheadline', label: 'Subheadline', type: 'textarea', default: 'Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.' },
                    { name: 'ctaText', label: 'Primary Button', type: 'text', default: 'Get started' },
                ]
            },
            'Marketing Split': {
                fields: [
                    { name: 'headline', label: 'Headline', type: 'text', default: 'Data to enrich your online business' },
                    { name: 'subheadline', label: 'Subheadline', type: 'textarea', default: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.' },
                    { name: 'ctaText', label: 'Primary Button', type: 'text', default: 'Get started' },
                    { name: 'imagePrompt', label: 'Image Description', type: 'text', default: 'Product Dashboard' }
                ]
            }
        }
    },
    trustPrimer: {
        label: "Assurance Strip (Trust)",
        icon: "🏆",
        layouts: {
            'Short Strip': {
                fields: [
                    {
                        name: 'items', label: 'Trust Items (Text)', type: 'collection', min: 3, max: 4, fields: [
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
            },
            'Logo Grid': {
                fields: [
                    { name: 'heading', label: 'Featured In (Optional)', type: 'text', default: 'As Featured In' },
                    {
                        name: 'items', label: 'Logos/Badges', type: 'collection', min: 4, max: 6, fields: [
                            { name: 'alt', label: 'Alt Text', type: 'text', default: 'Vogue' },
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
            }
        }
    },
    problemConcern: {
        label: "Problem/Relevance",
        icon: "🎯",
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
            },
            'Feature Grid': {
                fields: [
                    { name: 'heading', label: 'Section Heading', type: 'text', default: 'Common Concerns' },
                    {
                        name: 'items', label: 'Concern Cards', type: 'collection', min: 3, max: 6, fields: [
                            { name: 'title', label: 'Title', type: 'text', default: 'Stubborn Areas' },
                            { name: 'description', label: 'Description', type: 'textarea', default: 'Exercise and diet resistant fat pockets.' },
                            { name: 'icon', label: 'Icon (Emoji)', type: 'text', default: '🏋️' }
                        ]
                    }
                ],
                defaultData: {
                    heading: 'Common Concerns',
                    items: [
                        { title: 'Stubborn Areas', description: 'Fat pockets that just won\'t shift.', icon: '🎯' },
                        { title: 'Busy Schedule', description: 'No time for long recovery periods.', icon: '⏰' },
                        { title: 'Safety Concerns', description: 'Worried about invasive surgeries.', icon: '🛡️' }
                    ]
                }
            },
            'Cards Grid': {
                fields: [
                    { name: 'heading', label: 'Section Heading', type: 'text', default: 'Why This Matters' },
                    {
                        name: 'items', label: 'Cards', type: 'collection', min: 3, max: 4, fields: [
                            { name: 'title', label: 'Card Title', type: 'text', default: 'Efficiency' },
                            { name: 'text', label: 'Card Text', type: 'text', default: 'We save you time.' },
                        ]
                    }
                ],
                defaultData: {
                    heading: 'Why This Matters',
                    items: [
                        { title: 'Efficiency', text: 'We respect your time and schedule.' },
                        { title: 'Quality', text: 'Top-tier materials and care.' },
                        { title: 'Comfort', text: 'Pain-free experience guaranteed.' }
                    ]
                }
            },
            'FloatUI - Grid': {
                fields: [
                    { name: 'heading', label: 'Section Heading', type: 'text', default: 'Everything you need' },
                    { name: 'subheading', label: 'Subheading', type: 'textarea', default: 'Loyal customers, automated sales, and more.' },
                    {
                        name: 'items', label: 'Features', type: 'collection', min: 3, max: 6, fields: [
                            { name: 'title', label: 'Title', type: 'text', default: 'Fast Refresh' },
                            { name: 'description', label: 'Description', type: 'textarea', default: 'Reliable and fast updates.' },
                            { name: 'icon', label: 'Icon (Emoji/SVG path)', type: 'text', default: '⚡' }
                        ]
                    }
                ]
            }
        }
    },
    treatmentLogic: {
        label: "How it Works / Key Benefits",
        icon: "💡",
        layouts: {
            'Simple': {
                fields: [
                    { name: 'heading', label: 'Heading', type: 'text', default: 'Why Choose Us?' },
                    { name: 'description', label: 'Description', type: 'textarea', default: 'Our unique approach ensures safety and maximum efficacy.' },
                    { name: 'feature1', label: 'Feature 1', type: 'text', default: 'Advanced Technology' },
                    { name: 'feature2', label: 'Feature 2', type: 'text', default: 'Expert Care' },
                    { name: 'feature3', label: 'Feature 3', type: 'text', default: 'Personalized Plans' }
                ]
            },
            'Detailed Split': {
                fields: [
                    { name: 'heading', label: 'Heading', type: 'text', default: 'The Science Behind It' },
                    { name: 'subheading', label: 'Subheading', type: 'text', default: 'FDA-Cleared Technology' },
                    { name: 'description', label: 'Deep Dive Text', type: 'textarea', default: 'Using controlled cooling to eliminate fat cells gently and effectively, without harming surrounding tissue.' },
                    { name: 'imagePrompt', label: 'Image Description', type: 'text', default: 'Diagram of coolsculpting process' },
                    {
                        name: 'benefits', label: 'Key Benefits', type: 'collection', min: 3, max: 3, fields: [
                            { name: 'text', label: 'Benefit', type: 'text', default: 'Clinically Proven' }
                        ]
                    }
                ],
                defaultData: {
                    heading: 'The Science Behind It',
                    subheading: 'FDA-Cleared Technology',
                    description: 'Using controlled cooling to eliminate fat cells gently and effectively.',
                    imagePrompt: 'Scientific diagram of process',
                    benefits: [
                        { text: 'Permanent Fat Reduction' },
                        { text: 'Non-Surgical & Safe' },
                        { text: 'Natural-Looking Results' }
                    ]
                }
            }
        }
    },
    procedureGuide: {
        label: "Procedure Guide (Steps)",
        icon: "👣",
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
                        { title: 'Consultation', description: 'We map out your plan.' },
                        { title: 'Treatment', description: 'Relax while we treat.' },
                        { title: 'Results', description: 'See changes in weeks.' }
                    ]
                }
            },
            'Timeline': {
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
        icon: "🏥",
        layouts: {
            'Grid': {
                fields: [
                    { name: 'location', label: 'Location Name', type: 'text', default: 'Beverly Hills Clinic' },
                    { name: 'address', label: 'Address', type: 'textarea', default: '123 Luxury Lane, CA 90210' },
                    { name: 'hours', label: 'Hours', type: 'text', default: 'Mon-Sat: 9am - 6pm' }
                ]
            },
            'Gallery Split': {
                fields: [
                    { name: 'location', label: 'Location Name', type: 'text', default: 'Manhattan Medical Spa' },
                    { name: 'description', label: 'About the Space', type: 'textarea', default: 'A serene oasis in the city.' },
                    { name: 'address', label: 'Address', type: 'textarea', default: '5th Ave, NY' },
                    { name: 'imagePrompt', label: 'Gallery Image', type: 'text', default: 'Interior of waiting room' }
                ],
                defaultData: {
                    location: 'Manhattan Medical Spa',
                    description: 'Relax in our state-of-the-art facility featuring private suites.',
                    address: '500 5th Ave, New York, NY',
                    imagePrompt: 'Modern luxury spa interior'
                }
            }
        }
    },
    faq: {
        label: "Common Questions (FAQ)",
        icon: "❓",
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
            },
            'Accordion': {
                fields: [
                    { name: 'heading', label: 'Heading', type: 'text', default: 'Frequently Asked Questions' },
                    {
                        name: 'items', label: 'Q&A Items', type: 'collection', min: 4, max: 6, fields: [
                            { name: 'question', label: 'Question', type: 'text', default: 'Cost?' },
                            { name: 'answer', label: 'Answer', type: 'textarea', default: 'Starts at $500.' }
                        ]
                    }
                ],
                defaultData: {
                    heading: 'Frequently Asked Questions',
                    items: [
                        { question: 'How much does it cost?', answer: 'Pricing depends on the treatment area.' },
                        { question: 'Is it permanent?', answer: 'Yes, treated fat cells are gone for good.' },
                        { question: 'Can I finance it?', answer: 'We offer payment plans via CareCredit.' },
                        { question: 'Who performs the procedure?', answer: 'Our licensed medical aestheticians.' }
                    ]
                }
            }
        }
    },
    socialProof: {
        label: "Real Results (Proof)",
        icon: "💬",
        layouts: {
            'Grid': {
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
            'Carousel': {
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
            }
        }
    },
    conversion: {
        label: "Check Availability (CTA)",
        icon: "🚀",
        layouts: {
            'Urgency': {
                fields: [
                    { name: 'heading', label: 'Heading', type: 'text', default: 'Ready to start your journey?' },
                    { name: 'subtext', label: 'Subtext', type: 'textarea', default: 'Limited availability for new patients this month.' },
                    { name: 'ctaText', label: 'Button Text', type: 'text', default: 'Book My Appointment' }
                ]
            },
            'Split Booking': {
                fields: [
                    { name: 'heading', label: 'Headline', type: 'text', default: 'Secure Your Spot' },
                    { name: 'subtext', label: 'Details', type: 'textarea', default: 'Our experts are ready to guide you.' },
                    { name: 'ctaText', label: 'Button Label', type: 'text', default: 'Check Availability' },
                    { name: 'imagePrompt', label: 'Image Description', type: 'text', default: 'Reception area' }
                ]
            },
            'Sticky Bar': {
                fields: [
                    { name: 'heading', label: 'Short Text', type: 'text', default: 'Limited Time Offer' },
                    { name: 'ctaText', label: 'Button Label', type: 'text', default: 'Claim Offer' }
                ]
            },
            'FloatUI - Simple': {
                fields: [
                    { name: 'priceText', label: 'Price Text', type: 'text', default: 'Plans from $19/mo' },
                    { name: 'heading', label: 'Headline', type: 'text', default: 'Ready to get started?' },
                    { name: 'subtext', label: 'Subtext', type: 'textarea', default: 'Join thousands of satisfied customers today.' },
                    { name: 'ctaText', label: 'Button Text', type: 'text', default: 'Start Now' }
                ]
            }
        }
    },
    footer: {
        label: "Footer",
        icon: "🏁",
        layouts: {
            'Minimal': {
                fields: [
                    { name: 'copyright', label: 'Copyright Text', type: 'text', default: '© 2024 All rights reserved.' },
                    { name: 'links', label: 'Footer Links', type: 'text', default: 'Privacy, Terms, Contact' }
                ]
            },
            'Expanded': {
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
            data: data
        };
    }
    return initialState;
};

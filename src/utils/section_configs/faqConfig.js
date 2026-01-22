export const faqConfig = {
    label: "Common Questions (FAQ)",
    description: "Overcome objections and clarify details.",
    icon: "❓",
    layouts: {
        'Simple Accordion': {
            tag: "Standard",
            description: "Classic expandable questions.",
            fields: [
                { name: 'heading', label: 'Section Heading', helperText: "Header.", type: 'text', default: 'Frequently Asked Questions' },
                {
                    name: 'items', label: 'What are the common questions?', helperText: "Add 4-8 Q&A.", type: 'collection', min: 4, max: 8, fields: [
                        { name: 'question', label: 'Question', helperText: "The objection.", type: 'text', default: 'How long does it last?' },
                        { name: 'answer', label: 'Answer', helperText: "The resolution.", type: 'textarea', default: 'Results can last for years.' }
                    ]
                }
            ],
            defaultData: {
                heading: 'Common Questions',
                items: [
                    { question: 'Is it painful?', answer: 'Most patients report minimal discomfort.' },
                    { question: 'How many sessions?', answer: 'Typically 1-3 sessions are recommended.' },
                    { question: 'Is there downtime?', answer: 'No, you can return to work immediately.' },
                    { question: 'Who performs it?', answer: 'Certified medical professionals.' }
                ]
            }
        },
        'Two-Column Grid': {
            tag: "Dense",
            description: "Side-by-side grid for more density.",
            fields: [
                { name: 'heading', label: 'Heading', helperText: "Header.", type: 'text', default: 'FAQ' },
                {
                    name: 'items', label: 'Q&A Items', helperText: "Add items.", type: 'collection', min: 4, max: 6, fields: [
                        { name: 'question', label: 'Question', helperText: "Q.", type: 'text', default: 'Cost?' },
                        { name: 'answer', label: 'Answer', helperText: "A.", type: 'textarea', default: 'Depends on treatment.' }
                    ]
                }
            ]
        },
        'Minimal List': {
            tag: "Clean",
            description: "Simple list, no accordion, just text.",
            fields: [
                {
                    name: 'items', label: 'Q&A Items', helperText: "Add items.", type: 'collection', min: 3, max: 5, fields: [
                        { name: 'question', label: 'Question', helperText: "Q.", type: 'text', default: 'Safety?' },
                        { name: 'answer', label: 'Answer', helperText: "A.", type: 'textarea', default: 'FDA Cleared.' }
                    ]
                }
            ]
        },
        'Highlight First': {
            tag: "Featured",
            description: "First item is emphasized or separated.",
            fields: [
                { name: 'heading', label: 'Aside Heading', helperText: "e.g. Detailed Answers", type: 'text', default: 'Detailed Answers' },
                {
                    name: 'items', label: 'Q&A Items', helperText: "First one is featured.", type: 'collection', min: 4, max: 6, fields: [
                        { name: 'question', label: 'Question', helperText: "Q.", type: 'text', default: 'Recovery?' },
                        { name: 'answer', label: 'Answer', helperText: "A.", type: 'textarea', default: 'None required.' }
                    ]
                }
            ]
        },
        'Dark Mode': {
            tag: "Contrast",
            description: "Dark background look.",
            fields: [
                { name: 'heading', label: 'Heading', helperText: "Header.", type: 'text', default: 'Questions?' },
                {
                    name: 'items', label: 'Q&A Items', helperText: "Add items.", type: 'collection', min: 3, max: 5, fields: [
                        { name: 'question', label: 'Question', helperText: "Q.", type: 'text', default: 'Cost?' },
                        { name: 'answer', label: 'Answer', helperText: "A.", type: 'textarea', default: 'Starts at $X' }
                    ]
                }
            ]
        },
        'Sidebar Navigation': {
            tag: "Desktop",
            description: "Has a sticky sidebar (desktop only).",
            fields: [
                {
                    name: 'items', label: 'Q&A Items', helperText: "Add items.", type: 'collection', min: 4, max: 8, fields: [
                        { name: 'question', label: 'Question', helperText: "Q.", type: 'text', default: 'Start?' },
                        { name: 'answer', label: 'Answer', helperText: "A.", type: 'textarea', default: 'Book online.' }
                    ]
                }
            ]
        },
        'Boxed Cards': {
            tag: "Cards",
            description: "Each Q&A in its own box.",
            fields: [
                {
                    name: 'items', label: 'Q&A Items', helperText: "Add items.", type: 'collection', min: 3, max: 6, fields: [
                        { name: 'question', label: 'Question', helperText: "Q.", type: 'text', default: 'Pain?' },
                        { name: 'answer', label: 'Answer', helperText: "A.", type: 'textarea', default: 'Managed with cooling.' }
                    ]
                }
            ]
        },
        'Visual Intro': {
            tag: "Decorative",
            description: "Includes a large icon/visual intro.",
            fields: [
                {
                    name: 'items', label: 'Q&A Items', helperText: "Add items.", type: 'collection', min: 3, max: 5, fields: [
                        { name: 'question', label: 'Question', helperText: "Q.", type: 'text', default: 'Results?' },
                        { name: 'answer', label: 'Answer', helperText: "A.", type: 'textarea', default: 'Seen in 6 weeks.' }
                    ]
                }
            ]
        },
        'Categorized Tabs': {
            tag: "Organized",
            description: "Simulates category tabs.",
            fields: [
                {
                    name: 'items', label: 'Q&A Items', helperText: "Add items.", type: 'collection', min: 4, max: 6, fields: [
                        { name: 'question', label: 'Question', helperText: "Q.", type: 'text', default: 'Financing?' },
                        { name: 'answer', label: 'Answer', helperText: "A.", type: 'textarea', default: 'Available.' }
                    ]
                }
            ]
        },
        'Chat Style': {
            tag: "Interactive",
            description: "Looks like a chat conversation.",
            fields: [
                {
                    name: 'items', label: 'Q&A Items', helperText: "Chat bubbles.", type: 'collection', min: 3, max: 4, fields: [
                        { name: 'question', label: 'User Question', helperText: "User asks...", type: 'text', default: 'How fast?' },
                        { name: 'answer', label: 'Response', helperText: "Bot/Doctor answers.", type: 'textarea', default: '30 minutes.' }
                    ]
                }
            ]
        }
    }
}

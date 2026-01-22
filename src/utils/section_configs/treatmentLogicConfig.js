export const treatmentLogicConfig = {
    label: "How it Works / Key Benefits",
    description: "Explain the science or approach simply to build confidence.",
    icon: "💡",
    layouts: {
        'Minimalist': {
            tag: "Pure Text",
            description: "Single column text layout. Direct, simple, and confidence-inspiring.",
            fields: [
                { name: 'heading', label: 'Main Benefit Heading', helperText: "e.g. Why Choose Us?", type: 'text', default: 'Why Choose Us?' },
                { name: 'description', label: 'The "Secret Sauce" (Explanation)', helperText: "Explain simply.", type: 'textarea', default: 'Our unique approach ensures guaranteed results.' },
                { name: 'feature1', label: 'Key Feature 1', helperText: "Point 1.", type: 'text', default: 'Advanced Technology' },
                { name: 'feature2', label: 'Key Feature 2', helperText: "Point 2.", type: 'text', default: 'Expert Team' },
                { name: 'feature3', label: 'Key Feature 3', helperText: "Point 3.", type: 'text', default: 'Tailored Solutions' }
            ]
        },
        'Story First': {
            tag: "Editorial",
            description: "Two columns: Rich narrative text + supporting visual.",
            fields: [
                { name: 'heading', label: 'The Methodology', helperText: "e.g. The Science Behind It", type: 'text', default: 'Our Methodology' },
                { name: 'subheading', label: 'Sub-header', helperText: "Refine context.", type: 'text', default: 'Innovation meets Execution' },
                { name: 'description', label: 'Deep Dive Explanation', helperText: "Go deeper here.", type: 'textarea', default: 'We use a data-driven process to identify opportunities and deliver measurable impact.' },
                { name: 'imagePrompt', label: 'Visual Description', helperText: "e.g. Diagram", type: 'text', default: 'Abstract Process Diagram' },
                {
                    name: 'benefits', label: 'Key Benefit Points', helperText: "List 3 benefits.", type: 'collection', min: 3, max: 3, fields: [
                        { name: 'text', label: 'Benefit', helperText: "e.g. Proven Results", type: 'text', default: 'Proven Results' }
                    ]
                }
            ],
            defaultData: {
                heading: 'Our Methodology',
                subheading: 'Innovation meets Execution',
                description: 'We use a data-driven process to identify opportunities and deliver measurable impact.',
                benefits: [{ text: 'Sustainable Growth' }, { text: 'Risk Mitigation' }, { text: 'High Efficiency' }]
            }
        },
        'Step-by-Step Cards': {
            tag: "Process",
            description: "Three sequential cards explaining the mechanism.",
            fields: [
                { name: 'heading', label: 'Process Heading', helperText: "e.g. How It Works", type: 'text', default: 'How It Works' },
                {
                    name: 'steps', label: 'Mechanism Steps', helperText: "Walk them through 3 steps.", type: 'collection', min: 3, max: 3, fields: [
                        { name: 'title', label: 'Phase Name', helperText: "Step Name", type: 'text', default: 'Discover' },
                        { name: 'description', label: 'What happens?', helperText: "Short explanation.", type: 'textarea', default: 'We analyze your needs.' },
                        { name: 'icon', label: 'Icon', helperText: "Select icon.", type: 'icon', default: 'Search' }
                    ]
                }
            ],
            defaultData: {
                heading: 'How It Works',
                steps: [
                    { title: 'Discover', description: 'We analyze the current state.', icon: 'Search' },
                    { title: 'Design', description: 'We build a custom solution.', icon: 'Edit' },
                    { title: 'Deliver', description: 'We implement and optimize.', icon: 'Rocket' }
                ]
            }
        },
        'Scientific Diagram': {
            tag: "Visual Heavy",
            description: "Large central diagram with annotated points.",
            fields: [
                { name: 'heading', label: 'Diagram Title', helperText: "e.g. Anatomy", type: 'text', default: 'System Architecture' },
                { name: 'imagePrompt', label: 'Diagram Description', helperText: "Describe the diagram.", type: 'text', default: 'Tech Stack Diagram' },
                {
                    name: 'points', label: 'Annotation Points', helperText: "Label parts of the diagram.", type: 'collection', min: 3, max: 4, fields: [
                        { name: 'label', label: 'Point Label', helperText: "e.g. Core", type: 'text', default: 'Core Engine' },
                        { name: 'desc', label: 'Short Explanation', helperText: "What does it do?", type: 'text', default: 'Handles processing' }
                    ]
                }
            ],
            defaultData: {
                heading: 'System Architecture',
                points: [
                    { label: 'Layer 1', desc: 'User Interface' },
                    { label: 'Layer 2', desc: 'Secure Processing' },
                    { label: 'Layer 3', desc: 'Cloud Storage' }
                ]
            }
        },
        'Mechanism of Action': {
            tag: "Animation Placeholder",
            description: "Space for a loop/video showing the biological process.",
            fields: [
                { name: 'heading', label: 'Mechanism Heading', helperText: "e.g. Look Inside", type: 'text', default: 'See It In Action' },
                { name: 'description', label: 'Process Description', helperText: "Describe what they are seeing.", type: 'textarea', default: 'Watch how our system integrates seamlessly with your workflow.' },
                { name: 'videoPrompt', label: 'Animation Description', helperText: "Describe the video.", type: 'text', default: 'UI demo animation' }
            ]
        },
        'Interactive Tabs': {
            tag: "Clickable",
            description: "Tabbed interface to explore different aspects.",
            fields: [
                { name: 'heading', label: 'Explore the Process', helperText: "Header.", type: 'text', default: 'Explore the Platform' },
                { name: 'tab1', label: 'Tab 1 Title', helperText: "e.g. Onboarding", type: 'text', default: 'Onboarding' },
                { name: 'content1', label: 'Tab 1 Content', helperText: "Details.", type: 'textarea', default: 'Fast and easy setup.' },
                { name: 'tab2', label: 'Tab 2 Title', helperText: "e.g. Integration", type: 'text', default: 'Integration' },
                { name: 'content2', label: 'Tab 2 Content', helperText: "Details.", type: 'textarea', default: 'Connects with everything.' },
                { name: 'tab3', label: 'Tab 3 Title', helperText: "e.g. Analytics", type: 'text', default: 'Analytics' },
                { name: 'content3', label: 'Tab 3 Content', helperText: "Details.", type: 'textarea', default: 'Real-time insights.' }
            ]
        },
        'Benefit Stack': {
            tag: "List",
            description: "A stacked list of major technical benefits with detailed icons.",
            fields: [
                { name: 'heading', label: 'Why It\'s Superior', helperText: "Comparison Header.", type: 'text', default: 'The Advantage' },
                {
                    name: 'benefits', label: 'Major Benefits', helperText: "List 4-5 key advantages.", type: 'collection', min: 4, max: 5, fields: [
                        { name: 'title', label: 'Benefit Feature', helperText: "e.g. Verified", type: 'text', default: 'Certified' },
                        { name: 'desc', label: 'Why it matters', helperText: "Short explanation.", type: 'text', default: 'Industry standard compliance.' },
                        { name: 'icon', label: 'Icon', helperText: "Select icon.", type: 'icon', default: 'Shield' }
                    ]
                }
            ],
            defaultData: {
                heading: 'The Advantage',
                benefits: [
                    { title: 'Fast', desc: 'Deploy in minutes.', icon: 'Clock' },
                    { title: 'Secure', desc: 'Bank-level encryption.', icon: 'Shield' },
                    { title: 'Scalable', desc: 'Grows with you.', icon: 'TrendingUp' },
                    { title: 'Reliable', desc: '99.9% Uptime.', icon: 'Activity' }
                ]
            }
        },
        'Comparison (The Science)': {
            tag: "Contrast",
            description: "Compare 'Generic Method' vs 'Our Method'.",
            fields: [
                { name: 'heading', label: 'The Difference', helperText: "Header.", type: 'text', default: 'Why We Are Different' },
                { name: 'ourMethod', label: 'Our Method Name', helperText: "e.g. Our Platform", type: 'text', default: 'Our Platform' },
                { name: 'ourDesc', label: 'Our Mechanism', helperText: "How it works.", type: 'textarea', default: 'Integrated, seamless, and automated.' },
                { name: 'othersMethod', label: 'Other Methods', helperText: "e.g. Spreadsheets", type: 'text', default: 'Spreadsheets' },
                { name: 'othersDesc', label: 'Their Mechanism', helperText: "Why it's worse.", type: 'textarea', default: 'Manual, error-prone, and slow.' }
            ]
        },
        'Timeline Flow': {
            tag: "Horizontal",
            description: "A horizontal timeline showing the rollout over time.",
            fields: [
                { name: 'heading', label: 'Timeline', helperText: "Header.", type: 'text', default: 'Implementation Timeline' },
                {
                    name: 'events', label: 'Timeline Events', helperText: "Add key milestones.", type: 'collection', min: 4, max: 4, fields: [
                        { name: 'time', label: 'Time', helperText: "e.g. Day 0", type: 'text', default: 'Week 1' },
                        { name: 'desc', label: 'Reaction', helperText: "What happens?", type: 'text', default: 'Kickoff' }
                    ]
                }
            ],
            defaultData: {
                heading: 'Implementation Timeline',
                events: [
                    { time: 'Week 1', desc: 'Discovery & Audit' },
                    { time: 'Week 2', desc: 'Strategy Design' },
                    { time: 'Week 4', desc: 'Implementation' },
                    { time: 'Week 8', desc: 'Results Analysis' }
                ]
            }
        },
        'Expert Explainer': {
            tag: "Authority",
            description: "A 'Leader's Perspective' layout explaining the logic.",
            fields: [
                { name: 'heading', label: 'Heading', helperText: "e.g. CEO's Note", type: 'text', default: 'Director\'s Note' },
                { name: 'doctorName', label: 'Expert Name', helperText: "Who is speaking?", type: 'text', default: 'Jane Doe' },
                { name: 'explanation', label: 'The Explanation', helperText: "Detailed reasoning.", type: 'textarea', default: 'Our philosophy is built on sustainable, long-term impact rather than quick fixes.' },
                { name: 'quote', label: 'Pull Quote', helperText: "Highlight sentence.", type: 'text', default: '"We build for the future."' },
                { name: 'imagePrompt', label: 'Photo Description', helperText: "Visual.", type: 'text', default: 'Executive Portrait' }
            ]
        }
    }
}

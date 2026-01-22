export const treatmentLogicConfig = {
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
}

export const problemConcernConfig = {
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
}

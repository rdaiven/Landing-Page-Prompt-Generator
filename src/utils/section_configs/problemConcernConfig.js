export const problemConcernConfig = {
    label: "Problem / Relevance",
    description: "Help visitors feel understood by articulating their specific challenges.",
    icon: "🤔",
    layouts: {
        'Simple & Scannable': {
            tag: "List based",
            description: "A clear, bulleted list of common issues.",
            fields: [
                { name: 'heading', label: 'What question hooks the visitor?', helperText: "e.g. 'Does this sound like you?'", type: 'text', default: 'Is this you?' },
                {
                    name: 'items', label: 'What are the top 3-5 pains?', helperText: "List specific issues they face.", type: 'collection', min: 3, max: 5, fields: [
                        { name: 'text', label: 'Describe the specific issue', helperText: "Keep it short and relatable.", type: 'text', default: 'Problem description' }
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
                { name: 'heading', label: 'What is the main headline?', helperText: "Reassure them you can help.", type: 'text', default: 'Whatever your concern, we can help.' },
                {
                    name: 'items', label: 'Concern Cards', helperText: "Add 3-4 key concerns.", type: 'collection', min: 3, max: 4, fields: [
                        { name: 'title', label: 'Concern Name', helperText: "e.g. Aging Skin", type: 'text', default: 'Aging Skin' },
                        { name: 'description', label: 'How does it feel? (Short)', helperText: "e.g. Fine lines and lost volume.", type: 'textarea', default: 'Fine lines and lost volume.' }
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
                { name: 'problemHeading', label: 'The Struggle (Headline)', helperText: "Hook the problem.", type: 'text', default: 'Frustrated by ineffective creams?' },
                { name: 'problemText', label: 'The Struggle (Details)', helperText: "Describe the frustration.", type: 'textarea', default: 'You spend hundreds on skincare but see no real difference.' },
                { name: 'solutionHeading', label: 'The Relief (Headline)', helperText: "Introduce the solution.", type: 'text', default: 'Real results, fast.' },
                { name: 'solutionText', label: 'The Relief (Details)', helperText: "Explain the relief.", type: 'textarea', default: 'Our clinical treatments go deeper than any cream can.' }
            ]
        },
        'Symptoms Grid': {
            tag: "Checklist",
            description: "A grid of checkboxes for visitors to self-identify symptoms.",
            fields: [
                { name: 'heading', label: 'Header Question', helperText: "e.g. Are you experiencing...", type: 'text', default: 'Are you experiencing...' },
                {
                    name: 'symptoms', label: 'Symptoms Checklist', helperText: "List 4-8 symptoms.", type: 'collection', min: 4, max: 8, fields: [
                        { name: 'text', label: 'Symptom Description', helperText: "e.g. Dull skin tone", type: 'text', default: 'Dull skin tone' }
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
                { name: 'statement', label: 'The "We Get It" Statement', helperText: "Validate their feelings.", type: 'textarea', default: 'You deserve to look as young as you feel.' },
                { name: 'subtext', label: 'Supporting Reassurance', helperText: "Offer hope.", type: 'textarea', default: 'Aging is natural, but we can help you age on your terms.' }
            ]
        },
        'Comparison Table': {
            tag: "Us vs Others",
            description: "Compare 'Standard Solutions' (inadequate) vs 'Our Approach'.",
            fields: [
                { name: 'badHeading', label: 'The Old Way (Heading)', helperText: "e.g. Standard Facials", type: 'text', default: 'Standard Facials' },
                { name: 'badText', label: 'Why it fails', helperText: "e.g. Temporary results.", type: 'textarea', default: 'Relaxing but temporary results.' },
                { name: 'goodHeading', label: 'Our Medical Approach', helperText: "e.g. Clinical Results", type: 'text', default: 'Clinical Results' },
                { name: 'goodText', label: 'Why it works', helperText: "e.g. Cellular change.", type: 'textarea', default: 'Long-term cellular change.' }
            ]
        },
        'Interactive Quiz': {
            tag: "Engagement",
            description: "3 clickable cards asking 'Which one is you?'",
            fields: [
                { name: 'question', label: 'Quiz Question', helperText: "e.g. What is your primary goal?", type: 'text', default: 'What is your primary goal?' },
                { name: 'option1', label: 'Option 1 Label', helperText: "Answer 1", type: 'text', default: 'Smooth Wrinkles' },
                { name: 'option2', label: 'Option 2 Label', helperText: "Answer 2", type: 'text', default: 'Improve Texture' },
                { name: 'option3', label: 'Option 3 Label', helperText: "Answer 3", type: 'text', default: 'Tighten Skin' }
            ]
        },
        'Persona Cards': {
            tag: "Identity",
            description: "Define specific patient archetypes so users say 'That's me'.",
            fields: [
                {
                    name: 'personas', label: 'Patient Personas', helperText: "Create 2-3 archetypes.", type: 'collection', min: 2, max: 3, fields: [
                        { name: 'type', label: 'Archetype Name', helperText: "e.g. The Busy Mom", type: 'text', default: 'The Professional' },
                        { name: 'desc', label: 'Description', helperText: "e.g. Needs zero downtime.", type: 'text', default: 'Needs zero downtime.' }
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
                { name: 'myth', label: 'The Myth', helperText: "Common misconception.", type: 'text', default: 'Myth: Botox makes you look frozen.' },
                { name: 'fact', label: 'The Fact', helperText: "The truth.", type: 'textarea', default: 'Fact: Done right, you look rested and expressive, just smoother.' }
            ]
        },
        'Before/After Text': {
            tag: "Transformation Text",
            description: "Two contrasting text blocks: 'Now' vs 'Potential'.",
            fields: [
                { name: 'beforeHeading', label: 'Current State Header', helperText: "Negative starting point.", type: 'text', default: 'Feeling Invisible?' },
                { name: 'beforeText', label: 'Current Feelings', helperText: "Describe the pain.", type: 'textarea', default: 'Noticing changes in the mirror that don\'t reflect your energy.' },
                { name: 'afterHeading', label: 'Future State Header', helperText: "Positive outcome.", type: 'text', default: 'Get Your Glow Back' },
                { name: 'afterText', label: 'Future Feelings', helperText: "Describe the joy.", type: 'textarea', default: 'Walk into any room with renewed confidence.' }
            ]
        }
    }
}

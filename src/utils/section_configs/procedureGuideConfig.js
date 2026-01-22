export const procedureGuideConfig = {
    label: "Procedure Guide (Steps)",
    description: "Walk them through the journey so they know what to expect.",
    icon: "👣",
    layouts: {
        'Quick & Clear': {
            tag: "3-Col Steps",
            description: "Three columns with numbered steps. Stacks on mobile.",
            fields: [
                { name: 'heading', label: 'Section Heading', type: 'text', default: 'Simple Process' },
                {
                    name: 'items', label: 'Steps', type: 'collection', min: 3, max: 3, fields: [
                        { name: 'title', label: 'Step Title', type: 'text', default: 'Consultation' },
                        { name: 'description', label: 'Step Description', type: 'textarea', default: 'We discuss your goals.' }
                    ]
                }
            ],
            defaultData: {
                heading: 'Simple 3-Step Process',
                items: [
                    { title: 'Consultation', description: 'We map out your plan.' },
                    { title: 'Treatment', description: 'Relax while we treat.' },
                    { title: 'Results', description: 'See changes in weeks.' }
                ]
            }
        },
        'Detailed Journey': {
            tag: "Vertical Timeline",
            description: "Vertical timeline with connecting line. Responsive.",
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
        },
        'Horizontal Flow': {
            tag: "Scrollable",
            description: "Horizontal cards. Turns into a swipeable carousel on mobile.",
            fields: [
                { name: 'heading', label: 'Process Flow', type: 'text', default: 'What to Expect' },
                {
                    name: 'steps', label: 'Steps', type: 'collection', min: 4, max: 6, fields: [
                        { name: 'step', label: 'Step Name', type: 'text', default: 'Prep' },
                        { name: 'desc', label: 'Detail', type: 'textarea', default: 'Clean area.' },
                        { name: 'icon', label: 'Icon', type: 'icon', default: 'CheckCircle' }
                    ]
                }
            ]
        },
        'Checklist Style': {
            tag: "Simple List",
            description: "Clean, vertical checklist. Very mobile friendly.",
            fields: [
                { name: 'heading', label: 'Heading', type: 'text', default: 'Treatment Day' },
                {
                    name: 'items', label: 'Checklist Items', type: 'collection', min: 4, max: 6, fields: [
                        { name: 'text', label: 'Instruction', type: 'text', default: 'Arrive 15 mins early.' },
                        { name: 'subtext', label: 'Note (Optional)', type: 'text', default: 'Wear loose clothing.' }
                    ]
                }
            ]
        },
        'Accordion Steps': {
            tag: "Expandable",
            description: "Click to reveal details. Saves space on mobile.",
            fields: [
                { name: 'heading', label: 'Heading', type: 'text', default: 'Step-by-Step Guide' },
                {
                    name: 'steps', label: 'Accordion Items', type: 'collection', min: 3, max: 6, fields: [
                        { name: 'title', label: 'Phase Title', type: 'text', default: 'Before' },
                        { name: 'content', label: 'Detailed Content', type: 'textarea', default: 'Avoid sun exposure.' }
                    ]
                }
            ]
        },
        'Visual Roadmap': {
            tag: "Zig-Zag",
            description: "Alternating Text/Image rows. Stacks vertically on mobile.",
            fields: [
                { name: 'heading', label: 'Roadmap Heading', type: 'text', default: 'The Path Forward' },
                {
                    name: 'steps', label: 'Roadmap Steps', type: 'collection', min: 3, max: 4, fields: [
                        { name: 'title', label: 'Step Title', type: 'text', default: 'Consult' },
                        { name: 'desc', label: 'Description', type: 'textarea', default: 'Meeting the team.' },
                        { name: 'imagePrompt', label: 'Image Description', type: 'text', default: 'Doctor talking to patient' }
                    ]
                }
            ]
        },
        'Calendar View': {
            tag: "Grid",
            description: "Grid layout resembling a calendar. Stacks on mobile.",
            fields: [
                { name: 'heading', label: 'Recovery Timeline', type: 'text', default: 'Recovery at a Glance' },
                {
                    name: 'days', label: 'Timeline Entries', type: 'collection', min: 4, max: 4, fields: [
                        { name: 'day', label: 'Day/Week', type: 'text', default: 'Week 1' },
                        { name: 'status', label: 'Status', type: 'text', default: 'Back to work' }
                    ]
                }
            ]
        },
        'Mobile Slider': {
            tag: "Swipe",
            description: "Optimized for touch swiping on mobile, grid on desktop.",
            fields: [
                { name: 'heading', label: 'Walkthrough', type: 'text', default: 'Your Visit' },
                {
                    name: 'slides', label: 'Slides', type: 'collection', min: 3, max: 5, fields: [
                        { name: 'title', label: 'Slide Title', type: 'text', default: 'Arrival' },
                        { name: 'desc', label: 'Description', type: 'textarea', default: 'Valet parking available.' },
                        { name: 'imagePrompt', label: 'Background Image', type: 'text', default: 'Lobby photo' }
                    ]
                }
            ]
        },
        'Minimal List': {
            tag: "Clean",
            description: "Icon + Bold Text rows. High density, easy scanning.",
            fields: [
                { name: 'heading', label: 'Heading', type: 'text', default: 'Quick Steps' },
                {
                    name: 'items', label: 'List Items', type: 'collection', min: 4, max: 6, fields: [
                        { name: 'icon', label: 'Icon', type: 'icon', default: 'ArrowRight' },
                        { name: 'text', label: 'Action', type: 'text', default: 'Book online' }
                    ]
                }
            ]
        },
        'Phase Blocks': {
            tag: "Bold",
            description: "Large colored blocks for major phases (Prep, Treat, Heal).",
            fields: [
                { name: 'heading', label: 'Heading', type: 'text', default: '3 Phases of Care' },
                { name: 'phase1Title', label: 'Phase 1 Title', type: 'text', default: 'Preparation' },
                { name: 'phase1Desc', label: 'Phase 1 Desc', type: 'textarea', default: 'Getting ready.' },
                { name: 'phase2Title', label: 'Phase 2 Title', type: 'text', default: 'The Treatment' },
                { name: 'phase2Desc', label: 'Phase 2 Desc', type: 'textarea', default: 'The main event.' },
                { name: 'phase3Title', label: 'Phase 3 Title', type: 'text', default: 'Aftercare' },
                { name: 'phase3Desc', label: 'Phase 3 Desc', type: 'textarea', default: 'Healing and results.' }
            ]
        }
    }
}

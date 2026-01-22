export const headerConfig = {
    label: "Navigation Header",
    description: "Top bar with logo and primary action.",
    icon: "🧭",
    layouts: {
        'Sticky': {
            tag: "Fixed position",
            description: "Always visible — stays at the top as users scroll.",
            fields: [
                { name: 'navLinks', label: 'What are the menu links? (Comma separated)', helperText: "e.g. Services, About, FAQ", type: 'text', default: 'About, Services, FAQ' },
                { name: 'ctaText', label: 'What does the action button say?', helperText: "Primary navigation action.", type: 'text', default: 'Book Now' }
            ]
        },
        'Smart Hide': {
            tag: "Auto-hide",
            description: "Hides on scroll down, reveals on scroll up for clean reading.",
            fields: [
                { name: 'navLinks', label: 'What are the menu links?', helperText: "e.g. Services, About, FAQ", type: 'text', default: 'About, Services, FAQ' },
                { name: 'ctaText', label: 'What does the action button say?', helperText: "Primary navigation action.", type: 'text', default: 'Book Now' }
            ]
        },
        'Centered Logo': {
            tag: "Centered layout",
            description: "Logo centered, navigation links on both sides.",
            fields: [
                { name: 'navLinks', label: 'What are the menu links?', helperText: "e.g. Home, About, Services, Contact", type: 'text', default: 'Home, About, Services, Contact' },
                { name: 'ctaText', label: 'What does the action button say?', helperText: "Primary navigation action.", type: 'text', default: 'Get Started' }
            ]
        },
        'Split Navigation': {
            tag: "Classic Split",
            description: "Logo left, links center, CTA right.",
            fields: [
                { name: 'navLinks', label: 'What are the menu links?', helperText: "e.g. Home, Services, Gallery, Contact", type: 'text', default: 'Home, Services, Gallery, Contact' },
                { name: 'ctaText', label: 'What does the action button say?', helperText: "Primary navigation action.", type: 'text', default: 'Book Consultation' }
            ]
        },
        'Mega Menu': {
            tag: "Feature Rich",
            description: "Ideal for clinics with many services. Includes sub-links.",
            fields: [
                { name: 'navLinks', label: 'What are the main categories?', helperText: "e.g. Treatments, Conditions, About", type: 'text', default: 'Treatments, Conditions, About, Patient Resources' },
                { name: 'ctaText', label: 'What does the action button say?', helperText: "Primary navigation action.", type: 'text', default: 'Schedule' }
            ]
        },
        'Transparent Overlay': {
            tag: "Immersive",
            description: "Sits on top of the hero image for a seamless look.",
            fields: [
                { name: 'navLinks', label: 'What are the menu links?', helperText: "e.g. Our Story, Results, Location", type: 'text', default: 'Our Story, Results, Location' },
                { name: 'ctaText', label: 'What does the action button say?', helperText: "Primary navigation action.", type: 'text', default: 'Book Now' }
            ]
        },
        'Hamburger Mobile': {
            tag: "Mobile Priority",
            description: "Uses a drawer menu on all devices for a minimal aesthetic.",
            fields: [
                { name: 'ctaText', label: 'What does the action button say?', helperText: "Primary navigation action.", type: 'text', default: 'Book Now' }
            ]
        },
        'Minimal Line': {
            tag: "Underline",
            description: "Thin header with a primary color underline.",
            fields: [
                { name: 'navLinks', label: 'What are the menu links?', helperText: "e.g. Services, Gallery, Reviews", type: 'text', default: 'Services, Gallery, Reviews' }
            ]
        },
        'Full Width Banner': {
            tag: "Announcement",
            description: "Includes a top notification bar for offers.",
            fields: [
                { name: 'navLinks', label: 'What are the menu links?', helperText: "e.g. Home, About, Connect", type: 'text', default: 'Home, About, Connect' }
            ]
        },
        'Floating Pill': {
            tag: "Modern UI",
            description: "Detached, floating navigation island.",
            fields: [
                { name: 'navLinks', label: 'What are the menu links?', helperText: "e.g. Menu, Contact", type: 'text', default: 'Menu, Contact' }
            ]
        }
    }
}

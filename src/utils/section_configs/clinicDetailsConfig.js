export const clinicDetailsConfig = {
    label: "Clinic Details",
    description: "Address, hours, and contact info.",
    icon: "📍",
    layouts: {
        'Simple & Clean': {
            tag: "Essential",
            description: "Basic contact grid.",
            fields: [
                { name: 'location', label: 'Clinic Name/Location', type: 'text', default: 'Downtown Clinic' },
                { name: 'address', label: 'Address', type: 'text', default: '123 Main St, New York, NY' },
                { name: 'hours', label: 'Opening Hours', type: 'textarea', default: 'Mon-Fri: 9am - 6pm\nSat: 10am - 4pm' },
            ]
        },
        'With Interior View': {
            tag: "Visual",
            description: "Details with a prominent interior shot.",
            fields: [
                { name: 'location', label: 'Clinic Name', type: 'text', default: 'Our Facility' },
                { name: 'description', label: 'Description', type: 'textarea', default: 'Experience luxury care in our state-of-the-art facility.' },
                { name: 'imagePrompt', label: 'Image Description (AI)', type: 'text', default: 'Luxury Clinic Interior' }
            ]
        },
        'Grid with Map': {
            tag: "Functional",
            description: "Layout with space for a map integration.",
            fields: [
                { name: 'location', label: 'Title', type: 'text', default: 'Visit Us' }
            ]
        },
        'Floating Card': {
            tag: "Modern",
            description: "Info card floating over a background image.",
            fields: [
                { name: 'location', label: 'Title', type: 'text', default: 'Main Office' },
                { name: 'imagePrompt', label: 'Background Image (AI)', type: 'text', default: 'Modern Building Exterior' }
            ]
        },
        'Minimal Grid': {
            tag: "Iconic",
            description: "Icon-based grid for quick scanning.",
            fields: [
                { name: 'address', label: 'Address', type: 'text', default: '123 Main St' }
            ]
        },
        'Modern Clean': {
            tag: "Sleek",
            description: "Large typography and white space.",
            fields: [
                { name: 'location', label: 'Location Name', type: 'text', default: 'Beverly Hills' }
            ]
        },
        'Contact Centric': {
            tag: "Action",
            description: "Focuses on booking and contact info.",
            fields: [
                { name: 'location', label: 'Location Name', type: 'text', default: 'City Center' }
            ]
        },
        'Luxury Boutique': {
            tag: "Premium",
            description: "Elegant layout for high-end clinics.",
            fields: [
                { name: 'location', label: 'Clinic Name', type: 'text', default: 'The Aesthetic Suite' }
            ]
        },
        'Split with Image': {
            tag: "Balanced",
            description: "50/50 split between info and image.",
            fields: [
                { name: 'location', label: 'Clinic Name', type: 'text', default: 'Our Location' },
                { name: 'imagePrompt', label: 'Image Description', type: 'text', default: 'Reception Desk' }
            ]
        },
        'Footer Style': {
            tag: "Compact",
            description: "Dark, compact layout suitable for page bottoms.",
            fields: [
                { name: 'location', label: 'Clinic Name', type: 'text', default: 'Medical Center' }
            ]
        }
    }
}

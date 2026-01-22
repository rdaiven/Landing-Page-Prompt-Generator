export const clinicDetailsConfig = {
    label: "Clinic Details",
    description: "Address, hours, and contact info.",
    icon: "📍",
    layouts: {
        'Simple & Clean': {
            tag: "Essential",
            description: "Basic contact grid.",
            fields: [
                { name: 'location', label: 'What is the location name?', helperText: "e.g. Downtown Office", type: 'text', default: 'Downtown Office' },
                { name: 'address', label: 'What is the address?', helperText: "Full address.", type: 'text', default: '123 Main St, New York, NY' },
                { name: 'hours', label: 'Opening Hours', helperText: "e.g. Mon-Fri: 9-5", type: 'textarea', default: 'Mon-Fri: 9am - 6pm\nSat: 10am - 4pm' },
            ]
        },
        'With Interior View': {
            tag: "Visual",
            description: "Details with a prominent interior shot.",
            fields: [
                { name: 'location', label: 'Location Name', helperText: "Name.", type: 'text', default: 'Headquarters' },
                { name: 'description', label: 'Short Description', helperText: "Describe the vibe.", type: 'textarea', default: 'Visit us in our modern, central facility.' },
                { name: 'address', label: 'Address', helperText: "Full address.", type: 'text', default: '123 Main St, New York, NY' },
                { name: 'imagePrompt', label: 'Image Description (AI)', helperText: "Visual.", type: 'text', default: 'Modern Office Interior' }
            ]
        },
        'Grid with Map': {
            tag: "Functional",
            description: "Layout with space for a map integration.",
            fields: [
                { name: 'location', label: 'Title', helperText: "Header.", type: 'text', default: 'Visit Us' },
                { name: 'address', label: 'Address', helperText: "Full address.", type: 'text', default: '123 Main St, New York, NY' },
                { name: 'hours', label: 'Opening Hours', helperText: "e.g. Mon-Fri: 9-5", type: 'textarea', default: 'Mon-Fri: 9am - 6pm\nSat: 10am - 4pm' }
            ]
        },
        'Floating Card': {
            tag: "Modern",
            description: "Info card floating over a background image.",
            fields: [
                { name: 'location', label: 'Title', helperText: "Header.", type: 'text', default: 'Main Office' },
                { name: 'description', label: 'Short Description', helperText: "Brief intro.", type: 'textarea', default: 'Experience world-class care.' },
                { name: 'address', label: 'Address', helperText: "Full address.", type: 'text', default: '123 Main St, New York, NY' },
                { name: 'imagePrompt', label: 'Background Image (AI)', helperText: "Visual.", type: 'text', default: 'Modern Building Exterior' }
            ]
        },
        'Minimal Grid': {
            tag: "Iconic",
            description: "Icon-based grid for quick scanning.",
            fields: [
                { name: 'address', label: 'Address', helperText: "Short address.", type: 'text', default: '123 Main St' },
                { name: 'hours', label: 'Opening Hours', helperText: "e.g. Mon-Fri: 9-5", type: 'textarea', default: 'Mon-Fri: 9am - 6pm\nSat: 10am - 4pm' }
            ]
        },
        'Modern Clean': {
            tag: "Sleek",
            description: "Large typography and white space.",
            fields: [
                { name: 'location', label: 'Location Name', helperText: "Name.", type: 'text', default: 'New York City' },
                { name: 'address', label: 'Address', helperText: "Full address.", type: 'text', default: '123 Main St, New York, NY' },
                { name: 'hours', label: 'Opening Hours', helperText: "e.g. Mon-Fri: 9-5", type: 'textarea', default: 'Mon-Fri: 9am - 6pm\nSat: 10am - 4pm' }
            ]
        },
        'Contact Centric': {
            tag: "Action",
            description: "Focuses on booking and contact info.",
            fields: [
                { name: 'location', label: 'Location Name', helperText: "Name.", type: 'text', default: 'City Center' },
                { name: 'address', label: 'Address', helperText: "Full address.", type: 'text', default: '123 Main St, New York, NY' },
                { name: 'hours', label: 'Opening Hours', helperText: "e.g. Mon-Fri: 9-5", type: 'textarea', default: 'Mon-Fri: 9am - 6pm\nSat: 10am - 4pm' }
            ]
        },
        'Luxury Boutique': {
            tag: "Premium",
            description: "Elegant layout for high-end locations.",
            fields: [
                { name: 'location', label: 'Location Name', helperText: "Name.", type: 'text', default: 'The Suite' },
                { name: 'address', label: 'Address', helperText: "Full address.", type: 'text', default: '123 Main St, New York, NY' },
                { name: 'hours', label: 'Opening Hours', helperText: "e.g. Mon-Fri: 9-5", type: 'textarea', default: 'Mon-Fri: 9am - 6pm\nSat: 10am - 4pm' }
            ]
        },
        'Split with Image': {
            tag: "Balanced",
            description: "50/50 split between info and image.",
            fields: [
                { name: 'location', label: 'Location Name', helperText: "Name.", type: 'text', default: 'Our Location' },
                { name: 'address', label: 'Address', helperText: "Full address.", type: 'text', default: '123 Main St, New York, NY' },
                { name: 'hours', label: 'Opening Hours', helperText: "e.g. Mon-Fri: 9-5", type: 'textarea', default: 'Mon-Fri: 9am - 6pm\nSat: 10am - 4pm' },
                { name: 'imagePrompt', label: 'Image Description', helperText: "Visual.", type: 'text', default: 'Reception Area' }
            ]
        },
        'Footer Style': {
            tag: "Compact",
            description: "Dark, compact layout suitable for page bottoms.",
            fields: [
                { name: 'location', label: 'Location Name', helperText: "Name.", type: 'text', default: 'Main Office' },
                { name: 'description', label: 'Short Description', helperText: "Brief intro.", type: 'textarea', default: 'Your trusted neighborhood clinic.' },
                { name: 'address', label: 'Address', helperText: "Full address.", type: 'text', default: '123 Main St, New York, NY' }
            ]
        }
    }
}

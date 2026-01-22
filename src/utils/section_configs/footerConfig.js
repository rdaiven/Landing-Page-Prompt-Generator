export const footerConfig = {
    label: "Footer",
    description: "Legal info and final links.",
    icon: "🏁",
    layouts: {
        'Minimal': {
            tag: "Single row",
            description: "Clean simple footer with copyright and links.",
            fields: [
                { name: 'copyright', label: 'Copyright Text', helperText: "Legal.", type: 'text', default: '© 2024 All rights reserved.' },
                { name: 'links', label: 'Footer Links', helperText: "e.g. Privacy, Terms", type: 'text', default: 'Privacy, Terms, Contact' }
            ]
        },
        'Detailed & Informative': {
            tag: "4-column grid",
            description: "Full site map footer with address and columns.",
            fields: [
                { name: 'copyright', label: 'Copyright Text', helperText: "Legal.", type: 'text', default: '© 2024 Brand Name.' },
                { name: 'column1', label: 'Column 1 Title', helperText: "Header.", type: 'text', default: 'Company' },
                { name: 'column2', label: 'Column 2 Title', helperText: "Header.", type: 'text', default: 'Resources' },
                { name: 'address', label: 'Address', helperText: "Location.", type: 'textarea', default: '123 Main St, City, State' }
            ]
        },
        'Simplified Centered': {
            tag: "Focused",
            description: "Centered branding and links.",
            fields: [
                { name: 'copyright', label: 'Copyright Text', helperText: "Legal.", type: 'text', default: '© 2024 Brand.' },
                { name: 'links', label: 'Links', helperText: "Menu links.", type: 'text', default: 'About, Process, Reviews' }
            ]
        },
        'Social Heavy': {
            tag: "Community",
            description: "Dark mode footer emphasizing social media icons.",
            fields: [
                { name: 'copyright', label: 'Copyright Text', helperText: "Legal.", type: 'text', default: '© 2024 Brand.' }
            ]
        },
        'Newsletter Focus': {
            tag: "Growth",
            description: "Prominent email signup form.",
            fields: [
                { name: 'copyright', label: 'Copyright Text', helperText: "Legal.", type: 'text', default: '© 2024 Brand.' }
            ]
        },
        'Legal Stripped': {
            tag: "Bare Bones",
            description: "Just the necessary legal links, very subtle.",
            fields: [
                { name: 'copyright', label: 'Copyright Text', helperText: "Legal.", type: 'text', default: '© 2024 Brand Inc.' }
            ]
        },
        'Brand Big Logo': {
            tag: "Bold Identity",
            description: "Massive watermark logo in background.",
            fields: [
                { name: 'copyright', label: 'Copyright Text', helperText: "Legal.", type: 'text', default: '© 2024 Brand.' }
            ]
        },
        'Multi-Column Link Grid': {
            tag: "SEO Friendly",
            description: "Dense link structure for large sites.",
            fields: [
                { name: 'copyright', label: 'Copyright Text', helperText: "Legal.", type: 'text', default: '© 2024 Brand.' }
            ]
        },
        'Map Integration': {
            tag: "Local",
            description: "Includes map visualization and directions.",
            fields: [
                { name: 'address', label: 'Address', helperText: "For map.", type: 'textarea', default: '123 Aesthetic Blvd, CA' },
                { name: 'copyright', label: 'Copyright Text', helperText: "Legal.", type: 'text', default: '© 2024 Brand.' }
            ]
        },
        'Dark Luxury': {
            tag: "Premium",
            description: "High contrast black and gold aesthetic.",
            fields: [
                { name: 'links', label: 'Links', helperText: "Menu.", type: 'text', default: 'Menu, Contact' },
                { name: 'copyright', label: 'Copyright Text', helperText: "Legal.", type: 'text', default: '© 2024 Brand.' }
            ]
        }
    }
}

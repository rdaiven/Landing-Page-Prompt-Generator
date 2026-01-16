
import { getInitialSectionState, sectionConfigs } from './src/utils/sectionConfig.js';
import { generatePrompt } from './src/utils/promptGenerator.js';

console.log("Starting verification...");

try {
    // 1. Initialize State
    console.log("Initializing state...");
    const sections = getInitialSectionState();

    // 2. Simulate User Data Input
    const formData = {
        brandName: "Venus Future Aesthetics",
        topic: "Cryoslim Treatment",
        vibe: "Professional & Luxury",
        primaryColor: "#000000",
        secondaryColor: "#ffffff",
        accentColor: "#ff0000",
        neutralColor: "#f5f5f5",
        audience: "Women 30-50",
        assets: [],
        sections: sections
    };

    // 2. Validate Design Rules for new Phase 6 layouts
    const checkDesignRules = () => {
        console.log('\n--- Checking Design Rules for New Layouts ---');
        const layoutTests = [
            { section: 'trustPrimer', layout: 'Logo Grid', expected: 'LAYOUT: Simple grid' },
            { section: 'problemConcern', layout: 'Feature Grid', expected: 'LAYOUT: Card grid style' },
            { section: 'treatmentLogic', layout: 'Detailed Split', expected: 'LAYOUT: Split 50/50' },
            { section: 'procedureGuide', layout: 'Timeline', expected: 'LAYOUT: Vertical timeline' },
            { section: 'clinicDetails', layout: 'Gallery Split', expected: 'LAYOUT: 50/50 Split' },
            { section: 'faq', layout: 'Accordion', expected: 'STYLE: Interactive accordion' }
        ];

        let allPass = true;
        layoutTests.forEach(test => {
            // Base sections with all disabled
            const baseSections = {
                header: { layout: 'Sticky', data: {} },
                hero: { enabled: false },
                trustPrimer: { enabled: false },
                problemConcern: { enabled: false },
                treatmentLogic: { enabled: false },
                procedureGuide: { enabled: false },
                socialProof: { enabled: false },
                conversion: { enabled: false },
                clinicDetails: { enabled: false },
                faq: { enabled: false },
                footer: { enabled: false }
            };

            // Enable and configure the specific section under test
            baseSections[test.section] = {
                enabled: true,
                layout: test.layout,
                data: { items: [], benefits: [] }
            };

            const mockData = {
                brandName: 'Test Brand',
                assets: [],
                sections: baseSections
            };

            const output = generatePrompt(mockData);
            if (output.includes(test.expected)) {
                console.log(`✅ ${test.section} (${test.layout}): Rule Found`);
            } else {
                console.error(`❌ ${test.section} (${test.layout}): Rule MISSING. Expected "${test.expected}"`);
                console.log(`ACTUAL OUTPUT SNIPPET (${test.section}):\n`, output.split(test.section === 'clinicDetails' ? 'CLINIC DETAILS' : test.section === 'faq' ? 'FAQ' : 'SECTION')[1]?.substring(0, 300));
                allPass = false;
            }
        });

        if (allPass) console.log('All Layout Rules Verified.');
    }

    checkDesignRules();

    console.log("\nVerification Complete.");

} catch (error) {
    console.error("CRITICAL ERROR during verification:", error);
}

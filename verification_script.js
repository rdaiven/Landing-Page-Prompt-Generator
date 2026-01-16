
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

    // 3. Test New Layouts
    // Set Hero to 'Full Width'
    formData.sections.hero.layout = 'Full Width';

    // Set Social Proof to 'Carousel'
    formData.sections.socialProof.layout = 'Carousel';

    // 4. Generate Prompt
    console.log("Generating prompt...");
    const prompt = generatePrompt(formData);

    // 5. Verify Prompt Content
    console.log("\n--- Generated Prompt Preview (Excerpt) ---");
    console.log(prompt.substring(0, 500) + "...");

    if (prompt.includes("Full Width")) {
        console.log("✅ Success: Prompt contains 'Full Width' layout instruction.");
    } else {
        console.error("❌ Error: Prompt missing 'Full Width' layout instruction.");
    }

    if (prompt.includes("Carousel")) {
        console.log("✅ Success: Prompt contains 'Carousel' layout instruction.");
    } else {
        console.error("❌ Error: Prompt missing 'Carousel' layout instruction.");
    }

    console.log("\nVerification Complete.");

} catch (error) {
    console.error("CRITICAL ERROR during verification:", error);
}

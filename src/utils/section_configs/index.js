import { headerConfig } from './headerConfig.js';
import { heroConfig } from './heroConfig.js';
import { trustPrimerConfig } from './trustPrimerConfig.js';
import { problemConcernConfig } from './problemConcernConfig.js';
import { treatmentLogicConfig } from './treatmentLogicConfig.js';
import { procedureGuideConfig } from './procedureGuideConfig.js';
import { clinicDetailsConfig } from './clinicDetailsConfig.js';
import { faqConfig } from './faqConfig.js';
import { socialProofConfig } from './socialProofConfig.js';
import { conversionConfig } from './conversionConfig.js';
import { footerConfig } from './footerConfig.js';

export const sectionConfigs = {
    header: headerConfig,
    hero: heroConfig,
    trustPrimer: trustPrimerConfig,
    problemConcern: problemConcernConfig,
    treatmentLogic: treatmentLogicConfig,
    procedureGuide: procedureGuideConfig,
    clinicDetails: clinicDetailsConfig,
    faq: faqConfig,
    socialProof: socialProofConfig,
    conversion: conversionConfig,
    footer: footerConfig
};

export const getInitialSectionState = () => {
    const initialState = {};
    for (const [key, config] of Object.entries(sectionConfigs)) {
        const firstLayoutName = Object.keys(config.layouts)[0];
        const layoutConfig = config.layouts[firstLayoutName];

        // Build initial data from defaults
        const data = {};
        if (layoutConfig.defaultData) {
            Object.assign(data, layoutConfig.defaultData);
        }

        // Also fill in individual field defaults if not in defaultData
        if (layoutConfig.fields) {
            layoutConfig.fields.forEach(field => {
                if (field.type !== 'collection' && data[field.name] === undefined) {
                    // UX RULE: Text inputs start empty (showing placeholder).
                    // Structural inputs (select, icon) keep their defaults.
                    if (field.type === 'text' || field.type === 'textarea') {
                        data[field.name] = '';
                    } else {
                        data[field.name] = field.default || '';
                    }
                }
            });
        }

        initialState[key] = {
            enabled: true,
            layout: firstLayoutName,
            data: data,
            styles: {}
        };
    }
    return initialState;
};

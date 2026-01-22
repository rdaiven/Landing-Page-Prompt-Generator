import React from 'react'
import { sectionConfigs } from '../utils/sectionConfig'
import { getContrastColor } from '../utils/colors'
import { getDataWithDefaults } from '../utils/dataHelpers'
import ErrorBoundary from './ErrorBoundary'

// Import Section Components
import HeaderSection from './sections/HeaderSection'
import HeroSection from './sections/HeroSection'
import TrustPrimerSection from './sections/TrustPrimerSection'
import ProblemConcernSection from './sections/ProblemConcernSection'
import TreatmentLogicSection from './sections/TreatmentLogicSection'
import ProcedureGuideSection from './sections/ProcedureGuideSection'
import SocialProofSection from './sections/SocialProofSection'
import ClinicDetailsSection from './sections/ClinicDetailsSection'
import FAQSection from './sections/FAQSection'
import ConversionSection from './sections/ConversionSection'
import FooterSection from './sections/FooterSection'

const VisualPreview = ({ formData, activeSection }) => {
    const { primaryColor, secondaryColor, accentColor, neutralColor, sections, brandName, topic } = formData

    // Auto-scroll to active section
    React.useEffect(() => {
        if (activeSection) {
            const element = document.getElementById(`section-${activeSection}`);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, [activeSection]);

    const theme = {
        primaryColor,
        secondaryColor,
        accentColor,
        neutralColor,
        brandName,
        topic
    }

    // eslint-disable-next-line no-unused-vars
    const renderSection = (key, Component) => {
        const sectionData = sections[key];
        if (!sectionData || !sectionData.enabled) return null;

        // Merge user data with defaults
        const dataWithDefaults = getDataWithDefaults(key, sectionData.layout, sectionData.data);

        // Custom styles (background, text color, etc.)
        const customStyles = { minHeight: '200px' };
        if (sectionData.styles) {
            if (sectionData.styles.backgroundColor) {
                if (sectionData.styles.backgroundColor === 'primary') customStyles.backgroundColor = theme.primaryColor;
                else if (sectionData.styles.backgroundColor === 'secondary') customStyles.backgroundColor = theme.secondaryColor;
                else if (sectionData.styles.backgroundColor === 'neutral') customStyles.backgroundColor = theme.neutralColor;
            }
            if (sectionData.styles.textColor) {
                if (sectionData.styles.textColor === 'dark') customStyles.color = '#1e293b';
                else if (sectionData.styles.textColor === 'light') customStyles.color = '#ffffff';
                else if (sectionData.styles.textColor === 'primary') customStyles.color = theme.primaryColor;
            }
        }

        return (
            <div id={`section-${key}`} key={key} style={customStyles}>
                <ErrorBoundary label={`Error in ${key} section`}>
                    <Component
                        data={dataWithDefaults}
                        layout={sectionData.layout}
                        theme={theme}
                        isScrollTarget={true}
                    />
                </ErrorBoundary>
            </div>
        )
    }

    return (
        <div className="visual-preview-container" style={{
            fontFamily: 'var(--font-body)', // Fixed: was var(--font-sans)
            color: getContrastColor(secondaryColor || '#fff'),
            backgroundColor: '#fff',
            borderRadius: '12px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            overflow: 'hidden',
            margin: '2rem auto',
            maxWidth: '1200px',
            border: '1px solid rgba(255, 255, 255, 0.5)',
            // Inject all theme variables here to ensure Child Components pick them up
            '--primary': theme.primaryColor || '#000',
            '--secondary': theme.secondaryColor || '#fff',
            '--accent': theme.accentColor || '#3b82f6',
            '--neutral': theme.neutralColor || '#f3f4f6',
        }}>
            <div className="browser-chrome" style={{
                background: '#f1f5f9',
                padding: '0.75rem 1rem',
                borderBottom: '1px solid #e2e8f0',
                display: 'flex',
                gap: '1rem',
                alignItems: 'center',
                borderTopLeftRadius: '12px',
                borderTopRightRadius: '12px'
            }}>
                <div style={{ display: 'flex', gap: '0.4rem' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444', border: '1px solid #dc2626' }}></div>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b', border: '1px solid #d97706' }}></div>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981', border: '1px solid #059669' }}></div>
                </div>
                <div style={{
                    flex: 1,
                    textAlign: 'center',
                    background: '#fff',
                    margin: '0 1rem',
                    padding: '0.4rem 1rem',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    color: '#64748b',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                }}>
                    <span style={{ opacity: 0.5 }}>🔒</span> preview.yoursite.com
                </div>
            </div>

            <div className="preview-viewport" style={{ maxHeight: '800px', overflowY: 'auto' }}>
                {renderSection('header', HeaderSection)}
                {renderSection('hero', HeroSection)}
                {renderSection('trustPrimer', TrustPrimerSection)}
                {renderSection('problemConcern', ProblemConcernSection)}
                {renderSection('treatmentLogic', TreatmentLogicSection)}
                {renderSection('procedureGuide', ProcedureGuideSection)}
                {renderSection('socialProof', SocialProofSection)}
                {renderSection('clinicDetails', ClinicDetailsSection)}
                {renderSection('faq', FAQSection)}
                {renderSection('conversion', ConversionSection)}
                {renderSection('footer', FooterSection)}
            </div>
        </div>
    )
}

export default VisualPreview

import React from 'react'
import HeaderSection from './sections/HeaderSection'
import HeroSection from './sections/HeroSection'
import TrustPrimerSection from './sections/TrustPrimerSection'
import ProblemConcernSection from './sections/ProblemConcernSection'
import TreatmentLogicSection from './sections/TreatmentLogicSection'
import SocialProofSection from './sections/SocialProofSection'
import ConversionSection from './sections/ConversionSection'
import FooterSection from './sections/FooterSection'

const VisualPreview = ({ formData }) => {
    const { primaryColor, secondaryColor, accentColor, neutralColor, sections } = formData

    const theme = {
        primaryColor,
        secondaryColor,
        accentColor,
        neutralColor
    }

    const renderSection = (key, Component) => {
        const sectionData = sections[key];
        if (!sectionData || !sectionData.enabled) return null;
        return (
            <Component
                key={key}
                data={sectionData.data}
                layout={sectionData.layout}
                theme={theme}
            />
        )
    }

    return (
        <div className="visual-preview-container" style={{ fontFamily: 'var(--font-sans)', color: '#333' }}>
            {renderSection('header', HeaderSection)}
            {renderSection('hero', HeroSection)}
            {renderSection('trustPrimer', TrustPrimerSection)}
            {renderSection('problemConcern', ProblemConcernSection)}
            {renderSection('treatmentLogic', TreatmentLogicSection)}
            {/* TODO: Add ProcedureGuideSection when implemented */}
            {renderSection('socialProof', SocialProofSection)}
            {/* TODO: Add ClinicDetails, FAQ when implemented */}
            {renderSection('conversion', ConversionSection)}
            {renderSection('footer', FooterSection)}
        </div>
    )
}

export default VisualPreview

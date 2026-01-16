import React from 'react'

const InputPanel = ({ formData, updateField, toggleSection, updateSectionLayout, updateSectionContent }) => {
    const sectionLabels = {
        header: "Navigation Header",
        hero: "Immediate Hook (Hero)",
        trustPrimer: "Assurance Strip (Trust)",
        problemConcern: "Confirm Relevance (Filter)",
        treatmentLogic: "How it Works (Logic)",
        procedureGuide: "Procedure Guide (Steps)",
        socialProof: "Real Results (Proof)",
        conversion: "Check Availability (CTA)",
        clinicDetails: "Visit Us (Details)",
        faq: "Common Questions (FAQ)",
        footer: "Footer"
    }

    const helpText = {
        brandName: "The official name of the clinic or practice.",
        topic: "The specific treatment or service this page is selling (e.g. 'CoolSculpting' or 'Botox').",
        vibe: "The emotional tone of the copy and design.",
        primaryColor: "Main brand color used for buttons and highlights.",
        secondaryColor: "Background or accent color.",
        audience: "Who is this for? e.g. 'Post-partum moms' or 'Men over 40'.",
        customContent: "Paste your specific copy, bullet points, or instructions for this section here."
    }

    const layoutOptions = {
        header: ['Always Sticky', 'Smart Hide (Scroll Up to Show)', 'Static (Scrolls away)'],
        hero: ['Split', 'Centered', 'Video-First'],
        trustPrimer: ['Short Strip', 'Logo Grid'],
        problemConcern: ['Bullets', 'Feature Grid'],
        treatmentLogic: ['Simple', 'Detailed'],
        procedureGuide: ['3-Step', 'Timeline'],
        socialProof: ['Testimonials', 'Before & After', 'Mixed'],
        conversion: ['Urgency', 'Benefit-Driven'],
        clinicDetails: ['Grid', 'List'],
        faq: ['Objection-Only', 'Comprehensive'],
        footer: ['Minimal', 'Detailed']
    }

    return (
        <div className="input-panel">
            <section className="form-group">
                <h3>Brand Information</h3>
                <div className="input-field">
                    <label>
                        Brand Name
                        <span className="helper-icon" title={helpText.brandName}>?</span>
                    </label>
                    <input
                        type="text"
                        placeholder="e.g. Venus Future Aesthetics"
                        value={formData.brandName}
                        onChange={(e) => updateField('brandName', e.target.value)}
                    />
                </div>
                <div className="input-field">
                    <label>
                        Topic / Service
                        <span className="helper-icon" title={helpText.topic}>?</span>
                    </label>
                    <input
                        type="text"
                        placeholder="e.g. Cryoslim Treatment"
                        value={formData.topic}
                        onChange={(e) => updateField('topic', e.target.value)}
                    />
                </div>
                <div className="input-field">
                    <label>
                        Brand Vibe
                        <span className="helper-icon" title={helpText.vibe}>?</span>
                    </label>
                    <select
                        value={formData.vibe}
                        onChange={(e) => updateField('vibe', e.target.value)}
                    >
                        <option>Professional & Luxury</option>
                        <option>Modern Tech</option>
                        <option>Friendly & Approachable</option>
                        <option>Minimalist & Clean</option>
                    </select>
                </div>
            </section>

            <section className="form-group">
                <h3>Branding & Assets</h3>
                <div className="color-grid">
                    <div className="input-field">
                        <label>
                            Primary Color
                            <span className="helper-icon" title={helpText.primaryColor}>?</span>
                        </label>
                        <div className="color-input-wrapper">
                            <input
                                type="color"
                                value={formData.primaryColor || '#2563eb'}
                                onChange={(e) => updateField('primaryColor', e.target.value)}
                            />
                            <input
                                type="text"
                                value={formData.primaryColor || '#2563eb'}
                                onChange={(e) => updateField('primaryColor', e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="input-field">
                        <label>
                            Secondary Color
                            <span className="helper-icon" title={helpText.secondaryColor}>?</span>
                        </label>
                        <div className="color-input-wrapper">
                            <input
                                type="color"
                                value={formData.secondaryColor || '#f8fafc'}
                                onChange={(e) => updateField('secondaryColor', e.target.value)}
                            />
                            <input
                                type="text"
                                value={formData.secondaryColor || '#f8fafc'}
                                onChange={(e) => updateField('secondaryColor', e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="input-field">
                    <label>
                        Target Audience
                        <span className="helper-icon" title={helpText.audience}>?</span>
                    </label>
                    <input
                        type="text"
                        placeholder="e.g. Busy professionals in their 30s"
                        value={formData.audience}
                        onChange={(e) => updateField('audience', e.target.value)}
                    />
                </div>
            </section>

            <section className="form-group">
                <h3>Media Assets</h3>
                <div className="asset-list">
                    {formData.assets.map((asset, index) => (
                        <div key={index} className="asset-item">
                            <select
                                value={asset.type}
                                onChange={(e) => {
                                    const newAssets = [...formData.assets];
                                    newAssets[index].type = e.target.value;
                                    updateField('assets', newAssets);
                                }}
                            >
                                <option value="image">Image</option>
                                <option value="video">Video</option>
                            </select>
                            <input
                                type="text"
                                placeholder={`${asset.type === 'image' ? 'Image' : 'Video'} URL`}
                                value={asset.url}
                                onChange={(e) => {
                                    const newAssets = [...formData.assets];
                                    newAssets[index].url = e.target.value;
                                    updateField('assets', newAssets);
                                }}
                            />
                            <button
                                className="remove-asset"
                                onClick={() => {
                                    const newAssets = formData.assets.filter((_, i) => i !== index);
                                    updateField('assets', newAssets);
                                }}
                            >
                                &times;
                            </button>
                        </div>
                    ))}
                </div>
                <button
                    className="add-asset-btn"
                    onClick={() => {
                        updateField('assets', [...formData.assets, { type: 'image', url: '' }]);
                    }}
                >
                    + Add Asset
                </button>
            </section>

            <section className="form-group">
                <h3>Page Sections & Layouts</h3>
                <div className="sections-config-list">
                    {Object.keys(formData.sections).map(sectionKey => (
                        <div key={sectionKey} className={`section-config-item ${formData.sections[sectionKey].enabled ? 'active' : ''}`}>
                            <div className="section-header">
                                <label className="section-toggle">
                                    <input
                                        type="checkbox"
                                        checked={formData.sections[sectionKey].enabled}
                                        onChange={() => toggleSection(sectionKey)}
                                    />
                                    <span>{sectionLabels[sectionKey]}</span>
                                </label>
                            </div>

                            {formData.sections[sectionKey].enabled && (
                                <div className="section-settings">
                                    <div className="section-layout-select">
                                        <label>Layout Style</label>
                                        <select
                                            value={formData.sections[sectionKey].layout}
                                            onChange={(e) => updateSectionLayout(sectionKey, e.target.value)}
                                        >
                                            {layoutOptions[sectionKey].map(opt => (
                                                <option key={opt} value={opt}>{opt}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="section-custom-content">
                                        <label>
                                            Custom Content / Instructions
                                            <span className="helper-icon" title={helpText.customContent}>?</span>
                                        </label>
                                        <textarea
                                            placeholder="Paste your copy or specific instructions for this section here..."
                                            value={formData.sections[sectionKey].content || ''}
                                            onChange={(e) => updateSectionContent(sectionKey, e.target.value)}
                                            rows={3}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default InputPanel

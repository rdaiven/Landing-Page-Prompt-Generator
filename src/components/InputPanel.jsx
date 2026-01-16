import React from 'react'
import Tooltip from './Tooltip'
import { sectionConfigs } from '../utils/sectionConfig'

const InputPanel = ({ formData, updateField, toggleSection, updateSectionLayout, updateSectionData }) => {

    // Help text remains the same...
    const helpText = {
        brandName: "The official name of the clinic or practice.",
        topic: "The specific treatment or service this page is selling (e.g. 'CoolSculpting' or 'Botox').",
        vibe: "The emotional tone of the copy and design.",
        primaryColor: "Main brand color used for buttons and highlights.",
        secondaryColor: "Background or accent color.",
        accentColor: "Used for success states, secondary highlights, or badges.",
        neutralColor: "Used for backgrounds, borders, and subtle text.",
        audience: "Who is this for? e.g. 'Post-partum moms' or 'Men over 40'.",
    }

    const renderField = (sectionKey, field, value) => {
        if (field.type === 'text') {
            return (
                <div key={field.name} className="dynamic-field">
                    <label>{field.label}</label>
                    <input
                        type="text"
                        value={value || ''}
                        onChange={(e) => updateSectionData(sectionKey, field.name, e.target.value)}
                        placeholder={field.default}
                    />
                </div>
            )
        }
        if (field.type === 'textarea') {
            return (
                <div key={field.name} className="dynamic-field">
                    <label>{field.label}</label>
                    <textarea
                        rows={3}
                        value={value || ''}
                        onChange={(e) => updateSectionData(sectionKey, field.name, e.target.value)}
                        placeholder={field.default}
                    />
                </div>
            )
        }
        if (field.type === 'collection') {
            return (
                <div key={field.name} className="dynamic-collection">
                    <label>{field.label}</label>
                    <div className="collection-items">
                        {(value || []).map((item, index) => (
                            <div key={index} className="collection-item">
                                <span className="item-number">#{index + 1}</span>
                                <div className="item-fields">
                                    {field.fields.map(subField => (
                                        <div key={subField.name} className="sub-field">
                                            <input
                                                type={subField.type === 'textarea' ? 'text' : subField.type} // Compact inputs for list items
                                                placeholder={subField.label}
                                                value={item[subField.name] || ''}
                                                onChange={(e) => {
                                                    const newValue = [...(value || [])];
                                                    newValue[index] = { ...newValue[index], [subField.name]: e.target.value };
                                                    updateSectionData(sectionKey, field.name, newValue);
                                                }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )
        }
        return null;
    }

    return (
        <div className="input-panel">
            <section className="form-group">
                <h3>Brand Information</h3>
                <div className="input-field">
                    <label>
                        Brand Name
                        <Tooltip text={helpText.brandName} />
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
                    <div className="color-input-wrapper">
                        <input
                            type="color"
                            value={formData.primaryColor || '#000000'}
                            onChange={(e) => updateField('primaryColor', e.target.value)}
                        />
                        <div className="input-group">
                            <label>Primary Color <span className="helper-icon" title={helpText.primaryColor}>?</span></label>
                            <input
                                type="text"
                                placeholder="Hex or Name"
                                value={formData.primaryColor}
                                onChange={(e) => updateField('primaryColor', e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="color-input-wrapper">
                        <input
                            type="color"
                            value={formData.secondaryColor || '#ffffff'}
                            onChange={(e) => updateField('secondaryColor', e.target.value)}
                        />
                        <div className="input-group">
                            <label>Secondary Color <span className="helper-icon" title={helpText.secondaryColor}>?</span></label>
                            <input
                                type="text"
                                placeholder="Hex or Name"
                                value={formData.secondaryColor}
                                onChange={(e) => updateField('secondaryColor', e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="color-input-wrapper">
                        <input
                            type="color"
                            value={formData.accentColor || '#ffffff'}
                            onChange={(e) => updateField('accentColor', e.target.value)}
                        />
                        <div className="input-group">
                            <label>Accent Color <span className="helper-icon" title={helpText.accentColor}>?</span></label>
                            <input
                                type="text"
                                placeholder="Hex or Name"
                                value={formData.accentColor}
                                onChange={(e) => updateField('accentColor', e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="color-input-wrapper">
                        <input
                            type="color"
                            value={formData.neutralColor || '#f5f5f5'}
                            onChange={(e) => updateField('neutralColor', e.target.value)}
                        />
                        <div className="input-group">
                            <label>Neutral Color <span className="helper-icon" title={helpText.neutralColor}>?</span></label>
                            <input
                                type="text"
                                placeholder="Hex or Name"
                                value={formData.neutralColor}
                                onChange={(e) => updateField('neutralColor', e.target.value)}
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
                <h3>Page Sections & Layouts</h3>
                <div className="sections-config-list">
                    {Object.keys(formData.sections).map(sectionKey => {
                        const sectionData = formData.sections[sectionKey];
                        const config = sectionConfigs[sectionKey];
                        const currentLayoutConfig = config.layouts[sectionData.layout];

                        return (
                            <div key={sectionKey} className={`section-config-item ${sectionData.enabled ? 'active' : ''}`}>
                                <div className="section-header">
                                    <label className="section-toggle">
                                        <input
                                            type="checkbox"
                                            checked={sectionData.enabled}
                                            onChange={() => toggleSection(sectionKey)}
                                        />
                                        <span>{config.label}</span>
                                    </label>
                                </div>

                                {sectionData.enabled && (
                                    <div className="section-settings">
                                        <div className="section-layout-select">
                                            <label>Layout Style</label>
                                            <select
                                                value={sectionData.layout}
                                                onChange={(e) => updateSectionLayout(sectionKey, e.target.value)}
                                            >
                                                {Object.keys(config.layouts).map(opt => (
                                                    <option key={opt} value={opt}>{opt}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="dynamic-inputs">
                                            {currentLayoutConfig.fields && currentLayoutConfig.fields.map(field =>
                                                renderField(sectionKey, field, sectionData.data[field.name])
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default InputPanel

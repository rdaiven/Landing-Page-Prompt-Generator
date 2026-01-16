import React from 'react'
import Tooltip from './Tooltip'
import { sectionConfigs } from '../utils/sectionConfig'

const InputPanel = ({ formData, updateField, toggleSection, updateSectionLayout, updateSectionData }) => {
    const [expandedSection, setExpandedSection] = React.useState(null);

    const toggleAccordion = (sectionKey) => {
        if (expandedSection === sectionKey) {
            setExpandedSection(null);
        } else {
            setExpandedSection(sectionKey);
        }
    }

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
            <section className="form-group" style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#0f172a' }}>
                    🏷️ Brand Information
                </h3>
                <div className="input-field">
                    <label style={{ display: 'flex', alignItems: 'center' }}>
                        Brand Name
                        <Tooltip text={helpText.brandName} />
                    </label>
                    <input
                        type="text"
                        placeholder="e.g. Venus Future Aesthetics"
                        value={formData.brandName}
                        onChange={(e) => updateField('brandName', e.target.value)}
                        style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', marginTop: '0.5rem' }}
                    />
                </div>
                <div className="input-field" style={{ marginTop: '1rem' }}>
                    <label style={{ display: 'flex', alignItems: 'center' }}>
                        Topic / Service
                        <Tooltip text={helpText.topic} />
                    </label>
                    <input
                        type="text"
                        placeholder="e.g. Cryoslim Treatment"
                        value={formData.topic}
                        onChange={(e) => updateField('topic', e.target.value)}
                        style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', marginTop: '0.5rem' }}
                    />
                </div>
                <div className="input-field" style={{ marginTop: '1rem' }}>
                    <label style={{ display: 'flex', alignItems: 'center' }}>
                        Brand Vibe
                        <Tooltip text={helpText.vibe} />
                    </label>
                    <select
                        value={formData.vibe}
                        onChange={(e) => updateField('vibe', e.target.value)}
                        style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', marginTop: '0.5rem' }}
                    >
                        <option>Professional & Luxury</option>
                        <option>Modern Tech</option>
                        <option>Friendly & Approachable</option>
                        <option>Minimalist & Clean</option>
                    </select>
                </div>
            </section>

            <section className="form-group" style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', marginTop: '2rem' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#0f172a' }}>
                    🎨 Branding & Assets
                </h3>
                <div className="color-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="color-input-wrapper">
                        <label style={{ display: 'flex', alignItems: 'center', fontSize: '0.875rem', marginBottom: '0.25rem' }}>
                            Primary <Tooltip text={helpText.primaryColor} />
                        </label>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <input
                                type="color"
                                value={formData.primaryColor || '#000000'}
                                onChange={(e) => updateField('primaryColor', e.target.value)}
                                style={{ height: '38px', width: '38px', padding: 0, border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                            />
                            <input
                                type="text"
                                placeholder="Hex"
                                value={formData.primaryColor}
                                onChange={(e) => updateField('primaryColor', e.target.value)}
                                style={{ flex: 1, padding: '0.5rem', borderRadius: '6px', border: '1px solid #cbd5e1' }}
                            />
                        </div>
                    </div>

                    <div className="color-input-wrapper">
                        <label style={{ display: 'flex', alignItems: 'center', fontSize: '0.875rem', marginBottom: '0.25rem' }}>
                            Secondary <Tooltip text={helpText.secondaryColor} />
                        </label>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <input
                                type="color"
                                value={formData.secondaryColor || '#ffffff'}
                                onChange={(e) => updateField('secondaryColor', e.target.value)}
                                style={{ height: '38px', width: '38px', padding: 0, border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                            />
                            <input
                                type="text"
                                placeholder="Hex"
                                value={formData.secondaryColor}
                                onChange={(e) => updateField('secondaryColor', e.target.value)}
                                style={{ flex: 1, padding: '0.5rem', borderRadius: '6px', border: '1px solid #cbd5e1' }}
                            />
                        </div>
                    </div>

                    <div className="color-input-wrapper">
                        <label style={{ display: 'flex', alignItems: 'center', fontSize: '0.875rem', marginBottom: '0.25rem' }}>
                            Accent <Tooltip text={helpText.accentColor} />
                        </label>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <input
                                type="color"
                                value={formData.accentColor || '#ffffff'}
                                onChange={(e) => updateField('accentColor', e.target.value)}
                                style={{ height: '38px', width: '38px', padding: 0, border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                            />
                            <input
                                type="text"
                                placeholder="Hex"
                                value={formData.accentColor}
                                onChange={(e) => updateField('accentColor', e.target.value)}
                                style={{ flex: 1, padding: '0.5rem', borderRadius: '6px', border: '1px solid #cbd5e1' }}
                            />
                        </div>
                    </div>

                    <div className="color-input-wrapper">
                        <label style={{ display: 'flex', alignItems: 'center', fontSize: '0.875rem', marginBottom: '0.25rem' }}>
                            Neutral <Tooltip text={helpText.neutralColor} />
                        </label>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <input
                                type="color"
                                value={formData.neutralColor || '#f5f5f5'}
                                onChange={(e) => updateField('neutralColor', e.target.value)}
                                style={{ height: '38px', width: '38px', padding: 0, border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                            />
                            <input
                                type="text"
                                placeholder="Hex"
                                value={formData.neutralColor}
                                onChange={(e) => updateField('neutralColor', e.target.value)}
                                style={{ flex: 1, padding: '0.5rem', borderRadius: '6px', border: '1px solid #cbd5e1' }}
                            />
                        </div>
                    </div>
                </div>
                <div className="input-field" style={{ marginTop: '1rem' }}>
                    <label style={{ display: 'flex', alignItems: 'center' }}>
                        Target Audience
                        <Tooltip text={helpText.audience} />
                    </label>
                    <input
                        type="text"
                        placeholder="e.g. Busy professionals in their 30s"
                        value={formData.audience}
                        onChange={(e) => updateField('audience', e.target.value)}
                        style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', marginTop: '0.5rem' }}
                    />
                </div>
            </section>

            <section className="form-group" style={{ marginTop: '2rem' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#0f172a' }}>
                    📑 Page Sections & Layouts
                </h3>
                <div className="sections-config-list" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {Object.keys(formData.sections).map(sectionKey => {
                        const sectionData = formData.sections[sectionKey];
                        const config = sectionConfigs[sectionKey];
                        const currentLayoutConfig = config.layouts[sectionData.layout];
                        const isExpanded = expandedSection === sectionKey;

                        return (
                            <div
                                key={sectionKey}
                                className={`section-config-item ${sectionData.enabled ? 'enabled' : 'disabled'}`}
                                style={{
                                    border: sectionData.enabled ? '1px solid #cbd5e1' : '1px solid #e2e8f0',
                                    borderRadius: '8px',
                                    background: sectionData.enabled ? '#fff' : '#f8fafc',
                                    transition: 'all 0.2s',
                                    overflow: 'hidden'
                                }}
                            >
                                <div
                                    className="section-header"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        padding: '1rem',
                                        cursor: 'pointer',
                                        background: isExpanded ? '#f1f5f9' : 'transparent',
                                        borderBottom: isExpanded ? '1px solid #e2e8f0' : 'none'
                                    }}
                                    onClick={() => toggleAccordion(sectionKey)}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <div onClick={(e) => e.stopPropagation()}>
                                            <input
                                                type="checkbox"
                                                checked={sectionData.enabled}
                                                onChange={() => {
                                                    toggleSection(sectionKey);
                                                    if (!sectionData.enabled) {
                                                        setExpandedSection(sectionKey);
                                                    }
                                                }}
                                                style={{ width: '1.2rem', height: '1.2rem', cursor: 'pointer' }}
                                            />
                                        </div>
                                        <span style={{ fontSize: '1.1rem', fontWeight: 600, color: sectionData.enabled ? '#0f172a' : '#94a3b8' }}>
                                            {config.icon} {config.label}
                                        </span>
                                    </div>
                                    <div style={{ color: '#64748b', transform: isExpanded ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }}>
                                        ▼
                                    </div>
                                </div>

                                {isExpanded && sectionData.enabled && (
                                    <div className="section-settings" style={{ padding: '1.5rem', background: '#fff' }}>
                                        <div className="section-layout-select" style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid #e2e8f0' }}>
                                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600, color: '#334155' }}>
                                                Layout Style
                                            </label>
                                            <select
                                                value={sectionData.layout}
                                                onChange={(e) => updateSectionLayout(sectionKey, e.target.value)}
                                                style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '1rem', backgroundColor: '#f8fafc' }}
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

                                {isExpanded && !sectionData.enabled && (
                                    <div style={{ padding: '2rem', textAlign: 'center', color: '#64748b', fontStyle: 'italic', fontSize: '0.9rem' }}>
                                        Enable this section to customize its content.
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

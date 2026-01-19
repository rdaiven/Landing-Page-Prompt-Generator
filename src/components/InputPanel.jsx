import React from 'react'
import Tooltip from './Tooltip'
import { sectionConfigs } from '../utils/sectionConfig'

const InputPanel = ({ formData, updateField, toggleSection, updateSectionLayout, updateSectionData, onReset, onExport, onImport }) => {
    const [activeTab, setActiveTab] = React.useState('settings');
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
            <div className="tabs-header" style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid var(--border)', marginBottom: '2rem' }}>
                <button
                    onClick={() => setActiveTab('settings')}
                    style={{
                        padding: '0.75rem 1rem',
                        border: 'none',
                        borderBottom: activeTab === 'settings' ? '2px solid var(--primary)' : '2px solid transparent',
                        marginBottom: '-1px',
                        color: activeTab === 'settings' ? 'var(--primary)' : 'var(--text-muted)',
                        fontWeight: 600,
                        fontSize: '0.95rem',
                        background: 'none',
                    }}
                >
                    Global Settings
                </button>
                <button
                    onClick={() => setActiveTab('content')}
                    style={{
                        padding: '0.75rem 1rem',
                        border: 'none',
                        borderBottom: activeTab === 'content' ? '2px solid var(--primary)' : '2px solid transparent',
                        marginBottom: '-1px',
                        color: activeTab === 'content' ? 'var(--primary)' : 'var(--text-muted)',
                        fontWeight: 600,
                        fontSize: '0.95rem',
                        background: 'none',
                    }}
                >
                    Page Sections
                </button>
            </div>

            {activeTab === 'settings' && (
                <div className="fade-in">
                    <section className="form-group" style={{ background: 'var(--surface)', padding: '1.5rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', fontSize: '1.1rem', color: 'var(--text-main)' }}>
                            Brand Information
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
                            />
                        </div>
                        <div className="input-field" style={{ marginTop: '1.25rem' }}>
                            <label style={{ display: 'flex', alignItems: 'center' }}>
                                Topic / Service
                                <Tooltip text={helpText.topic} />
                            </label>
                            <input
                                type="text"
                                placeholder="e.g. Cryoslim Treatment"
                                value={formData.topic}
                                onChange={(e) => updateField('topic', e.target.value)}
                            />
                        </div>
                        <div className="input-field" style={{ marginTop: '1.25rem' }}>
                            <label style={{ display: 'flex', alignItems: 'center' }}>
                                Brand Vibe
                                <Tooltip text={helpText.vibe} />
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

                    <section className="form-group" style={{ background: 'var(--surface)', padding: '1.5rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)', marginTop: '2rem' }}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', fontSize: '1.1rem', color: 'var(--text-main)' }}>
                            Branding & Assets
                        </h3>
                        <div className="color-grid">
                            <div className="color-input-wrapper">
                                <label style={{ display: 'flex', alignItems: 'center', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                                    Primary <Tooltip text={helpText.primaryColor} />
                                </label>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <input
                                        type="color"
                                        value={formData.primaryColor || '#000000'}
                                        onChange={(e) => updateField('primaryColor', e.target.value)}
                                        style={{ width: '100%', height: '42px', padding: 0, border: 'none', borderRadius: '6px', cursor: 'pointer' }}
                                    />
                                </div>
                            </div>

                            <div className="color-input-wrapper">
                                <label style={{ display: 'flex', alignItems: 'center', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                                    Secondary <Tooltip text={helpText.secondaryColor} />
                                </label>
                                <input
                                    type="color"
                                    value={formData.secondaryColor || '#ffffff'}
                                    onChange={(e) => updateField('secondaryColor', e.target.value)}
                                    style={{ width: '100%', height: '42px', padding: 0, border: 'none', borderRadius: '6px', cursor: 'pointer' }}
                                />
                            </div>

                            <div className="color-input-wrapper">
                                <label style={{ display: 'flex', alignItems: 'center', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                                    Accent <Tooltip text={helpText.accentColor} />
                                </label>
                                <input
                                    type="color"
                                    value={formData.accentColor || '#ffffff'}
                                    onChange={(e) => updateField('accentColor', e.target.value)}
                                    style={{ width: '100%', height: '42px', padding: 0, border: 'none', borderRadius: '6px', cursor: 'pointer' }}
                                />
                            </div>

                            <div className="color-input-wrapper">
                                <label style={{ display: 'flex', alignItems: 'center', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                                    Neutral <Tooltip text={helpText.neutralColor} />
                                </label>
                                <input
                                    type="color"
                                    value={formData.neutralColor || '#f5f5f5'}
                                    onChange={(e) => updateField('neutralColor', e.target.value)}
                                    style={{ width: '100%', height: '42px', padding: 0, border: 'none', borderRadius: '6px', cursor: 'pointer' }}
                                />
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
                            />
                        </div>
                        <div className="color-presets" style={{ marginTop: '1rem' }}>
                            <label style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#64748b' }}>Quick Palettes</label>
                            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                                {[
                                    { name: 'Luxury', primary: '#1a1a1a', secondary: '#ffffff', accent: '#d4af37', neutral: '#f9f9f9' },
                                    { name: 'Medical', primary: '#0ea5e9', secondary: '#ffffff', accent: '#0284c7', neutral: '#f1f5f9' },
                                    { name: 'Organic', primary: '#166534', secondary: '#f0fdf4', accent: '#d97706', neutral: '#fff7ed' },
                                    { name: 'Dark', primary: '#000000', secondary: '#111111', accent: '#3b82f6', neutral: '#1f2937' },
                                    { name: 'Pastel', primary: '#fca5a5', secondary: '#fff1f2', accent: '#fda4af', neutral: '#fff5f5' },
                                    { name: 'Vibrant', primary: '#7c3aed', secondary: '#ffffff', accent: '#db2777', neutral: '#f5f3ff' },
                                    { name: 'Corporate', primary: '#1e3a8a', secondary: '#ffffff', accent: '#3b82f6', neutral: '#f8fafc' },
                                    { name: 'Mono', primary: '#333333', secondary: '#ffffff', accent: '#555555', neutral: '#eeeeee' },

                                    // New Trending Palettes
                                    { name: 'Startup', primary: '#2563eb', secondary: '#ffffff', accent: '#f59e0b', neutral: '#f3f4f6' },
                                    { name: 'Warm', primary: '#e76f51', secondary: '#fdf6ec', accent: '#2a9d8f', neutral: '#fff1e6' },
                                    { name: 'Ocean', primary: '#0077b6', secondary: '#f0f9ff', accent: '#03045e', neutral: '#e0f2fe' },
                                    { name: 'Cyber', primary: '#7209b7', secondary: '#0f0518', accent: '#4cc9f0', neutral: '#1a1025' },
                                ].map(preset => (
                                    <button
                                        key={preset.name}
                                        onClick={() => {
                                            updateField('primaryColor', preset.primary);
                                            updateField('secondaryColor', preset.secondary);
                                            updateField('accentColor', preset.accent);
                                            updateField('neutralColor', preset.neutral);
                                        }}
                                        style={{
                                            display: 'flex', alignItems: 'center', gap: '0.5rem',
                                            padding: '0.25rem 0.5rem',
                                            border: '1px solid #e2e8f0', borderRadius: '999px',
                                            background: '#fff', cursor: 'pointer', fontSize: '0.8rem'
                                        }}
                                    >
                                        <div style={{ display: 'flex', borderRadius: '50%', overflow: 'hidden', width: '16px', height: '16px' }}>
                                            <div style={{ background: preset.primary, flex: 1 }}></div>
                                            <div style={{ background: preset.accent, flex: 1 }}></div>
                                        </div>
                                        {preset.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Actions Toolbar */}
                    <div className="actions-toolbar" style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #e2e8f0', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <button onClick={onReset} className="btn-secondary" style={{ borderColor: '#ef4444', color: '#ef4444' }}>
                            Reset Application
                        </button>
                        <button onClick={onExport} className="btn-primary">
                            Save Template
                        </button>
                        <label className="btn-secondary" style={{ display: 'inline-flex', cursor: 'pointer' }}>
                            Load Template
                            <input type="file" accept=".json" onChange={onImport} style={{ display: 'none' }} />
                        </label>
                    </div>
                </div>
            )}

            {activeTab === 'content' && (
                <div className="fade-in">
                    <section className="form-group">
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', fontSize: '1.1rem', color: 'var(--text-main)' }}>
                            Layout & Content
                        </h3>
                        <div className="sections-config-list" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
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
                                            border: sectionData.enabled ? '1px solid var(--border)' : '1px dashed var(--border)',
                                            borderRadius: 'var(--radius)',
                                            background: sectionData.enabled ? 'var(--surface)' : 'var(--surface-alt)',
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
                                                background: isExpanded ? 'var(--surface-alt)' : 'transparent',
                                                borderBottom: isExpanded ? '1px solid var(--border)' : 'none'
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
                                                        style={{ width: '1.2rem', height: '1.2rem', cursor: 'pointer', accentColor: 'var(--primary)' }}
                                                    />
                                                </div>
                                                <span style={{ fontSize: '1rem', fontWeight: 600, color: sectionData.enabled ? 'var(--text-main)' : 'var(--text-muted)' }}>
                                                    {config.icon} {config.label}
                                                </span>
                                            </div>
                                            <div style={{ color: 'var(--text-muted)', transform: isExpanded ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }}>
                                                ▼
                                            </div>
                                        </div>

                                        {isExpanded && sectionData.enabled && (
                                            <div className="section-settings" style={{ padding: '1.5rem', background: 'var(--surface)' }}>
                                                <div className="section-layout-select" style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border)' }}>
                                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                                        Select Layout
                                                    </label>
                                                    <select
                                                        value={sectionData.layout}
                                                        onChange={(e) => updateSectionLayout(sectionKey, e.target.value)}
                                                        style={{
                                                            width: '100%',
                                                            padding: '0.75rem',
                                                            borderRadius: 'var(--radius)',
                                                            border: '1px solid var(--border)',
                                                            fontSize: '0.95rem',
                                                            backgroundColor: 'var(--surface-alt)',
                                                            cursor: 'pointer'
                                                        }}
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
                                            <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)', fontStyle: 'italic', fontSize: '0.9rem' }}>
                                                Enable this section to customize its content.
                                            </div>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </section>
                </div>
            )}
        </div>
    )
}


export default InputPanel

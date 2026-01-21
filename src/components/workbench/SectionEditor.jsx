import React, { useState } from 'react';
import { SlidersHorizontal, Eye, ExternalLink, CheckCircle2, CircleDashed } from 'lucide-react';
import { sectionConfigs } from '../../utils/sectionConfig';
import Tooltip from '../Tooltip';
import IconPicker from '../IconPicker';
import { LayoutCards } from './ui/LayoutCards';
import { StatusPill } from './ui/StatusPill';

const SectionEditor = ({ sectionKey, formData, updateSectionLayout, updateSectionData, updateSectionStyles, setPreviewFocus, iframeMode, updateSectionStatus }) => {
    const [showStyle, setShowStyle] = useState(false);

    const sectionData = formData.sections[sectionKey];
    const config = sectionConfigs[sectionKey];

    if (!sectionData || !config) {
        return <div className="p-10 text-center text-slate-400">Select a section to edit</div>;
    }

    // Defensive check: If current layout is invalid (legacy data), fallback to first available
    const currentLayoutConfig = config.layouts[sectionData.layout] || Object.values(config.layouts)[0];
    const isEnabled = sectionData.enabled;
    const status = sectionData.status || 'draft';

    // Handler to toggle status between 'ready' and 'draft'
    const handleStatusToggle = () => {
        const newStatus = status === 'ready' ? 'draft' : 'ready';
        if (updateSectionStatus) {
            updateSectionStatus(sectionKey, newStatus);
        }
    };

    // --- Field Rendering Helper (Same as before) ---
    const renderField = (field, value) => {
        if (field.type === 'text') {
            return (
                <div key={field.name} className="space-y-1.5">
                    <div className="flex items-center justify-between">
                        <label className="text-sm font-semibold text-slate-900">{field.label}</label>
                    </div>
                    <input
                        type="text"
                        value={value || ''}
                        onChange={(e) => updateSectionData(sectionKey, field.name, e.target.value)}
                        placeholder={field.default}
                        className="w-full h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100 transition-all"
                    />
                </div>
            )
        }
        if (field.type === 'textarea') {
            return (
                <div key={field.name} className="space-y-1.5">
                    <div className="flex items-center justify-between">
                        <label className="text-sm font-semibold text-slate-900">{field.label}</label>
                    </div>
                    <textarea
                        rows={3}
                        value={value || ''}
                        onChange={(e) => updateSectionData(sectionKey, field.name, e.target.value)}
                        placeholder={field.default}
                        className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100 transition-all"
                    />
                </div>
            )
        }
        if (field.type === 'icon') {
            return (
                <div key={field.name} className="space-y-1.5">
                    <div className="flex items-center gap-2">
                        <label className="text-sm font-semibold text-slate-900">{field.label}</label>
                        {field.icon && <span>{field.icon}</span>}
                    </div>
                    <IconPicker
                        value={value}
                        onChange={(newIcon) => updateSectionData(sectionKey, field.name, newIcon)}
                    />
                </div>
            )
        }
        if (field.type === 'collection') {
            const items = value || [];
            return (
                <div key={field.name} className="rounded-2xl border border-slate-200 bg-white p-3 space-y-3">
                    <div className="flex items-center justify-between">
                        <label className="text-sm font-semibold text-slate-900">{field.label}</label>
                        <span className="text-xs text-slate-500">{items.length} / {field.max}</span>
                    </div>

                    <div className="space-y-2">
                        {items.map((item, index) => (
                            <div key={index} className="relative group rounded-xl border border-slate-100 bg-slate-50 p-2">
                                <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button
                                        onClick={() => {
                                            const newValue = [...items];
                                            newValue.splice(index, 1);
                                            updateSectionData(sectionKey, field.name, newValue);
                                        }}
                                        className="h-6 w-6 flex items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-red-500 hover:border-red-200"
                                        title="Remove Item"
                                    >
                                        ×
                                    </button>
                                </div>
                                <span className="text-[10px] uppercase font-bold text-slate-300 mb-1 block">Item {index + 1}</span>
                                <div className="space-y-2">
                                    {field.fields.map(subField => (
                                        <div key={subField.name}>
                                            {subField.type === 'icon' ? (
                                                <div>
                                                    <label className="text-xs text-slate-500 mb-1 block">{subField.label}</label>
                                                    <IconPicker
                                                        value={item[subField.name]}
                                                        onChange={(newIcon) => {
                                                            const newValue = [...items];
                                                            newValue[index] = { ...newValue[index], [subField.name]: newIcon };
                                                            updateSectionData(sectionKey, field.name, newValue);
                                                        }}
                                                    />
                                                </div>
                                            ) : (
                                                <input
                                                    type="text"
                                                    placeholder={subField.label}
                                                    value={item[subField.name] || ''}
                                                    onChange={(e) => {
                                                        const newValue = [...items];
                                                        newValue[index] = { ...newValue[index], [subField.name]: e.target.value };
                                                        updateSectionData(sectionKey, field.name, newValue);
                                                    }}
                                                    className="w-full text-sm bg-white border border-slate-200 rounded-lg px-2 py-1 focus:outline-none focus:border-indigo-300"
                                                />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {items.length < (field.max || 10) && (
                        <button
                            onClick={() => {
                                const newItem = {};
                                field.fields.forEach(f => newItem[f.name] = f.default || '');
                                updateSectionData(sectionKey, field.name, [...items, newItem]);
                            }}
                            className="w-full py-2 rounded-xl border border-dashed border-slate-300 text-slate-600 text-xs font-semibold hover:bg-slate-50 hover:border-slate-400 transition-colors"
                        >
                            + Add {field.label.slice(0, -1) || 'Item'}
                        </button>
                    )}
                </div>
            )
        }
        return null;
    };


    return (
        <div className="flex flex-col h-full w-full bg-slate-50/50">
            {/* Header */}
            <div className="p-5 border-b border-slate-200 bg-white flex-shrink-0">
                <div className="flex items-start justify-between gap-3">
                    <div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wide">SECTION DETAILS</div>
                        <div className="text-lg font-bold text-slate-900">{config.label}</div>
                        <div className="text-sm text-slate-500 line-clamp-2">
                            {isEnabled ? (config.description || 'Configure this section.') : 'Enable this section to edit.'}
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setPreviewFocus(!iframeMode)}
                            className={`hidden lg:inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-semibold transition-all ${iframeMode
                                ? 'bg-indigo-50 border-indigo-200 text-indigo-700'
                                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                                }`}
                            title={iframeMode ? "Show Details Panel" : "Maximize Preview"}
                        >
                            <Eye className="w-3.5 h-3.5" />
                            {iframeMode ? 'Show Editor' : 'Focus Preview'}
                        </button>
                        {isEnabled && <StatusPill status={status} />}
                    </div>
                </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-5 theme-scroll">
                {isEnabled ? (
                    <div className="space-y-8 max-w-2xl mx-auto">

                        {/* Layout Selector - VISUAL CARDS */}
                        <div>
                            <div className="mb-2 flex items-center justify-between">
                                <div className="text-sm font-bold text-slate-900">Choose Layout</div>
                                <div className="text-xs text-slate-500">Pre-approved designs</div>
                            </div>
                            <LayoutCards
                                value={sectionData.layout}
                                onChange={(val) => updateSectionLayout(sectionKey, val)}
                                options={Object.keys(config.layouts).map(key => ({
                                    id: key,
                                    name: key,
                                    tag: config.layouts[key].tag || null,
                                    description: config.layouts[key].description || null
                                }))}
                            />
                        </div>

                        {/* Dynamic Fields */}
                        <div className="space-y-5">
                            {currentLayoutConfig.fields && currentLayoutConfig.fields.map(field =>
                                renderField(field, sectionData.data[field.name])
                            )}
                        </div>

                        {/* Style Toggle */}
                        <div className="pt-6 border-t border-slate-200">
                            <button
                                onClick={() => setShowStyle(!showStyle)}
                                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-indigo-600 transition-colors w-full justify-between group"
                            >
                                <span className="flex items-center gap-2"><SlidersHorizontal className="w-3.5 h-3.5" /> Optional Styling</span>
                                <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-500 transition-colors">{showStyle ? 'Hide' : 'Show'}</span>
                            </button>

                            {/* Appearance Settings (Conditional) */}
                            {showStyle && (
                                <div className="mt-4 bg-white p-4 rounded-2xl border border-slate-200 animate-in fade-in slide-in-from-top-2">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label className="text-xs font-semibold text-slate-500">Background</label>
                                            <select
                                                className="w-full text-sm rounded-lg border-slate-200 bg-slate-50 px-2 py-1.5 focus:ring-2 focus:ring-indigo-100 outline-none"
                                                value={(sectionData.styles && sectionData.styles.backgroundColor) || 'default'}
                                                onChange={(e) => updateSectionStyles(sectionKey, 'backgroundColor', e.target.value)}
                                            >
                                                <option value="default">Default</option>
                                                <option value="primary">Brand Primary</option>
                                                <option value="secondary">Brand Secondary</option>
                                                <option value="neutral">Brand Neutral</option>
                                            </select>
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-semibold text-slate-500">Text Color</label>
                                            <select
                                                className="w-full text-sm rounded-lg border-slate-200 bg-slate-50 px-2 py-1.5 focus:ring-2 focus:ring-indigo-100 outline-none"
                                                value={(sectionData.styles && sectionData.styles.textColor) || 'auto'}
                                                onChange={(e) => updateSectionStyles(sectionKey, 'textColor', e.target.value)}
                                            >
                                                <option value="auto">Auto Contrast</option>
                                                <option value="dark">Dark</option>
                                                <option value="light">Light</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                ) : (
                    <div className="h-full flex flex-col items-center justify-center text-center p-8 opacity-60">
                        <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mb-4">
                            <CircleDashed className="w-8 h-8 text-slate-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-700">Section Disabled</h3>
                        <p className="text-sm text-slate-500 max-w-xs mt-2">Enable this section in the sidebar to add content.</p>
                    </div>
                )}
            </div>

            {/* Footer Actions */}
            <div className="p-4 border-t border-slate-200 bg-white flex-shrink-0 flex justify-between items-center transition-all">
                <button className="text-xs font-semibold text-slate-500 hover:text-indigo-600 flex items-center gap-1 transition-colors">
                    <ExternalLink className="w-3 h-3" /> View in Preview
                </button>
                {isEnabled && (
                    <button
                        onClick={handleStatusToggle}
                        className={`
                            px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-sm
                            ${status === 'ready'
                                ? 'bg-emerald-100 text-emerald-700 border border-emerald-200 hover:bg-emerald-200'
                                : 'bg-slate-900 text-white border border-slate-900 hover:bg-black hover:shadow-md'
                            }
                        `}
                    >
                        {status === 'ready' ? (
                            <>
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                Ready
                            </>
                        ) : (
                            <>
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                Mark as Ready
                            </>
                        )}
                    </button>
                )}
            </div>

        </div>
    );
};

export default SectionEditor;

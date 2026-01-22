import React from 'react';
import { Palette, Type, MousePointerClick, Save, Upload, RotateCcw, Target, Mic, Layout } from 'lucide-react';
import Tooltip from '../Tooltip';
import { THEME_CONFIG } from '../../utils/themeConfig';

const SelectionCard = ({ selected, onSelect, options }) => (
    <div className="grid grid-cols-1 gap-2">
        {options.map((opt) => (
            <button
                key={opt.id}
                onClick={() => onSelect(opt.id)}
                className={`
                    group relative flex items-start gap-3 p-3 rounded-xl border text-left transition-all
                    ${selected === opt.id
                        ? 'bg-indigo-50 border-indigo-600 ring-1 ring-indigo-600 shadow-sm z-10'
                        : 'bg-white border-slate-200 hover:border-indigo-300 hover:shadow-md'
                    }
                `}
            >
                <div className={`
                    flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-lg
                    ${selected === opt.id ? 'bg-white' : 'bg-slate-50'}
                `}>
                    {opt.icon}
                </div>
                <div>
                    <div className={`text-sm font-bold ${selected === opt.id ? 'text-indigo-900' : 'text-slate-900'}`}>{opt.title}</div>
                    <div className="text-xs text-slate-500 leading-snug">{opt.desc}</div>
                </div>
            </button>
        ))}
    </div>
);

const PaletteBtn = ({ preset, updateField }) => (
    <button
        onClick={() => {
            updateField('primaryColor', preset.colors.primary);
            updateField('secondaryColor', preset.colors.secondary);
            updateField('accentColor', preset.colors.accent);
            updateField('neutralColor', preset.colors.neutral);
        }}
        className="group relative flex items-center gap-3 p-2 rounded-xl border border-slate-200 bg-white hover:border-indigo-300 hover:shadow-md transition-all text-left w-full"
    >
        <div className="flex-shrink-0 flex -space-x-1">
            <div className="w-4 h-4 rounded-full border border-white shadow-sm" style={{ background: preset.colors.primary }}></div>
            <div className="w-4 h-4 rounded-full border border-white shadow-sm" style={{ background: preset.colors.accent }}></div>
            <div className="w-4 h-4 rounded-full border border-white shadow-sm" style={{ background: preset.colors.secondary }}></div>
        </div>
        <span className="text-xs font-semibold text-slate-700 group-hover:text-slate-900">{preset.name}</span>
    </button>
);

const GlobalEditor = ({ activeSection, formData, updateField, onReset, onExport, onImport }) => {

    // Helper to determine which subsection to show
    const subSection = activeSection.replace('global-', '');

    const renderBrandSettings = () => (
        <div className="space-y-8 animate-fadeIn">
            {/* Identity Details (Top Priority) */}
            <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4">Identity Details</h3>
                <div className="space-y-4">
                    <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">Brand Name</label>
                        <input
                            type="text"
                            value={formData.brandName}
                            onChange={(e) => updateField('brandName', e.target.value)}
                            className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 transition-all"
                            placeholder="e.g. Acme Corp"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">Main Topic / Service</label>
                        <input
                            type="text"
                            value={formData.topic}
                            onChange={(e) => updateField('topic', e.target.value)}
                            className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 transition-all"
                            placeholder="e.g. Medical Weight Loss"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">Target Audience</label>
                        <input
                            type="text"
                            value={formData.audience}
                            onChange={(e) => updateField('audience', e.target.value)}
                            className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 transition-all"
                            placeholder="e.g. Busy Professionals"
                        />
                    </div>
                </div>
            </div>

            <div className="border-t border-slate-200 pt-6">
                {/* Primary Goal */}
                <div className="mb-8">
                    <div className="flex items-center gap-2 mb-3">
                        <Target className="w-4 h-4 text-indigo-600" />
                        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Primary Goal</h3>
                    </div>
                    <SelectionCard
                        selected={formData.goal}
                        onSelect={(val) => updateField('goal', val)}
                        options={[
                            { id: 'bookings', title: 'Bookings & Appointments', desc: 'Direct scheduling for services.', icon: '📅' },
                            { id: 'leads', title: 'Leads & Inquiries', desc: 'Capture interest for high-ticket items.', icon: '✉️' },
                            { id: 'sales', title: 'Direct Sales & Offers', desc: 'Immediate purchase or conversion.', icon: '💰' }
                        ]}
                    />
                </div>

                {/* Brand Voice */}
                <div>
                    <div className="flex items-center gap-2 mb-3">
                        <Mic className="w-4 h-4 text-indigo-600" />
                        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Brand Voice</h3>
                    </div>
                    <SelectionCard
                        selected={formData.vibe}
                        onSelect={(val) => updateField('vibe', val)}
                        options={[
                            { id: 'premium', title: 'Premium & Clinical', desc: 'Professional, authoritative, trustworthy.', icon: '💎' },
                            { id: 'warm', title: 'Warm & Reassuring', desc: 'Friendly, empathetic, approachable.', icon: '🌞' },
                            { id: 'bold', title: 'Bold & Direct', desc: 'Confident, high-energy, persuasive.', icon: '⚡' }
                        ]}
                    />
                </div>
            </div>
        </div>
    );

    const renderStructureSettings = () => (
        <div className="space-y-8 animate-fadeIn">
            <div>
                <div className="flex items-center gap-2 mb-3">
                    <Layout className="w-4 h-4 text-indigo-600" />
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Shape & Layout Style</h3>
                </div>
                <p className="text-xs text-slate-500 mb-3">Defines the structural "vibe" (e.g., Rounded vs. Sharp). Combined with your color palette.</p>
                <SelectionCard
                    selected={formData.style}
                    onSelect={(val) => updateField('style', val)}
                    options={THEME_CONFIG.styles.map(s => ({
                        id: s.id,
                        title: s.name,  // Mapping 'name' to 'title' for SelectionCard
                        desc: s.description,
                        icon: '🎨' // Simplified icon or map dynamic icons if available
                    }))}
                />
            </div>
        </div>
    );

    const renderColorSettings = () => (
        <div className="space-y-8 animate-fadeIn">
            <div className="">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4">Color Palette</h3>

                {/* 1. Presets */}
                <div className="mb-6">
                    <label className="block text-xs font-semibold text-slate-500 mb-2">Color Presets (Start Here)</label>
                    <div className="grid grid-cols-2 gap-2">
                        {THEME_CONFIG.palettes.map(preset => <PaletteBtn key={preset.id} preset={preset} updateField={updateField} />)}
                    </div>
                </div>

                {/* 2. Detailed Editor */}
                <div className="space-y-4">
                    <label className="block text-xs font-semibold text-slate-500 mb-2">Detailed Color Map</label>

                    {/* Row 1: Core */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1.5">Primary (Brand)</label>
                            <div className="flex gap-2">
                                <input
                                    type="color"
                                    value={formData.primaryColor || '#000000'}
                                    onChange={(e) => updateField('primaryColor', e.target.value)}
                                    className="h-9 w-9 p-0.5 rounded-lg border border-slate-200 cursor-pointer"
                                />
                                <input
                                    type="text"
                                    value={formData.primaryColor}
                                    onChange={(e) => updateField('primaryColor', e.target.value)}
                                    className="flex-1 bg-white border border-slate-200 rounded-xl px-3 py-2 text-sm font-mono uppercase focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 transition-all"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1.5">Secondary (Support)</label>
                            <div className="flex gap-2">
                                <input
                                    type="color"
                                    value={formData.secondaryColor || '#ffffff'}
                                    onChange={(e) => updateField('secondaryColor', e.target.value)}
                                    className="h-9 w-9 p-0.5 rounded-lg border border-slate-200 cursor-pointer"
                                />
                                <input
                                    type="text"
                                    value={formData.secondaryColor}
                                    onChange={(e) => updateField('secondaryColor', e.target.value)}
                                    className="flex-1 bg-white border border-slate-200 rounded-xl px-3 py-2 text-sm font-mono uppercase focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Row 2: Accent & Neutral */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1.5">Accent (Highlights)</label>
                            <div className="flex gap-2">
                                <input
                                    type="color"
                                    value={formData.accentColor || '#3b82f6'}
                                    onChange={(e) => updateField('accentColor', e.target.value)}
                                    className="h-9 w-9 p-0.5 rounded-lg border border-slate-200 cursor-pointer"
                                />
                                <input
                                    type="text"
                                    value={formData.accentColor}
                                    onChange={(e) => updateField('accentColor', e.target.value)}
                                    className="flex-1 bg-white border border-slate-200 rounded-xl px-3 py-2 text-sm font-mono uppercase focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 transition-all"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1.5">Neutral (Backgrounds)</label>
                            <div className="flex gap-2">
                                <input
                                    type="color"
                                    value={formData.neutralColor || '#f3f4f6'}
                                    onChange={(e) => updateField('neutralColor', e.target.value)}
                                    className="h-9 w-9 p-0.5 rounded-lg border border-slate-200 cursor-pointer"
                                />
                                <input
                                    type="text"
                                    value={formData.neutralColor}
                                    onChange={(e) => updateField('neutralColor', e.target.value)}
                                    className="flex-1 bg-white border border-slate-200 rounded-xl px-3 py-2 text-sm font-mono uppercase focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 transition-all"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderTypographySettings = () => (
        <div className="space-y-6 animate-fadeIn">
            <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Typography</h3>
                <p className="text-sm text-slate-500 mb-4">Select a font pairing for your site.</p>

                <div className="grid grid-cols-1 gap-2">
                    {THEME_CONFIG.fonts.map((font) => (
                        <button
                            key={font.id}
                            onClick={() => updateField('fontPairing', font.id)}
                            className={`
                                group relative flex items-start gap-4 p-4 rounded-xl border text-left transition-all
                                ${formData.fontPairing === font.id
                                    ? 'bg-indigo-50 border-indigo-600 ring-1 ring-indigo-600 shadow-sm z-10'
                                    : 'bg-white border-slate-200 hover:border-indigo-300 hover:shadow-md'
                                }
                            `}
                        >
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-sm font-bold text-slate-900">{font.name}</span>
                                    {formData.fontPairing === font.id && <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider bg-indigo-100 px-2 py-0.5 rounded-full">Active</span>}
                                </div>
                                <div className="text-xs text-slate-500 mb-3">{font.desc}</div>
                                <div className="p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
                                    <div style={{ fontFamily: font.heading }} className="text-lg font-bold text-slate-900 mb-1">
                                        Heading Type
                                    </div>
                                    <div style={{ fontFamily: font.body }} className="text-sm text-slate-600">
                                        Body text example. Clean and readable.
                                    </div>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <div className="flex flex-col h-full w-full bg-slate-50/50">
            {/* Header */}
            <div className="p-5 border-b border-slate-200 bg-white flex-shrink-0 flex justify-between items-center">
                <div>
                    <span className="text-xs font-bold text-indigo-500 uppercase tracking-wider">Global Configuration</span>
                    <h2 className="text-xl font-bold text-slate-900 capitalize">{subSection === 'global' ? 'Brand Strategy' : subSection}</h2>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-5 theme-scroll">
                <div className="max-w-xl mx-auto">
                    {(subSection === 'brand' || subSection === 'global') && renderBrandSettings()}
                    {subSection === 'colors' && renderColorSettings()}
                    {subSection === 'structure' && renderStructureSettings()}
                    {subSection === 'typography' && renderTypographySettings()}
                </div>
            </div>

            {/* Footer */}
            <div className="p-5 border-t border-slate-200 bg-white flex-shrink-0">
                <div className="flex flex-col gap-3">
                    <button
                        onClick={onExport}
                        className="flex items-center justify-center gap-2 w-full py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-200"
                    >
                        <Save className="w-4 h-4" /> Save / Export Template
                    </button>

                    <div className="grid grid-cols-2 gap-3">
                        <label className="flex items-center justify-center gap-2 w-full py-3 bg-white border border-slate-200 text-slate-700 rounded-xl font-semibold hover:bg-slate-50 cursor-pointer">
                            <Upload className="w-4 h-4" /> Load
                            <input type="file" accept=".json" onChange={onImport} className="hidden" />
                        </label>
                        <button
                            onClick={onReset}
                            className="flex items-center justify-center gap-2 w-full py-3 bg-white border border-red-200 text-red-600 rounded-xl font-semibold hover:bg-red-50"
                        >
                            <RotateCcw className="w-4 h-4" /> Reset
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GlobalEditor;

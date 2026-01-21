import React from 'react';
import { Palette, Type, MousePointerClick, Save, Upload, RotateCcw } from 'lucide-react';
import Tooltip from '../Tooltip';

const PaletteBtn = ({ preset, updateField }) => (
    <button
        onClick={() => {
            updateField('primaryColor', preset.primary);
            updateField('secondaryColor', preset.secondary);
            updateField('accentColor', preset.accent);
            updateField('neutralColor', preset.neutral);
        }}
        className="group relative flex items-center gap-3 p-2 rounded-xl border border-slate-200 bg-white hover:border-indigo-300 hover:shadow-md transition-all text-left w-full"
    >
        <div className="flex-shrink-0 flex -space-x-1">
            <div className="w-4 h-4 rounded-full border border-white shadow-sm" style={{ background: preset.primary }}></div>
            <div className="w-4 h-4 rounded-full border border-white shadow-sm" style={{ background: preset.accent }}></div>
            <div className="w-4 h-4 rounded-full border border-white shadow-sm" style={{ background: preset.secondary }}></div>
        </div>
        <span className="text-xs font-semibold text-slate-700 group-hover:text-slate-900">{preset.name}</span>
    </button>
);

const GlobalEditor = ({ activeSection, formData, updateField, onReset, onExport, onImport }) => {

    const helpText = {
        brandName: "The official name of the clinic or practice.",
        topic: "The specific treatment or service this page is selling (e.g. 'CoolSculpting' or 'Botox').",
        vibe: "The emotional tone of the copy and design.",
        primaryColor: "Main brand color used for buttons and highlights.",
        secondaryColor: "Background or accent color.",
        accentColor: "Used for success states, secondary highlights, or badges.",
        neutralColor: "Used for backgrounds, borders, and subtle text.",
        audience: "Who is this for? e.g. 'Post-partum moms' or 'Men over 40'.",
    };

    // Helper to determine which subsection to show
    // activeSection will be something like 'global-brand', 'global-colors', etc.
    const subSection = activeSection.replace('global-', '');

    const renderBrandSettings = () => (
        <div className="space-y-6 animate-fadeIn">
            <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Brand Identity</h3>
                <p className="text-sm text-slate-500 mb-4">Define the core identity of the business.</p>
                <div className="space-y-4">
                    <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">Brand Name</label>
                        <input
                            type="text"
                            value={formData.brandName}
                            onChange={(e) => updateField('brandName', e.target.value)}
                            className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 transition-all"
                            placeholder="e.g. Venus Future Aesthetics"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">Business Topic / Niche</label>
                        <input
                            type="text"
                            value={formData.topic}
                            onChange={(e) => updateField('topic', e.target.value)}
                            className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 transition-all"
                            placeholder="e.g. Non-invasive fat loss clinic"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">Target Audience</label>
                        <input
                            type="text"
                            value={formData.audience}
                            onChange={(e) => updateField('audience', e.target.value)}
                            className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 transition-all"
                            placeholder="e.g. Busy professionals aged 35-50"
                        />
                    </div>
                </div>
            </div>

            <div className="pt-6 border-t border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-1">Visual Vibe</h3>
                <p className="text-sm text-slate-500 mb-4">Set the mood and aesthetic direction.</p>
                <div className="space-y-4">
                    <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Vibe / Style</label>

                        {/* Custom Input moved above presets */}
                        <div className="mb-3">
                            <input
                                type="text"
                                value={formData.vibe}
                                onChange={(e) => updateField('vibe', e.target.value)}
                                className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 transition-all font-medium text-slate-700"
                                placeholder="Type a custom vibe..."
                            />
                        </div>

                        {/* Expanded Presets Grid */}
                        <div className="grid grid-cols-3 gap-2">
                            {[
                                'Luxury', 'Minimalist', 'Clinical', 'Warm', 'Bold', 'Tech',
                                'Modern', 'Rustic', 'Industrial', 'Elegant', 'Playful', 'Organic',
                                'Energetic', 'Futuristic', 'Classic', 'Vintage', 'Whimsical', 'Dark Mode',
                                'Corporate', 'Creative', 'Sophisticated', 'Gritty', 'Clean', 'Glamorous',
                                'Retro', 'Urban', 'Serene', 'Dynamic', 'Professional', 'Artistic'
                            ].map(vibe => (
                                <button
                                    key={vibe}
                                    onClick={() => updateField('vibe', vibe)}
                                    className={`px-2 py-2 text-xs font-medium rounded-lg border text-center transition-all truncate ${formData.vibe === vibe
                                        ? 'bg-indigo-50 border-indigo-200 text-indigo-700 ring-1 ring-indigo-200 shadow-sm'
                                        : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                                        }`}
                                    title={vibe}
                                >
                                    {vibe}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderColorSettings = () => (
        <div className="space-y-6 animate-fadeIn">
            <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Color Palette</h3>
                <p className="text-sm text-slate-500 mb-4">Define the brand's primary and secondary colors.</p>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">Primary Color</label>
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
                                placeholder="#000000"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">Secondary Color</label>
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
                                placeholder="#ffffff"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">Accent Color</label>
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
                                placeholder="#3b82f6"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">Neutral/Bg</label>
                        <div className="flex gap-2">
                            <input
                                type="color"
                                value={formData.neutralColor || '#f8fafc'}
                                onChange={(e) => updateField('neutralColor', e.target.value)}
                                className="h-9 w-9 p-0.5 rounded-lg border border-slate-200 cursor-pointer"
                            />
                            <input
                                type="text"
                                value={formData.neutralColor}
                                onChange={(e) => updateField('neutralColor', e.target.value)}
                                className="flex-1 bg-white border border-slate-200 rounded-xl px-3 py-2 text-sm font-mono uppercase focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 transition-all"
                                placeholder="#f8fafc"
                            />
                        </div>
                    </div>
                </div>

                {/* Expanded Palette Collection */}
                <div className="space-y-4 pt-4 border-t border-slate-100 mt-6">
                    <label className="text-sm font-bold text-slate-900">Curated Color Themes</label>
                    <div className="space-y-6">
                        {/* Luxury & High-End */}
                        <div>
                            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Luxury & Premium</div>
                            <div className="grid grid-cols-2 gap-2">
                                {[
                                    { name: 'Gold Standard', primary: '#1a1a1a', secondary: '#ffffff', accent: '#d4af37', neutral: '#f9f9f9' },
                                    { name: 'Midnight Silk', primary: '#0f172a', secondary: '#f8fafc', accent: '#c084fc', neutral: '#f1f5f9' },
                                    { name: 'Royal Velvet', primary: '#4c1d95', secondary: '#ffffff', accent: '#fbbf24', neutral: '#f5f3ff' },
                                    { name: 'Onyx & Rose', primary: '#1c1917', secondary: '#fff1f2', accent: '#fda4af', neutral: '#fafaf9' },
                                    { name: 'Slate Elite', primary: '#334155', secondary: '#ffffff', accent: '#94a3b8', neutral: '#f8fafc' },
                                    { name: 'Champagne', primary: '#78350f', secondary: '#fffbeb', accent: '#f59e0b', neutral: '#fff7ed' },
                                ].map(preset => <PaletteBtn key={preset.name} preset={preset} updateField={updateField} />)}
                            </div>
                        </div>

                        {/* Medical & Clinical */}
                        <div>
                            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Clinical & Trust</div>
                            <div className="grid grid-cols-2 gap-2">
                                {[
                                    { name: 'MediBlue', primary: '#0284c7', secondary: '#ffffff', accent: '#38bdf8', neutral: '#f0f9ff' },
                                    { name: 'Pure Teal', primary: '#0d9488', secondary: '#ffffff', accent: '#5eead4', neutral: '#f0fdfa' },
                                    { name: 'Sterile White', primary: '#475569', secondary: '#ffffff', accent: '#cbd5e1', neutral: '#f8fafc' },
                                    { name: 'Health Plus', primary: '#dc2626', secondary: '#ffffff', accent: '#f87171', neutral: '#fef2f2' },
                                    { name: 'Deep Ocean', primary: '#1e3a8a', secondary: '#f8fafc', accent: '#60a5fa', neutral: '#eff6ff' },
                                    { name: 'Clean Mint', primary: '#059669', secondary: '#ffffff', accent: '#34d399', neutral: '#ecfdf5' },
                                ].map(preset => <PaletteBtn key={preset.name} preset={preset} updateField={updateField} />)}
                            </div>
                        </div>

                        {/* Organic & Natural */}
                        <div>
                            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Organic & Natural</div>
                            <div className="grid grid-cols-2 gap-2">
                                {[
                                    { name: 'Forest Calm', primary: '#166534', secondary: '#f0fdf4', accent: '#d97706', neutral: '#fcfaf5' },
                                    { name: 'Earth Tone', primary: '#7c2d12', secondary: '#fff7ed', accent: '#d97706', neutral: '#fafaf9' },
                                    { name: 'Sage Garden', primary: '#3f6212', secondary: '#f7fee7', accent: '#84cc16', neutral: '#fafffd' },
                                    { name: 'Sand & Sea', primary: '#0e7490', secondary: '#fffbeb', accent: '#d97706', neutral: '#fff7ed' },
                                    { name: 'Terracotta', primary: '#9f1239', secondary: '#fff1f2', accent: '#fb7185', neutral: '#fff0f3' },
                                    { name: 'Olive Drab', primary: '#365314', secondary: '#ecfccb', accent: '#84cc16', neutral: '#f7fee7' },
                                ].map(preset => <PaletteBtn key={preset.name} preset={preset} updateField={updateField} />)}
                            </div>
                        </div>

                        {/* Modern & Minimal */}
                        <div>
                            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Modern & Minimal</div>
                            <div className="grid grid-cols-2 gap-2">
                                {[
                                    { name: 'Monochrome', primary: '#000000', secondary: '#ffffff', accent: '#525252', neutral: '#f5f5f5' },
                                    { name: 'Swiss Style', primary: '#dc2626', secondary: '#ffffff', accent: '#171717', neutral: '#fafafa' },
                                    { name: 'Tech Dark', primary: '#111827', secondary: '#f9fafb', accent: '#6366f1', neutral: '#f3f4f6' },
                                    { name: 'Soft Gray', primary: '#374151', secondary: '#ffffff', accent: '#9ca3af', neutral: '#f9fafb' },
                                    { name: 'Bauhaus', primary: '#1d4ed8', secondary: '#ffffff', accent: '#fbbf24', neutral: '#fafafa' },
                                    { name: 'Graphite', primary: '#1f2937', secondary: '#f3f4f6', accent: '#4b5563', neutral: '#f9fafb' },
                                ].map(preset => <PaletteBtn key={preset.name} preset={preset} updateField={updateField} />)}
                            </div>
                        </div>

                        {/* Vibrant & Bold */}
                        <div>
                            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Vibrant & Pop</div>
                            <div className="grid grid-cols-2 gap-2">
                                {[
                                    { name: 'Cyberpunk', primary: '#7209b7', secondary: '#0f0518', accent: '#4cc9f0', neutral: '#1a1025' },
                                    { name: 'Neon Night', primary: '#c026d3', secondary: '#fdf4ff', accent: '#e879f9', neutral: '#fae8ff' },
                                    { name: 'Citrus', primary: '#ea580c', secondary: '#fff7ed', accent: '#fcc737', neutral: '#ffedd5' },
                                    { name: 'Electric Blue', primary: '#2563eb', secondary: '#eff6ff', accent: '#f43f5e', neutral: '#f8fafc' },
                                    { name: 'Candy', primary: '#db2777', secondary: '#fff1f2', accent: '#f472b6', neutral: '#fdf2f8' },
                                    { name: 'Sunset', primary: '#be123c', secondary: '#fff1f2', accent: '#fb923c', neutral: '#fff7ed' },
                                ].map(preset => <PaletteBtn key={preset.name} preset={preset} updateField={updateField} />)}
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
                <p className="text-sm text-slate-500 mb-4">Select fonts and text styles.</p>

                <div className="p-4 bg-yellow-50 text-yellow-800 text-sm rounded-xl border border-yellow-200 flex items-start gap-3">
                    <span className="text-xl">🚧</span>
                    <div>
                        <span className="font-bold">Coming Soon:</span> Advanced font selection and size scaling will be available in the next update. For now, the system uses a modern, optimized system font stack (Inter/San Francisco).
                    </div>
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
                    <h2 className="text-xl font-bold text-slate-900 capitalize">{subSection === 'global' ? 'Brand Identity' : subSection}</h2>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-5 theme-scroll">
                <div className="max-w-2xl mx-auto">
                    {(subSection === 'brand' || subSection === 'global') && renderBrandSettings()}
                    {subSection === 'colors' && renderColorSettings()}
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

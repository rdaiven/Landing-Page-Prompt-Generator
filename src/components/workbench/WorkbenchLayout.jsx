import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import EditorPanel from './EditorPanel';
import PreviewPanel from '../PreviewPanel';
import { Layers, Eye, CheckCircle2 } from 'lucide-react';
import ErrorBoundary from '../ErrorBoundary';
import { THEME_CONFIG } from '../../utils/themeConfig';

const WorkbenchLayout = ({ prompt, formData, sections, updateField, toggleSection, updateSectionLayout, updateSectionData, updateSectionStyles, updateSectionStatus, onReset, onExport, onImport }) => {
    // Top-level state for the workbench
    const [activeTab, setActiveTab] = useState('sections'); // 'global' or 'sections'
    const [activeSection, setActiveSection] = useState('hero'); // ID of currently editing section

    // Mobile/Responsive State
    const [mobilePanel, setMobilePanel] = useState('sections'); // 'sections', 'details', 'preview'
    const [isMobile, setIsMobile] = useState(false);

    // View Mode State: 'overview' | 'focus' | 'preview'
    const [viewMode, setViewMode] = useState('overview');



    // Responsive check
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // THEME ENGINE: Inject CSS Variables, Fonts, and Shape Styles
    useEffect(() => {
        const { primaryColor, secondaryColor, accentColor, neutralColor, fontPairing, palette, style } = formData;

        // 1. Derive Active Configurations
        // Use custom inputs if available, else fall back to preset values
        // Note: formData colors are already updated by GlobalEditor, so we use them directly.

        // Fonts
        const activeFont = THEME_CONFIG.fonts.find(f => f.id === fontPairing) || THEME_CONFIG.fonts[0];

        // Shapes (New)
        const activeStyle = THEME_CONFIG.styles.find(s => s.id === style) || THEME_CONFIG.styles[0];

        // 2. Inject CSS Variables (Colors)
        const root = document.documentElement;
        root.style.setProperty('--primary', primaryColor || '#000000');
        root.style.setProperty('--secondary', secondaryColor || '#ffffff');
        root.style.setProperty('--accent', accentColor || '#3b82f6');
        root.style.setProperty('--neutral', neutralColor || '#f3f4f6');

        // 3. Inject Font (Google Fonts Link + Variables)
        if (activeFont) {
            let link = document.getElementById('dynamic-font-link');
            if (!link) {
                link = document.createElement('link');
                link.id = 'dynamic-font-link';
                link.rel = 'stylesheet';
                document.head.appendChild(link);
            }
            link.href = activeFont.url;

            root.style.setProperty('--font-heading', `'${activeFont.heading}', serif`);
            root.style.setProperty('--font-body', `'${activeFont.body}', sans-serif`);

            // Force body font
            document.body.style.fontFamily = `'${activeFont.body}', sans-serif`;
        }

        // 4. Inject Shape & Shadow Overrides (The Style Engine)
        if (activeStyle) {
            const styleId = 'theme-overrides';
            let styleTag = document.getElementById(styleId);
            if (!styleTag) {
                styleTag = document.createElement('style');
                styleTag.id = styleId;
                document.head.appendChild(styleTag);
            }

            styleTag.innerHTML = `
                /* Tailwind Utilities */
                .visual-preview-container .rounded-3xl,
                .visual-preview-container .rounded-2xl,
                .visual-preview-container .rounded-xl,
                .visual-preview-container .rounded-lg,
                .visual-preview-container .rounded-md,
                .visual-preview-container .rounded,
                
                /* HTML Elements (to override inline styles) */
                .visual-preview-container button:not(.rounded-full),
                .visual-preview-container input,
                .visual-preview-container select,
                .visual-preview-container textarea {
                    border-radius: ${activeStyle.radius} !important;
                }
                
                /* Special handling for Pill Buttons (rounded-full) 
                   Only override if the style is explicitly "Sharp" (0px)
                   Otherwise keep them pill-shaped as that's usually desired for "Soft" or "Default"
                */
                ${activeStyle.radius === '0px' ? `
                    .visual-preview-container .rounded-full,
                    .visual-preview-container button.rounded-full {
                        border-radius: 0px !important;
                    }
                ` : ''}
                
                .visual-preview-container .shadow-2xl,
                .visual-preview-container .shadow-xl,
                .visual-preview-container .shadow-lg,
                .visual-preview-container .shadow-md,
                .visual-preview-container .shadow,
                .visual-preview-container .shadow-sm {
                    box-shadow: ${activeStyle.shadow} !important;
                }
                
                /* Border Overrides (New) */
                .visual-preview-container .border,
                .visual-preview-container .border-2,
                .visual-preview-container .border-4,
                .visual-preview-container .border-8,
                .visual-preview-container input,
                .visual-preview-container select,
                .visual-preview-container textarea {
                    border-width: ${activeStyle.borderWidth} !important;
                    border-style: ${activeStyle.borderStyle} !important;
                }

                /* Ensure buttons have borders if the style demands it (e.g. Brutalist) */
                ${activeStyle.id === 'brutalist' ? `
                    .visual-preview-container button {
                        border-width: 2px !important;
                        border-style: solid !important;
                        border-color: currentColor !important;
                    }
                ` : ''}
            `;
        }

    }, [formData.primaryColor, formData.secondaryColor, formData.accentColor, formData.neutralColor, formData.fontPairing, formData.palette, formData.style]);

    // Helper to calculate progress (ready/draft)
    const activeSections = sections || {};
    const completedCount = Object.values(activeSections).filter(s => s.status === 'ready').length;
    const totalCount = Object.keys(activeSections).length;

    const handleSectionSelect = (sectionId) => {
        setActiveSection(sectionId);
        setMobilePanel('details'); // On mobile, go to details when checking a section

        // GUIDELINE COMPLIANCE: "Trigger: Selecting a section" -> Focus Mode
        // Automatically switch to Focus mode on desktop to reduce cognitive load
        // EXCEPTION: Global settings (Brand/Colors) should usually stay in Overview context unless explicitly desired.
        if (!isMobile && !sectionId.startsWith('global-')) {
            setViewMode('focus');
        }
    };

    // Calculate layout visibility based on viewMode
    const showSidebar = !isMobile && (viewMode === 'overview' || viewMode === 'focus');
    const sidebarCollapsed = !isMobile && viewMode === 'focus';
    const showEditor = !isMobile && (viewMode === 'overview' || viewMode === 'focus');
    const showPreview = !isMobile || mobilePanel === 'preview';

    if (!sections) return <div className="p-10 text-center text-red-500">Loading sections... (Data missing)</div>;

    return (
        <div className="h-screen w-full bg-slate-100 flex flex-col lg:flex-row overflow-hidden">
            {/* MOBILE HEADER (lg:hidden) */}
            <div className="lg:hidden shrink-0 bg-white border-b border-slate-200 p-3 z-20">
                <div className="flex items-center justify-between gap-3 mb-3">
                    <div>
                        <div className="font-bold text-slate-900">Landing Page Architect</div>
                        <div className="text-xs text-slate-600">Sections → Details → Preview</div>
                    </div>
                    <div className="text-xs font-semibold bg-slate-100 px-2 py-1 rounded-lg text-slate-700">
                        {completedCount}/{totalCount}
                    </div>
                </div>
                {/* Mobile Tab Switcher */}
                <div className="grid grid-cols-3 bg-slate-100 rounded-lg p-1">
                    <button
                        onClick={() => setMobilePanel('sections')}
                        className={`text-xs py-2 font-medium rounded-md ${mobilePanel === 'sections' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500'}`}
                    >
                        Sections
                    </button>
                    <button
                        onClick={() => setMobilePanel('details')}
                        className={`text-xs py-2 font-medium rounded-md ${mobilePanel === 'details' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500'}`}
                    >
                        Details
                    </button>
                    <button
                        onClick={() => setMobilePanel('preview')}
                        className={`text-xs py-2 font-medium rounded-md ${mobilePanel === 'preview' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500'}`}
                    >
                        Preview
                    </button>
                </div>
            </div>

            {/* LEFT PANEL: SIDEBAR (Sections & Global Nav) */}
            <div className={`
                flex-col bg-white border-r border-slate-200 z-10 transition-all duration-300
                ${isMobile && mobilePanel !== 'sections' ? 'hidden' : 'flex'}
                lg:flex lg:shrink-0 transition-all duration-300
                ${!showSidebar ? 'lg:hidden' : ''}
                ${sidebarCollapsed ? 'lg:w-[80px]' : 'lg:w-[320px]'}
            `}>
                <ErrorBoundary label="Sidebar Error">
                    <Sidebar
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        activeSection={activeSection}
                        onSectionSelect={handleSectionSelect}
                        formData={{ ...formData, sections: sections }}
                        toggleSection={toggleSection}
                        isCollapsed={sidebarCollapsed}
                        setCollapsed={(collapsed) => setViewMode(collapsed ? 'focus' : 'overview')}
                    />
                </ErrorBoundary>
            </div>

            {/* MIDDLE PANEL: EDITOR (Details) */}
            <div className={`
                flex-col bg-slate-50 z-0 transition-all duration-300 relative
                ${isMobile && mobilePanel !== 'details' ? 'hidden' : 'flex'}
                lg:flex lg:w-[500px] lg:shrink-0 lg:border-r lg:border-slate-200
                ${!showEditor ? 'lg:hidden' : ''}
            `}>
                <ErrorBoundary label="Editor Error">
                    <EditorPanel
                        activeTab={activeTab}
                        activeSection={activeSection}
                        formData={{ ...formData, sections: sections }}
                        updateField={updateField}
                        updateSectionLayout={updateSectionLayout}
                        updateSectionData={updateSectionData}
                        updateSectionStyles={updateSectionStyles}
                        updateSectionStatus={updateSectionStatus}
                        onReset={onReset}
                        onExport={onExport}
                        onImport={onImport}
                        isMobile={isMobile}
                        setPreviewFocus={(focus) => setViewMode(focus ? 'preview' : 'overview')}
                        iframeMode={viewMode === 'preview'}
                    />
                </ErrorBoundary>
            </div>

            {/* RIGHT PANEL: PREVIEW */}
            <div className={`
                flex-1 bg-slate-200/50 relative transition-all duration-300
                ${isMobile && mobilePanel !== 'preview' ? 'hidden' : 'flex'}
                lg:flex flex-col min-w-0
            `}>
                <div className="absolute inset-0 p-4 pb-0 overflow-hidden flex flex-col">
                    {/* View Mode Toggles (Desktop Only) */}
                    <div className="hidden lg:flex items-center justify-end gap-2 mb-2 px-2">
                        <div className="flex bg-white rounded-lg shadow-sm border border-slate-200 p-1">
                            <button
                                onClick={() => setViewMode('overview')}
                                className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${viewMode === 'overview' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-500 hover:text-slate-900'}`}
                            >
                                Overview
                            </button>
                            <button
                                onClick={() => setViewMode('focus')}
                                className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${viewMode === 'focus' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-500 hover:text-slate-900'}`}
                            >
                                Focus
                            </button>
                            <button
                                onClick={() => setViewMode('preview')}
                                className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${viewMode === 'preview' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-500 hover:text-slate-900'}`}
                            >
                                Preview
                            </button>
                        </div>
                    </div>

                    {/* Preview Wrapper to handle sizing */}
                    <div className="flex-1 rounded-t-2xl overflow-hidden shadow-sm border border-slate-200 border-b-0 bg-white">
                        <ErrorBoundary label="Preview Error">
                            <PreviewPanel
                                prompt={prompt}
                                formData={{ ...formData, sections: sections }}
                                activeSection={activeSection}
                                simpleMode={true} // Hint to PreviewPanel to strip its own heavy chrome if needed
                            />
                        </ErrorBoundary>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WorkbenchLayout;

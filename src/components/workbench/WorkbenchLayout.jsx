import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import EditorPanel from './EditorPanel';
import PreviewPanel from '../PreviewPanel';
import { Layers, Eye, CheckCircle2 } from 'lucide-react';
import ErrorBoundary from '../ErrorBoundary';

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

    // Helper to calculate progress (ready/draft)
    const activeSections = sections || {};
    const completedCount = Object.values(activeSections).filter(s => s.status === 'ready').length;
    const totalCount = Object.keys(activeSections).length;

    const handleSectionSelect = (sectionId) => {
        setActiveSection(sectionId);
        setMobilePanel('details'); // On mobile, go to details when checking a section

        // Auto-switch to Focus mode on desktop if in Overview, to reduce noise?
        // guideline says "Trigger: Selecting a section" can trigger Focus Mode. 
        // Let's make it explicit for now or user might get confused if sidebar jumps.
        // For now, we'll keep the mode user selected.
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
                        <div className="font-bold text-slate-900">Copy Workbench</div>
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

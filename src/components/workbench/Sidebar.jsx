import { Layers, Type, CheckCircle2, Circle, ChevronRight, Search, Globe, List, PanelLeftClose } from 'lucide-react';
import { sectionConfigs } from '../../utils/sectionConfig';
import { StatusPill } from './ui/StatusPill';
import { SegmentedControl } from './ui/SegmentedControl';

const Sidebar = ({ activeTab, setActiveTab, activeSection, onSectionSelect, formData, toggleSection, isCollapsed, setCollapsed }) => {

    // Status helper: if section enabled, it's 'ready' or 'draft'. If disabled, it's 'skipped'.
    // Real logic would check if fields are filled, but for now we trust the "Mark as Ready" state which we'll implement.
    const getStatus = (sectionKey, sectionData) => {
        if (!sectionData.enabled) return 'skipped';
        return sectionData.status || 'draft';
    };

    const completedCount = Object.values(formData.sections).filter(s => s.status === 'ready' && s.enabled).length;
    const totalCount = Object.keys(formData.sections).length;

    // --- RAIL VIEW (Collapsed) ---
    // --- RAIL VIEW (Collapsed) ---
    if (isCollapsed) {
        return (
            <div className="flex flex-col h-full w-full bg-slate-50 border-r border-slate-200">
                <div className="p-2 border-b border-slate-200 bg-white flex justify-center">
                    <button
                        onClick={() => setCollapsed(false)}
                        className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 transition-colors"
                        title="Expand Sidebar"
                    >
                        <Layers className="w-5 h-5" />
                    </button>
                </div>
                <div className="flex-1 overflow-y-auto py-2 flex flex-col items-center gap-2 theme-scroll">
                    {Object.entries(sectionConfigs).map(([key, config]) => {
                        const sectionData = formData.sections[key];
                        if (!sectionData) return null; // Defensive check
                        const isActive = activeSection === key;
                        const status = getStatus(key, sectionData);

                        return (
                            <button
                                key={key}
                                onClick={() => onSectionSelect(key)}
                                className={`
                                    relative w-10 h-10 rounded-xl flex items-center justify-center transition-all group
                                    ${isActive
                                        ? 'bg-indigo-600 text-white shadow-md'
                                        : 'bg-white border border-slate-200 text-slate-400 hover:border-slate-300'
                                    }
                                `}
                                title={config.label}
                            >
                                <span className="text-lg">{config.icon || '•'}</span>
                                {/* Status Dot */}
                                <span className={`absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full border border-white ${status === 'ready' ? 'bg-emerald-500' :
                                    status === 'skipped' ? 'bg-slate-300' : 'bg-amber-400'
                                    }`}></span>
                            </button>
                        )
                    })}
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full w-full bg-slate-50 border-r border-slate-200">
            {/* Header Area */}
            <div className="p-4 border-b border-slate-200 bg-white shadow-sm z-10">
                <div className="flex items-start justify-between gap-3 mb-4">
                    <div>
                        <div className="text-lg font-bold text-slate-900">Copy Workbench</div>
                        <div className="text-xs text-slate-500">Landing Page Prompt Generator</div>
                    </div>
                    <div className="flex-shrink-0 text-[10px] font-semibold bg-slate-100 border border-slate-200 px-2 py-1 rounded-lg text-slate-600">
                        {completedCount}/{totalCount} Ready
                    </div>
                </div>

                {/* Segmented Control for Tabs */}
                <div className="flex items-center gap-2 mb-3">
                    <button
                        onClick={() => setCollapsed(true)}
                        className="p-2 rounded-xl border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 hidden lg:block"
                        title="Collapse Sidebar"
                    >
                        <PanelLeftClose className="w-4 h-4" />
                    </button>
                    <SegmentedControl
                        value={activeTab}
                        onChange={setActiveTab}
                        options={[
                            { value: 'global', label: 'Global' },
                            { value: 'sections', label: 'Sections' }
                        ]}
                        className="flex-1"
                        iconOnlyAt={null}
                    />
                </div>

                {/* Search */}
                <div className="relative group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                    <input
                        type="text"
                        placeholder="Jump to..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 transition-all"
                    />
                </div>
            </div>

            {/* Content List */}
            <div className="flex-1 overflow-y-auto px-3 py-3 theme-scroll space-y-3">
                {activeTab === 'global' && (
                    <div className="space-y-1">
                        <div className="px-2 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Configuration</div>
                        {['Brand', 'Colors', 'Typography'].map(item => (
                            <button
                                key={item}
                                onClick={() => onSectionSelect('global-' + item.toLowerCase())}
                                className={`w-full flex items-center justify-between px-3 py-3 rounded-xl text-left border transition-all ${activeSection.includes(item.toLowerCase())
                                    ? 'bg-slate-900 border-slate-900 text-white shadow-md'
                                    : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:shadow-sm'
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <Type className="w-4 h-4 opacity-70" />
                                    <span className="text-sm font-semibold">{item} Settings</span>
                                </div>
                                <ChevronRight className="w-4 h-4 opacity-50" />
                            </button>
                        ))}
                    </div>
                )}

                {activeTab === 'sections' && (
                    <div className="space-y-3 pb-10">
                        {Object.entries(sectionConfigs).map(([key, config]) => {
                            const sectionData = formData.sections[key];
                            const isEnabled = sectionData?.enabled ?? false;
                            const isActive = activeSection === key;
                            const status = getStatus(key, sectionData);

                            return (
                                <div
                                    key={key}
                                    onClick={() => onSectionSelect(key)}
                                    className={`
                                        group relative rounded-2xl border transition-all cursor-pointer overflow-hidden
                                        ${isActive
                                            ? 'border-indigo-400 ring-2 ring-indigo-100 bg-white shadow-md z-10'
                                            : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm'
                                        }
                                    `}
                                >
                                    {/* Main Row */}
                                    <div className="flex items-center justify-between p-3 gap-3">
                                        <div className="flex items-center gap-3 min-w-0">
                                            {/* Toggle Button */}
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    toggleSection(key);
                                                }}
                                                className={`
                                                    flex-shrink-0 w-8 h-8 rounded-xl border flex items-center justify-center transition-all
                                                    ${isEnabled
                                                        ? 'bg-indigo-50 border-indigo-200 text-indigo-600'
                                                        : 'bg-slate-50 border-slate-200 text-slate-300 hover:border-slate-300'
                                                    }
                                                `}
                                                title={isEnabled ? "Disable Section" : "Enable Section"}
                                            >
                                                {isEnabled ? <CheckCircle2 className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
                                            </button>

                                            <div className="min-w-0">
                                                <div className={`text-sm font-bold truncate ${isActive ? 'text-indigo-900' : 'text-slate-900'}`}>
                                                    {config.label}
                                                </div>
                                                {/* Helper text only visible when active or hovered to reduce noise, or always small? 
                                                     Let's match wireframe: helper always visible but truncated
                                                 */}
                                                <div className="text-[10px] text-slate-500 truncate line-clamp-1">
                                                    {config.description || (isEnabled ? 'Active' : 'Hidden')}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex-shrink-0">
                                            {isActive ? <ChevronRight className="w-4 h-4 text-slate-400" /> : <StatusPill status={status} />}
                                        </div>
                                    </div>

                                    {/* Active Indicator Strip */}
                                    {isActive && (
                                        <div className="absolute inset-y-0 left-0 w-1 bg-indigo-500"></div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2 text-[10px] text-slate-400 font-medium">
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        System Online
                    </div>
                    <div className="text-[10px] text-slate-300 font-medium">Developed by Daiven Reyes</div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

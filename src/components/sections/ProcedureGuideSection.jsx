import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { getEffectiveImage } from '../../utils/mediaUtils';
import ReactDOMServer from 'react-dom/server';

// Helper for dynamic icons
const DynamicIcon = ({ name, className, size = 24 }) => {
    const IconComponent = Icons[name];
    if (!IconComponent) return null;
    return <IconComponent className={className} size={size} />;
};

// ===================================================================
// LAYOUT COMPONENTS
// ===================================================================

const QuickClearLayout = ({ data, theme }) => (
    <div className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-16" style={{ color: theme.primaryColor }}>
                {data.heading}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {(data.items || []).map((step, i) => (
                    <div key={i} className="text-center group">
                        <div className="w-16 h-16 rounded-full border-2 mx-auto mb-6 flex items-center justify-center text-xl font-bold transition-colors duration-300 group-hover:bg-opacity-10"
                            style={{ borderColor: theme.primaryColor, color: theme.primaryColor, backgroundColor: 'transparent' }}>
                            {i + 1}
                        </div>
                        <h3 className="text-xl font-serif mb-3" style={{ color: theme.primaryColor }}>{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed px-4">{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const DetailedJourneyLayout = ({ data, theme }) => (
    <div className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto hidden md:block">
            <h2 className="text-4xl font-serif text-center mb-20" style={{ color: theme.primaryColor }}>{data.heading}</h2>
            <div className="relative">
                {/* Center Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-300" />

                {(data.items || []).map((item, i) => (
                    <div key={i} className={`flex items-center justify-between mb-16 ${i % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                        <div className="w-5/12 text-right">
                            {i % 2 === 0 && (
                                <>
                                    <div className="text-sm font-bold tracking-widest uppercase mb-1 opacity-60">{item.time}</div>
                                    <h3 className="text-2xl font-serif mb-2" style={{ color: theme.primaryColor }}>{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </>
                            )}
                        </div>
                        <div className="relative z-10 w-8 h-8 rounded-full border-4 border-white shadow-md" style={{ backgroundColor: theme.primaryColor }} />
                        <div className="w-5/12 text-left">
                            {i % 2 !== 0 && (
                                <>
                                    <div className="text-sm font-bold tracking-widest uppercase mb-1 opacity-60" style={{ color: theme.primaryColor }}>{item.time}</div>
                                    <h3 className="text-2xl font-serif mb-2" style={{ color: theme.primaryColor }}>{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        {/* Mobile View */}
        <div className="md:hidden">
            <h2 className="text-3xl font-serif text-center mb-12" style={{ color: theme.primaryColor }}>{data.heading}</h2>
            <div className="space-y-8 pl-4 border-l-2 border-gray-200 ml-4">
                {(data.items || []).map((item, i) => (
                    <div key={i} className="pl-6 relative">
                        <div className="absolute -left-[25px] top-0 w-4 h-4 rounded-full border-2 border-white" style={{ backgroundColor: theme.primaryColor }} />
                        <span className="text-xs font-bold uppercase tracking-wider block mb-1 opacity-70">{item.time}</span>
                        <h3 className="text-xl font-serif mb-2" style={{ color: theme.primaryColor }}>{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const HorizontalFlowLayout = ({ data, theme }) => (
    <div className="py-20 px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif mb-12" style={{ color: theme.primaryColor }}>{data.heading}</h2>
            <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory hide-scrollbar">
                {(data.steps || []).map((step, i) => (
                    <div key={i} className="min-w-[280px] md:min-w-[320px] bg-gray-50 p-8 rounded-xl snap-center border border-gray-100 flex-shrink-0">
                        <div className="mb-6 flex items-center justify-between">
                            <span className="text-4xl font-serif opacity-20 font-bold">0{i + 1}</span>
                            {step.icon && <DynamicIcon name={step.icon} className="opacity-80" style={{ color: theme.primaryColor }} size={32} />}
                        </div>
                        <h3 className="text-xl font-bold mb-3" style={{ color: theme.primaryColor }}>{step.step}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const ChecklistStyleLayout = ({ data, theme }) => (
    <div className="py-20 px-4" style={{ backgroundColor: '#FDFCF8' }}> {/* Warm off-white */}
        <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 shadow-sm border border-gray-100 rounded-lg">
            <div className="text-center mb-10">
                <div className="inline-block p-3 rounded-full mb-4 bg-opacity-10" style={{ backgroundColor: theme.primaryColor }}>
                    <Icons.Check size={24} style={{ color: theme.primaryColor }} />
                </div>
                <h2 className="text-3xl font-serif" style={{ color: theme.primaryColor }}>{data.heading}</h2>
            </div>
            <ul className="space-y-6">
                {(data.items || []).map((item, i) => (
                    <li key={i} className="flex items-start gap-4 pb-6 border-b border-gray-50 last:border-0 last:pb-0">
                        <div className="flex-shrink-0 mt-1">
                            <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: theme.secondaryColor }}>
                                <Icons.Check size={14} className="text-white" />
                            </div>
                        </div>
                        <div>
                            <p className="text-lg font-medium text-gray-800">{item.text}</p>
                            {item.subtext && <p className="text-sm text-gray-400 mt-1">{item.subtext}</p>}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const AccordionStepsLayout = ({ data, theme }) => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className="py-20 px-4 bg-white">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-serif text-center mb-16" style={{ color: theme.primaryColor }}>{data.heading}</h2>
                <div className="space-y-4">
                    {(data.steps || []).map((step, i) => (
                        <div key={i} className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300">
                            <button
                                onClick={() => setOpenIndex(i === openIndex ? -1 : i)}
                                className="w-full text-left px-6 py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border ${i === openIndex ? 'border-transparent text-white' : 'border-gray-300 text-gray-400'}`}
                                        style={{ backgroundColor: i === openIndex ? theme.primaryColor : 'transparent' }}>
                                        {i + 1}
                                    </span>
                                    <span className={`text-lg font-medium ${i === openIndex ? 'text-gray-900' : 'text-gray-600'}`}>
                                        {step.title}
                                    </span>
                                </div>
                                <Icons.ChevronDown size={20} className={`transform transition-transform ${i === openIndex ? 'rotate-180' : ''} text-gray-400`} />
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${i === openIndex ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="px-6 pb-6 pt-0 ml-12">
                                    <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const VisualRoadmapLayout = ({ data, theme }) => (
    <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif text-center mb-24" style={{ color: theme.primaryColor }}>{data.heading}</h2>
            <div className="space-y-0">
                {(data.steps || []).map((step, i) => (
                    <div key={i} className="flex flex-col md:flex-row group">
                        <div className={`w-full md:w-1/2 min-h-[400px] relative overflow-hidden ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                            <div className="absolute inset-0 bg-gray-300 transition-transform duration-700 group-hover:scale-105" />
                            {/* Image placeholder */}
                        </div>
                        <div className={`w-full md:w-1/2 p-12 md:p-20 flex flex-col justify-center bg-white ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                            <span className="text-6xl text-gray-100 font-serif font-bold absolute -mt-24 -ml-4">0{i + 1}</span>
                            <h3 className="text-2xl md:text-3xl font-serif mb-6 relative" style={{ color: theme.primaryColor }}>{step.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-lg relative">{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const CalendarViewLayout = ({ data, theme }) => (
    <div className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-16" style={{ color: theme.primaryColor }}>{data.heading}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {(data.days || []).map((day, i) => (
                    <div key={i} className="border border-gray-200 p-8 text-center rounded-xl hover:shadow-lg transition-shadow duration-300">
                        <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 bg-gray-100 text-gray-500">
                            {day.day}
                        </div>
                        <h3 className="text-xl font-bold mb-2" style={{ color: theme.primaryColor }}>{day.status}</h3>
                        <div className="w-8 h-1 bg-gray-200 mx-auto mt-6 rounded-full" style={{ backgroundColor: theme.secondaryColor }} />
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const MobileSliderLayout = ({ data, theme }) => (
    <div className="py-20 px-4 overflow-hidden" style={{ background: `linear-gradient(to bottom, #fff 50%, ${theme.lightAccent || '#f9fafb'} 50%)` }}>
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                <h2 className="text-3xl md:text-4xl font-serif" style={{ color: theme.primaryColor }}>{data.heading}</h2>
                <div className="hidden md:flex gap-2">
                    <button className="p-3 rounded-full border hover:bg-gray-50"><Icons.ArrowLeft size={20} /></button>
                    <button className="p-3 rounded-full border hover:bg-gray-50"><Icons.ArrowRight size={20} /></button>
                </div>
            </div>

            <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-12 hide-scrollbar">
                {(data.slides || []).map((slide, i) => (
                    <div key={i} className="min-w-[85vw] md:min-w-[400px] h-[500px] relative rounded-2xl overflow-hidden snap-center flex-shrink-0 group">
                        <img
                            src={getEffectiveImage(slide.imagePrompt, null, `slide ${i}`)}
                            alt={slide.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                            <div className="flex items-center gap-3 mb-3 text-white/80 text-sm font-bold uppercase tracking-wider">
                                <span>Step 0{i + 1}</span>
                                <div className="h-px w-8 bg-white/50" />
                            </div>
                            <h3 className="text-3xl font-serif mb-3">{slide.title}</h3>
                            <p className="text-white/80 leading-relaxed text-sm md:text-base">{slide.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const MinimalListLayout = ({ data, theme }) => (
    <div className="py-20 px-4 bg-white">
        <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-serif mb-8 text-center" style={{ color: theme.primaryColor }}>{data.heading}</h2>
            <div className="space-y-1">
                {(data.items || []).map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-4 px-6 border border-gray-100 rounded hover:border-gray-300 hover:shadow-sm transition-all bg-white group cursor-pointer">
                        <span className="font-medium text-gray-900 group-hover:text-black">{item.text}</span>
                        {item.icon ? (
                            <DynamicIcon name={item.icon} size={18} className="text-gray-400 group-hover:text-gray-800" />
                        ) : (
                            <span className="text-xs font-bold text-gray-400">0{i + 1}</span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const PhaseBlocksLayout = ({ data, theme }) => (
    <div className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-16" style={{ color: theme.primaryColor }}>{data.heading}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3">
                {[1, 2, 3].map((num) => (
                    <div key={num} className="p-10 md:p-12 md:min-h-[400px] flex flex-col justify-between relative overflow-hidden group border-b md:border-b-0 md:border-r border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                        <div>
                            <span className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-4 block">Phase 0{num}</span>
                            <h3 className="text-3xl font-serif mb-6" style={{ color: theme.primaryColor }}>{data[`phase${num}Title`]}</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">{data[`phase${num}Desc`]}</p>
                        </div>
                        <div className="mt-12 h-1 w-full bg-gray-100 relative overflow-hidden rounded-full">
                            <div className="absolute top-0 left-0 h-full bg-gray-900 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 w-full" style={{ backgroundColor: theme.secondaryColor }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

// ===================================================================
// MAIN COMPONENT
// ===================================================================

const ProcedureGuideSection = ({ data, layout, theme }) => {
    switch (layout) {
        case 'Quick & Clear': return <QuickClearLayout data={data} theme={theme} />;
        case 'Detailed Journey': return <DetailedJourneyLayout data={data} theme={theme} />;
        case 'Horizontal Flow': return <HorizontalFlowLayout data={data} theme={theme} />;
        case 'Checklist Style': return <ChecklistStyleLayout data={data} theme={theme} />;
        case 'Accordion Steps': return <AccordionStepsLayout data={data} theme={theme} />;
        case 'Visual Roadmap': return <VisualRoadmapLayout data={data} theme={theme} />;
        case 'Calendar View': return <CalendarViewLayout data={data} theme={theme} />;
        case 'Mobile Slider': return <MobileSliderLayout data={data} theme={theme} />;
        case 'Minimal List': return <MinimalListLayout data={data} theme={theme} />;
        case 'Phase Blocks': return <PhaseBlocksLayout data={data} theme={theme} />;
        default: return <QuickClearLayout data={data} theme={theme} />;
    }
};

// ============================================================
// HTML GENERATOR (Code View) - DRY Implementation
// ============================================================

export const generateProcedureGuideHTML = (layout, data, theme) => {
    // Render the React component directly to static HTML string
    // This ensures logical parity between Visual Preview and Code View
    const html = ReactDOMServer.renderToStaticMarkup(
        <ProcedureGuideSection data={data} layout={layout} theme={theme} />
    );

    return `<!-- PROCEDURE GUIDES: ${layout} -->
${html}`;
};

export default ProcedureGuideSection;

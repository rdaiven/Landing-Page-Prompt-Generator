// ===================================================================
// PROBLEM/CONCERN SECTION
// Visual Preview (React) + Code Generation (HTML)
// ===================================================================

import React, { useState } from 'react'
import * as Icons from 'lucide-react'
import ReactDOMServer from 'react-dom/server';

// ============================================================
// SHARED UTILITIES
// ============================================================

const DynamicIcon = ({ name, size = 24, className }) => {
    const IconComponent = Icons[name] || Icons.HelpCircle
    return <IconComponent size={size} className={className} />
}

// ============================================================
// REACT COMPONENT (Visual Preview)
// ============================================================

const ProblemConcernSection = ({ data, layout, theme }) => {
    const { heading, items, problemHeading, problemText, solutionHeading, solutionText, symptoms, statement, subtext, badHeading, badText, goodHeading, goodText, question, option1, option2, option3, personas, myth, fact, beforeHeading, beforeText, afterHeading, afterText } = data
    const [selectedQuiz, setSelectedQuiz] = useState(null)

    // Layout Implementation Map
    const layouts = {
        'Simple & Scannable': () => (
            <div className="py-24 bg-white">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-12" style={{ fontFamily: 'var(--font-serif)', color: theme.primaryColor }}>{heading}</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {(items || []).map((item, i) => (
                            <div key={i} className="flex items-center gap-3 px-6 py-3 bg-gray-50 rounded-full border border-gray-100 text-lg text-gray-700">
                                <span className="text-red-500">?</span>
                                {item.text}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ),
        'Visual & Engaging': () => (
            <div className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-16 text-center" style={{ fontFamily: 'var(--font-serif)', color: theme.primaryColor }}>{heading}</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {(items || []).map((item, i) => (
                            <div key={i} className="p-8 border border-gray-100 rounded-2xl hover:shadow-xl transition-all hover:-translate-y-1 bg-white">
                                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-6 text-2xl">🤔</div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ),
        'Agitation Scale': () => (
            <div className="py-24 bg-gray-50">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="relative">
                        <div className="absolute left-8 top-8 bottom-8 w-1 bg-gradient-to-b from-red-200 to-green-200 hidden md:block"></div>
                        <div className="space-y-12 relative z-10">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-red-400 ml-0 md:ml-12">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{problemHeading}</h3>
                                <p className="text-gray-600">{problemText}</p>
                            </div>
                            <div className="flex justify-center md:hidden text-2xl">↓</div>
                            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500 ml-0 md:ml-12 transform scale-105">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{solutionHeading}</h3>
                                <p className="text-gray-600">{solutionText}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
        'Symptoms Grid': () => (
            <div className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-12" style={{ fontFamily: 'var(--font-serif)' }}>{heading}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left">
                        {(symptoms || []).map((symptom, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 border border-gray-100 rounded-lg hover:border-gray-300 transition-colors cursor-default">
                                <div className="w-5 h-5 rounded border border-gray-300 flex-shrink-0"></div>
                                <span className="text-gray-700 font-medium">{symptom.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ),
        'Empathy Statement': () => (
            <div className="py-32 bg-gray-900 text-white text-center px-6">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-4xl md:text-6xl font-bold leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
                        "{statement}"
                    </h2>
                    <div className="w-24 h-1 bg-white/20 mx-auto"></div>
                    <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto">{subtext}</p>
                </div>
            </div>
        ),
        'Comparison Table': () => (
            <div className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8 md:gap-0">
                    <div className="bg-gray-50 p-10 md:rounded-l-2xl border border-gray-100 flex flex-col justify-center opacity-70">
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">The Old Way</span>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">{badHeading}</h3>
                        <p className="text-gray-600">{badText}</p>
                        <div className="mt-6 text-4xl text-gray-300">×</div>
                    </div>
                    <div className="bg-white p-10 md:rounded-r-2xl border border-gray-200 shadow-2xl flex flex-col justify-center relative z-10 transform md:scale-105">
                        <span className="text-xs font-bold uppercase tracking-widest text-green-600 mb-4">Our Approach</span>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ color: theme.primaryColor }}>{goodHeading}</h3>
                        <p className="text-gray-600">{goodText}</p>
                        <div className="mt-6 text-4xl text-green-500">✓</div>
                    </div>
                </div>
            </div>
        ),
        'Interactive Quiz': () => (
            <div className="py-24 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-12" style={{ fontFamily: 'var(--font-serif)' }}>{question}</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[option1, option2, option3].filter(Boolean).map((opt, i) => (
                            <button
                                key={i}
                                onClick={() => setSelectedQuiz(i)}
                                className={`p-8 rounded-xl border-2 transition-all text-left group ${selectedQuiz === i ? 'border-black bg-white shadow-xl' : 'border-transparent bg-white shadow-sm hover:border-gray-200'}`}
                            >
                                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center mb-4 ${selectedQuiz === i ? 'border-black bg-black text-white' : 'border-gray-200 group-hover:border-gray-400'}`}>
                                    {selectedQuiz === i && '✓'}
                                </div>
                                <span className="font-bold text-lg block">{opt}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        ),
        'Persona Cards': () => (
            <div className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-sm font-bold uppercase tracking-widest text-gray-400">Who we help</span>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {(personas || []).map((persona, i) => (
                            <div key={i} className="bg-gray-50 rounded-2xl p-8 relative overflow-hidden group hover:bg-white hover:shadow-xl transition-all border border-gray-100/50">
                                <div className="absolute top-0 right-0 p-32 bg-gradient-to-br from-white/0 to-white/0 group-hover:to-gray-100/50 rounded-full transition-all"></div>
                                <h3 className="text-2xl font-bold mb-4 relative z-10" style={{ fontFamily: 'var(--font-serif)' }}>{persona.type}</h3>
                                <p className="text-gray-600 relative z-10">{persona.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ),
        'Myth vs Fact': () => (
            <div className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl">
                        <div className="bg-gray-100 p-12 flex flex-col justify-center">
                            <span className="inline-block px-3 py-1 bg-gray-200 text-gray-600 text-xs font-bold uppercase tracking-wide rounded mb-6 w-fit">The Myth</span>
                            <h3 className="text-2xl font-medium text-gray-500 line-through decoration-red-500/50 decoration-2">{myth}</h3>
                        </div>
                        <div className="bg-gray-900 text-white p-12 flex flex-col justify-center">
                            <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wide rounded mb-6 w-fit">The Fact</span>
                            <h3 className="text-2xl font-bold leading-relaxed">{fact}</h3>
                        </div>
                    </div>
                </div>
            </div>
        ),
        'Before/After Text': () => (
            <div className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6 text-right opacity-60">
                        <h3 className="text-3xl font-bold text-gray-400" style={{ fontFamily: 'var(--font-serif)' }}>{beforeHeading}</h3>
                        <p className="text-xl text-gray-500 leading-relaxed italic">"{beforeText}"</p>
                    </div>
                    <div className="space-y-6 relative">
                        <div className="absolute -left-8 top-0 bottom-0 w-px bg-gray-200 hidden md:block"></div>
                        <h3 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-serif)', color: theme.primaryColor }}>{afterHeading}</h3>
                        <p className="text-xl text-gray-800 leading-relaxed font-medium">"{afterText}"</p>
                    </div>
                </div>
            </div>
        )
    }

    // SAFE FALLBACK: If layout is not found, default to 'Simple & Scannable'
    const RenderLayout = layouts[layout] || layouts['Simple & Scannable']
    return <RenderLayout />
}


// ============================================================
// HTML GENERATOR (Code View) - DRY Implementation
// ============================================================

export const generateProblemConcernHTML = (layout, data, theme) => {
    // Render the React component directly to static HTML string
    const html = ReactDOMServer.renderToStaticMarkup(
        <ProblemConcernSection data={data} layout={layout} theme={theme} />
    );

    return `<!-- PROBLEM/CONCERN: ${layout} -->
${html}`;
};

export default ProblemConcernSection

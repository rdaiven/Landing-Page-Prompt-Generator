import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles, Target, Mic, Palette, Type } from 'lucide-react';
import { THEME_CONFIG } from '../utils/themeConfig';

const STEPS = [
    {
        id: 'goal',
        title: "What is your primary goal?",
        subtitle: "This helps us optimize your Call-to-Actions and layout hierarchy.",
        icon: <Target className="w-6 h-6" />,
        options: [
            { id: 'bookings', title: 'Bookings & Appointments', desc: 'Direct scheduling for services.', icon: '📅' },
            { id: 'leads', title: 'Leads & Inquiries', desc: 'Capture interest for high-ticket items.', icon: '✉️' },
            { id: 'sales', title: 'Direct Sales & Offers', desc: 'Immediate purchase or conversion.', icon: '💰' }
        ]
    },
    {
        id: 'voice',
        title: "Choose your Brand Voice",
        subtitle: "We'll use this to guide your copy suggestions.",
        icon: <Mic className="w-6 h-6" />,
        options: [
            { id: 'premium', title: 'Premium & Clinical', desc: 'Professional, authoritative, trustworthy.', icon: '💎' },
            { id: 'warm', title: 'Warm & Reassuring', desc: 'Friendly, empathetic, approachable.', icon: '🌞' },
            { id: 'bold', title: 'Bold & Direct', desc: 'Confident, high-energy, persuasive.', icon: '⚡' }
        ]
    },
    {
        id: 'style',
        title: "Select a Visual Style",
        subtitle: "Set the initial look and feel of your page.",
        icon: <Palette className="w-6 h-6" />,
        options: THEME_CONFIG.styles
    },
    {
        id: 'basics',
        title: "Final Details",
        subtitle: "Let's name your project.",
        icon: <Type className="w-6 h-6" />,
        isForm: true
    }
];

const OnboardingWizard = ({ isOpen, onClose, onComplete }) => {
    const [stepIndex, setStepIndex] = useState(0);
    const [data, setData] = useState({
        goal: '',
        voice: '',
        style: '',
        brandName: '',
        topic: ''
    });

    if (!isOpen) return null;

    const currentStep = STEPS[stepIndex];
    const isLastStep = stepIndex === STEPS.length - 1;

    const handleOptionSelect = (value) => {
        setData(prev => ({ ...prev, [currentStep.id]: value }));
        // Auto-advance after small delay for better UX
        if (!isLastStep) {
            setTimeout(() => setStepIndex(prev => prev + 1), 300);
        }
    };

    const handleNext = () => {
        if (isLastStep) {
            onComplete(data);
        } else {
            setStepIndex(prev => prev + 1);
        }
    };

    const handleBack = () => {
        if (stepIndex > 0) {
            setStepIndex(prev => prev - 1);
        }
    };

    const canProceed = () => {
        if (currentStep.isForm) {
            return data.brandName.length > 0 && data.topic.length > 0;
        }
        return !!data[currentStep.id];
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4">
            <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
                {/* Progress Bar */}
                <div className="h-1.5 bg-slate-100 w-full">
                    <div
                        className="h-full bg-indigo-600 transition-all duration-500 ease-out"
                        style={{ width: `${((stepIndex + 1) / STEPS.length) * 100}%` }}
                    />
                </div>

                {/* Header */}
                <div className="px-8 pt-8 pb-4 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 mb-4">
                        {currentStep.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">{currentStep.title}</h2>
                    <p className="text-slate-500">{currentStep.subtitle}</p>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto px-8 py-4">
                    {currentStep.isForm ? (
                        <div className="space-y-6 max-w-md mx-auto">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1">Brand / Company Name</label>
                                <input
                                    type="text"
                                    value={data.brandName}
                                    onChange={e => setData(prev => ({ ...prev, brandName: e.target.value }))}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                                    placeholder="e.g. Venus Aesthetics"
                                    autoFocus
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1">Main Topic / Service</label>
                                <input
                                    type="text"
                                    value={data.topic}
                                    onChange={e => setData(prev => ({ ...prev, topic: e.target.value }))}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                                    placeholder="e.g. Laser Hair Removal"
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {currentStep.options.map((option) => (
                                <button
                                    key={option.id}
                                    onClick={() => handleOptionSelect(option.id)}
                                    className={`
                                        relative group flex flex-col items-start p-4 rounded-2xl border-2 text-left transition-all duration-200
                                        ${data[currentStep.id] === option.id
                                            ? 'border-indigo-600 bg-indigo-50/50 shadow-md ring-1 ring-indigo-600'
                                            : 'border-slate-100 bg-white hover:border-indigo-200 hover:shadow-lg hover:-translate-y-0.5'
                                        }
                                    `}
                                >
                                    <span className="text-2xl mb-3">{option.icon}</span>
                                    <h3 className={`font-bold mb-1 ${data[currentStep.id] === option.id ? 'text-indigo-900' : 'text-slate-900'}`}>
                                        {option.title}
                                    </h3>
                                    <p className="text-xs text-slate-500 leading-relaxed">
                                        {option.desc}
                                    </p>

                                    {data[currentStep.id] === option.id && (
                                        <div className="absolute top-4 right-4 w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center">
                                            <Check className="w-3 h-3 text-white" />
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-slate-100 flex items-center justify-between bg-white">
                    <button
                        onClick={handleBack}
                        disabled={stepIndex === 0}
                        className={`text-sm font-semibold px-4 py-2 rounded-lg transition-colors ${stepIndex === 0 ? 'text-slate-300 cursor-not-allowed' : 'text-slate-500 hover:text-slate-800'}`}
                    >
                        Back
                    </button>

                    <button
                        onClick={handleNext}
                        disabled={!canProceed()}
                        className={`
                            flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all shadow-lg
                            ${canProceed()
                                ? 'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-indigo-200 hover:-translate-y-0.5'
                                : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                            }
                        `}
                    >
                        {isLastStep ? (
                            <>
                                Start Workbench <Sparkles className="w-4 h-4" />
                            </>
                        ) : (
                            <>
                                Continue <ArrowRight className="w-4 h-4" />
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OnboardingWizard;

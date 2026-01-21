import React from 'react';

export function LayoutCards({ value, onChange, options }) {
    return (
        <div className="grid grid-cols-2 gap-3">
            {options.map((opt) => (
                <button
                    key={opt.id}
                    onClick={() => onChange(opt.id)} // Parent passes the ID back
                    className={`
            group relative flex flex-col items-start gap-3 rounded-xl border p-3 text-left transition-all duration-200
            ${value === opt.id
                            ? "border-indigo-600 bg-indigo-50/50 ring-1 ring-indigo-600 shadow-sm"
                            : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-md"
                        }
          `}
                >
                    <div className="flex w-full items-center justify-between">
                        <div className={`
                            shrink-0 w-8 h-8 rounded-lg flex items-center justify-center border
                            ${value === opt.id ? "bg-white border-indigo-200" : "bg-slate-50 border-slate-100"}
                        `}>
                            <span className="text-sm opacity-80">
                                {opt.name.includes('Split') ? '🌗' :
                                    opt.name.includes('Grid') ? '▦' :
                                        opt.name.includes('Sticky') ? '📌' : '📄'}
                            </span>
                        </div>

                        {opt.tag && (
                            <span className="inline-flex items-center px-1.5 py-0.5 rounded-md text-[9px] font-bold bg-amber-100 text-amber-700 border border-amber-200/50 uppercase tracking-wide">
                                {opt.tag}
                            </span>
                        )}
                    </div>

                    <div className="w-full">
                        <span className={`block text-xs font-bold mb-1 ${value === opt.id ? "text-indigo-900" : "text-slate-900"}`}>
                            {opt.name || opt.id}
                        </span>

                        {opt.description && (
                            <p className="text-[10px] text-slate-500 leading-snug line-clamp-2">
                                {opt.description}
                            </p>
                        )}
                    </div>

                    {/* Selection Check */}
                    {value === opt.id && (
                        <div className="absolute top-3 right-3 w-4 h-4 rounded-full bg-indigo-600 flex items-center justify-center">
                            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                    )}
                </button>
            ))}
        </div>
    );
}

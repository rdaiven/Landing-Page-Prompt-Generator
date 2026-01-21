

export function SegmentedControl({
    value,
    onChange,
    options,
    className = "",
    iconOnlyAt = "xl",
}) {
    // iconOnlyAt controls when labels hide (e.g., "xl" => labels show at xl+)
    // For simplicity in this implementation, we might just show labels or handle responsive CSS if needed.
    // The user's reference uses `hidden ${iconOnlyAt}:inline` which relies on Tailwind breakpoints.
    const labelCls = iconOnlyAt ? `hidden ${iconOnlyAt}:inline` : "inline";

    return (
        <div
            className={`inline-flex overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm ${className}`}
            role="tablist"
            aria-label="Segmented control"
        >
            {options.map((option) => {
                const isSelected = value === option.value;
                return (
                    <button
                        key={option.value}
                        type="button"
                        onClick={() => onChange(option.value)}
                        className={`
                            relative z-10 flex-1 flex items-center justify-center gap-2 py-2 text-xs font-semibold rounded-lg transition-all duration-200
                            ${isSelected ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}
                        `}
                        role="tab"
                        aria-selected={isSelected}
                    >
                        {option.icon && <option.icon className="w-3.5 h-3.5" />}
                        <span className={labelCls}>{option.label}</span>
                    </button>
                );
            })}
        </div>
    );
}

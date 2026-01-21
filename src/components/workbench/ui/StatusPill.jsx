import React from 'react';
import { CheckCircle2, Circle, CircleDot } from 'lucide-react';

export function StatusPill({ status }) {
    const map = {
        ready: { label: "Ready", cls: "bg-emerald-50 text-emerald-700 ring-emerald-200" },
        draft: { label: "Needs content", cls: "bg-amber-50 text-amber-800 ring-amber-200" },
        skipped: { label: "Skipped", cls: "bg-slate-50 text-slate-600 ring-slate-200" },
    };

    // Default to draft if status is unknown/undefined
    const v = map[status] || map.draft;

    return (
        <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs ring-1 ${v.cls}`}>
            {status === "ready" ? (
                <CheckCircle2 className="h-3.5 w-3.5" />
            ) : status === "skipped" ? (
                <Circle className="h-3.5 w-3.5" />
            ) : (
                <CircleDot className="h-3.5 w-3.5" />
            )}
            {v.label}
        </span>
    );
}

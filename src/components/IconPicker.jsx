import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react';

const ICON_LIST = Object.keys(LucideIcons).filter(key => key !== 'createLucideIcon' && key !== 'default');

const IconPicker = ({ value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredIcons = searchTerm
        ? ICON_LIST.filter(iconName => iconName.toLowerCase().includes(searchTerm.toLowerCase()))
        : ICON_LIST.slice(0, 50); // Show first 50 by default to avoid lag

    const SelectedIcon = value && LucideIcons[value] ? LucideIcons[value] : LucideIcons.HelpCircle;

    return (
        <div style={{ position: 'relative' }}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)',
                    background: 'var(--surface)',
                    cursor: 'pointer',
                    width: '100%'
                }}
            >
                <SelectedIcon size={20} />
                <span style={{ flex: 1, textAlign: 'left' }}>{value || 'Select Icon'}</span>
                <LucideIcons.ChevronDown size={16} />
            </button>

            {isOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    width: '300px',
                    maxHeight: '300px',
                    overflowY: 'auto',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)',
                    boxShadow: 'var(--shadow-lg)',
                    zIndex: 1000,
                    marginTop: '0.5rem',
                    padding: '0.5rem'
                }}>
                    <input
                        type="text"
                        placeholder="Search icons..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        autoFocus
                        style={{
                            width: '100%',
                            padding: '0.5rem',
                            marginBottom: '0.5rem',
                            border: '1px solid var(--border)',
                            borderRadius: '4px'
                        }}
                    />
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.5rem' }}>
                        {filteredIcons.map(iconName => {
                            const IconCallback = LucideIcons[iconName];
                            return (
                                <button
                                    key={iconName}
                                    type="button"
                                    onClick={() => {
                                        onChange(iconName);
                                        setIsOpen(false);
                                    }}
                                    title={iconName}
                                    style={{
                                        padding: '0.5rem',
                                        border: '1px solid transparent',
                                        borderRadius: '4px',
                                        background: value === iconName ? 'var(--primary-light)' : 'transparent',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: value === iconName ? 'var(--primary)' : 'inherit'
                                    }}
                                >
                                    <IconCallback size={20} />
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}

            {isOpen && (
                <div
                    style={{ position: 'fixed', inset: 0, zIndex: 999 }}
                    onClick={() => setIsOpen(false)}
                />
            )}
        </div>
    );
};

export default IconPicker;

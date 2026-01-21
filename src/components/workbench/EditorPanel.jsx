import React from 'react';
import GlobalEditor from './GlobalEditor';
import SectionEditor from './SectionEditor';

const EditorPanel = ({ activeTab, activeSection, formData, updateField, updateSectionLayout, updateSectionData, updateSectionStyles, updateSectionStatus, onReset, onExport, onImport, isMobile, setPreviewFocus, iframeMode }) => {

    // If we're not in the right tab/section state, show a placeholder or nothing
    if (activeTab === 'global') {
        return (
            <GlobalEditor
                activeSection={activeSection}
                formData={formData}
                updateField={updateField}
                onReset={onReset}
                onExport={onExport}
                onImport={onImport}
            />
        );
    }

    if (activeTab === 'sections') {
        // Determine which section is active
        // The parent passes 'activeSection' directly
        return (
            <SectionEditor
                sectionKey={activeSection}
                formData={formData}
                updateSectionLayout={updateSectionLayout}
                updateSectionData={updateSectionData}
                updateSectionStyles={updateSectionStyles}
                updateSectionStatus={updateSectionStatus}
                setPreviewFocus={setPreviewFocus}
                iframeMode={iframeMode}
            />
        )
    }

    return null;
};

export default EditorPanel;

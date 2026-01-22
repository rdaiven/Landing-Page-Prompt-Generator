import { useState, useEffect } from 'react'
import WorkbenchLayout from './components/workbench/WorkbenchLayout'
import TutorialModal from './components/TutorialModal'
import OnboardingWizard from './components/OnboardingWizard'
import { generatePrompt } from './utils/promptGenerator'
import { getInitialSectionState, sectionConfigs } from './utils/sectionConfig'
import './index.css'

const STORAGE_KEY = 'prompt_generator_v1_data';

function App() {
  const [isTutorialOpen, setIsTutorialOpen] = useState(false)
  const [showWizard, setShowWizard] = useState(false)
  const [prompt, setPrompt] = useState('')
  const [formData, setFormData] = useState(() => {
    // Initialize from storage if available, otherwise default
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {
      brandName: '',
      topic: '',
      vibe: '',
      primaryColor: '',
      secondaryColor: '',
      accentColor: '',
      neutralColor: '',
      audience: '',
      assets: [{ type: 'image', url: '' }],
      sections: getInitialSectionState()
    }
  })

  // Start with Wizard open if first visit (no saved data)
  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setShowWizard(true);
    }
  }, []);

  const handleWizardComplete = (wizardData) => {
    setFormData(prev => ({
      ...prev,
      ...wizardData
    }));
    setShowWizard(false);
    // Optional: Open the "How to Use" guide after onboarding
    // setIsTutorialOpen(true); 
  };

  useEffect(() => {
    // Save to local storage on every update
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    const newPrompt = generatePrompt(formData);
    setPrompt(newPrompt);
  }, [formData])

  const updateField = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const toggleSection = (section) => {
    setFormData(prev => ({
      ...prev,
      sections: {
        ...prev.sections,
        [section]: {
          ...prev.sections[section],
          enabled: !prev.sections[section].enabled
        }
      }
    }))
  }

  const updateSectionLayout = (section, layout) => {
    const config = sectionConfigs[section].layouts[layout];
    const prevData = formData.sections[section].data || {};

    // 1. Start with the new layout's defaults to ensure we have all necessary keys for the new layout
    const newData = { ...(config.defaultData || {}) };

    // 2. Supersede with any existing data from the previous layout
    // This ensures that shared fields (like 'heading' or 'items') are preserved.
    // It also preserves keys not used in the new layout (hidden state), supporting the user's request.
    Object.keys(prevData).forEach(key => {
      newData[key] = prevData[key];
    });

    // 3. UX Rule: For fields that are NEW to this layout (didn't exist in prevData),
    // ensure text inputs start empty instead of showing the placeholder default.
    if (config.fields) {
      config.fields.forEach(field => {
        // Only apply if this field wasn't present in the previous data
        if (field.type !== 'collection' && prevData[field.name] === undefined) {
          if (field.type === 'text' || field.type === 'textarea') {
            newData[field.name] = '';
          }
        }
      });
    }

    setFormData(prev => ({
      ...prev,
      sections: {
        ...prev.sections,
        [section]: {
          ...prev.sections[section],
          layout: layout,
          data: newData
        }
      }
    }))
  }

  const updateSectionData = (section, fieldName, value) => {
    setFormData(prev => ({
      ...prev,
      sections: {
        ...prev.sections,
        [section]: {
          ...prev.sections[section],
          data: {
            ...prev.sections[section].data,
            [fieldName]: value
          }
        }
      }
    }))
  }

  const updateSectionStyles = (section, styleName, value) => {
    setFormData(prev => ({
      ...prev,
      sections: {
        ...prev.sections,
        [section]: {
          ...prev.sections[section],
          styles: {
            ...(prev.sections[section].styles || {}),
            [styleName]: value
          }
        }
      }
    }))
  }

  const updateSectionStatus = (section, status) => {
    setFormData(prev => ({
      ...prev,
      sections: {
        ...prev.sections,
        [section]: {
          ...prev.sections[section],
          status: status
        }
      }
    }))
  }

  // --- Actions ---
  const resetForm = () => {
    if (window.confirm('Are you sure you want to clear all data? This cannot be undone.')) {
      const defaults = {
        brandName: '',
        topic: '',
        vibe: '',
        primaryColor: '',
        secondaryColor: '',
        accentColor: '',
        neutralColor: '',
        audience: '',
        assets: [{ type: 'image', url: '' }],
        sections: getInitialSectionState()
      };
      setFormData(defaults);
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  const exportData = () => {
    const dataStr = JSON.stringify(formData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    // Smart Filename Generation
    const cleanBrand = (formData.brandName || 'MyBrand').replace(/[^a-z0-9]/gi, '_');
    const cleanTopic = (formData.topic || 'LandingPage').replace(/[^a-z0-9]/gi, '_');
    const date = new Date().toISOString().slice(0, 10);
    const filename = `prompt_config_${cleanBrand}_${cleanTopic}_${date}.json`;

    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  const importData = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const importedData = JSON.parse(e.target.result);
        // Basic validation could go here
        if (importedData.sections) {
          setFormData(importedData);
          alert('Configuration loaded successfully!');
        } else {
          alert('Invalid configuration file.');
        }
      } catch (err) {
        console.error(err);
        alert('Error reading file.');
      }
    };
    reader.readAsText(file);
    // Reset input value to allow re-importing same file if needed
    event.target.value = '';
  }

  return (
    <div className="h-screen w-full overflow-hidden bg-slate-100 font-sans text-slate-900">
      <WorkbenchLayout
        prompt={prompt}
        formData={formData}
        sections={formData.sections}
        updateField={updateField}
        toggleSection={toggleSection}
        updateSectionLayout={updateSectionLayout}
        updateSectionData={updateSectionData}
        updateSectionStyles={updateSectionStyles}
        updateSectionStatus={updateSectionStatus}
        onReset={resetForm}
        onExport={exportData}
        onImport={importData}
      />

      <TutorialModal isOpen={isTutorialOpen} onClose={() => setIsTutorialOpen(false)} />
      <OnboardingWizard isOpen={showWizard} onClose={() => setShowWizard(false)} onComplete={handleWizardComplete} />
    </div>
  )
}

export default App

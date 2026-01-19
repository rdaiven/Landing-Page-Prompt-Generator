import { useState, useEffect } from 'react'
import InputPanel from './components/InputPanel'
import PreviewPanel from './components/PreviewPanel'
import { generatePrompt } from './utils/promptGenerator'
import { getInitialSectionState, sectionConfigs } from './utils/sectionConfig'

const STORAGE_KEY = 'prompt_generator_v1_data';

function App() {
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

  const [prompt, setPrompt] = useState('')

  useEffect(() => {
    setPrompt(generatePrompt(formData))
    // Save to local storage on every update
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
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
    // When layout changes, we need to reset data to defaults for that layout
    const config = sectionConfigs[section].layouts[layout];
    const newData = {};

    if (config.defaultData) {
      Object.assign(newData, config.defaultData);
    }

    if (config.fields) {
      config.fields.forEach(field => {
        if (field.type !== 'collection' && newData[field.name] === undefined) {
          newData[field.name] = field.default || '';
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

  // --- Actions ---
  const handleReset = () => {
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

  const handleExport = () => {
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

  const handleSectionClick = (sectionKey) => {
    // Determine the ID of the element to scroll to
    const elementId = `section-${sectionKey}`;

    // We need to find the element within the PreviewViewport if possible, or just global
    // Since VisualPreview renders these IDs, we can look for them.
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  const handleImport = (event) => {
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
    <main className="workbench">
      <div className="input-side">
        <header className="side-header">
          <h1>Copy Workbench</h1>
          <p>Landing Page Prompt Generator</p>
        </header>
        <InputPanel
          formData={formData}
          updateField={updateField}
          toggleSection={toggleSection}
          updateSectionLayout={updateSectionLayout}
          updateSectionData={updateSectionData}
          onReset={handleReset}
          onExport={handleExport}
          onImport={handleImport}
          onSectionClick={handleSectionClick}
        />
      </div>
      <div className="preview-side">
        <PreviewPanel prompt={prompt} formData={formData} />
      </div>
    </main>
  )
}

export default App

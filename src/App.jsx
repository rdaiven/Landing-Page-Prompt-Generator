import { useState, useEffect } from 'react'
import InputPanel from './components/InputPanel'
import PreviewPanel from './components/PreviewPanel'
import { generatePrompt } from './utils/promptGenerator'
import { getInitialSectionState, sectionConfigs } from './utils/sectionConfig'

function App() {
  const [formData, setFormData] = useState({
    brandName: '',
    topic: '',
    vibe: '',
    primaryColor: '',
    secondaryColor: '',
    accentColor: '',
    neutralColor: '',
    audience: '',
    assets: [
      { type: 'image', url: '' }
    ],
    sections: getInitialSectionState()
  })

  const [prompt, setPrompt] = useState('')

  useEffect(() => {
    setPrompt(generatePrompt(formData))
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
        />
      </div>
      <div className="preview-side">
        <PreviewPanel prompt={prompt} formData={formData} />
      </div>
    </main>
  )
}

export default App

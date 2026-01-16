import { useState, useEffect } from 'react'
import InputPanel from './components/InputPanel'
import PreviewPanel from './components/PreviewPanel'
import { generatePrompt } from './utils/promptGenerator'

function App() {
  const [formData, setFormData] = useState({
    brandName: '',
    topic: '',
    vibe: 'Professional & Luxury',
    primaryColor: '#2563eb',
    secondaryColor: '#f8fafc',
    audience: '',
    assets: [
      { type: 'image', url: '' }
    ],
    sections: {
      header: { enabled: true, layout: 'Sticky', content: '' },
      hero: { enabled: true, layout: 'Split', content: '' },
      trustPrimer: { enabled: true, layout: 'Short Strip', content: '' },
      problemConcern: { enabled: true, layout: 'Bullets', content: '' },
      treatmentLogic: { enabled: true, layout: 'Simple', content: '' },
      procedureGuide: { enabled: true, layout: '3-Step', content: '' },
      socialProof: { enabled: true, layout: 'Testimonials', content: '' },
      conversion: { enabled: true, layout: 'Urgency', content: '' },
      clinicDetails: { enabled: true, layout: 'Grid', content: '' },
      faq: { enabled: true, layout: 'Objection-Only', content: '' },
      footer: { enabled: true, layout: 'Minimal', content: '' }
    }
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
    setFormData(prev => ({
      ...prev,
      sections: {
        ...prev.sections,
        [section]: {
          ...prev.sections[section],
          layout: layout
        }
      }
    }))
  }

  const updateSectionContent = (section, content) => {
    setFormData(prev => ({
      ...prev,
      sections: {
        ...prev.sections,
        [section]: {
          ...prev.sections[section],
          content: content
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
          updateSectionContent={updateSectionContent}
        />
      </div>
      <div className="preview-side">
        <PreviewPanel prompt={prompt} />
      </div>
    </main>
  )
}

export default App

import { useState } from 'react'

import './App.css'
import {Header, TextInput, InfoCard, TextHighlight} from './components'
import {CLASSIFY_REQUEST_BODY} from './data/classifierRequest'
import { GENERATE_REQUEST_BODY } from './data/generatorRequest'

const CLASSIFY_API = "https://api.cohere.ai/v1/classify"
const GENERATE_API = "https://api.cohere.ai/v1/generate"
const API_KEY = "kcLpZwryzepeisB5zpCSQtEVLeWdUVlGlUMFi2Db"

function App() {
  const [mode, setMode] = useState('write')
  const [content, setContent] = useState('')
  const [showInfo, setShowInfo] = useState(false)
  const [fallacy, setFallacy] = useState([])
  const [selectedFallacy, setSelectedFallacy] = useState(null)

  const editContent = (content) => {
    setContent(content)
    setFallacy([])
  }

  const toggleInfo = () => {
    setShowInfo(!showInfo)
  }

  const evaluateContent = async () => {
    setMode(mode == 'write' ? 'highlight' : 'write')
    const inputs = content.split('.').map(sentence => sentence.trim()).filter((sentence) => sentence.length > 0)
    CLASSIFY_REQUEST_BODY.inputs = inputs
    const response = await fetch(CLASSIFY_API, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(CLASSIFY_REQUEST_BODY),
    })
    const body = await response.json()
    const fallacies = body.classifications.map((classification) => {
      const obj = {text: classification.input, label: classification.prediction};
      return obj
    })
    setFallacy(fallacies)
    generateExplanation(fallacies)
  }

  const generateExplanation = async (fallacies) => {
    for (var i = 0; i < fallacies.length; i++) {
      if (fallacies[i].label == 'No Fallacy') continue
      GENERATE_REQUEST_BODY.prompt = `Explain why the following sentence is a ${fallacies[i].label} logical fallacy: ${fallacies[i].text}`
      const response = await fetch(GENERATE_API, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(GENERATE_REQUEST_BODY),
      })
      const body = await response.json()
      fallacies[i].explanation = body.generations[0].text.trim()
    }
    setFallacy(fallacies)
  }

  return (
    <>
      <Header evaluateContent={evaluateContent} mode={mode}/>
      <div className="grid grid-cols-12 gap-4 mt-4">
        <div className="col-span-8">
          {mode == 'write' ? <TextInput content={content} editContent={editContent}/> 
        : <TextHighlight fallacy={fallacy} toggleInfo={toggleInfo} setSelectedFallacy={setSelectedFallacy}/>}
        </div>
        <div className="col-span-4">
          {showInfo ? <InfoCard fallacyName={selectedFallacy.label} fallacyExplanation={selectedFallacy.explanation}/> : null}
        </div> 
      </div>
    </>
  )
}

export default App

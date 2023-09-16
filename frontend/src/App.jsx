import { useState } from 'react'

import './App.css'
import {Header, TextInput, InfoCard, TextHighlight} from './components'
import {CLASSIFY_REQUEST_BODY} from './data/classifierRequest'

const CLASSIFY_API = "https://api.cohere.ai/v1/classify"

function App() {
  const [mode, setMode] = useState('write')
  const [content, setContent] = useState('')
  const [showInfo, setShowInfo] = useState(false)
  const [fallacy, setFallacy] = useState([])
  const [selectedFallacy, setSelectedFallacy] = useState(null)

  const editContent = (content) => {
    setContent(content)
  }

  const toggleInfo = () => {
    setShowInfo(!showInfo)
  }

  const evaluateContent = async () => {
    setMode(mode == 'write' ? 'highlight' : 'write')
    const inputs = content.split('.').filter((sentence) => sentence.length > 0)
    CLASSIFY_REQUEST_BODY.inputs = inputs
    const response = await fetch(CLASSIFY_API, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer kcLpZwryzepeisB5zpCSQtEVLeWdUVlGlUMFi2Db`,
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
  }

  return (
    <>
      <Header/>
      <button 
      className='bg-blue-500 hover:bg-blue-700 mb-4 text-white font-bold py-2 px-4 rounded'
      onClick={() => evaluateContent()}
      >
        {mode == 'write' ? 'Evaluate' : 'Edit'}
      </button>
      <div className="grid grid-cols-2 gap-4">
        {mode == 'write' ? <TextInput content={content} editContent={editContent}/> 
        : <TextHighlight fallacy={fallacy} toggleInfo={toggleInfo} setSelectedFallacy={setSelectedFallacy}/>}
        {showInfo ? <InfoCard fallacyName={selectedFallacy.label}/> : null}
      </div>
    </>
  )
}

export default App

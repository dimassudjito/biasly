import { useState } from 'react'

import './App.css'
import {Header, TextInput, InfoCard, TextHighlight} from './components'
import {CLASSIFY_REQUEST_BODY} from './data/classifierRequest'

const CLASSIFY_API = "https://api.cohere.ai/v1/classify"

function App() {
  const [mode, setMode] = useState('write')
  const [content, setContent] = useState('')
  const [showInfo, setShowInfo] = useState(false)

  const editContent = (content) => {
    setContent(content)
  }

  const toggleInfo = () => {
    setShowInfo(!showInfo)
  }

  const evaluateContent = async () => {
    setMode(mode == 'write' ? 'highlight' : 'write')
    CLASSIFY_REQUEST_BODY.inputs = content.split('.')
    const response = await fetch(CLASSIFY_API, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer kcLpZwryzepeisB5zpCSQtEVLeWdUVlGlUMFi2Db`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(CLASSIFY_REQUEST_BODY),
    })
    var body = await response.json()
    console.log(body)
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
        {mode == 'write' ? <TextInput content={content} editContent={editContent}/> : <TextHighlight content={content} toggleInfo={toggleInfo}/>}
        {showInfo ? <InfoCard/> : null}
      </div>
    </>
  )
}

export default App

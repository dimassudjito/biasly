import { useState } from 'react'

import './App.css'
import {Header, TextInput, InfoCard, TextHighlight} from './components'

function App() {
  const [mode, setMode] = useState('write')

  return (
    <>
      <Header/>
      <button 
      className='bg-blue-500 hover:bg-blue-700 mb-4 text-white font-bold py-2 px-4 rounded'
      onClick={() => setMode(mode == 'write' ? 'highlight' : 'write')}
      >
        {mode == 'write' ? 'Evaluate' : 'Edit'}
      </button>
      <div className="grid grid-cols-2 gap-4">
        {mode == 'write' ? <TextInput/> : <TextHighlight/>}
        <InfoCard/>
      </div>
    </>
  )
}

export default App

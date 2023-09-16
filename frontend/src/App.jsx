import './App.css'
import {Header, TextInput, InfoCard} from './components'

function App() {

  return (
    <>
      <Header/>
      <div className="grid grid-cols-2 gap-4">
        <TextInput/>
        <InfoCard/>
      </div>
    </>
  )
}

export default App

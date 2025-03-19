import { useState } from 'react'
import './App.css'

function App() {
  const [rawText, setRawText] = useState('')
  const [prefix, setPrefix] = useState('')

  const handleTextInput = (event) => {
    setRawText(event.target.value)
  }

  const handlePrefixInput = (event) => {
    setPrefix(event.target.value)
  }

  const output = () => {
    const lines = rawText.split('\n').map((line) => {
      return <p>{`[${prefix}] ${line}`}</p>
    })

    return lines
  }

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  }

  const columnStyle = {
    width: '50%',
    flexDirection: 'column',
    alignItems: 'flex-start',
  }

  return (
    <div style={containerStyle}>
      <div style={columnStyle}>
        <h2>Input</h2>
        <h3>Job ad</h3>
        <textarea onChange={handleTextInput} value={rawText}></textarea>

        <h3>Config</h3>
        <div>Prefix:</div>
        <input onChange={handlePrefixInput} value={prefix}></input>
      </div>
      <div style={columnStyle}>
        <h2>Output</h2>
        {output()}
      </div>
    </div>
  )
}

export default App

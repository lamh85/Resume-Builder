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

  const outputTextOnly = () => {
    return rawText
      .split('\n')
      .filter((line) => line.length > 0)
      .map((line) => `[${prefix}] ${line}`)
  }

  const output = () => {
    return outputTextOnly().map((line) => {
      return (
        <>
          <p>{line}</p>
          <p></p>
        </>
      )
    })
  }

  const handleCopy = async () => {
    const toCopy = outputTextOnly().join('\n\n')
    await navigator.clipboard.writeText(toCopy)
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
        <div>{output()}</div>
        <button onClick={handleCopy}>Copy Text</button>
      </div>
    </div>
  )
}

export default App

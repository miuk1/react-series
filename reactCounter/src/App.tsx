import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)

  const addValue = () => {
    setCounter((counter) => counter + 1)
    setCounter((counter) => counter + 1)
    setCounter((counter) => counter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>React State</h1>
      <h2>Counter value: {counter} </h2>
      <button type="button" onClick={addValue}>Add value</button> {" "}
      <button type="button" onClick={removeValue} >Remove value</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App

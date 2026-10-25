import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <div className="App">
      <h1>Country Explorer</h1>
      <p>Welcome to the Country Explorer app!</p>
    </div>
   </>
  )
}

export default App

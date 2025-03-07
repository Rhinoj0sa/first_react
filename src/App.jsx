import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Snippet from './components/Snippet'

function App() {
  const [count, setCount] = useState(10)

  return (
    <>
      <Snippet />
    </>
  )
}

export default App

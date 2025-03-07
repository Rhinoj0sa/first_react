import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Snippet from './components/Snippet'
import TempName from './components/TempName'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(10)

  return (
    <>
      <Header />
      <Snippet />
      <TempName />
    </>
  )
}

export default App

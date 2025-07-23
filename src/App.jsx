import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Loading} from "./components/Loading"
import "./index.css"

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <>
     {!isLoaded && <Loading onComplete={() => setIsLoaded(true)}/>}
    </>
  )
}

export default App

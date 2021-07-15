import './App.css'
import Button from './components/Button'
import Instructions from './components/Instructions'
import { useState } from 'react'

function App() {
  const [display, setDisplay] = useState(false)

  //Show instructions during gameplay
  const pauseGame = () => {
    setDisplay(true)
  }

  return (
    <>
      {/* Button for Menu component */}
      <Button
        display={display}
        setDisplay={setDisplay}
      />

      {display && <Instructions />}
    </>
  )
}

export default App

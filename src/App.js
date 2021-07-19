import './App.css'
import Button from './components/Button'
import Instructions from './components/Instructions'
import { useState } from 'react'
import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`

body {background: linear-gradient(116.61deg, #7F7FD5 4.28%, #8399E0 43.97%, #85A1E4 47.94%, #85A1E4 59.51%, #86A8E7 68.14%, #91EAE4 97.04%)}`;


function App() {
  const [display, setDisplay] = useState(false)



  //Show instructions during gameplay
  const pauseGame = () => {
    setDisplay(false)
  }



  return (
    <>
      {/* Button for Menu component */}
      <Button
        display={display}
        setDisplay={setDisplay}
      />
      <GlobalStyle />
      {display && <Instructions pauseGame={pauseGame} />}




    </>
  )
}

export default App

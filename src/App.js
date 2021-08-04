// import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import Menu from './components/Menu'
import { useState, useEffect } from 'react'
import RenderTime from './components/QuestionTimer'
import ProgressBar from './components/ProgressBar'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

body {background: linear-gradient(116.61deg, #7F7FD5 4.28%, #8399E0 43.97%, #85A1E4 47.94%, #85A1E4 59.51%, #86A8E7 68.14%, #91EAE4 97.04%)}`

const App = () => {
  // const [progress, setProgress] = useState(0)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setProgress((oldValue) => {
  //       const newValue = oldValue + 1

  //       if (newValue === 10) {
  //         clearInterval(interval)
  //       }
  //       return newValue
  //     })
  //   }, 1000)
  // }, [])
  return (
    <div>
      <div>
        <GlobalStyle />
        <Menu />
        {/* <CountdownCircleTimer
          isPlaying
          duration={10}
          size={60}
          strokeWidth={8}
          colors={[
            ['#00FF00', 0.25],
            ['#FFFF00', 0.25],
            ['#FFA500', 0.25],
            ['#FF0000'],
          ]}
          onComplete={() => alert('too late')}
        >
          {RenderTime}
        </CountdownCircleTimer>
        <ProgressBar value={progress} max={10} /> */}
      </div>
    </div>
  )
}

export default App

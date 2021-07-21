import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useState, useEffect } from 'react'
import RenderTime from './components/QuestionTimer'
import ProgressBar from './components/ProgressBar'

const App = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldValue) => {
        const newValue = oldValue + 1

        if (newValue === 10) {
          clearInterval(interval)
        }
        return newValue
      })
    }, 1000)
  }, [])
  return (
    <div>
      <div>
        <CountdownCircleTimer
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
          //onComplete={() => alert('too late')}
        >
          {RenderTime}
        </CountdownCircleTimer>
        <ProgressBar value={progress} max={10} />
      </div>
    </div>
  )
}

export default App

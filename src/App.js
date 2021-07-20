import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import RenderTime from './components/QuestionTimer'

const App = () => {
  return (
    <div>
      <h1>Question Timer</h1>

      <div>
        <CountdownCircleTimer
          isPlaying
          duration={20}
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
      </div>
    </div>
  )
}

export default App

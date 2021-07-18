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
          colors={[['#004777', 0.33], ['#F7B801', 0.33], ['#A30000']]}
          onComplete={() => [true, 1000]}
        >
          {RenderTime}
        </CountdownCircleTimer>
      </div>
    </div>
  )
}

export default App

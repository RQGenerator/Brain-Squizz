import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import RenderTime from './components/QuestionTimer'

const App = () => {
  return (
    <div>
      <h1>Timer</h1>
      <div>
        <CountdownCircleTimer
          isPlaying
          duration={10}
          colors={[['#004777', 0.33], ['#F7B801', 0.33], ['#A30000']]}
          onComplete={() => [true, 1000]}
        >
          {RenderTime}
        </CountdownCircleTimer>
      </div>
      <p>This is going to be text for the countdown timer</p>
    </div>
  )
}

export default App

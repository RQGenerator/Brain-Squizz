import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useState } from 'react'

import QuestionDiv from './Question'
import RenderTime from './QuestionTimer'
import { InfoCircleTwoTone } from '@ant-design/icons'

const Game = ({ completequiz, setShowScore }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const totalQuestion = completequiz.length
  const handleAnswer = (key) => {
    const next = currentQuestion + 1
    if (next < totalQuestion) {
      setCurrentQuestion(next)
    } else {
      setShowScore(true)
    }
  }
  return (
    <div>
      <div className="game">
        <div className="topBar">
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
          <button>
            <InfoCircleTwoTone />
          </button>
        </div>
        <QuestionDiv
          details={completequiz[currentQuestion]}
          handleAnswer={handleAnswer}
          progress={currentQuestion + 1}
          totalQuestion={totalQuestion}
        />
      </div>
    </div>
  )
}

export default Game

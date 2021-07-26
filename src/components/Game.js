import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useState } from 'react'

import QuestionDiv from './Question'
import RenderTime from './QuestionTimer'
import { InfoCircleTwoTone } from '@ant-design/icons'

const Game = ({ completequiz }) => {
  const [currentQuestion, setCurrentQuestion] = useState(completequiz[0])
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)
  console.log(currentQuestion)
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
        <QuestionDiv details={currentQuestion[0]} />
      </div>
    </div>
  )
}

export default Game

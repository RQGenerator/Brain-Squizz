import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useState } from 'react'
import { GameDiv, TopBar, BottomBar } from './GameStyle'
import QuestionDiv from './Question'
import RenderTime from './QuestionTimer'
import { FastForwardOutlined, PauseOutlined } from '@ant-design/icons'
import { Tooltip, Button } from 'antd'
import ProgressBar from './ProgressBar'

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
    <GameDiv>
      <TopBar>
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
        <Tooltip title="pause">
          <Button
            shape="circle"
            icon={<PauseOutlined />}
            onClick={() => alert('Pause game and display instructions')}
          />
        </Tooltip>
      </TopBar>
      <QuestionDiv
        details={completequiz[currentQuestion]}
        handleAnswer={handleAnswer}
        totalQuestion={totalQuestion}
      />
      <BottomBar>
        <ProgressBar value={currentQuestion + 1} max={totalQuestion} />
        <Button icon={<FastForwardOutlined />} onClick={handleAnswer}></Button>
      </BottomBar>
    </GameDiv>
  )
}

export default Game

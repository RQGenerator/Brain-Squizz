import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useState } from 'react'
import { GameDiv, TopBar, BottomBar } from './GameStyle'
import QuestionDiv from './Question'
import RenderTime from './QuestionTimer'
import { FastForwardOutlined, PauseOutlined } from '@ant-design/icons'
import { Tooltip, Button } from 'antd'
import ProgressBar from './ProgressBar'

const Game = ({ completequiz, setShowScore, currentScore, setResult }) => {
  const [gamePlay, setGameplay] = useState({ timer: 10, currentQuestion: 0 })
  const totalQuestion = completequiz.length
  const handleAnswer = (key, answer) => {
    const next = gamePlay.currentQuestion + 1
    const updatedResult = [...currentScore]
    updatedResult.push(answer)
    setResult(updatedResult)
    if (next < totalQuestion) {
      setGameplay({ timer: 10, currentQuestion: next })
    } else {
      setShowScore(true)
    }
  }
  console.log(gamePlay.timer)
  return (
    <GameDiv>
      <TopBar>
        <CountdownCircleTimer
          isPlaying
          duration={gamePlay.timer}
          size={40}
          strokeWidth={8}
          colors={[
            ['#00FF00', 0.25],
            ['#FFFF00', 0.25],
            ['#FFA500', 0.25],
            ['#FF0000'],
          ]}
          // onComplete={() => handleAnswer(-1)}
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
        details={completequiz[gamePlay.currentQuestion]}
        handleAnswer={handleAnswer}
        totalQuestion={totalQuestion}
      />
      <BottomBar>
        <ProgressBar value={gamePlay.currentQuestion + 1} max={totalQuestion} />
        <Button icon={<FastForwardOutlined />} onClick={handleAnswer}></Button>
      </BottomBar>
    </GameDiv>
  )
}

export default Game

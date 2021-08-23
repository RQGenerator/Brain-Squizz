import { useEffect, useState } from 'react'
import axios from 'axios'
import { data } from '../data'
import { FastForwardOutlined, PauseOutlined } from '@ant-design/icons'
import { Tooltip, Button } from 'antd'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import RenderTime from './QuestionTimer'
import { GameDiv, TopBar, BottomBar } from './GameStyle'
import ProgressBar from './ProgressBar'
import QuestionDiv from './Question'

const Game = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [loading, setLoading] = useState(true)
  const [quiz, setQuiz] = useState([])
  const [isPlaying, setIsPlaying] = useState(true)
  const [result, setResult] = useState([])

  useEffect(() => {
    axios
      .get('https://opentdb.com/api.php?amount=10')
      .then((response) => {
        const quizTemp = response.data.results.map((question, i) => {
          const answers = []
          answers.push({
            text: question.correct_answer,
            isCorrect: true,
          })
          question.incorrect_answers.forEach((wrongAnswer) =>
            answers.push({ text: wrongAnswer, isCorrect: false })
          )
          return { question, answers }
        })
        setQuiz(quizTemp)
        setLoading(false)
      })
      .catch((error) => {
        alert(error + '\r The game will be loaded with local data')
        const quizTemp = data.results.map((question, i) => {
          const answers = []
          answers.push({
            text: question.correct_answer,
            isCorrect: true,
          })
          question.incorrect_answers.forEach((wrongAnswer) =>
            answers.push({ text: wrongAnswer, isCorrect: false })
          )
          return { question, answers }
        })
        setQuiz(quizTemp)
        setLoading(false)
      })
  }, [])

  const totalQuestion = quiz.length
  const handleAnswer = (key, answer) => {
    const next = currentQuestion + 1
    // const updatedResult = [...result, false]
    // setResult(updatedResult)
    if (next < totalQuestion) {
      setCurrentQuestion(next)
    } else {
      setLoading(true)
    }
  }

  return (
    <>
      {loading ? (
        'Loading'
      ) : (
        <GameDiv>
          <TopBar>
            <CountdownCircleTimer
              key={currentQuestion}
              isPlaying={isPlaying}
              duration={15}
              size={50}
              strokeWidth={4}
              colors={[
                ['#018E42', 0.25],
                ['#F7D002', 0.25],
                ['#FFA500', 0.25],
                ['#BF1A2F'],
              ]}
              onComplete={() => handleAnswer(-1)}
            >
              {RenderTime}
            </CountdownCircleTimer>
            <Tooltip title="pause">
              <Button
                shape="circle"
                icon={<PauseOutlined />}
                onClick={() => setIsPlaying(!isPlaying)}
              />
            </Tooltip>
          </TopBar>
          <QuestionDiv
            details={quiz[currentQuestion]}
            handleAnswer={handleAnswer}
            totalQuestion={totalQuestion}
          />
          <BottomBar>
            <ProgressBar value={currentQuestion + 1} max={totalQuestion} />
            <Button
              icon={<FastForwardOutlined />}
              onClick={handleAnswer}
            ></Button>
          </BottomBar>
        </GameDiv>
      )}
    </>
  )
}

export default Game

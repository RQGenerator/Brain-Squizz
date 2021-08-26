import { useEffect, useState } from 'react'
import axios from 'axios'
import { data } from '../data'
import { FastForwardOutlined, PauseOutlined, QuestionOutlined } from '@ant-design/icons'
import { Tooltip, Button } from 'antd'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import RenderTime from './QuestionTimer'
import { GameDiv, TopBar, BottomBar } from './GameStyle'
import ProgressBar from './ProgressBar'
import QuestionDiv from './Question'
import Instructions from "./Instructions"


const Game = () => {
  const [displayButton, setDisplayButton] = useState(true)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [loading, setLoading] = useState(true)
  const [quiz, setQuiz] = useState([])
  const [isPlaying, setIsPlaying] = useState(true)
  const [skipCount, setSkipCount] = useState(0)
  const [result, setResult] = useState([])
  const skipInfo = [
    { class: 'bg-green-200 hover:bg-green-500', text: '3 Skips available' },
    { class: 'bg-yellow-200 hover:bg-yellow-500', text: '2 Skips available' },
    {
      class: 'bg-red-200 hover:bg-red-500',
      text: 'Only 1 more skip available',
    },
    {
      class: 'bg-gray-500 opacity-50 cursor-not-allowed',
      text: 'No more skip available',
    },
  ]
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
  const noDisplay = {
    display: "none"
  }
  const handleChangeButton = () => {
    setDisplayButton(!displayButton)
  }

  const handleChange = () => {
    setIsPlaying(!isPlaying)
  }
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
  const skip = () => {
    if (skipCount < 3) {
      setSkipCount(skipCount + 1)
      handleAnswer()
    }
  }
  return (
    <>

      {loading ? (
        'Loading'
      ) : (

        <GameDiv style={!isPlaying ? noDisplay : null} >
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
          { }
          <BottomBar>
            <ProgressBar value={currentQuestion + 1} max={totalQuestion} />
            <button
              onClick={skip}
              className={`has-tooltip flex items-center p-3 rounded-full shadow-xs cursor-pointer hover:text-gray-100 ${skipInfo[skipCount].class}`}
            >
              <span class="tooltip rounded shadow-lg p-1 bg-gray-100 text-black mt-14">
                {skipInfo[skipCount].text}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                />
              </svg>
            </button>
          </BottomBar>
        </GameDiv>
      )}

      {!isPlaying ? <Instructions isPlaying={true} setIsPlaying={setIsPlaying} /> : null}




    </>
  )
}

export default Game

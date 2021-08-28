import { data } from '../data'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import RenderTime from './QuestionTimer'
import ProgressBar from './ProgressBar'
import SkipButton from './SkipButton'
import PauseButton from './PauseButton'
import QuestionDiv from './Question'
import LoadingSpinner from './Loading'
import CountDownTimer from './CountDown'
import Instructions from './Instructions'
import CurrentScore from './CurrentScore'
import FinalScore from './FinalScore'
const he = require('he')
const timeLimit = 15
const bonuses = [1, 1.5, 1.75, 2]

const shuffle = (array) => {
  let currentIndex = array.length
  while (currentIndex !== 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    let tempValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = tempValue
  }
  return array
}

const score = (answer) => {
  let answerScore = {}
  let points = 0
  let bonus = 1
  if (answer.isCorrect) {
    points = 100
  }
  answer.time === 0
    ? ([points, bonus] = [-20, 1])
    : answer.time !== -1
    ? (bonus = bonuses[Math.ceil(answer.time / (timeLimit / 4)) - 1])
    : (bonus = 0)
  answerScore.points = points
  answerScore.bonus = bonus
  return answerScore
}

const totalScore = (results) => {
  let totalScore = results
    .map((answer) => score(answer).points * score(answer).bonus)
    .reduce((total, value) => total + value, 0)
  return totalScore
}

const Game = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [loading, setLoading] = useState(true)
  const [quiz, setQuiz] = useState([])
  const [countDown, setCountDown] = useState(true)
  const totalQuestion = quiz.length
  const [isPlaying, setIsPlaying] = useState(true)
  const [answered, setAnswered] = useState(false)
  const [skipCount, setSkipCount] = useState(0)
  const skipInfo = [
    {
      class: 'hover:text-gray-100 bg-green-200 hover:bg-green-500',
      text: '3 Skips available',
    },
    {
      class: 'hover:text-gray-100 bg-yellow-200 hover:bg-yellow-500',
      text: '2 Skips available',
    },
    {
      class: 'bg-red-200 hover:bg-red-500',
      text: 'Only 1 more skip available',
    },
    {
      class: 'bg-gray-200 text-gray-100 cursor-not-allowed',
      text: 'No more skip available',
    },
  ]
  const [answerTime, setAnswerTime] = useState(0)
  const [finished, setFinished] = useState(false)
  const [result, setResult] = useState([])

  useEffect(() => {
    axios
      .get('https://opentdb.com/api.php?amount=10&difficulty=easy')
      .then((response) => {
        const quizTemp = response.data.results.map((question, i) => {
          const answers = []
          answers.push({
            text: he.decode(question.correct_answer),
            isCorrect: true,
          })
          question.incorrect_answers.forEach((wrongAnswer) =>
            answers.push({ text: he.decode(wrongAnswer), isCorrect: false })
          )
          shuffle(answers)
          return { question: he.decode(question.question), answers }
        })
        setQuiz(quizTemp)
        setLoading(false)
      })
      .catch((error) => {
        alert(error + '\r The game will be loaded with local data')
        const quizTemp = data.results.map((question, i) => {
          const answers = []
          answers.push({
            text: he.decode(question.correct_answer),
            isCorrect: true,
          })
          question.incorrect_answers.forEach((wrongAnswer) =>
            answers.push({ text: he.decode(wrongAnswer), isCorrect: false })
          )
          shuffle(answers)
          return { question: he.decode(question.question), answers }
        })
        setQuiz(quizTemp)
        setLoading(false)
      })
  }, [])

  const handleAnswer = (where, answer) => {
    const next = currentQuestion + 1
    let time = where
    if (typeof where !== 'number') {
      time = answerTime
    }
    const updatedResult = [...result, { time: time, isCorrect: answer }]
    setResult(updatedResult)
    if (next < totalQuestion) {
      setCurrentQuestion(next)
    } else {
      setFinished(true)
    }
    // setAnswered(true)
    // setIsPlaying(false)
  }

  const proceed = () => {
    setAnswered(false)
    setIsPlaying(true)
  }

  const skip = () => {
    if (skipCount < 3) {
      setSkipCount(skipCount + 1)
      handleAnswer(-1, false)
    }
  }

  const reset = () => {
    setQuiz([])
    setAnswered(false)
    setIsPlaying(true)
    setLoading(true)
    setCurrentQuestion(0)
    setCountDown(true)
    setSkipCount(0)
    setFinished(false)
  }

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : countDown ? (
        <div className="timer-wrapper">
          <CountdownCircleTimer
            isPlaying
            duration={4}
            size={180}
            strokeWidth={8}
            onComplete={() => setCountDown(false)}
            colors={[
              ['#018E42', 0.6],
              ['#FFA500', 0.2],
              ['#ed1b72', 0.2],
            ]}
          >
            <CountDownTimer setCountDown={setCountDown} />
          </CountdownCircleTimer>
        </div>
      ) : finished === false && answered === false ? (
        <div
          className={`bg-white rounded-xl shadow-xl w-full h-5/6 ${
            !isPlaying ? 'hidden' : ''
          }`}
        >
          <div className="flex p-5 place-content-between">
            <CountdownCircleTimer
              key={currentQuestion}
              isPlaying={isPlaying}
              duration={timeLimit}
              size={50}
              strokeWidth={4}
              colors={[
                ['#018E42', 0.25],
                ['#F7D002', 0.25],
                ['#FFA500', 0.25],
                ['#BF1A2F'],
              ]}
              onComplete={() => handleAnswer(0, false)}
            >
              <RenderTime setAnswerTime={setAnswerTime} />
            </CountdownCircleTimer>
            <PauseButton isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
          </div>
          <QuestionDiv
            details={quiz[currentQuestion]}
            handleAnswer={handleAnswer}
            totalQuestion={totalQuestion}
          />
          <div className="flex p-5">
            <div className="flex-grow pt-5 pr-5">
              <ProgressBar
                className="flex"
                value={currentQuestion + 1}
                max={totalQuestion}
              />
            </div>
            <div className="flex-grow-0">
              <SkipButton
                skip={skip}
                skipInfo={skipInfo}
                skipCount={skipCount}
              />
            </div>
          </div>
        </div>
      ) : answered ? (
        <CurrentScore
          score={score}
          totalScore={totalScore}
          result={result}
          proceed={proceed}
        />
      ) : finished ? (
        <FinalScore
          score={score}
          totalScore={totalScore}
          result={result}
          reset={reset}
        />
      ) : !isPlaying && answered === false ? (
        <Instructions isPlaying={true} setIsPlaying={setIsPlaying} />
      ) : (
        "Something' wrong..."
      )}
    </>
  )
}

export default Game

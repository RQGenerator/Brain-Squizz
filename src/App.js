import Game from './components/Game'
import { useState } from 'react'
import { Container } from './AppStyle'
import { PlayCircleOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import axios from 'axios'
import { data } from './data.js'

const App = () => {
  const [loading, setLoading] = useState(false)
  const [quiz, setQuiz] = useState([])
  const [result, setResult] = useState([])
  const [showScore, setShowScore] = useState(false)

  const fetchQuiz = () => {
    axios
      .get('https://opentdb.com/api.php?amount=10')
      .then((response) => {
        setLoading(false)
        //redo answer struture
        // const quizTemp = [...response.data.results]
        // const answers = []
        // answers.push({
        //   text: response.data.results.correct_answer,
        //   isCorrect: true,
        // })
        // response.data.results.incorrect_answers.forEach((wrongAnswer) =>
        //   answers.push({ text: wrongAnswer, isCorrect: false })
        // )
        // quizTemp.push(answers)
        // setQuiz(quizTemp)
      })
      .catch((error) => {
        alert(error)
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
  }
  return (
    <Container>
      {quiz.length === 0 && (
        <Button
          type="primary"
          icon={<PlayCircleOutlined />}
          loading={loading}
          onClick={() => {
            setLoading(true)
            fetchQuiz()
          }}
        >
          Let's Play
        </Button>
      )}
      {!loading && quiz.length > 0 && !showScore && (
        <Game
          completequiz={quiz}
          setShowScore={setShowScore}
          currentScore={result}
          setResult={setResult}
        />
      )}
      {showScore && 'Score Title'}
    </Container>
  )
}

export default App

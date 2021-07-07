import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [quiz, setQuiz] = useState([])
  const [error, setError] = useState(false)
  useEffect(() => {
    axios
      .get(
        `https://trivia.willfry.co.uk/api/questions?categories=movies,music&limit=5`
      )
      .then((quiz) => {
        setQuiz(quiz.data)
        setError(false)
      })
      .catch((error) => {
        setQuiz([])
        setError({ message: 'Error fetching Quiz!' })
      })
  }, [])
  return (
    <div>
      Quiz data:
      {quiz ? quiz[0].question : 'not yet'}
    </div>
  )
}

export default App

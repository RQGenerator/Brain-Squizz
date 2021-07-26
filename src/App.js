import Game from './components/Game'
import { useState } from 'react'
import { Container } from './AppStyle'
import { PlayCircleOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import axios from 'axios'

const App = () => {
  const [loading, setLoading] = useState(false)
  const [quiz, setQuiz] = useState([])

  const fetchQuiz = () => {
    axios
      .get('https://opentdb.com/api.php?amount=10')
      .then((response) => {
        setLoading(false)
        setQuiz(response.data.results)
      })
      .catch((error) => alert(error))
  }

  return (
    <Container>
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
      {!loading && quiz.length > 0 && <Game completequiz={quiz} />}
    </Container>
  )
}

export default App

import { MainGame } from './QuestionStyle'
import './AnswersStyle'
import { CheckSquareTwoTone } from '@ant-design/icons'
import { Button } from 'antd'

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

const QuestionDiv = ({ details, handleAnswer }) => {
  let answers = [...details.answers]
  shuffle(answers)
  return (
    <MainGame>
      <p>{details.question.question}</p>
      {answers.map((answer, i) => (
        <Button
          icon={answer.isCorrect && <CheckSquareTwoTone />}
          key={i}
          onClick={() => {
            handleAnswer(i)
          }}
        >
          {answer.text}
        </Button>
      ))}
    </MainGame>
  )
}

export default QuestionDiv

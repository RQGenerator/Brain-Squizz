import { MainGame } from './QuestionStyle'
import './AnswersStyle'
import { CheckSquareTwoTone } from '@ant-design/icons'
import { Button } from 'antd'

const QuestionDiv = ({ details, handleAnswer }) => {
  return (
    <MainGame>
      <p>{details.question.question}</p>
      {details.answers.map((answer, i) => (
        <Button
          icon={answer.isCorrect && <CheckSquareTwoTone />}
          key={i}
          onClick={() => {
            handleAnswer('answered', answer.isCorrect)
          }}
        >
          {answer.text}
        </Button>
      ))}
    </MainGame>
  )
}

export default QuestionDiv

import Answers from './Answers'
import { MainGame } from './QuestionStyle'
import { FastForwardOutlined } from '@ant-design/icons'

const QuestionDiv = ({ details, handleAnswer, totalQuestion }) => {
  return (
    <MainGame>
      <p>{details.question}</p>
      <Answers
        correct={details.correct_answer}
        incorrect={details.incorrect_answers}
      />
    </MainGame>
  )
}

export default QuestionDiv

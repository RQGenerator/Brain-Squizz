import { MainGame } from './QuestionStyle'
import AnswersButtons from './AnswersButtons'

const QuestionDiv = ({ details, handleAnswer }) => {
  return (
    <MainGame>
      <p>{details.question}</p>
      <AnswersButtons answers={details.answers} handleAnswer={handleAnswer} />
    </MainGame>
  )
}

export default QuestionDiv

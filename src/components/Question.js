import ProgressBar from './ProgressBar'
import Answers from './Answers'
import { FastForwardOutlined } from '@ant-design/icons'

const QuestionDiv = ({ details, handleAnswer, progress, totalQuestion }) => {
  return (
    <div>
      <div className="mainGame">
        <p>{details.question}</p>
        <Answers
          correct={details.correct_answer}
          incorrect={details.incorrect_answers}
        />
      </div>
      <div className="bottomBar">
        <ProgressBar value={progress} max={totalQuestion} />
        <button onClick={handleAnswer}>
          <FastForwardOutlined />
        </button>
      </div>
    </div>
  )
}

export default QuestionDiv

import ProgressBar from './ProgressBar'
import Answers from './Answers'
import { FastForwardOutlined } from '@ant-design/icons'

const QuestionDiv = ({ details }) => {
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
        <ProgressBar value={1} max={10} />
        <button>
          <FastForwardOutlined />
        </button>
      </div>
    </div>
  )
}

export default QuestionDiv

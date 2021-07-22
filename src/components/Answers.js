import './AnswersStyle'
import { CheckSquareTwoTone } from '@ant-design/icons'
const Answers = ({ correct, incorrect }) => {
  return (
    <div>
      <button>
        <CheckSquareTwoTone /> {correct}
      </button>
      {incorrect.map((answer) => (
        <button>
          <CheckSquareTwoTone /> {answer}
        </button>
      ))}
    </div>
  )
}

export default Answers


import AnswersButtons from './AnswersButtons'


const QuestionDiv = ({ details, handleAnswer }) => {
  return (
    <div class="flex p-2 items-center flex-col bg-gray-200  shadow-2xl rounded-3xl w-11/12 h-5/6 md:w-9/12 md:h-5/6 bg-opacity-40 ">
      <div class="flex flex-col items-center h-full w-5/6 mt-2 p-4 bg-white rounded-3xl shadow overflow-y-auto  justify-center">
        <div >
          <p class="text-lg text-center">{details.question}</p>
        </div>
      </div>
      <div class="flex flex-col w-5/6 h-5/6 bg-white mt-4 my-4 rounded-3xl">
        <div class="flex w-full place-content-evenly flex-wrap overflow-none   ">
          < AnswersButtons answers={details.answers} handleAnswer={handleAnswer} />
        </div>
      </div>
    </div>
  )
}

export default QuestionDiv

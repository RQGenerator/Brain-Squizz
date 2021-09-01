import AnswersButtons from './AnswersButtons'

const QuestionDiv = ({ details, handleAnswer }) => {
  return (
    <div class="flex p-2 items-center flex-col w-full h-full ">
      <div class="flex flex-col items-center mb-4 h-full w-5/6 mt-2 p-4 bg-white rounded-3xl shadow overflow-y-auto  justify-center">
        <div>
          <p class="text-lg text-center">{details.question}</p>
        </div>
      </div>
      <div class="flex flex-col justify-center items-center w-5/6 h-5/6 bg-white rounded-3xl">
        <div class="flex w-full place-content-evenly flex-wrap overflow-none">
          <AnswersButtons
            answers={details.answers}
            handleAnswer={handleAnswer}
          />
        </div>
      </div>
    </div>
  )
}

export default QuestionDiv

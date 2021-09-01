const answersColours = [
  'border-indigo-400',
  'border-pink-400',
  'border-blue-400',
  'border-purple-400',
]

const AnswersButtons = ({ answers, handleAnswer }) => {
  return (
    <div class="flex place-content-center w-full h-5/6 p-5">
      <div class="flex w-full place-content-around flex-wrap overflow-none ">
        {answers.map((answer, i) => (
          <button
            key={i}
            onClick={() => {
              handleAnswer('answered', answer.isCorrect)
            }}
            className={`m-4 ${answersColours[i]} border-2 shadow w-2/5 p-4 rounded-lg text-sm md:text-md lg:text-lg transition delay-300 ease-in hover:bg-indigo-600 hover:text-white`}
          >
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  )
}

export default AnswersButtons

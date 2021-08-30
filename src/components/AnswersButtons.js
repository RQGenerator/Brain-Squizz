const answersColours = [
  'border-pink-500',
  'border-purple-500',
  'border-blue-500',
  'border-indigo-500',
]

const AnswersButtons = ({ answers, handleAnswer }) => {
  return (
    <div class="flex flex-col place-content-center w-full h-5/6 mt-4 p-4">
      <div class="flex w-full place-content-evenly flex-wrap overflow-none">
        {answers.map((answer, i) => (
          <button
            key={i}
            onClick={() => {
              handleAnswer('answered', answer.isCorrect)
            }}
            class={`m-4 ${answersColours[i]} border-2 shadow w-2/5 p-5 rounded-lg text-sm md:text-md lg:text-lg transition delay-300 ease-in hover:border-indigo-400 hover:bg-indigo-800 hover:text-white`}
          >
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  )
}

export default AnswersButtons

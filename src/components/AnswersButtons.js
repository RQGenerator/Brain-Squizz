const answersColours = [
  'bg-indigo-400',
  'bg-pink-400',
  'bg-pink-400',
  'bg-indigo-400',
]

const AnswersButtons = ({ answers, handleAnswer }) => {
  return (
    <div class="flex flex-col place-content-center w-full h-5/6 mt-4 p-10">
      <div class="flex w-full place-content-evenly flex-wrap overflow-none ">
        {answers.map((answer, i) => (
          <button
            key={i}
            onClick={() => {
              handleAnswer('answered', answer.isCorrect)
            }}
            className={`m-4 ${answersColours[i]} border-2 shadow w-2/5 p-5 rounded-lg text-sm md:text-md lg:text-lg transition delay-300 ease-in hover:bg-indigo-600 hover:text-white`}
          >
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  )
}

export default AnswersButtons

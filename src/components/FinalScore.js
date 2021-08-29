import { useHistory } from 'react-router-dom'

const FinalScore = ({ score, totalScore, result, reset }) => {
  const history = useHistory()
  return (
    <div className="flex items-center flex-col bg-white shadow-2xl rounded-3xl w-11/12 h-5/6 md:w-9/12 md:h-5/6">
      <div className="flex rounded-2xl bg-blue-200 bg-gradient-to-br from-light-blue-600 to-indigo-500 justify-center items-center h-20 w-5/6 -mt-10">
        <h1 className="text-white text-2xl">Final Score</h1>
      </div>
      <div className="h-4/6 w-5/6 mt-4 p-8 bg-white">
        <ul>
          {result.map((answer, i) => (
            <li key={i} id={i}>
              {i + 1} - {answer.time} - {answer.isCorrect ? 'true' : 'false'} -{' '}
              {score(answer).points} * {score(answer).bonus} ={' '}
              {score(answer).points * score(answer).bonus}
            </li>
          ))}
        </ul>
        Total: {totalScore(result)}
      </div>
      <div className="w-5/6 flex place-content-around">
        <button
          onClick={() => {
            reset()
          }}
          className="bg-indigo-400 hover:bg-indigo-600 text-gray-100 hover:text-white shadow-2xl w-2/6 px-8 py-4 rounded-lg text-xs md:text-lg lg:text-xl"
        >
          Play Again
        </button>
        <button
          onClick={() => {
            history.push('/')
          }}
          className="bg-pink-400 hover:bg-pink-600 text-gray-100 hover:text-white shadow-2xl w-2/6 px-8 py-4 rounded-lg text-xs md:text-lg"
        >
          Back to Menu
        </button>
      </div>
    </div>
  )
}

export default FinalScore

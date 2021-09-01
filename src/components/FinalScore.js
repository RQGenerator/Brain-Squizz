import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import SaveScore from './SaveScore'

const FinalScore = ({ score, totalScore, result, reset, timeLimit }) => {
  const [open, setOpen] = useState(false)
  const history = useHistory()
  let slowest = false
  let fastest = false
  const correctAnswers = result.filter(
    (answer) => answer.time !== -1 && answer.isCorrect
  )
  const time = [...correctAnswers]
  const wrongAnswers = result.filter(
    (answer) => answer.time !== -1 && answer.isCorrect === false
  )
  const skips = result.filter((answer) => answer.time === -1)
  time.sort((a, b) => b.time - a.time)
  if (time.length !== 0) {
    slowest = timeLimit - time[time.length - 1].time
    fastest = timeLimit - time[0].time
  }
  const penalities = result.filter((answer) => answer.time === 0)
  return (
    <>
      <div className="flex p-5 rounded-2xl bg-blue-800 bg-opacity-80 border-2 border-blue-600 justify-center items-center  lg:-mt-10 -mt-8 shadow-md">
        <h1 className="text-white text-5xl">Congratulations!</h1>
      </div>
      <div className="flex flex-col items-center h-full w-5/6 mt-2 p-4 bg-white rounded-3xl shadow overflow-y-auto">
        <div className="flex flex-col items-center rounded-full px-12 py-6 bg-green-50 shadow">
          <p className="text-sm">Your Score</p>
          <p className="text-5xl animate-pulse text-green-900">
            {totalScore(result)} pts
          </p>
        </div>
        <div className="flex flex-col w-5/6 h-full items-center rounded-3xl mt-4 pt-2 bg-gray-100 shadow overflow-y-auto">
          <p className="text-lg">Quiz Stats:</p>
          <div className="flex flex-col w-4/6 m-2">
            <ul className="list-disc">
              <li>
                Fastest correct answer vs slowest:
                <div className="flex">
                  {time.length !== 0 ? (
                    <>
                      <p className="text-lg text-green-800">{fastest}s</p>
                      <p>&nbsp;.&nbsp;</p>
                      <p className="text-lg text-red-800">{slowest}s</p>
                    </>
                  ) : (
                    <p className="text-lg ">No correct answer</p>
                  )}
                </div>
              </li>
              <li>
                Skipped bonus used:
                <p className="text-lg">{skips.length} skip bonus used</p>
              </li>
              <li>
                Penality:
                <p className="text-lg">
                  {penalities.length} penality suffered (total:{' '}
                  {totalScore(penalities)})
                </p>
              </li>
              <li>
                Correct answers vs Wrong answers:
                <div className="flex">
                  <p className="text-lg text-green-800">
                    {correctAnswers.length} correct answers
                  </p>
                  <p>&nbsp;.&nbsp;</p>
                  <p className="text-lg text-red-800">
                    {wrongAnswers.length} wrong answers
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-5/6 mt-8 mb-8 flex place-content-around">
        <button
          className="bg-green-600 text-green-100 border-2 border-green-800 shadow-2xl w-2/6 px-10 py-3 rounded-lg text-xs md:text-lg lg:text-xl transition delay-300 ease-in hover:border-green-400 hover:bg-green-800 hover:text-white"
          onClick={() => {
            reset()
          }}
        >
          Play Again
        </button>
        <button
          className="bg-purple-400 text-purple-100 border-2 border-purple-800 shadow-2xl px-10 py-3 rounded-full text-xs md:text-lg lg:text-xl transition delay-300 ease-in hover:border-purple-400 hover:bg-purple-800 hover:text-white"
          onClick={() => {
            setOpen(true)
          }}
        >
          Save
        </button>
        <button
          className="bg-pink-400 text-pink-100 border-2 border-pink-800 shadow-2xl w-2/6 px-10 py-3 rounded-lg text-xs md:text-lg lg:text-xl transition delay-300 ease-in hover:border-pink-400 hover:bg-pink-800 hover:text-white"
          onClick={() => {
            history.push('/')
          }}
        >
          Back to Menu
        </button>
      </div>
      <SaveScore save={open} setSave={setOpen} />
    </>
  )
}

export default FinalScore

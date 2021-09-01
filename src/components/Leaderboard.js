import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const difficulty = {
  Easy: 'bg-green-200 text-green-600',
  Medium: 'bg-yellow-200 text-yellow-600',
  Hard: 'bg-purple-200 text-purple-600',
}

const Leaderboard = () => {
  const history = useHistory()
  const [playerScore, setPlayerScore] = useState([])
  const [loading, setLoading] = useState(true)
  const callBackendAPI = async () => {
    const response = await fetch('/api')
    const body = await response.json()

    if (response.status !== 200) {
      console.log(response)
      throw Error(body.message)
    }
    return body
  }
  useEffect(() => {
    callBackendAPI()
      .then((res) => {
        setPlayerScore(res)
        setLoading(false)
      })
      .catch((err) => console.log(err))
  }, [])
  playerScore.sort((a, b) => b.score - a.score)
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="flex items-center flex-col bg-gray-200 bg-opacity-30 backdrop-filter backdrop-blur-lg shadow-2xl rounded-3xl w-11/12 h-5/6 md:w-9/12 md:h-5/6">
        <div className="flex p-5 rounded-2xl bg-blue-800 bg-opacity-80 border-2 border-blue-600 justify-center items-center  lg:-mt-10 -mt-8 shadow-md">
          <p className="text-6xl px-20 text-gray-200">Leaderboard</p>
        </div>
        <div className="w-5/6 bg-gray-100 border-b-2 border-indigo-600 text-gray-600 uppercase text-sm rounded-t-xl mt-5">
          <div className="flex justify-around ">
            <div className="py-3 px-2 text-left w-1/6">Ranking</div>
            <div className="py-3 px-2 text-center w-2/6">Name</div>
            <div className="py-3 px-2 text-center w-1/6">Points</div>
            <div className="py-3 px-2 text-center w-1/6">Questions</div>
            <div className="py-3 px-2 text-center w-1/6">Difficulty</div>
          </div>
        </div>
        <div className="overflow-auto w-5/6 h-full">
          {loading ? (
            <div className="flex items-center justify-center space-x-2 animate-bounce mt-20">
              <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
              <div className="w-8 h-8 bg-green-400 rounded-full"></div>
              <div className="w-8 h-8 bg-black rounded-full"></div>
            </div>
          ) : (
            <table className="min-w-max w-full table-auto rounded-xl">
              <tbody className="text-gray-600 text-sm font-light">
                {playerScore.map((score, i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-200 bg-gray-200 hover:bg-gray-100"
                  >
                    <td className="py-3 px-6"># {i + 1}</td>
                    <td className="py-3 px-6">
                      <div className="flex items-center justify-center">
                        <img
                          className="w-12 h-12 rounded-full"
                          src={
                            process.env.PUBLIC_URL + '/images/' + score.avatar
                          }
                          alt="avatar"
                        />
                      </div>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex items-center justify-center">
                        <span>{score.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <span>{score.score} pts</span>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex item-center justify-center">
                        <span>{score.questions}</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex item-center justify-center">
                        <span
                          className={`${
                            difficulty[score.difficulty]
                          } py-1 px-3 rounded-full text-xs`}
                        >
                          {score.difficulty}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        <div className="w-5/6 flex items-center justify-center m-3">
          <button
            className="bg-blue-400 text-blue-100 border-2 border-blue-800 shadow-2xl w-2/6 px-10 py-3 rounded-lg text-xs md:text-lg lg:text-xl transition delay-300 ease-in hover:border-blue-400 hover:bg-blue-800 hover:text-white"
            onClick={() => {
              history.push('/')
            }}
          >
            Back to Menu
          </button>
        </div>
      </div>
    </div>
  )
}

export default Leaderboard

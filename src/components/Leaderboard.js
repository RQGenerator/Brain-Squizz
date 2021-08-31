import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const callBackendAPI = async () => {
  const response = await fetch('/api')
  const body = await response.json()

  if (response.status !== 200) {
    throw Error(body.message)
  }
  return body
}

const Leaderboard = () => {
  const history = useHistory()

  const [playerScore, setPlayerScore] = useState([
    {
      name: 'Jamal',
      score: 20,
    },

    {
      name: 'Alan',
      score: 59,
    },

    {
      name: 'Darius',
      score: 80,
    },

    {
      name: 'Morin',
      score: 27,
    },
    {
      name: 'Maorbid',
      score: 72,
    },
  ])
  callBackendAPI()
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  playerScore.sort((a, b) => b.score - a.score)
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="flex items-center flex-col bg-gray-200 bg-opacity-30 backdrop-filter backdrop-blur-lg shadow-2xl rounded-3xl w-11/12 h-5/6 md:w-9/12 md:h-5/6">
        <div className="flex p-5 rounded-2xl bg-white justify-center items-center  lg:-mt-10 -mt-8 shadow-md">
          <img
            src={process.env.PUBLIC_URL + '/images/leaderBoard.png'}
            alt="leaderboard"
          />
        </div>
        <div class="w-5/6 bg-gray-100 border-b-2 border-indigo-600 text-gray-600 uppercase text-sm rounded-t-xl mt-5">
          <div class="flex justify-around ">
            <div class="py-3 px-6 text-left w-1/5"></div>
            <div class="py-3 px-6 text-left"></div>
            <div class="py-3 px-6 text-center">Name</div>
            <div class="py-3 px-6 text-center">Points</div>
            <div class="py-3 px-6 text-center">Difficulty</div>
          </div>
        </div>
        <div className="overflow-auto w-5/6">
          <table class="min-w-max w-full table-auto rounded-xl">
            <tbody class="text-gray-600 text-sm font-light">
              {playerScore.map((score, i) => (
                <tr class="border-b border-gray-200 bg-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6"># {i + 1}</td>
                  <td class="py-3 px-6">
                    <div class="flex items-center justify-center">
                      <img
                        class="w-12 h-12 rounded-full"
                        src="https://randomuser.me/api/portraits/men/1.jpg"
                        alt="avatar"
                      />
                    </div>
                  </td>
                  <td class="py-3 px-6 text-center">
                    <div class="flex items-center justify-center">
                      <span>{score.name}</span>
                    </div>
                  </td>
                  <td class="py-3 px-6 text-center">
                    <span>{score.score} pts</span>
                  </td>
                  <td class="py-3 px-6 text-center">
                    <div class="flex item-center justify-center">
                      <span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                        Active
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div class="w-5/6 flex items-center justify-center m-3">
          <button
            className="bg-pink-400 text-pink-100 border-2 border-pink-800 shadow-2xl w-2/6 px-10 py-3 rounded-lg text-xs md:text-lg lg:text-xl transition delay-300 ease-in hover:border-pink-400 hover:bg-pink-800 hover:text-white"
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

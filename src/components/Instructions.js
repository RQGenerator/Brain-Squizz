import { useHistory } from 'react-router-dom'
import PlayGameButton from './PlayGameButton'

const Instructions = ({ isPlaying, setIsPlaying }) => {
  const history = useHistory()
  return (
    <div className="flex justify-center items-center w-screen h-screen absolute">
      <div className="flex items-center flex-col bg-gray-200 bg-opacity-30 backdrop-filter backdrop-blur-lg shadow-2xl rounded-3xl w-11/12 h-5/6 md:w-9/12 md:h-5/6">
        <div className="flex p-5 rounded-2xl bg-indigo-800 bg-opacity-80 border-2 border-indigo-600 justify-center items-center lg:-mt-10 -mt-8 shadow-md">
          <p className="text-6xl px-20 text-gray-200">
            {!isPlaying ? 'Instructions' : 'Game Paused'}
          </p>
        </div>
        <div className="flex flex-col w-5/6 h-full m-2 items-center overflow-auto">
          <div
            className={`flex justify-center items-center border-b-4 border-indigo-800 w-5/6 text-xl ${
              !isPlaying ? 'text-white' : 'text-indigo-800'
            } p-2`}
          >
            How to Play
          </div>
          <div className="flex flex-col text-md items-center justify-between mt-5">
            <ol className="list-decimal">
              <li className="list-inside p-2">
                For each correct answer you get 100 points;
              </li>
              <li className="list-inside p-2">
                However, if you let the timer run out, you lose 20 points;
              </li>
              <li className="list-inside p-2">
                You have 15 seconds per question to demonstrate your genius
                skills;
              </li>
              <li className="list-inside p-2">
                If you are quick, you get a bonus:
                <ul className="list-disc">
                  <li className="list-inside p-2">
                    In the first 3,75 sec, you earn a 2x bonus points;
                  </li>
                  <li className="list-inside p-2">
                    In the first 7,50 sec, you earn a 1,75x bonus points;
                  </li>
                  <li className="list-inside p-2">
                    In the first 11,25 sec, you earn a 1,50x bonus points;
                  </li>
                </ul>
              </li>
              <li className="list-inside p-2">
                You have 3 bonus skips available, this won’t punish your score
                but choose wisely when to use them.
              </li>
            </ol>
            <p
              className={`text-lg ${
                !isPlaying ? 'text-white' : 'text-indigo-800'
              } p-3`}
            >
              Good luck and may your brain be in your favor!
            </p>
          </div>
        </div>
        <div className="w-5/6 flex items-center justify-around m-3">
          {!isPlaying ? (
            <PlayGameButton />
          ) : (
            <button
              className="bg-green-400 text-green-100 border-2 border-green-800 shadow-2xl w-2/6 px-10 py-3 rounded-lg text-xs md:text-lg lg:text-xl transition delay-300 ease-in hover:border-green-400 hover:bg-green-800 hover:text-white"
              onClick={() => setIsPlaying(true)}
            >
              Back to Game
            </button>
          )}
          <button
            className="bg-indigo-400 text-indigo-100 border-2 border-indigo-800 shadow-2xl w-2/6 px-10 py-3 rounded-lg text-xs md:text-lg lg:text-xl transition delay-300 ease-in hover:border-indigo-400 hover:bg-indigo-800 hover:text-white"
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

export default Instructions

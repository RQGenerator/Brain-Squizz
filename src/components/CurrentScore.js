import { useEffect, useState } from 'react'
import axios from 'axios'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const CurrentScore = ({ score, totalScore, result, proceed }) => {
  let searchTerm = 'looking'
  const randomNum = Math.floor(Math.random() * 4995)
  const [gifURL, setGifURL] = useState(
    process.env.PUBLIC_URL + '/images/default_gif.gif'
  )
  const lastAnswer = result.length - 1
  result[lastAnswer].isCorrect
    ? (searchTerm = 'success')
    : result[lastAnswer].time === -1
    ? (searchTerm = 'relieved')
    : (searchTerm = 'failed')

  const apiURL =
    'https://api.giphy.com/v1/gifs/search?api_key=5RC9BRH88oW9wljD8azTzWG6mamn5x32&q=' +
    searchTerm +
    '&limit=1&offset=' +
    randomNum +
    '&rating=g&lang=en'
  useEffect(() => {
    axios
      .get(apiURL)
      .then((response) => {
        setGifURL(response.data.data[0].images.original.url)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [apiURL])

  //calcular o score da ultima resposta
  const answerPoints = score(result[lastAnswer])
  //calcular o score total
  const totalPoints = totalScore(result)

  return (
    <div className="flex items-center flex-col w-full h-full">
      <div className="overflow-auto w-full h-full flex flex-col items-center">
        <div className="flex flex-col items-center rounded-full w-2/6 px-12 py-3 bg-green-50 shadow mt-4">
          <p className="text-sm">Score: </p>
          <p className="text-5xl animate-pulse text-green-900">
            {answerPoints.points * answerPoints.bonus}
          </p>
        </div>
        <div className="flex flex-col justify-around items-center">
          <img className="rounded-lg  mt-5 w-64" src={gifURL} alt="gif" />
          <p className="text-sm p-2">Total Score:</p>
          <p className="text-lg p-2">{totalPoints}</p>
        </div>
      </div>
      <div className="w-5/6 flex mb-2 items-center justify-center">
        <button
          className="flex items-center justify-between bg-green-600 text-green-100 border-2 border-green-800 shadow-2xl px-8 py-4 rounded-lg text-xs md:text-lg lg:text-xs transition delay-300 ease-in hover:border-green-400 hover:bg-green-800 hover:text-white"
          onClick={() => {
            proceed()
          }}
        >
          <CountdownCircleTimer
            isPlaying
            duration={5}
            size={20}
            strokeWidth={1}
            onComplete={() => {
              proceed()
            }}
            colors={[['#FFFFFF', 0.6]]}
          >
            {({ remainingTime }) => remainingTime}
          </CountdownCircleTimer>
          <p className="px-2">Continue</p>
        </button>
      </div>
    </div>
  )
}

export default CurrentScore

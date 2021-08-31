import { useEffect, useState } from 'react'
import axios from 'axios'
import Styled from 'styled-components'

const Gif = Styled.img`
width: 500px;
height: 400px;
padding: 50px 0px;
`

const BoxButton = Styled.div`
display: flex;
justify-content: flex-end;
`

const CurrentScore = ({ score, totalScore, result, proceed }) => {
  let searchTerm = 'looking'
  const [gifURL, setGifURL] = useState(
    process.env.PUBLIC_URL + '/images/default_gif.gif'
  )
  const lastAnswer = result.length - 1
  result[lastAnswer].isCorrect
    ? (searchTerm = 'success')
    : result[lastAnswer].time === -1
    ? (searchTerm = 'relieved')
    : result[lastAnswer].time === 0
    ? (searchTerm = 'snail')
    : (searchTerm = 'failed')
  //obter gif especifico consoante a resposta
  const apiURL =
    'https://api.giphy.com/v1/gifs/search?api_key=5RC9BRH88oW9wljD8azTzWG6mamn5x32&q=' +
    searchTerm +
    '&limit=1&offset=' +
    lastAnswer +
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
    <div className="flex items-center flex-col bg-white shadow-2xl rounded-3xl bg-opacity-30 w-11/12 h-5/6 md:w-9/12 md:h-5/6">
      <div className="flex flex-col items-center rounded-full px-12 py-6 bg-green-50 shadow mt-8">
        <p className="text-sm">Your Score: </p>
        <p className="text-5xl animate-pulse text-green-900">{totalPoints}</p>
      </div>
      <Gif src={gifURL} alt="gif" />
      <p style={{ display: 'none' }}>
        {answerPoints.points} * {answerPoints.bonus}
      </p>
      <BoxButton>
        <button
          className="bg-indigo-600 text-indigo-100 border-2 border-indigo-800 shadow-2xl   px-8 py-4 rounded-lg text-xs md:text-lg lg:text-xs transition delay-300 ease-in hover:border-indigo-400 hover:bg-indigo-800 hover:text-white"
          onClick={() => {
            proceed()
          }}
        >
          Continue
        </button>
      </BoxButton>
    </div>
  )
}

export default CurrentScore

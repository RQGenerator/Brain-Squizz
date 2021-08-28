import { useEffect, useState } from "react";
import axios from 'axios';

const CurrentScore = ({ score, totalScore, result, proceed }) => {
    console.log(result)
    let searchTerm = 'looking'
    const [gifURL, setGifURL] = useState(process.env.PUBLIC_URL + '/images/default_gif.gif')
    const lastAnswer = result.length - 1
    result[lastAnswer].isCorrect ?
        searchTerm = 'success' : result[lastAnswer].time === -1 ?
            searchTerm = 'relieved' : result[lastAnswer].time === 0 ?
                searchTerm = 'snail' : searchTerm = 'failed'
    //obter gif especifico consoante a resposta
    const apiURL = 'https://api.giphy.com/v1/gifs/search?api_key=5RC9BRH88oW9wljD8azTzWG6mamn5x32&q=' + searchTerm + '&limit=1&offset=' + lastAnswer + '&rating=g&lang=en'
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
        <div>
            <img src={gifURL} alt="gif" />
            <p>{answerPoints.points} * {answerPoints.bonus}</p>
            <p>{totalPoints}</p>
            <button onClick={() => { proceed() }} >continue</button>
        </div>
    )
}

export default CurrentScore;
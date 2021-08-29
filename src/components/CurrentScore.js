import { useEffect, useState } from "react";
import axios from 'axios';
import { Button2 } from './styles'
import Styled from 'styled-components'

const Container = Styled.div`
  background-color: rgba(0, 0, 0, 0.25);
  margin-left: 30px;
  margin-right: 30px;
  border-radius: 20px;
  padding: 15px 50px;
`
const Title = Styled.h1`
  text-align: center;
  margin-top: 35px;
  background: #d8d9e8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 44px;
  padding: 20px 0px;
  justify-content: center;
  display: flex;
  font-size: 30px;
`

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
        <Container>
            <Title>Your Score: {totalPoints}</Title>
            <Gif src={gifURL} alt="gif" />
            <p style={{ display: "none" }}>{answerPoints.points} * {answerPoints.bonus}</p>
            <BoxButton>
                <Button2 onClick={() => { proceed() }} >Continue</Button2>
            </BoxButton>
        </Container>
    )
}

export default CurrentScore;
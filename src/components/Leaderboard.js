import Styled from 'styled-components'

const Line = Styled.tr`
display: flex;
justify-content: space-between;
font-size: 25px;
border-bottom: 1px solid #ddd;
@media (max-width: 450px) {
    
    font-size: 15px;
}

`
const Container = Styled.fieldset`
width: 100%;
display: flex;
flex-direction: column;
border: 2px solid #ddd;
border-radius: 10px;
padding: 20px 70px 50px;
background: rgba(0, 0, 0, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
@media (max-width: 450px) {
    font-size: 15px;
    padding: 10px 30px 40px;
}

`

const Content = Styled.td`
padding: 20px




`

const Title1 = Styled.th`
padding: 20px;
color: ghostwhite;
`
const Title2 = Styled.th`
padding: 20px;
color: ghostwhite;
`
const Title3 = Styled.th`
padding: 20px;
color: ghostwhite;
`

const TitleContainer = Styled.tr`
display: flex;
justify-content: space-between;
font-size: xx-large;
@media (max-width: 450px) {
    
    font-size: 15px;
}
`

const TitleLegend = Styled.legend`
text-align: center;
border: 2px solid #ddd;
border-radius: 10px;
background-color: white;
`

const ImageLeaderBoard = Styled.img`
width: 50%;
`
const Leaderboard = () => {
  const playerScore = [
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
  ]
  playerScore.sort((a, b) => b.score - a.score)
  return (
    <div>
      <Container>
        <TitleLegend>
          <ImageLeaderBoard
            src={process.env.PUBLIC_URL + '/images/logo.png'}
            alt="leaderboard"
          />
        </TitleLegend>
        <TitleContainer>
          <Title1>Rank</Title1>
          <Title2>Name</Title2>
          <Title3>Score</Title3>
        </TitleContainer>
        {playerScore.map((score, i) => (
          <Line>
            <Content>#{i + 1}</Content>
            <Content>{score.name}</Content>
            <Content>{score.score}</Content>
          </Line>
        ))}
      </Container>
    </div>
  )
}

export default Leaderboard

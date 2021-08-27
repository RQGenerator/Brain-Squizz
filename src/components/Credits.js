import React from 'react'
import Styled from 'styled-components'
import developedBy from '../components/images/DevelopedBy.001.png'
import linkedinLogo from '../components/images/LI-Logo.png'
import githubLogo from '../components/images/GitHub-Mark-32px.png'
import { Link } from 'react-router-dom'
import VectorBack from '../components/images/VectorBack.png'

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

const BoxTitle = Styled.legend`
display: flex;
justify-content: center;
text-align: center;
border: 2px solid #ddd;
border-radius: 10px;
background-color: white;
`

const ImageLeaderBoard = Styled.img`
width: 40%;
`
const Box1 = Styled.div`
display: flex;
flex-direction: column;
    align-items: center;
padding: 20px 0px;
`

const Box2 = Styled.div`
display: flex;
justify-content: center;
padding: 30px 0px 0px;
`

const Linkedin = Styled.img`
    width: 60px;
    filter: contrast(4);
    text-align: center;
    padding: 10px 0px 0px ;

`

const GitHubLogo = Styled.img`
padding: 0px 0px 0px 30px;
width: 60px;
`

const SubBox2 = Styled.div`
display: flex;
justify-content: center;
padding: 15px 0px;
`
const SubBox1 = Styled.div`

padding: 30px 0px;
`

const ButtonBackHome = Styled.button`
background: rgba(0, 0, 0, 0.25);
border-radius: 10px;
padding: 10px 20xpx;
`

const ButtonImage = Styled.img`
width: 16px;
`

const Credits = () => {
  return (
    <div>
      <Container>
        <BoxTitle>
          <ImageLeaderBoard src={developedBy} alt="leaderboard" />
        </BoxTitle>
        <Box1>
          <SubBox1>
            <h2>Guilherme Rodrigues</h2>
            <SubBox2>
              <a
                href="https://ie.linkedin.com/in/guilherme-rodrigues-029344162"
                rel="noreferrer"
              >
                {' '}
                <Linkedin src={linkedinLogo} alt="linkedinLogo" />{' '}
              </a>
              <a href="https://github.com/Guilhaxr" rel="noreferrer">
                {' '}
                <GitHubLogo src={githubLogo} alt="githubLogo" />{' '}
              </a>
            </SubBox2>
          </SubBox1>
          <SubBox1>
            <h2>Victor Isidoro</h2>
            <SubBox2>
              <a
                href="https://www.linkedin.com/in/victorisidoro/"
                rel="noreferrer"
              >
                {' '}
                <Linkedin src={linkedinLogo} alt="linkedinLogo" />{' '}
              </a>
              <a href="https://github.com/vtr84" rel="noreferrer">
                {' '}
                <GitHubLogo src={githubLogo} alt="githubLogo" />{' '}
              </a>
            </SubBox2>
          </SubBox1>
        </Box1>
        <Box2>
          <p>Web Developer Students from Wild Code School </p>
        </Box2>
        <div>
          <ButtonBackHome>
            <Link to="/">
              {' '}
              <ButtonImage src={VectorBack} alt="VectorBack" />
            </Link>
          </ButtonBackHome>
        </div>
      </Container>
    </div>
  )
}

export default Credits

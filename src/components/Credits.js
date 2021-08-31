import React from 'react'
import Styled from 'styled-components'
import { Link } from 'react-router-dom'



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
background: #00ffff;
  border-radius: 14px;
  padding: 4px 30px;
 
`

const ButtonImage = Styled.img`
width: 16px;
`

const Credits = () => {
  return (
    <div>
      <Container>
        <BoxTitle>
          <ImageLeaderBoard
            src={process.env.PUBLIC_URL + '/images/developed_title.png'}
            alt="Developed By Title"
          />
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
                <Linkedin
                  src={process.env.PUBLIC_URL + '/images/linkedin_logo.png'}
                  alt="Linkedin Logo"
                />{' '}
              </a>
              <a href="https://github.com/Guilhaxr" rel="noreferrer">
                {' '}
                <GitHubLogo
                  src={process.env.PUBLIC_URL + '/images/github_logo.png'}
                  alt="GitHub logo"
                />{' '}
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
                <Linkedin
                  src={process.env.PUBLIC_URL + '/images/linkedin_logo.png'}
                  alt="Linkedin Logo"
                />{' '}
              </a>
              <a href="https://github.com/vtr84" rel="noreferrer">
                {' '}
                <GitHubLogo
                  src={process.env.PUBLIC_URL + '/images/github_logo.png'}
                  alt="GitHub logo"
                />{' '}
              </a>
            </SubBox2>
          </SubBox1>
        </Box1>
        <Box2>
          <p>Web Developer Students from Wild Code School </p>
        </Box2>
        <div>
          <button className="bg-indigo-600 text-indigo-100 border-2 border-indigo-800 shadow-2xl   px-8 py-4 rounded-lg text-xs md:text-lg lg:text-xs transition delay-300 ease-in hover:border-indigo-400 hover:bg-indigo-800 hover:text-white">
            <Link to="/">
              {' '}
              <ButtonImage
                src={process.env.PUBLIC_URL + '/images/button_back.png'}
                alt="Button back"
              />
            </Link>
          </button>
        </div>
      </Container>
    </div>
  )
}

export default Credits

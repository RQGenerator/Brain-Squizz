import {
  Title,
  Container,
  Box,
  SubTitle,
  Bar,
  Text,
  Left,
  Right,
  TextQuiz,
  BoxAnswer,
  BoxAnswer2,
  Answer1,
  Answer2,
  Answer3,
  Answer4,
  LogoImg,
  LogoContainer,
  BoxTitle,
  Button2,
  ButtonReady,
  ButtonExit,
} from './styles'

import { Link } from 'react-router-dom'

const Instructions = ({
  isPlaying,
  setIsPlaying,
  handleChange,
  handleChangeButton,
  handleChangeButtonBack,
}) => {
  return (
    <Container>
      <BoxTitle>
        <Title>
          {!isPlaying
            ? "Let's play! But first, here's the Instructions:"
            : 'Game Paused'}
        </Title>
      </BoxTitle>
      <Box>
        <Left>
          <LogoContainer>
            <LogoImg
              src={process.env.PUBLIC_URL + '/images/app_name.png'}
              alt="App Name"
            />
          </LogoContainer>
          <TextQuiz>
            Which of them is the correct answer ?
          </TextQuiz>
          <BoxAnswer>
            <Answer1>Answer number 1</Answer1>
            <Answer2>Answer number 2</Answer2>
          </BoxAnswer>
          <BoxAnswer2>
            <Answer3>Answer number 3</Answer3>
            <Answer4>Answer number 4</Answer4>
          </BoxAnswer2>
        </Left>
        <Right>
          <SubTitle>How to Play?</SubTitle>
          <Bar></Bar>
          <Text>
            <b>1.</b>	For a correct answer you get 100 points.<br />
            <b>2.</b>	For an incorrect answer you lose 20 points.<br />
            <b>3.</b>	You have 15 seconds per question to demonstrate your genius skills.<br />
            <b>4.</b>	If you are quick, you get a bonus:<br />
            <b>a.</b>  In the first 3,75 sec, you earn a 2x bonus points;<br />
            <b>b.</b>	In the first 7,50 sec, you earn a 1,75x bonus points;<br />
            <b>c.</b>	In the first 11,25 sec, you earn a 1,50x bonus points;<br />
            <b>5.</b>	You can skip three questions per quiz. This won’t punish your score. Good luck and may your brain be in your favor! <br />
          </Text>

          {!isPlaying ? (
            <button className="bg-indigo-600 text-indigo-100 border-2 border-indigo-800 shadow-2xl w-1/4  px-8 py-4 rounded-lg text-xs md:text-lg lg:text-xs transition delay-300 ease-in hover:border-indigo-400 hover:bg-indigo-800 hover:text-white"  > <Link to="/game" >Play a Game </Link></button>
          ) : (
            <div className={'flex items-center'}>
              <button className="bg-indigo-600 text-indigo-100 border-2 border-indigo-800 shadow-2xl ml-3 px-8 py-4 rounded-lg text-xs md:text-lg lg:text-xs transition delay-300 ease-in hover:border-indigo-400 hover:bg-indigo-800 hover:text-white" onClick={() => setIsPlaying(true)}>
                Back to the Game
              </button>
              <br />
              <button className="bg-indigo-600 text-indigo-100 border-2 border-indigo-800 shadow-2xl ml-3 px-8 py-4 rounded-lg text-xs md:text-lg lg:text-xs transition delay-300 ease-in hover:border-indigo-400 hover:bg-indigo-800 hover:text-white"  ><Link to="/" >Exit this game</Link></button>
            </div>
          )}
        </Right>
      </Box>
    </Container>
  )
}

export default Instructions

import styled from 'styled-components'
import { Link } from 'react-router-dom'
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
} from './styles'
import logoName from './images/logoName.png'

const LinkGame = styled(Link)`
  color: black;
`

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
            <LogoImg src={logoName} alt="logo" />
          </LogoContainer>
          <TextQuiz>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </TextQuiz>
          <BoxAnswer>
            <Answer1>Lorem ipsum dolor sit amet</Answer1>
            <Answer2>Lorem ipsum dolor sit amet</Answer2>
          </BoxAnswer>
          <BoxAnswer2>
            <Answer3>Lorem ipsum dolor sit amet</Answer3>
            <Answer4>Lorem ipsum dolor sit amet</Answer4>
          </BoxAnswer2>
        </Left>
        <Right>
          <SubTitle>How to Play?</SubTitle>
          <Bar></Bar>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit ut aliquam, purus sit amet luctus
            venenatis
          </Text>

          {!isPlaying ? (
            <LinkGame to="/game">Play a Game</LinkGame>
          ) : (
            <div>
              <button
                className="flex items-center p-3 rounded-lg shadow-xs cursor-pointer bg-green-200 hover:bg-green-500 hover:text-gray-100 "
                onClick={() => setIsPlaying(true)}
              >
                Back to the Game
              </button>
              <br />
              <LinkGame to="/">Exit this game</LinkGame>
            </div>
          )}
        </Right>
      </Box>
    </Container>
  )
}

export default Instructions

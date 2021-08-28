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
            <ButtonReady to="/game">Play a Game</ButtonReady>
          ) : (
            <div className={'flex items-center'}>
              <Button2 onClick={() => setIsPlaying(true)}>
                Back to the Game
              </Button2>
              <br />
              <ButtonExit to="/">Exit this game</ButtonExit>
            </div>
          )}
        </Right>
      </Box>
    </Container>
  )
}

export default Instructions

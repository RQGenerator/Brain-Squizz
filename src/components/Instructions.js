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

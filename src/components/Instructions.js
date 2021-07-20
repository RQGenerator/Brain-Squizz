import styled from 'styled-components'
import ButtonStart from './ButtonStart'
import { Title, Container, Box, SubTitle, Bar, Text, Left, Right, TextQuiz, BoxAnswer, BoxAnswer2, Answer1, Answer2, Answer3, Answer4 } from './styles'





const Instructions = ({ pauseGame }) => {


    return (
        <body>
            <Container>
                <div>
                    <Title>
                        Instructions
                    </Title>
                </div>
                <Box>
                    <Left>
                        <img src="/src/images/logo1.png" alt="logo" />
                        <TextQuiz>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
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
                        <SubTitle>
                            How to Play?
                        </SubTitle>
                        <Bar></Bar>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</Text>

                        <ButtonStart pauseGame={pauseGame} />


                    </Right>
                </Box>
            </Container>
        </body>

    )
}

export default Instructions;

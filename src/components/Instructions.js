import styled from 'styled-components'
import ButtonStart from './ButtonStart'
import ButtonBackGame from './ButtonBackGame'
import { Title, Container, Box, SubTitle, Bar, Text, Left, Right, TextQuiz, BoxAnswer, BoxAnswer2, Answer1, Answer2, Answer3, Answer4, LogoImg, LogoContainer, BoxTitle } from './styles'
import logoName from "./images/logoName.png"
import { useState } from 'react'





const Instructions = ({ handleChange, handleChangeButton, handleChangeButtonBack }) => {



    return (

        <Container>
            <BoxTitle>
                <Title>
                    Let's play! But first, here's the Instructions:
                </Title>
            </BoxTitle>
            <Box>
                <Left>
                    <LogoContainer>
                        <LogoImg src={logoName} alt="logo" />
                    </LogoContainer>
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

                    <ButtonStart handleChangeButton={handleChangeButton} />
                    <ButtonBackGame handleChange={handleChange} handleChangeButtonBack={handleChangeButtonBack} />


                </Right>
            </Box>
        </Container>


    )
}

export default Instructions;

/* eslint-disable prettier/prettier */
import React from 'react'
import logo from './images/logooo.png'
import PlayGameButton from './PlayGameButton'
import FindAQuizz from './FindAQuizz'
import Credits from './Credits'
import styled from 'styled-components'

// margin: 50px 400px 0px;
const MenuContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;

  background-color: whitesmoke;
  border-radius: 44px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 0px 0px 0px;

  @media (max-width: 750px) {
    padding: 0px 50px 0px;
  }
`

const Logoo = styled.img`
  width: 50%;
  margin: 30px 0px 0px;
`
const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
`

const MenuButtonsContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Menu = () => {
  return (
    <Container>
      <MenuContainer>
        <LogoContainer>
          <Logoo src={logo} alt="logo" />
        </LogoContainer>
        <MenuButtonsContainer>
          <PlayGameButton />
          <FindAQuizz />
          <Credits />
        </MenuButtonsContainer>
      </MenuContainer>
    </Container>
  )
}

export default Menu

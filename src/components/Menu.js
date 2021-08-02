/* eslint-disable prettier/prettier */
import PlayGameButton from './PlayGameButton'
import FindAQuizz from './FindAQuizz'
import Credits from './Credits'
import styled from 'styled-components'

const MenuContainer = styled.div`

    justify-content: center;
    display: flex;
    flex-direction: column;
    margin : 50px 350px 0px;
    background-color: aqua;
   
   
`

const Menu = () => {
    return (
        <MenuContainer>
            <img src="/src/images/idea-5393862_640.png " alt="logo" />
            <PlayGameButton />
            <FindAQuizz />
            <Credits />
        </MenuContainer>
    )
}

export default Menu

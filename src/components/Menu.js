/* eslint-disable prettier/prettier */
import PlayGameButton from './PlayGameButton'
import FindAQuizz from './FindAQuizz'
import Credits from './Credits'
import styled from 'styled-components'

const MenuContainer = styled.div`

    justify-content: center;
    display: flex;
    flex-direction: column;
    margin: 50px 400px 0px;
    background: aqua;
    border-radius: 20px;
   
`



const Menu = () => {
    return (
        <MenuContainer>

            <PlayGameButton />
            <FindAQuizz />
            <Credits />
        </MenuContainer>
    )
}

export default Menu

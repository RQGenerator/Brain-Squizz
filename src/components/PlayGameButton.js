/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// padding: 4px 30px;
const PlayGame = styled.button`
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 30px;
background: #D032F0;
font-size: 20px;
margin: 30px 0px 15px;
width: 30%;

@media (max-width: 520px) {
    font-size: 15px;   

}

@media (max-width: 440px) {
    font-size: 10px;

}
`

const LinkGame = styled(Link)`
color: black;
`

const PlayGameButton = () => {
  return (
    <PlayGame>
      <LinkGame to="/instructions">Play a Game</LinkGame>
    </PlayGame>
  )
}

export default PlayGameButton

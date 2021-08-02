/* eslint-disable prettier/prettier */
import styled from 'styled-components'

const PlayGame = styled.button`
box - shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 30px;
padding: 10px;
background: #D032F0;
font-size: 20px;
margin: 30px 210px 15px;

`


const PlayGameButton = () => {
    return <PlayGame >Play a Game</PlayGame>
}

export default PlayGameButton

/* eslint-disable prettier/prettier */
import styled from 'styled-components'

const PlayGame = styled.button`
box - shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 20px;
margin: 40px 350px 10px;
padding: 10px;
`


const PlayGameButton = () => {
    return <PlayGame >Play a Game</PlayGame>
}

export default PlayGameButton

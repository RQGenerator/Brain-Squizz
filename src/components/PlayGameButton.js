/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import { Link } from 'react-router-dom'



const LinkGame = styled(Link)`
color: black;
`

const PlayGameButton = () => {
  return (
    <button class="bg-indigo-500 text-indigo-100 border-2 border-indigo-800 shadow-2xl w-2/5 my-3 px-8 py-4 rounded-lg text-xs md:text-lg lg:text-xl transition delay-300 ease-in hover:border-indigo-400 hover:bg-indigo-800 hover:text-white" >
      <LinkGame to="/game">Play a Game</LinkGame>
    </button>
  )
}

export default PlayGameButton

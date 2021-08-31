// Rename this component
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LdButton = styled.button`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  font-size: 20px;

  background: #745cf2;
  margin: 0px 0px 15px;
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

const LeaderboardButton = () => {
  return (
    <button class="bg-pink-500 text-pink-100 border-2 border-pink-800 shadow-2xl w-2/5 my-3 px-8 py-4 rounded-lg text-xs md:text-lg lg:text-xl transition delay-300 ease-in hover:border-pink-400 hover:bg-pink-800 hover:text-white">
      <LinkGame to="/leaderboard">Leaderboard</LinkGame>
    </button>
  )
}

export default LeaderboardButton

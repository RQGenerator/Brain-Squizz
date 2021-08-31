import styled from 'styled-components'
import { Link } from 'react-router-dom'

const PlayGame = styled.button`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  background: #d032f0;
  font-size: 20px;
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

const InstructionsButton = () => {
  return (
    <button class="bg-indigo-500 text-indigo-100 border-2 border-indigo-800 shadow-2xl w-2/5 my-3 px-8 py-4 rounded-lg text-xs md:text-lg lg:text-xl transition delay-300 ease-in hover:border-indigo-400 hover:bg-indigo-800 hover:text-white" >
      <LinkGame to="/instructions">Instructions</LinkGame>
    </button>
  )
}

export default InstructionsButton

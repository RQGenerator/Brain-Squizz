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
    <PlayGame>
      <LinkGame to="/instructions">Instructions</LinkGame>
    </PlayGame>
  )
}

export default InstructionsButton

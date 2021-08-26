import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useState } from 'react'

// padding: 4px 30px;
const PlayGame = styled.button`
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 30px;
background: #D032F0;
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

    const [displayButtonBack, setDisplayButtonBack] = useState(true)

    const handleChangeButtonBack = () => {
        setDisplayButtonBack(!displayButtonBack)
    }

    return (
        <PlayGame onClick={handleChangeButtonBack}>
            <LinkGame to="/instructions">Instructions</LinkGame>
        </PlayGame>

    )
}

export default InstructionsButton
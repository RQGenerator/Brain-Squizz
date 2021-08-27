import styled from 'styled-components'
import { Button2 } from './styles'
import Game from './Game'
import { Link } from 'react-router-dom'



const ButtonStart = ({ handleChangeButton }) => {
    const noDisplay = {
        display: "none"
    }


    return (
        <div>
            <Button2 style={handleChangeButton ? noDisplay : null}>
                <Link to="/game">Ready?</Link>
            </Button2>
        </div >
    )
}

export default ButtonStart;
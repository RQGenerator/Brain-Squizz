import styled from 'styled-components'
import { Button2 } from './styles'
import InstructionsButton from './InstructionsButton'





const ButtonBackGame = ({ handleChange, handleChangeButtonBack }) => {

    const noDisplay = {
        display: "none"
    }
    return (
        <div>
            <Button2 onClick={handleChange} >
                Back to the Game
            </Button2>
            {handleChangeButtonBack ? noDisplay : null}
        </div >
    )
}

export default ButtonBackGame;
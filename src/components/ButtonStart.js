import styled from 'styled-components'
import { Button2 } from './styles'



const ButtonStart = ({ pauseGame }) => {

    return (
        <div>
            <Button2
                onClick={pauseGame}>
                Start
            </Button2>
        </div>
    )
}

export default ButtonStart;
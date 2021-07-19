import styled from 'styled-components'


const Button2 = styled.button`
background: #00FFFF;
border-radius: 14px;
padding: 4px 30px;
`;


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
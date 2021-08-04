/* eslint-disable prettier/prettier */
import styled from 'styled-components'


const Creditss = styled.button`
box - shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 30px;
background: #498FF5;
font-size: 20px;
margin: 0px 0px 30px;
width: 30%;

@media (max-width: 520px) {
    font-size: 15px;   

}

@media (max-width: 440px) {
    font-size: 10px;

}
`

const Credits = () => {
    return (
        <Creditss >Credits</Creditss>

    )
}

export default Credits;
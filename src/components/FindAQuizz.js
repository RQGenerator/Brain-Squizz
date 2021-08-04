/* eslint-disable prettier/prettier */
import styled from 'styled-components'

const FindAquiz = styled.button`
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 30px;
font-size: 20px;

background: #745CF2;
margin: 0px 0px 15px;
width: 30%;

@media (max-width: 520px) {
    font-size: 15px;   
}

@media (max-width: 440px) {
    font-size: 10px;

}
`

const FindAQuizz = () => {
    return (
        <FindAquiz>Find a Quizz</FindAquiz>

    )
}

export default FindAQuizz;
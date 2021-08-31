/* eslint-disable prettier/prettier */
import Styled from 'styled-components'
import { Link } from 'react-router-dom'

const Creditss = Styled.button`
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 30px;
background: #498FF5;
font-size: 20px;
margin: 0px 0px 30px;
width: 30%;
a:link {
    color: green;}

@media (max-width: 520px) {
    font-size: 15px;   

}

@media (max-width: 440px) {
    font-size: 10px;

}
`
const LinkCredits = Styled(Link)`
color: black;
`

const CreditsButton = () => {
    return (
        <button class="bg-pink-500 text-pink-100 border-2 border-pink-800 shadow-2xl w-2/5 mb-7 mt-3 px-8 py-4 rounded-lg text-xs md:text-lg lg:text-xl transition delay-300 ease-in hover:border-pink-400 hover:bg-pink-800 hover:text-white">
            <LinkCredits to="/credits">Credits</LinkCredits>
        </button>

    )
}

export default CreditsButton;
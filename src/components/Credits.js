import React from 'react'
import Styled from "styled-components"
import DevelopedBy from "../components/images/DevelopedBy.001.png"


const Container = Styled.fieldset`

width: 100%;
display: flex;
flex-direction: column;
border: 2px solid #ddd;
border-radius: 10px;
padding: 20px 70px 50px;
background: rgba(0, 0, 0, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
@media (max-width: 450px) {
    font-size: 15px;
    padding: 10px 30px 40px;
}
`

const TitleLegend = Styled.legend`
text-align: center;
border: 2px solid #ddd;
border-radius: 10px;
background-color: white;
`

const ImageLeaderBoard = Styled.img`
width: 50%;
`

const Credits = () => {
    return (
        <div>
            <Container>
                <TitleLegend>
                    <ImageLeaderBoard src={"DevelopedBy"} alt="leaderboard" />
                </TitleLegend>
            </Container>
        </div>
    )
}

export default Credits;
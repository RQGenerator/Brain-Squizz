import styled from "styled-components";

export const Title = styled.h1`
text-align: center;
margin-top: 35px;
background: #D8D9E8;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 20px;
padding: 20px 0px;
justify-content: center;
display:flex;


`;


export const Container = styled.div`
background-color: rgba(0, 0, 0, 0.25);
margin-left: 30px;
margin-right: 30px;
border-radius: 20px;

`;

export const Box = styled.div`
display: flex;
justify-content: center;
align-items: center;
 @media (max-width: 950px) {
    flex-direction: column;


 }
`;



export const SubTitle = styled.h2`
font-size: 30px;
padding: 10px
`;

export const Bar = styled.div`
width: 50%;
height: 10px;
background: #00FFFF;
box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
`;


export const Text = styled.p`
font-size: 15px;
text-align: justify;
padding: 20px 40px;
width: 50%

`;


export const Left = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
background: #D8D9E8;

box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 44px;
padding: 0px 40px;
margin-left: 30px;

@media (max-width: 950px) {
    width: 70%;

}
`;

export const Right = styled.div`
font-size: 15px;
display: flex;
justify-content: center;
flex-direction: column;
padding: 5px;
align-items: center;
width: 50%;

@media (max-width: 950px) {
    width: fit-content;
}
`;

export const TextQuiz = styled.div`
padding: 30px 30px;
margin: 30px 0px;
border-radius: 20px
border: 1px solid #000000;
box-sizing: border-box;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
background: white;
`;

export const BoxAnswer = styled.div`
justify-content: space-around;
display: inline-flex;
align-content: center;
`;

export const BoxAnswer2 = styled.div`
justify-content: space-around;
display: inline-flex;
align-content: center;
`;



export const Answer1 = styled.div`
background-color: white;
border-right-width: 20px;
padding: 20px 20px;
margin-right: 30px;
margin-bottom: 20px;
border-radius: 20px;
background: #F759AB;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}`;


export const Answer2 = styled.div`
background-color: white;
border-right-width: 20px;
padding: 20px 20px;
margin-right: 30px;
margin-bottom: 20px;
border-radius: 20px;
background: #40A9FF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}`;

export const Answer3 = styled.div`
background-color: white;
border-right-width: 20px;
padding: 20px 20px;
margin-right: 30px;
margin-bottom: 20px;
border-radius: 20px;
background: #597EF7;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}`;

export const Answer4 = styled.div`
background-color: white;
border-right-width: 20px;
padding: 20px 20px;
margin-right: 30px;
margin-bottom: 20px;
border-radius: 20px;
background: #9254DE;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}`;


export const Button2 = styled.button`
background: #00FFFF;
border-radius: 14px;
padding: 4px 30px;
`;
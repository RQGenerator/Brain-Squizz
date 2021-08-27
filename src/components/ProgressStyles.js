import Styled from 'styled-components'

const Container = Styled.div`
    progress[value] {
        width: ${(props) => props.width};
        -webkit-appearance: none;
        appearance: none;
    }
    progress[value]::-webkit-progress-bar {
        height: 8px;
        border-radius: 20px;
        background-color: #eee;
    }
    progress[value]::-webkit-progress-value {
        border-radius: 20px;
        background-image:
	   -webkit-linear-gradient(left, #09b7bf,#90d36b);
    }
    span {
        color: #09b7bf;
        font-family: 'Roboto';
    }
    `
export default Container

import Styled from 'styled-components'

const Container = Styled.div`
    progress {
        margin-right: 10px;
    }
    
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
	  
	   -webkit-linear-gradient(top, 
	                           rgba(255, 255, 255, .25), 
	                           rgba(0, 0, 0, .25)),
	   -webkit-linear-gradient(left, #09c, #f44);
    }

    span {
        color: red;
    }
    `
export default Container

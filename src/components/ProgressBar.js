import PropTypes from 'prop-types'
import Container from './ProgressStyles'


const ProgressBar = ({value, max, color, width}) => {
    return (
        <Container color={color} width={width}>
            <progress value={value} max={max}   />
            <span>{(value)} of 10</span> 
        </Container>
    )
}

ProgressBar.propTypes = {
    value: PropTypes.number.isRequired,
    max: PropTypes.number,
    color: PropTypes.string,
    width: PropTypes.string,
}

ProgressBar.defaultProps = {
    max: 10,
    width: '80%',
    color: 'red',
    
}

export default ProgressBar
           


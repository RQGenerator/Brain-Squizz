import PropTypes from 'prop-types'
import Styled from 'styled-components'

const Container = Styled.div`
    progress[value] {
        width: 100%;
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

const ProgressBar = ({ value, max }) => {
  return (
    <Container>
      <progress value={value} max={max} />
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
  width: '100%',
  color: 'red',
}

export default ProgressBar

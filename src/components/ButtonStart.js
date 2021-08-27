import { Button2 } from './styles'
import { Link } from 'react-router-dom'

const ButtonStart = () => {
  return (
    <div>
      <Button2>
        <Link to="/game">Ready?</Link>
      </Button2>
    </div>
  )
}

export default ButtonStart

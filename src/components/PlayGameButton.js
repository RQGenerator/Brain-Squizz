import { Link } from 'react-router-dom'

const PlayGameButton = () => {
  return (
    <Link
      className="mb-2 text-center bg-green-500 text-green-100 border-2 border-green-800 shadow-md w-2/5 px-10 py-3 rounded-lg text-xs md:text-lg lg:text-xl transition delay-300 ease-in hover:border-green-400 hover:bg-green-800 hover:text-white"
      to="/game"
    >
      Play a Game
    </Link>
  )
}

export default PlayGameButton

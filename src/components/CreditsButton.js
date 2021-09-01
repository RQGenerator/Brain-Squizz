import { Link } from 'react-router-dom'

const CreditsButton = () => {
  return (
    <Link
      className="mb-2 text-center bg-pink-500 text-pink-100 border-2 border-pink-800 shadow-md w-2/5 px-10 py-3 rounded-lg text-xs md:text-lg lg:text-xl transition delay-300 ease-in hover:border-pink-400 hover:bg-pink-800 hover:text-white"
      to="/credits"
    >
      Credits
    </Link>
  )
}

export default CreditsButton

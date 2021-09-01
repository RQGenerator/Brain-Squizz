import { Link } from 'react-router-dom'

const InstructionsButton = () => {
  return (
    <Link
      className="mb-2 text-center bg-indigo-500 text-indigo-100 border-2 border-indigo-800 shadow-md w-2/5 px-10 py-3 rounded-lg text-xs md:text-lg lg:text-xl transition delay-300 ease-in hover:border-indigo-400 hover:bg-indigo-800 hover:text-white"
      to="/instructions"
    >
      Instructions
    </Link>
  )
}

export default InstructionsButton

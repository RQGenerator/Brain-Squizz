import { Link } from 'react-router-dom'

const InstructionsButton = () => {
  return (
    <Link
      className="text-center bg-indigo-500 text-indigo-100 border-2 border-indigo-800 shadow-2xl w-2/5 px-8 py-4 rounded-lg text-xs md:text-lg lg:text-xl transition delay-300 ease-in hover:border-indigo-400 hover:bg-indigo-800 hover:text-white"
      to="/instructions"
    >
      Instructions
    </Link>
  )
}

export default InstructionsButton

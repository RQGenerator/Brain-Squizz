import { Link } from 'react-router-dom'

const LeaderboardButton = () => {
  return (
    <Link
      className="mb-2 text-center bg-blue-500 text-blue-100 border-2 border-blue-800 shadow-2xl w-2/5 px-10 py-3 rounded-lg text-xs md:text-lg lg:text-xl transition delay-300 ease-in hover:border-blue-400 hover:bg-blue-800 hover:text-white"
      to="/leaderboard"
    >
      Leaderboard
    </Link>
  )
}

export default LeaderboardButton

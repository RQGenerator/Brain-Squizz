import { Link } from 'react-router-dom'

const LeaderboardButton = () => {
  return (
    <Link
      className="text-center bg-pink-500 text-pink-100 border-2 border-pink-800 shadow-2xl w-2/5 px-8 py-4 rounded-lg text-xs md:text-lg lg:text-xl transition delay-300 ease-in hover:border-pink-400 hover:bg-pink-800 hover:text-white"
      to="/leaderboard"
    >
      Leaderboard
    </Link>
  )
}

export default LeaderboardButton

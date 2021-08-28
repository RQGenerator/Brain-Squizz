import './Splash.css'

const Splash = () => {
  return (
    <div id="container" className="h-screen w-screen flex place-content-center">
      <img
        id="brain"
        src={process.env.PUBLIC_URL + '/images/logo.png'}
        alt="leaderboard"
      />
    </div>
  )
}

export default Splash

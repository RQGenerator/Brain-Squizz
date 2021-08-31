import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Menu from './components/Menu'
import Game from './components/Game'
import Splash from './components/Splash'
import Credits from './components/Credits'
import Instructions from './components/Instructions'
import Leaderboard from './components/Leaderboard'

// const callBackendAPI = async () => {
//   const response = await fetch('/api')
//   const body = await response.json()

//   if (response.status !== 200) {
//     throw Error(body.message)
//   }
//   return body
// }

const App = () => {
  // callBackendAPI()
  //   .then((res) => console.log(res))
  //   .catch((err) => console.log(err))
  const [start, setStart] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setStart(true)
    }, 4000)
  }, [])

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {start ? <Menu /> : <Splash />}
        </Route>
        <Route path="/game">
          <Game />
        </Route>
        <Route path="/instructions">
          <Instructions isPlaying={false} />
        </Route>
        <Route path="/leaderboard">
          <Leaderboard isPlaying={false} />
        </Route>
        <Route path="/credits">
          <Credits />
        </Route>
      </Switch>
    </Router>
  )
}

export default App

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Menu from './components/Menu'
import Game from './components/Game'
import Splash from './components/Splash'
import Credits from './components/Credits'
import Instructions from './components/Instructions'

const App = () => {
  const [start, setStart] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setStart(true)
    }, 5000)
  }, [])

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {start ? <Menu /> : <Splash />}
        </Route>
        <Route path="/game" exact>
          <Game />
        </Route>
        <Route path="/instructions" exact>
          <Instructions isPlaying={false} />
        </Route>
        <Route path="/credits" exact>
          <Credits />
        </Route>
      </Switch>
    </Router>
  )
}

export default App

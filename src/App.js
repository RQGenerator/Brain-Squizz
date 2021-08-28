import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Menu from './components/Menu'
import Game from './components/Game'
import Splash from './components/Splash'
import Credits from './components/Credits'
import Instructions from './components/Instructions'
import axios from 'axios'


const App = () => {
  const [start, setStart] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setStart(true)
    }, 5000)
  }, [])

  const [gifs, setGifs] = useState([])

  useEffect(() => {
    axios
      .get('https://api.giphy.com/v1/gifs/search?api_key=5RC9BRH88oW9wljD8azTzWG6mamn5x32&q=success&limit=1&offset=0&rating=r&lang=en')
      .then((response) => {
        console.log(response.data)
        return response
      })
      .catch((error) => {
        console.log(error)
      })
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

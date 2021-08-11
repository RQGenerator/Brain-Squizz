import Menu from './components/Menu'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

body {background: linear-gradient(116.61deg, #7F7FD5 4.28%, #8399E0 43.97%, #85A1E4 47.94%, #85A1E4 59.51%, #86A8E7 68.14%, #91EAE4 97.04%)}`

const App = () => {
  return (
    <div>
      <div>
        <GlobalStyle />
        <Menu />
      </div>
    </div>
  )
}

export default App

import { useState } from 'react'

const App = () => {
  const [timer, setTimer] = useState(60)

  return (
    <div>
      <p>You Clicked {timer}</p>
      <button onClick={() => setTimer(timer + 1)}> Click Me</button>
    </div>
  )
}

export default App

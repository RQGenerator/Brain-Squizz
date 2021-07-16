import { useState, useEffect } from "react"
import ProgressBar from "./components/ProgressBar"


const App = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldValue) => {
        const newValue = oldValue + 1;

        if(newValue === 10) {
          clearInterval(interval)
        }
        return newValue;
      })
    }, 1000);
  }, [])
  return (
    <div>
      <ProgressBar value={progress} max={10} />
      
     
    </div>
  )
}

export default App

  
 
  
   
    

import { useRef, useState } from 'react'
import './CountDown.css'

const CountDown = ({ remainingTime, setCountDown }) => {
  const currentTime = useRef(remainingTime)
  const prevTime = useRef(null)
  const isNewTimeFirstTick = useRef(false)
  const [, setOneLastRerender] = useState(0)

  if (currentTime.current !== remainingTime) {
    isNewTimeFirstTick.current = true
    prevTime.current = currentTime.current
    currentTime.current = remainingTime
  } else {
    isNewTimeFirstTick.current = false
  }

  // force one last re-render when the time is over to tirgger the last animation
  if (remainingTime === 0) {
    setTimeout(() => {
      setOneLastRerender((val) => val + 1)
    }, 20)
  }

  const isTimeUp = isNewTimeFirstTick.current
  if (remainingTime === 0) {
    setTimeout(() => {
      setOneLastRerender((val) => val + 1)
    }, 20)
    return <div>Go</div>
    // setCountDown(false)
  } else if (remainingTime === 4) {
    return (
      <div className="time-wrapper">
        <div key={remainingTime} className={`time ${isTimeUp ? 'up' : ''}`}>
          Ready?!
        </div>
      </div>
    )
  }
  return (
    <div className="time-wrapper">
      <div key={remainingTime} className={`time ${isTimeUp ? 'up' : ''}`}>
        {remainingTime}
      </div>
      {prevTime.current !== null && (
        <div
          key={prevTime.current}
          className={`time ${!isTimeUp ? 'down' : ''}`}
        >
          {prevTime.current}
        </div>
      )}
    </div>
  )
}

export default CountDown

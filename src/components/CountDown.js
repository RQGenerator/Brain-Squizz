import { useRef } from 'react'
import './CountDown.css'

const CountDown = ({ remainingTime, setCountDown }) => {
  const currentTime = useRef(remainingTime)
  const prevTime = useRef(null)
  const isNewTimeFirstTick = useRef(false)

  if (currentTime.current !== remainingTime) {
    isNewTimeFirstTick.current = true
    prevTime.current = currentTime.current
    currentTime.current = remainingTime
  } else {
    isNewTimeFirstTick.current = false
  }

  const isTimeUp = isNewTimeFirstTick.current
  if (remainingTime === 4) {
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

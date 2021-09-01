import { useEffect } from 'react'

const RenderTime = ({ remainingTime, setAnswerTime }) => {
  useEffect(() => setAnswerTime(remainingTime), [remainingTime, setAnswerTime])
  return (
    <div className="flex">
      <span
        className="absolute inline-flex animate-ping"
        style={{
          fontFamily: 'Montserrat',
          fontSize: 18,
          fontWeight: 600,
          margin: 0,
          paddingBottom: 0,
        }}
      >
        {remainingTime}
      </span>
      <span
        className="relative inline flex"
        style={{
          fontFamily: 'Montserrat',
          fontSize: 18,
          fontWeight: 600,
          margin: 0,
          paddingBottom: 0,
        }}
      >
        {remainingTime}
      </span>
    </div>
  )
}

export default RenderTime

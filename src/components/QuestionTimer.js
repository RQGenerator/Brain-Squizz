import { useEffect } from 'react'

const RenderTime = ({ remainingTime, setAnswerTime }) => {
  useEffect(() => setAnswerTime(remainingTime), [remainingTime, setAnswerTime])
  return (
    <div>
      <p
        style={{
          fontFamily: 'Montserrat',
          fontSize: 18,
          fontWeight: 600,
          margin: 0,
          paddingBottom: 0,
        }}
      >
        {remainingTime}
      </p>
    </div>
  )
}

export default RenderTime

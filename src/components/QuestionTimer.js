const RenderTime = ({ remainingTime, setAnswerTime }) => {
  setAnswerTime(remainingTime)
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

const RenderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div>...Too Late</div>
  }

  return (
    <div>
      <p></p>
      <p>{remainingTime}</p>
      <p>Seconds</p>
    </div>
  )
}

export default RenderTime

const FinalScore = ({ score, totalScore, result }) => {
  return (
    <div>
      Results:
      <ul>
        {result.map((answer, i) => (
          <li key={i} id={i}>
            {answer.time} - {answer.isCorrect ? 'true' : 'false'} -{' '}
            {score(answer).points} * {score(answer).bonus} ={' '}
            {score(answer).points * score(answer).bonus}
          </li>
        ))}
      </ul>
      {totalScore(result)}
    </div>
  )
}

export default FinalScore

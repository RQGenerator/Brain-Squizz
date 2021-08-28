const FinalScore = ({ score, totalScore, result }) => {
  return (
    <div className="bg-white rounded-xl shadow-xl p-10 w-full">
      Results:
      <ul>
        {result.map((answer, i) => (
          <li key={i} id={i}>
            {i + 1} - {answer.time} - {answer.isCorrect ? 'true' : 'false'} -{' '}
            {score(answer).points} * {score(answer).bonus} ={' '}
            {score(answer).points * score(answer).bonus}
          </li>
        ))}
      </ul>
      Total: {totalScore(result)}
    </div>
  )
}

export default FinalScore

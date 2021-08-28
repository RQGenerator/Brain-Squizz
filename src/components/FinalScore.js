const FinalScore = ({ score, totalScore, result }) => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="bg-white rounded-3xl shadow-2xl w-11/12 h-5/6 md:w-9/12 md:h-5/6 place-content-center">
        <div className="bg-gradient-to-br from-indigo-700 to-blue-500 -mt-8 mb-4 rounded-xl text-white w-5/6 h-18 py-4 px-8 justify-center">
          <div className="w-full flex justify-center">
            <h2 className="text-white text-2xl">Score</h2>
          </div>
        </div>
        <div className="p-4 undefined">
          <div className="overflow-x-auto">
            <ul>
              {result.map((answer, i) => (
                <li key={i} id={i}>
                  {i + 1} - {answer.time} -{' '}
                  {answer.isCorrect ? 'true' : 'false'} - {score(answer).points}{' '}
                  * {score(answer).bonus} ={' '}
                  {score(answer).points * score(answer).bonus}
                </li>
              ))}
            </ul>
            Total: {totalScore(result)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FinalScore

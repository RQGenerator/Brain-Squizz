import { CountdownCircleTimer } from 'react-countdown-circle-timer'
// import { useState, useEffect } from 'react'

import QuestionDiv from './Question'
import RenderTime from './QuestionTimer'
import { InfoCircleTwoTone } from '@ant-design/icons'
const quiz = [
  {
    category: 'Entertainment: Music',
    type: 'multiple',
    difficulty: 'easy',
    question: 'Which brass instrument has the lowest pitch in an orchestra?',
    correct_answer: 'Tuba',
    incorrect_answers: ['Trumpet', 'Saxophone', 'Trombone'],
  },
  {
    category: 'Geography',
    type: 'multiple',
    difficulty: 'medium',
    question: 'What is the largest lake in the African continent?',
    correct_answer: 'Lake Victoria',
    incorrect_answers: ['Lake Tanganyika', 'Lake Malawi', 'Lake Turkana'],
  },

  {
    category: 'Entertainment: Video Games',
    type: 'multiple',
    difficulty: 'easy',
    question:
      '&quot;The Potato Sack&quot; was a collection of indie games released on Steam in 2011 as a promotion for which game?',
    correct_answer: 'Portal 2',
    incorrect_answers: ['Left 4 Dead 2', 'Half-Life 3', 'Dota 2'],
  },

  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'hard',
    question:
      'Which of these is not a key value of Agile software development?',
    correct_answer: 'Comprehensive documentation',
    incorrect_answers: [
      'Individuals and interactions',
      'Customer collaboration',
      'Responding to change',
    ],
  },

  {
    category: 'Entertainment: Board Games',
    type: 'multiple',
    difficulty: 'hard',
    question:
      'Some of the &quot;Fallen Empires&quot; cards from &quot;Magic: The Gathering&quot; were misprinted on the backs of which other card game?',
    correct_answer: 'Wyvern',
    incorrect_answers: ['Pokemon', 'Dominion', 'Yu-Gi-Oh'],
  },
  {
    category: 'History',
    correctAnswer: 'The Declaration Of Independence',
    incorrectAnswers: [
      'The Constitution',
      'The Emancipation Procalation',
      'The Liberty Decree',
    ],
    question:
      'Which 1776 American Affirmation Asserted The Basic Rights Of All?',
    type: 'Multiple Choice',
  },
  {
    category: 'Art and Literature',
    correctAnswer: 'Jonathan Swift',
    incorrectAnswers: ['William Godwin', 'Voltaire', 'Henry Fielding'],
    question: 'Who wrote "Gullivers Travels"?',
    type: 'Multiple Choice',
  },
  {
    category: 'General Knowledge',
    correctAnswer: '8 Maids A Milking',
    incorrectAnswers: [
      '8 Lords a Leaping',
      '8 Swans a Swimming',
      '8 Jugglers Juggling',
    ],
    question:
      'What Did My True Love Give To Me On The "Eighth" Day Of Christmas"?',
    type: 'Multiple Choice',
  },
  {
    category: 'Geography',
    correctAnswer: 'Poland',
    incorrectAnswers: [
      'Slovakia',
      'Czech Republic',
      'Hungary',
      'Croatia',
      'Russia',
    ],
    question: 'Lake Ladoga Is The Largest Lake In Which Country?',
    type: 'Multiple Choice',
  },
  {
    category: 'Music',
    correctAnswer: 'Austrian',
    incorrectAnswers: ['Czech', 'Hungarian', 'German'],
    question: 'What Nationality Was Mozart?',
    type: 'Multiple Choice',
  },
]

const Game = () => {
  // const [progress, setProgress] = useState(0)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setProgress((oldValue) => {
  //       const newValue = oldValue + 1

  //       if (newValue === 10) {
  //         clearInterval(interval)
  //       }
  //       return newValue
  //     })
  //   }, 1000)
  // }, [])
  return (
    <div>
      <div className="game">
        <div className="topBar">
          <CountdownCircleTimer
            isPlaying
            duration={10}
            size={60}
            strokeWidth={8}
            colors={[
              ['#00FF00', 0.25],
              ['#FFFF00', 0.25],
              ['#FFA500', 0.25],
              ['#FF0000'],
            ]}
            //onComplete={() => alert('too late')}
          >
            {RenderTime}
          </CountdownCircleTimer>
          <button>
            <InfoCircleTwoTone />
          </button>
        </div>
        <QuestionDiv details={quiz[0]} />
      </div>
    </div>
  )
}

export default Game
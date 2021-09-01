/* eslint-disable prettier/prettier */
import React from 'react'
import PlayGameButton from './PlayGameButton'
import LeaderboardButton from './LeaderboardButton'
import CreditsButton from './CreditsButton'
import InstructionsButton from './InstructionsButton'

const Menu = () => {
  return (
    <div className="flex justify-center items-center w-screen  h-screen">
      <div className=" flex items-center flex-col bg-gray-200 bg-opacity-30 backdrop-filter backdrop-blur-lg shadow-2xl rounded-3xl h-5/6 w-11/12 md:w-9/12 ">
        <div className="flex justify-center items-center -mt-10 mb-3">
          <img
            className="w-3/6"
            src={process.env.PUBLIC_URL + '/images/logo_name.png'}
            alt="Logo"
          />
        </div>
        <div className="flex flex-col h-full my-4 justify-between items-center w-5/6 overflow-auto">
          <PlayGameButton />
          <LeaderboardButton />
          <InstructionsButton />
          <CreditsButton />
        </div>
      </div>
    </div>
  )
}

export default Menu

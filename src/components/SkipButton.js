const SkipButton = ({ skip, skipInfo, skipCount }) => {
  return (
    <button
      onClick={skip}
      className={`has-tooltip flex items-center p-3 rounded-full shadow-xs cursor-pointer ${skipInfo[skipCount].class}`}
    >
      <span className="tooltip rounded shadow-lg p-1 bg-gray-100 text-black mt-10 -ml-10">
        {skipInfo[skipCount].text}
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 5l7 7-7 7M5 5l7 7-7 7"
        />
      </svg>
    </button>
  )
}

export default SkipButton

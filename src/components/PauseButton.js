const PauseButton = ({ isPlaying, setIsPlaying }) => {
  return (
    <button
      onClick={() => {
        setIsPlaying(!isPlaying)
      }}
      className={`has-tooltip flex items-center pl-2 pr-2 rounded-full shadow-xs cursor-pointer hover:text-gray-100 bg-gray-200 hover:bg-gray-500`}
    >
      <span className="tooltip rounded shadow-lg p-1 bg-gray-100 text-black mt-28 -ml-16">
        Pause game and check the instructions
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </button>
  )
}

export default PauseButton

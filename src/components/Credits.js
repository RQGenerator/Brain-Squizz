import React from 'react'
import { useHistory } from 'react-router-dom'

const Credits = () => {
  const history = useHistory()

  return (
    <div className="flex justify-center items-center w-screen h-screen ">
      <div className="flex items-center flex-col bg-gray-200 bg-opacity-30 backdrop-filter backdrop-blur-lg shadow-2xl rounded-3xl w-11/12 h-5/6 md:w-9/12">
        <div className="flex p-5 rounded-2xl bg-pink-800 bg-opacity-80 border-2 border-pink-600 justify-center items-center lg:-mt-10 -mt-8 shadow-md">
          <p className="text-6xl px-20 text-gray-200">Developed by</p>
        </div>
        <div className=" overflow-auto w-full h-full flex flex-col items-center">
          <div className="flex w-5/6 h-full mt-5 justify-around items-center">
            <div className="flex flex-col jutify-center items-center">
              <div
                className="rounded-full shadow-xl h-48 w-48 bg-cover bg-center border-2 border-indigo-200"
                style={{
                  backgroundImage:
                    "url('https://avatars.githubusercontent.com/u/80819794?v=4')",
                }}
              ></div>
              <h2 className="text-lg pt-5">Guilherme Rodrigues</h2>
              <div className="flex items-center justify-around p-5 w-full">
                <a
                  className="has-tooltip"
                  href="https://ie.linkedin.com/in/guilherme-rodrigues-029344162"
                  alt="guilherme-rodrigues-029344162"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="tooltip rounded shadow bg-blue-50 p-1 text-black mt-8 -ml-8">
                    Guilherme Rodrigues
                  </span>
                  <svg
                    className="h-6 fill-current text-gray-600 hover:text-blue-900"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  className="has-tooltip"
                  href="https://github.com/Guilhaxr"
                  alt="@Guilhaxr"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="tooltip rounded shadow bg-blue-50 p-1  text-black mt-8 -ml-4">
                    @Guilhaxr
                  </span>
                  <svg
                    className="h-6 fill-current text-gray-600 hover:text-gray-900"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex flex-col jutify-center items-center">
              <div
                className="rounded-full shadow-xl h-48 w-48 bg-cover bg-center border-2 border-indigo-200"
                style={{
                  backgroundImage:
                    "url('https://avatars.githubusercontent.com/u/31276085?v=4')",
                }}
              ></div>
              <h2 className="text-lg pt-5">Victor Isidoro</h2>
              <div className="flex items-center justify-around p-5 w-full">
                <a
                  className="has-tooltip"
                  href="https://www.linkedin.com/in/victorisidoro/"
                  alt="victorisidoro"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="tooltip rounded shadow bg-blue-50 p-1 text-black mt-8 -ml-8">
                    Victor Isidoro
                  </span>
                  <svg
                    className="h-6 fill-current text-gray-600 hover:text-blue-900"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  className="has-tooltip"
                  href="https://github.com/vtr84"
                  alt="@vtr84"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="tooltip rounded shadow bg-blue-50 p-1  text-black mt-8 -ml-4">
                    @vtr84
                  </span>
                  <svg
                    className="h-6 fill-current text-gray-600 hover:text-gray-900"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com/vtr84"
                  alt="@vtr84"
                  className="has-tooltip"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="tooltip rounded shadow bg-blue-50 p-1  text-black mt-8 -ml-4">
                    @vtr84
                  </span>
                  <svg
                    className="h-6 fill-current text-gray-600 hover:text-blue-700"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="p-5 text-sm">
            <p>
              Web Developer students @{' '}
              <a
                href="https://www.wildcodeschool.com/en-GB"
                rel="noreferrer"
                target="_blank"
              >
                Wild Code School{' '}
              </a>
            </p>
          </div>
        </div>
        <div className="w-5/6 flex items-center justify-center m-3">
          <button
            className="bg-pink-400 text-pink-100 border-2 border-pink-800 shadow-2xl w-2/6 px-10 py-3 rounded-lg text-xs md:text-lg lg:text-xl transition delay-300 ease-in hover:border-pink-400 hover:bg-pink-800 hover:text-white"
            onClick={() => {
              history.push('/')
            }}
          >
            Back to Menu
          </button>
        </div>
      </div>
    </div>
  )
}

export default Credits

/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition, Popover } from '@headlessui/react'
import { SaveAsIcon } from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

const avatars = [
  { name: 'avatar1', url: '/images/avatar1.png' },
  { name: 'avatar2', url: '/images/avatar2.png' },
  { name: 'avatar3', url: '/images/avatar3.png' },
  { name: 'avatar4', url: '/images/avatar4.png' },
  { name: 'avatar5', url: '/images/avatar5.png' },
  { name: 'avatar6', url: '/images/avatar6.png' },
  { name: 'avatar7', url: '/images/avatar7.png' },
  { name: 'avatar8', url: '/images/avatar8.png' },
  { name: 'avatar9', url: '/images/avatar9.png' },
  { name: 'avatar10', url: '/images/avatar10.png' },
]

const SaveScore = ({ save, setSave }) => {
  const handleSave = (action) => {
    alert(action + avatar + name)
  }
  const cancelButtonRef = useRef(null)
  const [avatar, setAvatar] = useState(avatars[0].url)
  const [name, setName] = useState('')
  return (
    <Transition.Root show={save} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={setSave}
      >
        <div className="flex h-5/6 pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-xl text-center shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="flex justify-around items-center sm:items-start p-4">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                  <SaveAsIcon
                    className="h-6 w-6 text-green-600"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 font-medium text-gray-900"
                  >
                    Save your score to the Leaderboard
                  </Dialog.Title>
                </div>
              </div>
              <div className="mt-2">
                <div className="px-10 top-16  flex justify-around items-center">
                  <div className="">
                    <Popover className="relative">
                      <Popover.Button
                        className="
                group px-3 py-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                      >
                        <img
                          className="h-12 w-12"
                          src={process.env.PUBLIC_URL + avatar}
                          alt="avatar"
                        />
                        <ChevronDownIcon
                          className="ml-2 h-5 w-5 group-hover:text-opacity-80 transition ease-in-out duration-150"
                          aria-hidden="true"
                        />
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute z-10 w-full px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0">
                          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid bg-white p-2 lg:grid-cols-2">
                              {avatars.map((item) => (
                                <button
                                  key={item.name}
                                  className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12"
                                  onClick={() => {
                                    setAvatar(item.url)
                                  }}
                                >
                                  <img
                                    alt={item.name}
                                    src={process.env.PUBLIC_URL + item.url}
                                    className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                  />
                                </button>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </Popover>
                  </div>
                  <div>
                    <input
                      className="px-5 py-2 border-2 border-purple-100 focus:ring-2 focus:ring-purple-500"
                      placeholder="Name"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    ></input>
                  </div>
                </div>
              </div>
              <div className="rounded-xl px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => handleSave('Start a new game')}
                >
                  Save and Start a new Game
                </button>
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-purple-600 text-base font-medium text-white hover:bg-purle-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => handleSave('Go to leaderboard')}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setSave(false)}
                  ref={cancelButtonRef}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default SaveScore

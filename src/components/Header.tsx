import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'


interface Props {
  setPage: (page: string) => void
}
const Header = ({setPage}: Props) => (
<Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="px-2 sm:px-6 lg:px-8">
            <div className="relative flex justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                <div className="flex items-center flex-shrink-0">
                     <h1 className="text-3xl font-bold"> Session Resources</h1>                 
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <span 
                      onClick={() => setPage('sessions')} 
                      className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent cursor-pointer hover:border-gray-300 hover:text-gray-700">
                    Sessions
                  </span>
                  <span 
                     onClick={() => setPage('tutorials')} 
                     className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent cursor-pointer hover:border-gray-300 hover:text-gray-700">
                    Tutorials
                  </span>
                  <span onClick={() => setPage('resources')} className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent cursor-pointer hover:border-gray-300 hover:text-gray-700"
                  >
                    Resources
                  </span>
                  <span onClick={() => setPage('contact')} className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent cursor-pointer hover:border-gray-300 hover:text-gray-700">
                    Contact
                  </span>
                </div>
            </div>
          </div>
        </div>
        </>
      )}
    </Disclosure>
  );

export default Header;

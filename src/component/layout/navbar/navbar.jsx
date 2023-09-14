import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Login from './auth';
import CloseIcon from '@mui/icons-material/Close';
import LoginIcon from '@mui/icons-material/Login';

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Listing', href: '/listing', current: false },
  // { name: 'Property', href: '/', current: false },
  // { name: 'Details', href: '/details', current: false },
  { name: 'Agent', href: '/associate', current: false },
  { name: 'Home Valuation', href: '/valuation', current: false },
  // { name: 'Blog', href: '/blog', current : false },
  { name: 'Contact', href: '/contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header({ color, position }) {
  const [show, setShow] = React.useState(false);
  return (
    <Disclosure as="nav" className={`border-b ${color} top-0 left-0 w-full z-50 ${position}`}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between ">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6 text-white" aria-hidden="true" />
                  )}
                </Disclosure.Button>

              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/">
                    <img
                      className="block h-10 w-auto lg:hidden"
                      src="./logo.png"
                      alt="Your Company"
                    // style={{width:'240px'}}
                    />
                  </Link>
                  <Link to="/">
                    <img
                      className="hidden h-10 w-auto lg:block"
                      src="./logo.png"
                      alt="Your Company"
                      style={{ width: '140px' }}
                    />
                  </Link>
                </div>
                <div className="hidden m-auto lg:block">
                  <div className="flex space-x-4 ">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-white hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-bold'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
                <button
                  type="button"
                  className='me-5 hidden lg:block'
                >
                  <span className="sr-only">View notifications</span>
                  <Badge color="primary" badgeContent={1}>
                    <FavoriteBorderIcon sx={{ fontSize: '25px', color: 'white' }} />
                  </Badge>
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3 lg:hidden">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      {/* <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      /> */}
                      <Avatar src="/broken-image.jpg" />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>

                {/* login icon */}
                <div className='relative'>
                  <button
                    className='border border-white p-2 px-3 hover:text-blue-500 rounded-lg duration-200 text-white text-bold hidden lg:block '
                    onClick={() => setShow(!show)}>
                    <PersonOutlineOutlinedIcon sx={{ color: 'white' }} /> Login / Register
                  </button>
                  {
                    show ? <div className='absolute rounded-lg top-12 right-0 py-2 px-5  bg-black bg-opacity-80  border border-white space-y-4'>
                      <Link to='/buyerLogin' onClick={() => setShow(!show)} className='flex items-center '>
                        <button className='text-white'>Buyer  <LoginIcon sx={{ color: 'white', marginLeft: '5px' }} /> </button>
                      </Link>

                      <Link to='/sellerLogin' onClick={() => setShow(!show)} className='flex items-center'>
                        <button className='text-white'>Seller  <LoginIcon sx={{ color: 'white', marginLeft: '5px' }} /> </button>
                      </Link>

                      <Link to='/agentLogin' onClick={() => setShow(!show)} className='flex items-center'>
                        <button className='text-white'>Agent  <LoginIcon sx={{ color: 'white', marginLeft: '5px' }} /> </button>
                      </Link>

                      <Link to='/otherLogin' onClick={() => setShow(!show)} className='flex items-center'>
                        <button className='text-white'>Other  <LoginIcon sx={{ color: 'white', marginLeft: '5px' }} /> </button>
                      </Link>

                    </div> : null
                  }


                </div>


              </div>
            </div>
          </div>


          {/* mobile menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 bg-black">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    'text-white  hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

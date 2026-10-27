import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
     <div>
      <header className=" fixed w-full z-50 bg-white text-gray-600 body-font">
  <div className="container m-auto flex flex-wrap py-5 w-[90%]  flex-col md:flex-row items-center">
    <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">Akame<span className='text-[#9C8986]'>.</span></span> */}
      <img src="/public/logo.svg" alt="logo" />
    </Link>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link to="/" className="mr-5 hover:text-gray-900 underline decoration-[#9C8986] decoration-2 underline-offset-8">Home</Link>
      <Link to="/About" className="mr-5 hover:text[#BCA858]">About</Link>
      <Link to="/Services" className="mr-5 hover:text[#BCA858]">Services</Link>
      <Link to="/Contact" className="mr-5 hover:text[#BCA858]">Contact</Link>
    </nav>
    <button className="flex items-center justify-center border border-black px-8 py-3 rounded-full text-black hover:bg-black hover:text-white transition duration-300">
      Book Now
    </button>
  </div>
</header>
    </div>
  )
}

export default Navbar

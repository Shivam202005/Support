import React from 'react'

const Navbar = () => {
  return (
    <nav className=' bg-blue-300 text-blue-700  flex justify-between items-center px-4 h-12'>
      <div className="logo font-bold text-pink-600 text-lg">Support</div>
      <ul className='flex justify-between gap-4'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      
    </nav>
  )
}

export default Navbar

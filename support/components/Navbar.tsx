import React from 'react'

const Navbar = () => {
  return (
    <nav className=' bg-blue-300 text-pink-500  flex justify-between p-4'>
      <div className="logo font-bold text-amber-300">Support</div>
      <ul className='flex justify-between gap-4'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      
    </nav>
  )
}

export default Navbar

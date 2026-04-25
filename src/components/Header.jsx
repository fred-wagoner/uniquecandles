import React, { useState } from 'react'
import { Link }from 'react-scroll'
import { FaXmark, FaBars } from 'react-icons/fa6'


const Header = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false)

const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen)
}

const closeMenu = () => {
  setIsMenuOpen(false);
}



const navItems = [
  {link: 'Home', path: 'home' },
  {link: 'Shopping', path: 'shopping' },
  {link: 'Pricing', path: 'pricing' },
  {link: 'Testimonial', path: 'testimonial' },
  {link: 'Contact', path: 'contact' },
]

  return (
  <div className='flex flex-col w-full'>
    <div className='flex-1 flex items-center justify-center bg-green-600 pt-2 pb-2 text-white'>
        <h1 className='font-bold'>100% Guarantee</h1>
      </div>

 <nav className='flex justify-between items-center gap-4 bg-pink-400 lg:px-10 px-4
    py-6 sticky top-0 z-30'>
      <div id='logo'>
        <h1 className=' font-[abel] text-white text-6xl italics'>Unique Boutique</h1>
      </div>

      <ul className='lg:flex gap-10 hidden'>
        {navItems.map(({ link, path }) => (
          <Link key={path} className='text-white uppercase font-semibold
          cursor-pointer p-3 rounded-lg hover:bg-[#a39446] hover:text-black'
          to={path} spy={true} offset={-100} smooth={true}>{link}</Link>
        ))}
      </ul>

      {/* mobile menu start here*/}
      <div className='flex justify-center items-center lg:hidden' 
      onClick={toggleMenu}>
        <div>
          {isMenuOpen ? <FaXmark className='text-white text-2xl 
          cursor-pointer' /> : <FaBars className='font-[abel] text-white text-2xl 
          cursor-pointer'  />}
        </div>
      </div>

      <div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full h-fit bg-gray-500
        p-4 absolute top-[80px] left-0`}>
        <ul className='flex flex-col justify-center items-center gap-2 w-full'>
        {navItems.map(({ link, path }) => (
          <Link key={path} className='text-white uppercase font-semibold
          cursor-pointer p-3 rounded-lg hover:bg-pink-300 hover:text-black
          w-full text-center' to={path} spy={true} offset={-100} smooth={true} onClick={closeMenu}>
          {link}
          </Link>
        ))}
        </ul>
      </div>
      <Link to='contact' spy={true} offset={-100} smooth={true}>
        <button className='bg-pink-600 px-8 py-3 rounded-full hover:bg-white
        hover:text-black font-bold mt-3 hidden lg:flex transform hover:scale-110
        transition-transform duration-300 cursor-pointer'>ORDER NOW</button>
    </Link>
    </nav>
    </div> 
  )
}

export default Header
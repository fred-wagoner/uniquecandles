import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaArrowUp } from 'react-icons/fa6'
import { Link } from 'react-scroll'


function Footer() {
  return (
    <>
    <section className='bg-white w-full md:px-20 px-10 md:py-20 py-10 flex
    flex-col justify-center items-center gap-6 border-[20px] border-gray-400'>
      <h1 className='font-boldfont-[abel ] text-black text-6xl italics'>Unique Boutique</h1>
        <p className='text-lg text-center font-semibold text-slate-600'> Searching for the perfect gift, our collection is made to 
          bring comfort and style into your life. Light a candle, breathe deeply, and let the ambiance speak for itself.
        </p>
         <div id='icons' className='flex justify-center items-center gap-4'>
          <div id="icon-box" className='bg-[#a39446] p-4 rounded-full
          cursor-pointer hover:bg-black hover:text-white transform hover:scale-110
          transition-transform duration-300'>
            <FaFacebook className='size-7 fill-white' />
          </div>
              <div id="icon-box" className='bg-[#a39446] p-4 rounded-full
          cursor-pointer hover:bg-black hover:text-white transform hover:scale-110
          transition-transform duration-300'>
            <FaYoutube className='size-7 fill-white' />
          </div>
              <div id="icon-box" className='bg-[#a39446] p-4 rounded-full
          cursor-pointer hover:bg-black hover:text-white transform hover:scale-110
          transition-transform duration-300'>
            <FaInstagram className='size-7 fill-white' />
          </div>
              <div id="icon-box" className='bg-[#a39446] p-4 rounded-full
          cursor-pointer hover:bg-black hover:text-white transform hover:scale-110
          transition-transform duration-300'>
            <FaTwitter className='size-7 fill-white' />
          </div>
         </div>
    </section>
    <div dta-aos="slide-right" data-aos-delay="200" id='icon-box'
    className='bg-gray-400 p-4 rounded-full hover:bg-black hover:text-white
    cursor-pointer fixed lg:bottom-12 bottom-6 right-9 lg:right-9'>
      <Link to='home' spy={true} offset={-100} smooth={true}>
      <FaArrowUp className='size-2' />
      </Link>
    </div>
    </>
  )
}

export default Footer
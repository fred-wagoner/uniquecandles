import React, { useEffect } from 'react'
import { Link } from 'react-scroll'
import heroimg from '../assets/images/pinkroses.jpeg'
import { FaLocationDot } from 'react-icons/fa6'
import { MdOutlinePhoneAndroid } from 'react-icons/md'
import { FaHeadphones } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Hero = () => {

  useEffect(() => {
  AOS.init({
    offset: 200,
    duration: 800,
    easing: 'ease-in-sine',
    delay: 100,
  });
}, [])

  return (
    <>
   <section id='home' className='w-full md:px-20 px-10 md:py-20 py-10 
    md:justify-center items-center gap-20 bg-cover bg-center' style={{
    backgroundImage : `url(${heroimg})`}} >

      <div className='md:w-[70%] w-full flex
      flex-col justify-center itemms-start gap-6 h-fit text-right'>
        <h1 data-aos="zoom-in" className='text-6xl p-3 text-white
        font-[abel]'>WELCOME TO</h1>
     </div>
     <div className='md:w-[90%] w-full flex
      flex-col justify-center itemms-start gap-6 h-fit text-right'>
        <h1 className='font-[alexbrush] text-6xl text-white font-bold md:text-right'>Unique Boutique</h1>
        <p className='text-2xl font-semibold text-white md:pl-[60%] text-left'>Welcome to a space where warmth, calm, and craftsmanship 
          come together. Our candles are more than just a source of light—they’re an experience designed to transform your everyday 
          moments into something memorable.<br></br>
          Each candle is carefully hand-poured using high-quality ingredients to ensure a clean, long-lasting burn. From 
          soothing lavender to rich vanilla and bold seasonal blends, every scent is created to set a mood, tell a story, 
          and elevate your surroundings.<br></br>
          Whether you're unwinding after a long day, creating a cozy atmosphere, or searching for the perfect gift, 
          our collection is made to bring comfort and style into your life. Light a candle, breathe deeply, and let the ambiance speak for itself.
          </p>
         </div>
         <div className='md: flex justify-center items-center mx-auto pt-12'>
        <Link to='contact' spy={true} offset={-100} smooth={true}>
           <button data-aos="zoom-in" className='px-10 py-4 rounded-xl border-2
           border-white text-white font-semibold text-lg hover:bg-black
           hover:text-white '>ORDER NOW</button>
        </Link> 
    </div>
    {/*<div data-aos="zoom-in" id='image-box' className='md:w-full'>
      <img src= {heroimg} alt="" className='w-full p-10 md:h-screen'/>
    </div>*/}
 </section>
    </>
  )
}

export default Hero


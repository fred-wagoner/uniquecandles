import React, { useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Pricing = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])

  return (
    <section id='pricing' className='w-full bg-pink-100 md:px-20 px-10 
    md:py-20 py-10 flex flex-col justify-center items-center gap-24'>
      <h1 data-aos="zoom-in" className='text-8xl font-[abel] text-black text-center'
      >Order Pricing</h1>
      <div className='grid md:grid-cols-2 grid-cols-1 justify-center items-center 
      gap-20 w-[85%]'> 
        <div data-aos="zoom-in" data-aos-delay="200" className='flex justify-between
        items-center gap-6 border-b-2 border-gray-400 pb-10'>
          <h1 className='text-3xl text-gray-900 font-bold'>8oz Candles</h1>
          <h1 className='text-gray-400 text-4xl font-bold'>$14</h1>
        </div>
         <div data-aos="zoom-in" data-aos-delay="200" className='flex justify-between
        items-center gap-6 border-b-2 border-gray-400 pb-10'>
          <h1 className='text-3xl text-gray-900 font-bold'>Big Wax Buners</h1>
          <h1 className='text-gray-400 text-4xl font-bold'>$15</h1>
        </div>
         <div data-aos="zoom-in" data-aos-delay="200" className='flex justify-between
        items-center gap-6 border-b-2 border-gray-400 pb-10'>
          <h1 className='text-3xl text-gray-900 font-bold'>4oz. Candles</h1>
          <h1 className='text-gray-400 text-4xl font-bold'>$7</h1>
        </div>
         <div data-aos="zoom-in" data-aos-delay="200" className='flex justify-between
        items-center gap-6 border-b-2 border-gray-400 pb-10'>
          <h1 className='text-3xl text-gray-900 font-bold'>Big Wax Melts</h1>
          <h1 className='text-gray-400 text-4xl font-bold'>$10</h1>
        </div>
         <div data-aos="zoom-in" data-aos-delay="200" className='flex justify-between
        items-center gap-6 border-b-2 border-gray-400 pb-10'>
          <h1 className='text-3xl text-gray-900 font-bold'>Small Wax Melts</h1>
          <h1 className='text-gray-400 text-4xl font-bold'>$5</h1>
        </div>
         <div data-aos="zoom-in" data-aos-delay="200" className='flex justify-between
        items-center gap-6 border-b-2 border-gray-400 pb-4'>
          <h1 className='text-3xl text-gray-900 font-bold'>Holiday Basket</h1>
          <h1 className='text-gray-400 text-4xl font-bold'>$45</h1>
        </div>
        <p className='text-2xl font-bold'> * Bacelets $4; Earrings $2; Necklets $5</p>
      </div>
    </section>
  )
}

export default Pricing
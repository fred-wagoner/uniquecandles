import React, { useEffect } from 'react'
import { Link } from 'react-scroll'
import candle from '../assets/images/candle1.png'
import candle1 from '../assets/images/candle2.png'
import { FaAngleDoubleRight } from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css'


const WhyChoose = () => {
  
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
     <section id='shopping' className='w-full md:px-20 px-10 
    md:py-20 py-10 flex flex-col justify-center items-center gap-24'>
      <h1 data-aos="zoom-in" className='font-[abel] text-8xl text-black text-center'
      >Shop By Scent</h1>
    </section>
        <div className='w-full m-auto p-10 flex flex-col justify-center items-center'>
      <div className='lg:w-[80%] w-full grid md:grid-cols-3 grid-cols-1 
      justify-center justify-items-center items-center gap-10'>
        <div>
        <img data-aos="zoom-out" data-aos-delay="200" src={candle} alt=""
        className='rounded-xl w-[350px] h-[350px]' />
        <p className='px-8'>World Market Exculsive</p>
        <p className='px-8 font-bold'>$14.99</p>
        </div>
         <div>
        <img data-aos="zoom-out" data-aos-delay="200" src={candle1} alt=""
        className='rounded-xl w-[350px] h-[350px]' />
        <p className='px-8'>World Market Exculsive</p>
        <p className='px-8 font-bold'>$14.99</p>
        </div>
          <div>
        <img data-aos="zoom-out" data-aos-delay="200" src={candle} alt=""
        className='rounded-xl w-[350px] h-[350px]' />
        <p className='px-8'>World Market Exculsive</p>
        <p className='px-8 font-bold'>$14.99</p>
        </div>
         <div>
        <img data-aos="zoom-out" data-aos-delay="200" src={candle1} alt=""
        className='rounded-xl w-[350px] h-[350px]' />
        <p className='px-8'>World Market Exculsive</p>
        <p className='px-8 font-bold'>$14.99</p>
        </div>
        <div>
        <img data-aos="zoom-out" data-aos-delay="200" src={candle} alt=""
        className='rounded-xl w-[350px] h-[350px]' />
        <p className='px-8'>World Market Exculsive</p>
        <p className='px-8 font-bold'>$14.99</p>
        </div>
      <div>
        <img data-aos="zoom-out" data-aos-delay="200" src={candle1} alt=""
        className='rounded-xl w-[350px] h-[350px]' />
        <p className='px-8'>World Market Exculsive</p>
        <p className='px-8 font-bold'>$14.99</p>
        </div>
      </div>
      {/*<div className='w-full border-b-2 border-gray-400 md:py-4 my-4'></div>*/}
    </div>
    </>
  )
}

export default WhyChoose
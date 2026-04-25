import React, { useEffect} from 'react'
import client1 from '../assets/images/client1.png'
import client2 from '../assets/images/client2.png'
import client3 from '../assets/images/client3.png'
import { BiSolidQuoteAltLeft } from 'react-icons/bi'
import AOS from 'aos';
import 'aos/dist/aos.css'

const clients = [
{
  image: client1,
  title: 'Chris P.',
  color: 'red-500',
  letter: 'C',
  para: 'The best Event and it look successful. Leaving his chair you wiltl have an higher self-esteem and peace of mind.',
},
{
  image: client2,
  title: 'Freddy S.',
  color: 'blue-500',
  letter: 'F',
  para: 'Great detailed work through patience. They could not do it any other way than perfect to my request. Perfection.',
},
{
  image: client3,
  title: 'Samual J.',
  color: 'green-500',
  letter: 'S',
  para: 'the clean and santitized serice he consistlt provides an environment I recommend everyone to experience.',
},
]
 const Testimonial = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])

  return (
    <section id='testimonial' className='w-full md:px-4
    py-4 pt-6 flex flex-col justify-between items-center gap-6 bg-white'>
    <h1 data-aos="zoom-in" className='text-8xl font-[abel] text-black text-center'
      >Testimonials</h1>

    <p data-aos="zoom-in" className='text-xl p-6font-[abel]'>
      Testimonial for a barber shop who will highlight client satisfaction, specific services, the overall experience, 
      and the atmosphere of the shop.
    </p>

    <div id='clients' className='grid grid-cols-1 md:grid-cols-3 justify-center 
    items-center p-10 gap-6'>
      {
        clients.map((item, index) => (
          <div data-aos="slide-up" data-aos-delay="200" id='main-box' key={index}
          className='w-full bg-pink-200 p-14 flex flex-col justify-between 
          items-center gap-6 rounded-3xl'>
            <div id='top' className='flex justify-between items-center gap-8
            w-full'>
              <div className='flex justify-center items-center gap-4 relative'>
                <BiSolidQuoteAltLeft className='size-20 text-[#1caf73] absolute
                left-0 opacity-20' />
                  <h1 className='text-2xl text-black font-bold'>{item.title}</h1>
              </div>
              {/* <img src={item.image} alt="" className='w-[100px] hb-[100px] 
              transform hover:scale-110 transition duration-300 cursor-pointer'/> */}
              <p className='flex items-center justify-center w-16 h-16 p-4 rounded-full bg-gray-400 text-white
              text-3xl font-bold transform hover:scale-110 transition duration-300 cursor-pointer'>{item.letter}</p>
            </div>
              <div id='bottom' className='w-full'>
                <p className='text-start text-lg text-gray-600 font-medium'>{item.para}</p>
            </div>
          </div>
        ))
      }
    </div>

    </section>
  )
}

export default Testimonial
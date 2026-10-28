import React from 'react'

function About() {
  return (
    
      <section className='bg-[url("/public/16.avif")] bg-no-repeat bg-top bg-cover h-screen'>
        <div className='w-[90%] m-auto'>
          <div  className='w-[50%] flex flex-col justify-center item-center  h-screen gap-4 sm-10'>
            <h1 className='text-3xl font-serif sm:text-7xl'>We Care About Your Hair</h1>
            <p className='text-lg font-medium text-[#9C8986]'>“Discover your own style. Don't try to repeat what has already been written - have the courage to do your own thing and don't be afraid to do something different.”</p>
            <a href='About' className=' flex justify-center items-center bg-[#BCA854] h-[50px] w-[180px] rounded-full border-2 border-none hover:bg-black hover:text-white font-serif transition duration-200 sm:w-[200px] 
  md:w-[180px] 
  lg:w-[200px]
  h-[50px] 
  md:h-[55px]'>About Us</a>
          </div>
        </div>
      </section>
  )
}

export default About

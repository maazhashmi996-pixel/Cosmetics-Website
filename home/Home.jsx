import React from 'react'

function About() {
  return (
    <section>
      <section className='bg-[url("/public/16.avif")] bg-no-repeat bg-top bg-cover h-screen'>
        <div className='w-[90%] m-auto'>
          <div  className='w-[50%] flex flex-col justify-center item-center  h-screen gap-10'>
            <h1 className='text-7xl'>We Care About Your Hair</h1>
            <p className='text-lg font-medium text-[#9C8986]'>“Discover your own style. Don't try to repeat what has already been written - have the courage to do your own thing and don't be afraid to do something different.”</p>
            <button className='bg-[#9C8986] h-[8%] w-[28%] rounded-full border-2 border-black hover:bg-black hover:text-white '>About Us</button>
          </div>
        </div>
      </section>
    </section>
  )
}

export default About

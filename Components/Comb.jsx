import React from 'react'

function Comb() {
  return (
    <div>
      <section className='max-lg:bg-[linear-gradient(rgba(255,255,255,0.7),rgba(255,255,255,0.7)),url("/hair.avif")] bg-no-repeat bg-center bg-cover w-full '>
        <div className=''>
          <div className='flex'>
            <div className='pl-20 pt-10 flex flex-col gap-10'>
              <h1 className='text-5xl font-serif'>Make Akame Your Number One Choice</h1>
              <p className='text-lg font-medium text-[#9C8986]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la.</p>
              <div className="flex flex-wrap items-center gap-4">
  
               <a href="#book-appointment"className="rounded-full bg-[#C2AD6B] px-8 py-3.5 text-sm font-medium tracking-wide text-black transition-all hover:bg-[#B8A461]">BOOK AN APPOINTMENT</a>

  
               <a href="#contact"className="rounded-full border border-black bg-transparent px-8 py-3.5 text-sm font-medium tracking-wide text-black transition-all hover:bg-black hover:text-white">CONTACT US</a>
              </div>
            </div>
            <div>
              <img src="/public/hair.avif" alt="" className='max-lg:hidden' />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Comb

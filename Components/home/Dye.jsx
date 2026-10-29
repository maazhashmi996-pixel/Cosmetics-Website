import React from 'react'

function Dye() {
  return (
    <div>
      <section className='bg-gray-200 '>
        <div className='w-[90%] m-auto'>
            <div className='flex py-20 gap-10 max-lg:flex-col' >
                <div className='w-[90%] relative'>

              
              <div className='absolute top-1 left-9 w-full h-full bg-gray-300 rounded-md'>
              </div>
              <img src="/4.avif"alt=""className='relative z-10 w-full h-auto rounded-md'/>

            </div>
                <div className='flex p-10 gap-8 flex-col'>
                    <h1 className='text-5xl font-serif'>Why Choose Us</h1>
                    <p className='text-lg text-gray-600'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div className='flex gap-2 flex-col'>
                       <p className='text-black text-lg'> We Strive For LIVE Answer On Our Calls.</p>
                       <p className='text-black text-lg'>A Wide Spectrum Of Skills And Experience.</p>
                       <p className='text-black text-lg'>Fast Response To Requests & Critical Response Time Guaranteed.</p>
                       <p className='text-black text-lg'>We Help Solve Your Business Problems.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Dye

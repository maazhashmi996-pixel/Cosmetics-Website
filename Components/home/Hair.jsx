import React from 'react'

function Hair() {
  return (
    // h-screen HATA DIYA
    <article className='bg-white w-full overflow-hidden'>
      <div className='w-[90%] m-auto py-10 md:py-20'>
    
        <div className='flex flex-col md:flex-row gap-8 md:gap-6 items-start'>

            <div className='w-full md:w-[25%] flex flex-col gap-4 justify-center md:pt-20'>
                <h1 className='text-4xl md:text-5xl font-serif leading-tight'>Hair Salon</h1>
                <p className='text-lg text-gray-600'>The House Of Hair Salon & Spa</p>
            </div>
            
            <div className='w-full md:w-[40%]'>
        
                <img src="/15.avif" alt="" className='w-full h-auto md:h-[500px] object-cover'/>
            </div>

            <div className='w-full md:w-[35%] flex gap-6 flex-col p-0 md:p-5'>
                <h1 className='text-3xl font-serif'>Beautiful Hairs Comes From A Legendary</h1>
                <p className='text-base md:text-lg text-gray-600 leading-relaxed'>
                    -"Working in a salon, you look at trends all day long. You're looking at color all the time, what new products are coming out. You're a part of the fashion industry, especially if you're working in a higher-end salon."
                </p>
                <p className='text-base md:text-lg text-gray-600 leading-relaxed'>
                    -"Working in a salon, you look at trends all day long. You're looking at color all the time, what new products are coming out. You're a part of the fashion industry, especially if you're working in a higher-end salon."
                </p>
                <a href='' className='w-[50%] bg-[#BCA854] rounded-full p-4 flex justify-center hover:bg-black hover:text-white transition duration-300     items-center md:w-[60%] max-md:w-[25%]'>Read More </a>
            </div>

        </div>

    
        

      </div>
    </article>
  )
}

export default Hair
import React from 'react'

function Hair() {
  return (
    <article className='bg-white h-screen'>
        <div className='w-[90%] m-auto'>
            <div className='flex gap-8 py-20'>
                <div className=' flex flex-col gap-8  justify-center w-[80%]'>
                    <h1 className='text-5xl'>Hair Salon</h1>
                    <p className='text-lg text-gray-600' >The House Of Hair Salon $ Spa</p>
                </div>
                <div className=''>
                    <img src="/public/15.avif" alt=""  className='h-[100%] w-[90%]'/>
                </div>
         <div className='w-[75%] flex gap-6 flex-col p-5'>
            <h1 className='text-3xl'>Beautiful Hairs Comes From A Legedary</h1>
            <p className='text-lg text-gray-600'>-“Working in a salon, you look at trends all day long. You’re looking at color all the time,what new products are coming out. You’re a part of the fashion industry,especially if you’re working in a higher-end salon.”</p>
         <button className='bg-[#BCA854] w-[50%] h-[15%] hover:bg-black hover:text-white hove:transition-1s rounded-full'>Read More</button>
         </div>
         </div>
        </div>
    </article>
  )
}

export default Hair

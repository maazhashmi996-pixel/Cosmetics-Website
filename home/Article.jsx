import React from 'react'

function Article() {
  return (
    <div>
      <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto w-[90%] m-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Services</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">The House of Hair Salon & Spa, incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div class="flex flex-wrap -m-4 text-center">
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-1 border-gray-200 px-4 py-6 hover:shadow-[0_0_15px_rgba(0,0,0,0.3)] flex flex-col justify-crnter item-center gap-3">
          {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M8 17l4 4 4-4m-4-5v9"></path>
            <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
          </svg> */}
          <img src="/s1.avif" alt="" className='w-[20%] h-[30%] ml-20'/>
          <h2 class="title-font font-medium text-3xl text-gray-900">Coloring</h2>
          <p class="leading-relaxed">Ut enim ad minim veniam, quis trud exercitation...</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-1 border-gray-200 px-4 py-6 hover:shadow-[0_0_15px_rgba(0,0,0,0.3)] flex flex-col justify-crnter item-center gap-3">
          <img src="/s3.avif" alt="" className='w-[20%] h-[30%] ml-20'/>
          <h2 class="title-font font-medium text-3xl text-gray-900">Haircut</h2>
          <p class="leading-relaxed">Consectetur adipisicing elit, sed doe eiusmod.</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-1 border-gray-200 px-4 py-6 hover:shadow-[0_0_15px_rgba(0,0,0,0.3)] flex flex-col justify-crnter item-center gap-3">
          <img src="/s4.avif" alt="" className='w-[20%] h-[30%] ml-20'/>
          <h2 class="title-font font-medium text-3xl text-gray-900">Hairstyle</h2>
          <p class="leading-relaxed">Nemo enim ipsam voluptatem quia voluptas</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-1 border-gray-200 px-4 py-6 hover:shadow-[0_0_15px_rgba(0,0,0,0.3)] flex flex-col justify-crnter item-center gap-3">
          <img src="/s1.avif" alt="" className='w-[20%] h-[30%] ml-20' />
          <h2 class="title-font font-medium text-3xl text-gray-900">Coloring</h2>
          <p class="leading-relaxed">Ut enim ad minim veniam, quis trud exercitation...</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Article

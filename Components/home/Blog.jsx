import React from 'react'

function Blog() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 pt-24 pb-8 w-[80%] mx-auto">

          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="font-serif text-5xl font-normal text-black md:text-5xl">
              OUR BLOG
            </h1>
          </div>

          {/* First Row */}
          <div className="flex flex-nowrap justify-center items-start gap-8 mb-16">

            <div className="w-[30%] shrink-0">
              <img
                src="/1.avif"
                alt=""
                className="w-full h-[230px] object-cover hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              <div className="flex flex-col gap-6">
                <h1 className="text-xl hover:text-[#7a7720] transition font-serif text-black mt-6">
                  Ten Haircut Ideas to Bring to Your Next Appointment
                </h1>
                <p>
                  From soft layers to a sharp bob: the cuts our stylists were asked for most this season.
                </p>
              </div>
            </div>

            <div className="w-[27%] shrink-0">
              <img
                src="/2.avif"
                alt=""
                className="w-full h-[230px] object-cover hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              <div className="flex flex-col gap-6">
                <h1 className="text-xl hover:text-[#7a7720] transition font-serif text-black mt-6">
                  Finally: How to Make Your Aggressively Straight Hair Hold a Curl
                </h1>
                <p>
                  We asked our senior stylist for the heat, product and pinning tricks that make curls last.                </p>
              </div>
            </div>

            <div className="w-[27%] shrink-0">
              <img
                src="/13.avif"
                alt=""
                className="w-full h-[230px] object-cover hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              <div className="flex flex-col gap-6">
                <h1 className="text-xl hover:text-[#7a7720] transition font-serif text-black mt-6">
                  Thinking About A Short Bob?Read this first.
                </h1>
                <p>
                  Face shape, texture and upkeep: what to talk through before the big chop.                </p>
              </div>
            </div>

          </div>

          {/* Second Row */}
          <div className="flex flex-nowrap justify-center items-start gap-8 mb-16">

            <div className="w-[30%] shrink-0">
              <img
                src="/4.avif"
                alt=""
               className="w-full h-[230px] object-cover hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              <div className="flex flex-col gap-6">
                <h1 className="text-xl hover:text-[#7a7720] transition font-serif text-black mt-6">
                  Pastel Color At Home: How To Keep It Bright Loger
                </h1>
                <p>
                  Cool water, a gentle shampoo and a gloss every few weeks keep pastels from fading.                </p>
              </div>
            </div>

            <div className="w-[27%] shrink-0">
              <img
                src="/37.avif"
                alt=""
                className="w-full h-[230px] object-cover hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              <div className="flex flex-col gap-6">
                <h1 className="text-xl hover:text-[#7a7720] transition font-serif text-black mt-6">
                  Balayage Or Highlight? How to Choose                </h1>
                <p>
                  Both lighten the hair, but the placement, the result and the upkeep differ.                </p>
              </div>
            </div>

            <div className="w-[27%] shrink-0">
              <img
                src="/36.avif"
                alt=""
                
              className="w-full h-[230px] object-cover hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              <div className="flex flex-col gap-6">
                <h1 className="text-xl hover:text-[#7a7720] transition font-serif text-black mt-6">
                  Lilac,Lavender And Silver; This Season's Soft Shades                </h1>
                <p>
                  Soft pastel tones that suit most skin tones, and how we mix them in the salon.                </p>
              </div>
            </div>

          </div>

          {/* Third Row */}
          <div className="flex flex-nowrap justify-center items-start gap-8">

            <div className="w-[30%] shrink-0">
              <img
                src="/41.avif"
                alt=""
                className="w-full h-[230px] object-cover hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              <div className="flex flex-col gap-6">
                <h1 className="text-xl hover:text-[#7a7720] transition font-serif text-black mt-6">
                  Five Questions Our Barber Hear Every Week               </h1>
                <p>
                  Beard care, fades and how often to book: straight answers from the barber chair.                </p>
              </div>
            </div>

            <div className="w-[27%] shrink-0">
              <img
                src="/40.avif"
                alt=""
                className="w-full h-[230px] object-cover hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              <div className="flex flex-col gap-6">
                <h1 className="text-xl hover:text-[#7a7720] transition font-serif text-black mt-6">
                  Summer Hair Care,Sun,Salt And Chlorine                </h1>
                <p>
                  A short routine that protects colour and moisture on holiday.                </p>
              </div>
            </div>

            <div className="w-[27%] shrink-0">
              <img
                src="/39.avif"
                alt=""
                className="w-full h-[230px] object-cover hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              
              <div className="flex flex-col gap-6">
                <h1 className="text-xl hover:text-[#7a7720] transition font-serif text-black mt-6">
                  Bridal Hair Trials: What To Bring
                </h1>
                <p>
                  Photos, accessories and a timeline: how to get the most out of your trial.                </p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>















  )
}

export default Blog

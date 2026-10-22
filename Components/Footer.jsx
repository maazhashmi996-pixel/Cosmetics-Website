
import React from "react";

function Footer() {
  return (
    <footer className="bg-white py-8 md:py-8">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">

        <div>
          <h2 className="text-4xl font-bold text-[#292929]">
            Akame<span className="text-[#bca858]">.</span>
          </h2>

          <p className="text-[#777777] text-lg md:text-sm leading-[1.7] mt-8">
            We would love to look after your hair. Book a
            visit, or drop in for a free consultation with one
            of our stylists.
          </p>

          <p className="text-[#777777] text-sm md:text-sm leading-[1.7] mt-10">
            Copyright © 2026 All rights reserved | This
            template is made with ♡ by{" "}
            <a href="#" className="underline">
              Colorlib
            </a>
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-serif text-[#222222]">
            Opening Times
          </h3>

          <div className="text-[#777777] text-lg md:text-sm mt-10 space-y-4">
            <p>Monday-Friday: 10.00 - 23.00</p>
            <p>Saturday: 10.00 - 19.00</p>
          </div>

  
          <div className="flex gap-5 mt-12">
            <a
              href="#"
              className="w-[40px] h-[40px] rounded-full bg-[#4b62b8] text-white flex items-center justify-center text-3xl font-bold hover:opacity-80 transition"
            >
              f
            </a>

            <a
              href="#"
              className="w-[40px] h-[40px] rounded-full bg-[#00bce7] text-white flex items-center justify-center text-3xl hover:opacity-80 transition"
            >
              𝕏
            </a>

            <a
              href="#"
              className="w-[40px] h-[40px] rounded-full bg-[#0879d1] text-white flex items-center justify-center text-3xl hover:opacity-80 transition"
            >
              ◎
            </a>
          </div>
        </div>

      
        <div>
          <h3 className="text-2xl font-serif text-[#222222]">
            Contact Us
          </h3>

          <div className="text-[#777777] text-lg md:text-sm mt-10 space-y-4 leading-[1.7]">
            <p>
              Tel:{" "}
              <a href="tel:+12345678910" className="underline">
                (+12) 345 678 910
              </a>
            </p>

            <p>
              E-mail:{" "}
              <a
                href="mailto:hello@example.com"
                className="underline"
              >
                hello@example.com
              </a>
            </p>

            <p>
              Address: 24 Willow Lane,
              <br />
              Springfield
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;

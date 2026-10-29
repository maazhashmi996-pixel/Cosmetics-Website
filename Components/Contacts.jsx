import React from 'react'
import { Link } from 'react-router-dom'

function Contacts() {
  return (
<div>
       
      
    
    <div>
      <main className="bg-white font-sans text-[#303030]">

      
      <section
        className="relative flex min-h-[300px] items-center justify-center bg-cover bg-center px-5 text-center md:min-h-[380px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(20,20,20,.48),rgba(20,20,20,.48)), url('/b-4.avif')"
        }}
      >
       <div className="relative z-10">
          <p className="mb-4 text-xs uppercase tracking-[5px] text-white">
            Akame Beauty Salon
          </p>

          <h1 className="font-serif text-5xl font-normal text-white md:text-7xl">
            Contact
          </h1>

          <div className="mt-6 flex items-center justify-center gap-3 text-xs text-white/80">
            <a to="/" className="transition hover:text-white">
              Home
            </a>
            <span>/</span>
            <span className="text-white">Contact</span>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="mb-16 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[4px] text-[#b49a68]">
              We would love to hear from you
            </p>

            <h2 className="font-serif text-3xl font-normal md:text-5xl">
              Get In Touch
            </h2>

            <div className="mx-auto mt-6 h-px w-16 bg-[#b49a68]" />

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-gray-500">
              Have a question about our services or want to make an
              appointment? Get in touch with us. We are always happy
              to help you look and feel your best.
            </p>
          </div>




          <div
        style={{
        width: "100%",
        minHeight: "340px",
        backgroundColor: "#ffffff",
        borderTop: "6px solid #edf0f2",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
        padding: "50px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1450px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "40px 20px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            flex: "1 1 220px",
            minWidth: "200px",
          }}
        >
          <div
            style={{
              color: "#c5a64c",
              fontSize: "38px",
              lineHeight: "1",
              marginBottom: "22px",
              
            }}
          >
            ☎
          </div>

          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "30px",
              fontWeight: "400",
              margin: "0 0 25px",
              color: "#111111",
            }}
          >
            Phone
          </h2>

          <p
            style={{
              fontSize: "18px",
              color: "#666666",
              margin: 0,
              textDecoration: "underline",
              
            }}
          >
            +92 300 1234567
          </p>
        </div>

        <div
          style={{
            flex: "1 1 220px",
            minWidth: "200px",
          }}
        >
          <div
            style={{
              color: "#c5a64c",
              fontSize: "38px",
              lineHeight: "1",
              marginBottom: "22px",
            }}
          >
            ♙
          </div>

          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "30px",
              fontWeight: "400",
              margin: "0 0 25px",
              color: "#111111",
            }}
          >
            Address
          </h2>

          <p
            style={{
              fontSize: "18px",
              color: "#666666",
              margin: 0,
            }}
          >
            121 Beauty Lane, Lahore
          </p>
        </div>

        <div
          style={{
            flex: "1 1 220px",
            minWidth: "200px",
          }}
        >
          <div
            style={{
              color: "#c5a64c",
              fontSize: "38px",
              lineHeight: "1",
              marginBottom: "22px",
            }}
          >
            ◷
          </div>

          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "30px",
              fontWeight: "400",
              margin: "0 0 25px",
              color: "#111111",
            }}
          >
            Open time
          </h2>

          <p
            style={{
              fontSize: "18px",
              color: "#666666",
              margin: 0,
            }}
          >
            10:00AM to 08:00PM, Mon-Fri
          </p>
        </div>

        <div
          style={{
            flex: "1 1 220px",
            minWidth: "200px",
          }}
        >
          <div
            style={{
              color: "#c5a64c",
              fontSize: "38px",
              lineHeight: "1",
              marginBottom: "22px",
            }}
          >
            ✉
          </div>

          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "30px",
              fontWeight: "400",
              margin: "0 0 25px",
              color: "#111111",
            }}
          >
            Email
          </h2>

          <p
            style={{
              fontSize: "18px",
              color: "#666666",
              margin: 0,
              textDecoration: "underline",
            }}
          >
            @gmail.com
          </p>
        </div>
      </div>
    </div>




       <div
      style={{
        width: "100%",
        fontFamily: "Arial, sans-serif",
        margin: 0,
        padding: 0,
      }}
    >
      <section
        style={{
          width: "100%",
          minHeight: "758px",
          backgroundColor: "#f4f8f8",
          boxSizing: "border-box",
          padding: "96px 30px 80px",
          textAlign: "center",
          position: "relative",
        }}
      >
        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "52px",
            fontWeight: "400",
            color: "#292929",
            margin: "0 0 20px",
          }}
        >
          Leave Message
        </h1>

        <p
          style={{
            fontSize: "20px",
            color: "#666666",
            margin: "0 0 65px",
            lineHeight: "1.5",
          }}
        >
          Our staff will call back later and answer your questions.
        </p>

        <form
          style={{
            width: "100%",
            maxWidth: "1356px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "36px",
              marginBottom: "36px",
              flexWrap: "wrap",
            }}
          >
            <input
              type="text"
              placeholder="Your Name"
              style={{
                flex: "1 1 300px",
                minWidth: 0,
                height: "62px",
                boxSizing: "border-box",
                border: "1px solid #d8dfe2",
                borderRadius: "2px",
                backgroundColor: "#ffffff",
                padding: "0 24px",
                fontSize: "16px",
                color: "#666666",
                outline: "none",
              }}
            />

            <input
              type="email"
              placeholder="Email"
              style={{
                flex: "1 1 300px",
                minWidth: 0,
                height: "62px",
                boxSizing: "border-box",
                border: "1px solid #d8dfe2",
                borderRadius: "2px",
                backgroundColor: "#ffffff",
                padding: "0 24px",
                fontSize: "16px",
                color: "#666666",
                outline: "none",
              }}
            />
          </div>

          <textarea
            placeholder="Your message..."
            style={{
              width: "100%",
              height: "184px",
              boxSizing: "border-box",
              border: "1px solid #d8dfe2",
              borderRadius: "2px",
              backgroundColor: "#ffffff",
              padding: "27px 24px",
              fontSize: "16px",
              fontFamily: "Arial, sans-serif",
              color: "#666666",
              outline: "none",
              resize: "vertical",
              display: "block",
            }}
          />

          <button
            type="button"
            style={{
              width: "212px",
              height: "52px",
              border: "none",
              borderRadius: "30px",
              backgroundColor: "#c7aa54",
              color: "#28251c",
              fontFamily: "Georgia, serif",
              fontSize: "14px",
              marginTop: "54px",
              cursor: "pointer",
              
              
            }}
          >
            SEND MESSAGE
          </button>
        </form>
      </section>

      
      </div>
    </div>
      </section>
      <section className="bg-[#f8f7f4] px-5 py-16 md:py-20">
  <div className="mx-auto max-w-7xl text-center">

    <p className="mb-3 text-xs uppercase tracking-[3px] text-[#b49a68]">
      Find Our Location
    </p>

    <h2 className="mb-6 font-serif text-3xl text-[#303030]">
      Visit Our Salon
    </h2>

    <details className="group">
      <summary className="mx-auto inline-flex cursor-pointer list-none items-center gap-3 bg-[#b49a68] px-8 py-4 text-xs font-semibold uppercase tracking-[2px] text-white transition duration-300 hover:bg-[#252525]">
        <span className="group-open:hidden">Show Map</span>
        <span className="hidden group-open:inline">Hide Map</span>
        <span className="transition-transform duration-300 group-open:rotate-180">
          ↓
        </span>
      </summary>

      <div className="mt-8 overflow-hidden border border-[#e8e1d5] text-left">
        <iframe
          title="Salon location map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108935.64700957795!2d74.3000874!3d31.435087499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919042715f767ad%3A0xb0251034ce47145e!2sARFA%20Tower%2C%20Lahore%20%E2%80%93%20Kasur%20Rd%2C%20Nishtar%20Town%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1792663202735!5m2!1sen!2s"
          
          className="h-[350px] w-full border-0 md:h-[450px]"
        />
      </div>
    </details>

  </div>
</section>

    </main>
    </div>
      
    </div>
  )
}

export default Contacts

import React from "react";
import "./about.css";

function About() {
  return (
    <section>
      <section className="about">
        <div id="about-sec">
          <div className="heading">
            <h1>AboutUs</h1>
            
          </div>
          <div className="left-content">
            <span>New York • Since 2004</span>
            <h1>About Our Stories</h1>
          </div>
          <div className="right-content">
            <p>At Akame Salon, we are lorem ipsum dolor sit amet, consectetur adipi elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <h2>Elena Marsh signature</h2>
            <h3>Elena Marsh</h3>
          </div>
        </div>
      </section>
      <section className="sec-2">
        <div className="beauty">
          <div className="left-content-2">
            <div>
              <h1>Meet Your Beauty Mentor:    <span>Chloe Arden </span>    </h1>
              <p>I'll help you turn skills into confidence & confidence into career.Hi, I’m Chloe <span>— certified lash & brow artist </span> with over 6 years of experience. I’ve worked with hundreds of clients, built a loyal client base from scratch, and turned my passion into a thriving career.My mission is simple: to teach you the techniques that actually work and give you the confidence to start earning fast. I’ll be with you every step of the way!
              </p>
            </div>
            <div>
              <img src="/salon.jpg" alt="salon" className="pic" />
            </div>
          </div>

          <div className="icon-ig">
            <img src="/mascara-3.svg" alt="mascara" className="icon-pic" />
            <div className="imgcontent">
              <h3>Proven Expertise</h3>
              <p>6+ years in the beauty industry, hundreds of happy clients. </p>
            </div>
            <img src="/role model.svg" alt="rolemodel" className="icon-pic" />
            <div className="imgcontent">
              <h3>Truly Supportive</h3>
              <p>Step-by-step guidance, beginner-friendly approach, and real care.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-3">
        <div className="skin">
          <div className="left-content-3">
            <img src="/shineskin.jpg" alt="skinshine" />
          </div>
          <div className="right-content-3">
            <h1>Nurture Your Skin with Nature's Best Ingredients and Vitamins</h1>
            <h3>Our box is a set of the best-in-class cosmetic products.</h3>
            <div className="services">
              <h2>SpecKare CAC3</h2>
              <h2>Cithrol 10GTIS</h2>
              <h2>Aleurites Oil</h2>
              <h2>Retinol</h2>
            </div>
            <p>From herbs to essential oils, natural and organic ingredients have been used for centuries to nourish and protect skin. With the right blend of vitamins and minerals, you can give your skin the nourishment it needs to look its best</p>
            <button>Order Shine Box</button>
          </div>
        </div>
      </section>
      <section className="sec-4">
        <div className="healthy-skin">
          <div className="skin-benifits">
            <h1>Embrace Beautiful and Healthy Skin with Us</h1>
            <h2>Order your Shine Box today!</h2>
            <p>Our mission is to provide you with natural, quality products that are free from harsh chemicals and artificial ingredient</p>
          </div>
          <img src="/beautifulskin.jpg" alt="beautifulskin" className="skin-pic" />
        </div>
        <div className="icon-benifits">
          <img src="/lotion.svg" alt="" />
          <div className="icon-descript">
            <h2>Natural and safe</h2>
            <p>Our cosmetics are free from harsh chemicals and artificial ingredients, providing effective care for your skin.</p>
          </div>
          <img src="/eco friendly.svg" alt="" />
          <div className="icon-descript">
            <h2>Sustainable</h2>
            <p>We use natural, renewable resources to create our products, helping to promote a healthier environment</p>
          </div>
          <img src="organic.svg" alt="" />
          <div className="icon-descript">
            <h2>
              Hypoallergenic</h2>
            <p>Our organic cosmetics are designed to be gentle on sensitive skin, minimizing irritation and redness</p>
          </div>
        </div>
      </section>

      <section className="sec-5">
        <div className="sales">
          <img src="/shinesale.jpg" alt="" className="sale-pic" />
          <div className="type-content">
            <h3>For Face</h3>
            <h1>Bergamot Extract Face Mask</h1>
            <p>
              The mask helps promote skin elasticity, reduce the
              appearance of pores and restore hydration for a
              refreshed and glowing complexion.
            </p>
            <div className="type">
              <div>
                <h2>Skin Type</h2>
                <h3>All Types</h3>
              </div>

              <div className="appli">
                <h2>Application</h2>
                <h3>Daily</h3>
              </div>
            </div>

            <div className="type-details">
              <div>
                <h2>Size</h2>
                <span>1.69 oz/50 ml</span>
              </div>
              <div>
                <h2>Concerns</h2>
                <h3>Fine lines and wrinkles</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default About;


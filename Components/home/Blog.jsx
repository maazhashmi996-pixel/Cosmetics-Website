import React from "react";

function Blog() {
  return (
    <div style={{
      width: "100%",
      minHeight: "100vh",
      background: "#fff",
      border: "1px solid red",
      padding: "35px 30px",
      boxSizing: "border-box"
    }}>

      <style>{`
        .blog-card {
          width: 31%;
          margin-bottom: 25px;
          cursor: pointer;
          overflow: hidden;
          transition: transform 0.4s ease;
        }

        .blog-card:hover {
          transform: translateY(-6px);
        }

        .blog-image {
          width: 100%;
          height: 180px;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease, filter 0.6s ease;
        }

        .blog-image:hover {
          transform: scale(1.12);
          filter: brightness(0.85);
        }

        .blog-title {
          font-family: Georgia, serif;
          font-size: 14px;
          font-weight: 400;
          color: #333;
          line-height: 1.5;
          transition: color 0.3s ease;
        }

        .blog-title:hover {
          color: #c5aa50;
        }

        .load-more:hover {
          background: #222 !important;
          transform: translateY(-3px);
        }

        @media(max-width: 650px) {
          .blog-card {
            width: 47%;
          }
        }

        @media(max-width: 450px) {
          .blog-card {
            width: 100%;
          }
        }
      `}</style>

      {/* Heading */}
      <div style={{
        textAlign: "center",
        marginBottom: "35px"
      }}>
        <h1 style={{
          fontFamily: "Georgia, serif",
          fontWeight: "400",
          fontSize: "30px",
          color: "#222",
          margin: "0 0 8px"
        }}>
          Our Blog
        </h1>

        <p style={{
          fontSize: "11px",
          color: "#999"
        }}>
          Home / Blog
        </p>
      </div>

      {/* Blog Section */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: "0 3%"
      }}>

        {/* Blog 1 */}
        <div className="blog-card">
          <div style={{overflow: "hidden"}}>
            <img className="blog-image"
              src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600"
              alt="Fashion"
            />
          </div>
          <h3 className="blog-title">
            Ten Brilliant Ideas to Bring Your Next Appointment
          </h3>
          <p style={{fontSize:"10px",color:"#999"}}>
            ◷ September 22, 2025 | 03 Comments
          </p>
          <p style={{fontSize:"11px",color:"#777",lineHeight:"1.7"}}>
            Explore the latest fashion trends and discover beautiful new styles.
          </p>
        </div>

        {/* Blog 2 */}
        <div className="blog-card">
          <div style={{overflow: "hidden"}}>
            <img className="blog-image"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600"
              alt="Fashion"
            />
          </div>
          <h3 className="blog-title">
            Finally! How to Make Your Wardrobe Stylish
          </h3>
          <p style={{fontSize:"10px",color:"#999"}}>
            ◷ September 22, 2025 | 03 Comments
          </p>
          <p style={{fontSize:"11px",color:"#777",lineHeight:"1.7"}}>
            Discover amazing fashion ideas and create your perfect look.
          </p>
        </div>

        {/* Blog 3 */}
        <div className="blog-card">
          <div style={{overflow: "hidden"}}>
            <img className="blog-image"
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600"
              alt="Beauty"
            />
          </div>
          <h3 className="blog-title">
            Thinking About a Short Hair? Read This First
          </h3>
          <p style={{fontSize:"10px",color:"#999"}}>
            ◷ September 22, 2025 | 03 Comments
          </p>
          <p style={{fontSize:"11px",color:"#777",lineHeight:"1.7"}}>
            Find the perfect hairstyle that matches your personality.
          </p>
        </div>

        {/* Blog 4 */}
        <div className="blog-card">
          <div style={{overflow: "hidden"}}>
            <img className="blog-image"
              src="https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?w=600"
              alt="Hair colour"
            />
          </div>
          <h3 className="blog-title">
            Pastel Colour at Home: How to Keep It Bright
          </h3>
          <p style={{fontSize:"10px",color:"#999"}}>
            ◷ September 22, 2025 | 03 Comments
          </p>
          <p style={{fontSize:"11px",color:"#777",lineHeight:"1.7"}}>
            Explore beautiful hair colours and the latest beauty trends.
          </p>
        </div>

        {/* Blog 5 */}
        <div className="blog-card">
          <div style={{overflow: "hidden"}}>
            <img className="blog-image"
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600"
              alt="Hair style"
            />
          </div>
          <h3 className="blog-title">
            Balayage or Highlights? How to Choose
          </h3>
          <p style={{fontSize:"10px",color:"#999"}}>
            ◷ September 22, 2025 | 03 Comments
          </p>
          <p style={{fontSize:"11px",color:"#777",lineHeight:"1.7"}}>
            Learn which hair colour technique is best for you.
          </p>
        </div>

        {/* Blog 6 */}
        <div className="blog-card">
          <div style={{overflow: "hidden"}}>
            <img className="blog-image"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600"
              alt="Beauty"
            />
          </div>
          <h3 className="blog-title">
            Lips, Lavender and Style: This Season's Best Shades
          </h3>
          <p style={{fontSize:"10px",color:"#999"}}>
            ◷ September 22, 2025 | 03 Comments
          </p>
          <p style={{fontSize:"11px",color:"#777",lineHeight:"1.7"}}>
            Discover fresh beauty inspiration and stylish looks.
          </p>
        </div>

        {/* Blog 7 */}
        <div className="blog-card">
          <div style={{overflow: "hidden"}}>
            <img className="blog-image"
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600"
              alt="Fashion"
            />
          </div>
          <h3 className="blog-title">
            Five Questions Our Readers Never Worry About
          </h3>
          <p style={{fontSize:"10px",color:"#999"}}>
            ◷ September 22, 2025 | 03 Comments
          </p>
          <p style={{fontSize:"11px",color:"#777",lineHeight:"1.7"}}>
            Read useful tips and ideas to improve your everyday style.
          </p>
        </div>

        {/* Blog 8 */}
        <div className="blog-card">
          <div style={{overflow: "hidden"}}>
            <img className="blog-image"
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600"
              alt="Summer style"
            />
          </div>
          <h3 className="blog-title">
            Summer Hair Care: Sun, Salt and Shine
          </h3>
          <p style={{fontSize:"10px",color:"#999"}}>
            ◷ September 22, 2025 | 03 Comments
          </p>
          <p style={{fontSize:"11px",color:"#777",lineHeight:"1.7"}}>
            Learn simple ways to keep your hair healthy and beautiful.
          </p>
        </div>

        {/* Blog 9 */}
        <div className="blog-card">
          <div style={{overflow: "hidden"}}>
            <img className="blog-image"
              src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600"
              alt="Bridal style"
            />
          </div>
          <h3 className="blog-title">
            Bridal Hair Tricks: What to Bring
          </h3>
          <p style={{fontSize:"10px",color:"#999"}}>
            ◷ September 22, 2025 | 03 Comments
          </p>
          <p style={{fontSize:"11px",color:"#777",lineHeight:"1.7"}}>
            Prepare your perfect bridal look with these helpful tips.
          </p>
        </div>

      </div>

      {/* Button */}
      <div style={{textAlign:"center",marginTop:"20px"}}>
        <button className="load-more" style={{
          background:"#c5aa50",
          color:"#fff",
          border:"none",
          borderRadius:"25px",
          padding:"12px 30px",
          cursor:"pointer",
          fontSize:"10px",
          transition:"all 0.3s ease"
        }}>
          LOAD MORE
        </button>
      </div>

    </div>
  );
}

export default Blog;

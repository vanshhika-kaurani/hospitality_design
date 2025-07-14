
import React from "react";
import "./styles.css";

const Home = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("section_1");
    if (nextSection) nextSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* landing home */}
      <div
        className="home"
        style={{
          backgroundImage: "url('/shutterstock_1061574436 1 (1).png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          
        }}
      >
        {/* //navbar */}
        <nav className="navbar">
          <div className="nav-left">
            <a href="#">HOME</a>
            <a href="#story-section">OUR STORY</a>
            <div className="dropdown">
              <a href="#">OUR DEVELOPMENTS ▾</a>
              <div className="dropdown-content">
                <a href="#">DO DUBAI ISLANDS</a>
                <a href="#">DO NEW CAIRO</a>
              </div>
            </div>
            <a href="#">ONE</a>
            <a href="#">MEDIA</a>
          </div>

          {/* //logo */}
          <div className="nav-logo">
            <img src="/Final Logo-04.png" className="logo-img" />
          </div>

          <div className="nav-right">
            <button className="search-btn" aria-label="Search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="white"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            <button className="contact-btn">CONTACT US</button>
          </div>
        </nav>

        {/* //main_content */}
        <h1>
          LIVE THE <span>BEAT</span>
        </h1>

        {/* ↓ Down Arrow Scroll Button */}
        <button
          onClick={scrollToNextSection}
          style={{
            marginTop: "10px",
            fontSize: "30px",
            color: "white",
            cursor: "pointer",
            outline: "none",
            border: "none",
            background: "transparent",
           
           
          }}
        >
          ↓
        </button>
      </div>

      {/* Section-1 */}
      <div
        className="section_1"
        id="section_1"
        style={{
          backgroundImage: "url('./shutterstock_1054410035 2 (1).png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2 className="gradient-text" style={{ textTransform: "uppercase" }}>
          The world’s first <br />
          musical themed hotel <br />
          that integrates AI, <br />
          music and wellness.
        </h2>
      </div>

      {/* Section-2 */}
      <div
        className="section_2"
        style={{
          backgroundImage: "url('./A3 1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "60px 80px",
          color: "white",
          position: "relative",
          minHeight: "100vh",
        }}
      >
        <div className="section2-text" style={{ zIndex: 1, maxWidth: "50%" }}>
          <h4 style={{ textTransform: "uppercase", opacity: 0.7 }}>
            DO HOTELS & RESIDENCES
          </h4>
          <h1 style={{ fontSize: "64px", color: "#ED9455", letterSpacing: "15px" }}>STORY</h1>
          <p style={{ lineHeight: "1.8", fontSize: "16px", margin: "20px 0", textAlign: "left" }}>
            Every detail here is crafted to create connection <br />
            and inspire creativity. It’s an invitation to live <br />
            boldly, experience the music in every moment, <br />
            embrace the rhythm of life, and truly live the beat.
          </p>
          <a
            href="#"
            style={{
              textTransform: "uppercase",
              color: "#FFBB70",
              fontWeight: "bold",
              letterSpacing: "1px",
              textDecoration: "none",
              fontSize: "14px",
              

            }}
          >
            <span style={{ textDecoration: "underline" }}>Explore</span> More
          </a>
        </div>
      </div>

      {/* Section-3 */}
      <div
        className="section_3"
        id="section_3"
        style={{
          backgroundImage: "url('./shutterstock_1755911966.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2 style={{ textTransform: "uppercase" }}>
          a destination <br />
          where you don’t <br />
          just stay — you feel.
        </h2>
        

      </div>

      {/* Section-4 */}
      <div
        className="section_4"
        id="section_4"
        style={{
          backgroundImage: "url('./gettyimages-510844956-170667a.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h4 style={{ textTransform: "uppercase", opacity: 0.7 }}>
          DO HOTELS & RESIDENCES
        </h4>
        <h1 style={{ fontSize: "64px", color: "#ED9455", letterSpacing: "15px" }}>
          <span>OUR</span>
          <br /> DEVELOPMENTS
        </h1>
      </div>

      {/* Section-5 */}
      <div
        className="section_5"
        id="section_5"
        style={{
          backgroundImage: "url('./image.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Section-6 */}
      <div
        className="section_6"
        style={{
          backgroundImage: "url('./derek-story-1Pzhr6XPl6k-unsplash (1).png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h4 style={{ textTransform: "uppercase", opacity: 0.7 }}>
          DO HOTELS & RESIDENCES
        </h4>
        <h1 style={{ fontSize: "64px", color: "#ED9455", letterSpacing: "15px" }}>MEDIA</h1>
      </div>

      {/* Section-7 */}
      <div
        className="section_7"
        style={{
          backgroundImage: "url('./Screenshot 2025-01-29 at 12.58.16 PM (1).png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 style={{ fontSize: "64px", color: "#ED9455", letterSpacing: "15px" }}>MEDIA</h1>
      </div>

      {/* Footer */}
      <footer>
        <div className="footer">
          <h1>footer</h1>
        </div>
      </footer>
    </>
  );
};

export default Home;


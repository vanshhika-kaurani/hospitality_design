
//----------------------------------------------------------
import React from "react";
import "./styles.css";

const Home = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("section_1");
    
    if (nextSection) nextSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      //landing home
      <div
        className="home"
        style={{
          backgroundImage: "url('/shutterstock_1061574436 1 (1).png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        //navbar
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

          //logo
          <div className="nav-logo">
            <img src="/Final Logo-04.png"  className="logo-img" />
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

        //main_content
        <h1>
          LIVE THE <span>BEAT</span>
        </h1>

        
      </div>

      // Section-1
      <div className="section_1">
          
        <h2 className="gradient-text" style={{ textTransform: "uppercase" }}>
          The world’s first <br />
          musical themed hotel <br />
          that integrates AI, <br />
          music and wellness. </h2>
        
      </div>
     

      //section-2
      <div className="section_2" id="section_2" 
      style={{ 
          textTransform: "uppercase" ,
          backgroundImage: "url('./A3 1.png')",
          
         }}>

        <h3>do hotels & residences</h3>
        <br/>
        <h1>STORY</h1>
        <p>
          Every detail here is crafted to create connection <br/>
          and inspire creativity. It’s an invitation to live<br/>
          boldly, experience the music in every moment,<br/>
          embrace the rhythm of life, and truly live the beat.
        </p>
        <a href="#">Explore</a> More
          
        
      </div>
      


    //section-3
      <div className="section_3" id="section_3" 
        style={{
        backgroundImage: "url('./shutterstock_1755911966.png')",
        }}>
            <h2 style={{ textTransform: "uppercase" }}>
            a destination <br/>
            where you don’t <br/>
            just stay — you feel.</h2>
        
      </div>
      
      // section-4
      <div className="section_4" id="section_4"  style = {{ backgroundImage: "url('./shutterstock_1755911966.png')" }}>
        <h2 style={{ textTransform: "uppercase" }}>
          The world’s first <br />
          musical themed hotel <br />
          that integrates AI, <br />
          music and wellness. </h2>
        
      </div>
      //section-5

      //section-6

      //section-7

      //section-8

      //footer 
       <footer>
     
       </footer>
   
    </>
  );
};

export default Home;

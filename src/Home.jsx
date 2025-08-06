import React from "react";
import "./Home.css";

const Home = () => {
  return (
  <>
     <header>
      <div className="headwrapper">
        <div className="headmenu">
          <nav>
            <ul className="nav_menu">
              <li> 
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#">OUR STORY</a>
              </li>
                  <li className="relative">
            <a href="#">OUR DEVELOPMENTS </a>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.3844 4.25981C12.2204 4.09578 11.9978 4.00362 11.7658 4.00362C11.5338 4.00362 11.3113 4.09578 11.1472 4.25981L6.81594 8.59106L2.48469 4.25981C2.31966 4.10042 2.09863 4.01223 1.86921 4.01422C1.63979 4.01622 1.42033 4.10824 1.25809 4.27047C1.09586 4.4327 1.00384 4.65216 1.00185 4.88159C0.999854 5.11101 1.08805 5.33203 1.24744 5.49706L6.19731 10.4469C6.3614 10.611 6.58392 10.7031 6.81594 10.7031C7.04796 10.7031 7.27047 10.611 7.43456 10.4469L12.3844 5.49706C12.5485 5.33298 12.6406 5.11046 12.6406 4.87844C12.6406 4.64642 12.5485 4.4239 12.3844 4.25981Z" fill="white"/>
            </svg>
            <ul className="dropdown">
              <li><a href="#">DO DUBAI ISLANDS</a></li>
              <li><a href="#">DO NEW CAIRO</a></li>
            </ul>
          </li>

              <li>  <a href="#">ONE</a>  </li>
              <li> <a href="#">MEDIA</a> </li>
            </ul> 
          </nav>
        </div>

        <div className="headlogo">
            <img src="/Final Logo-04.png" className="logo-img" />
        </div>

        <div className="headbtn">
          <a href="#">CON <span><svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.03362 8.99701C1.51197 8.99701 1.06541 8.81127 0.693935 8.43979C0.322457 8.06832 0.136719 7.62175 0.136719 7.1001C0.136719 6.57846 0.322457 6.13189 0.693935 5.76042C1.06541 5.38894 1.51197 5.2032 2.03362 5.2032C2.21541 5.2032 2.38344 5.22501 2.53773 5.26864C2.69201 5.31227 2.84012 5.3774 2.98208 5.46402V0.935164C2.98208 0.8008 3.0276 0.68825 3.11865 0.597515C3.2097 0.506779 3.32225 0.461254 3.4563 0.460938H5.35321C5.48757 0.460938 5.60028 0.506463 5.69133 0.597515C5.78238 0.688566 5.82775 0.801116 5.82743 0.935164V1.88362C5.82743 2.01798 5.78191 2.13069 5.69086 2.22174C5.5998 2.31279 5.48726 2.35816 5.35321 2.35784H3.93053V7.1001C3.93053 7.62175 3.74479 8.06832 3.37331 8.43979C3.00184 8.81127 2.55527 8.99701 2.03362 8.99701Z" fill="#E8A440"/>
          </svg>
        </span> TACT US</a>
        </div>
      </div>
     </header>

    <main>
      <section className="home">
        <div className="banner">
            <div
              className="banner-text"
                style={{
                transform: "translate(0px, 0px)",
                opacity: 1,
                 }}
            >
          <p>live the 
            <strong>
              beat
            </strong>
          </p>
        </div>
        <div className="dropdown-arrow1">
          <svg width="39" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path opacity="0.52" d="M5.11654 2L2 4.30238L19.6604 21.6981L37.3208 4.81402L33.9445 2L19.6604 16.0701L5.11654 2Z" stroke="white" stroke-width="2.03774"/>
             <path opacity="0.52" d="M5.11654 18.3047L2 20.6071L19.6604 38.0028L37.3208 21.1187L33.9445 18.3047L19.6604 32.3748L5.11654 18.3047Z" stroke="white" stroke-width="2.03774"/>
             </svg>

        </div>
         <div className="dropdown-arrow2">
          <svg width="39" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.52" d="M5.11654 2L2 4.30238L19.6604 21.6981L37.3208 4.81402L33.9445 2L19.6604 16.0701L5.11654 2Z" stroke="white" stroke-width="2.03774"/>
          <path opacity="0.52" d="M5.11654 18.3047L2 20.6071L19.6604 38.0028L37.3208 21.1187L33.9445 18.3047L19.6604 32.3748L5.11654 18.3047Z" stroke="white" stroke-width="2.03774"/>
          </svg>

         </div>
            </div>
         <div className="mobile view">

         </div>
      </section>

      <section className="section2">
        <div className="section2_wrapper">
         <h2 className="gradient-text">
          The world’s first <br />
          musical themed hotel <br />
          that integrates AI, <br />
          music and wellness.
        </h2>
        </div>
      </section>

      <section className="section3">
        <div className="section3_wrapper">
          <p className="head_hotel">
             DO HOTELS & RESIDENCES
          </p>
          <h2 className = "comm_title">
            STORY</h2>
          <p className="content_3">
            Every detail here is crafted to create connection
            and inspire creativity. It’s an invitation to live 
            boldly, experience the music in every moment,
            embrace the rhythm of life, and truly live the beat.
          </p>
          <a href="#">
            explore more
          </a>
        </div>

      </section>

      <section className="section4">
       <div className="section4_wrapper">
        <h2 className ="section4_text">
          <span>
            <p>
            <strong>
              a destination 
            </strong>
            </p>
             <p>
            <strong>
              where you don’t 
            </strong>
            </p>
             <p>
            <strong>
               just stay — you feel.
            </strong>
            </p>
            </span>
        </h2>
       </div>        
      </section>

      <section className="section5">
      <div className ="section5_wrapper">
        <p>DO HOTELS & RESIDENCES</p>
        <h2 className = "comm_title">
          <span>our developments</span>  
        </h2>
      </div>
      </section>

      <section className="section6">
        <div className ="section6_wrapper">
      <div className="slide_wrapper">
        <div className="slidebox">
          <div className="slide1_md">
          <p>
            Music isn’t just a backdrop here; it’s the energy that drives the hotel, creating an environment that constantly evolves, flows, and inspires.
          </p>
          <div className="mdtitle">
            <h3>Music Driven</h3>
          </div>
          </div>
         </div> 
          <div className="slide2_es">
         <p>
             We provide meaningful journeys that blend luxuary with local culture, technology, and wellness, allowing guests truly experience every aspect rather than simply observe it.
          </p>
          <div className="estitle">
            <h3>Experimental Stays</h3>
          </div>
          </div>
          <div className="slide3_hw">
           <p>
           Go beyond indulgence with bespoke experiences that combine wellness and personel growth, allowing you to leave feeling revived and inspired.
          </p>
          <div className="hwtitle">
            <h3>Holistic Wellbeing</h3>
          </div>
          </div>
          <div className="slide4_pt">
          <p>
            With cutting edge AI technology it's not just about remembering your preferences-It's about anticipating them to create a truly besopke experience.
          </p>
          <div className="pttitle">
            <h3>Personalization through AI </h3>
          </div>
        </div>
         <div className="slide5_gp">
          <p>
           Launching with a strong foundation, were bringing our vision to life in key cities starting with UAE, Egypt, Saudi Arabia, Greece.
          </p>
          <div className="gptitle">
            <h3>Global Presence</h3>
          </div>
        </div>
        </div>
      </div>

      </section>

      <section className="section7">
      <div className="section7_wrapper">
        <div className="mediahead">
        <p>
         DO HOTELS & RESIDENCES
        </p>
        <h2 class = "comm_title">
          <span>MEDIA</span>
        </h2>
        </div>
        <div className="slick_box">
        
        </div>
      </div>
  
 
      </section>

      <section className="section8">
      <div className="section8_wrapper">
        
      </div>

      </section>

      <footer>
        <div className="footer"></div>
        
        
      </footer>
    </main>
     
  </>
  );
};

export default Home;

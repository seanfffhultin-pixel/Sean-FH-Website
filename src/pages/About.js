import React from "react";
import TopLists from "../components/Toplists";
import Gallery from "../components/Gallery";
import AirlineCarousel from "../components/AirlineCarousel";
import AircraftCarousel from "../components/AircraftCarousel";

export default function About() {
  return (
    <section id="About" className="about-section">
      <h2 className="about-title">My Story</h2>

      {/* Block 1: Aviation Passion */}
      <div className="about-block">
        <img
          src="https://i.postimg.cc/mD5vNQN7/IMG-3689.jpg"
          alt="Plane Window"
          className="about-img"
        />
        <div className="about-text">
          <h3>My Passion for Aviation</h3>
          <p>
            I've always loved aviation and traveling — in fact my father is a pilot
            and used to work for <span className="highlight">British Airways</span> — and that
            was the spark that ignited my love for the metal tube that is the plane.
          </p>
          <p>
            I have been lucky enough to fly more than I can count — even before
            this YouTube channel existed. My favourite aircraft manufacturer has
            always been <span className="highlight">Airbus</span> (but I respect Boeing fans!).
          </p>
          <p>
            My favourite plane used to be the <span className="highlight">A380</span>, but it recently
            changed to the <span className="highlight">A350</span> because of its elegance, quietness, 
            and beautiful design. I really love <strong>PLANES!</strong>
          </p>
        </div>
      </div>

      {/* Block 2: Channel Story */}
      <div className="about-block reverse">
        <img
          src="https://i.postimg.cc/1tb95xdH/46C8BA13-A5BE-4267-ABCF-BA129F271CF2.jpg"
          alt="Traveling"
          className="about-img"
        />
        <div className="about-text">
          <h3>My Channel – Sean FH Travels</h3>
          <p>
            The idea for this channel began once I'd graduated from primary school
            and was about to start secondary school. In the summer holidays, my family
            went on an unforgettable trip to Australia — what I called
            <span className="highlight"> “Around the World in Not Long.”</span>
          </p>
          <p>
            This trip kickstarted my love for travel vlogging and airline reviews.
            Since then, I've watched creators like NonstopDan almost daily, and that
            inspired me to chase this path.
          </p>
        </div>
      </div>

      {/* Block 3: Future Goals */}
      <div className="about-block">
        <img
          src="https://i.postimg.cc/VkJ5ZGpH/IMG-4081.jpg"
          alt="Runway"
          className="about-img"
        />
        <div className="about-text">
          <h3>The Future – More Subscribers?</h3>
          <p>
            My dream is to be like other major flight reviewers with hundreds of thousands
            of subscribers — to help you travel smarter, see the world, and enjoy the
            aviation world as much as I do.
          </p>
          <p>
            Every time I upload a video, I ask myself:
            <i> “Will this be the one that goes viral?” </i>
            Sometimes it's luck — sometimes it's the grind.
          </p>
          <p>
            If you're reading this, you’re probably already subscribed. 
            But if not… what are you waiting for? -    
            <strong>Hit that button — it REALLY helps!</strong>
          </p>
        </div>
      </div>

      {/* ✨ New Sections */}
      
      <AirlineCarousel />

      
      
      <TopLists />



      <AircraftCarousel />
      
      

      <Gallery />

      
    </section>
  );
}

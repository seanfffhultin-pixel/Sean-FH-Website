import React from "react";

export default function AboutMe() {
  return (
    <section
      id="about"
      style={{
        marginTop: "80px",
        padding: "0 20px",
      }}
    >
      <h3 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "20px" }}>
        About Me
      </h3>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <img
          src="https://i.postimg.cc/tTNKs36X/IMG-0657.jpg"
          alt="Sean FH"
          style={{
            width: "160px",
            height: "160px",
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          }}
        />

        <div style={{ flex: 1 }}>
          <p style={{ color: "#4A4A4A", lineHeight: "1.6", marginBottom: "15px" }}>
            Hi I'm Sean - a Thai, German, Swede born in the UK, and I love traveling and Youtube!
          </p>
          <p style={{ color: "#4A4A4A", lineHeight: "1.6" }}>
            Sean FH Travels - Formerly Gold Silver Star Travel - is my Youtube channel. A channel that, so far, I have poured hours and hours of hard work into. Whether it is filming or editing. This channel is my way of saying to you what I feel.
          </p>
          <p style={{ color: "#4A4A4A", lineHeight: "1.6" }}>
            When I started I was aiming for more of a vlog channel that focused on my experience and adventure, but as time flew on I have come to realise that my chaneel isnt just for my enjoyment, but for you as well - the viewer. My channel is aimed at you and honesty plays a huge part in this story - if I didn't say how I felt then what is the point?
          </p>
          <p style={{ color: "#4A4A4A", lineHeight: "1.6" }}>
            This channel is for YOU to decide for yourself going of of others opinions and reviews. It is your choice - I'm just here to nudge you to the right thing, experience or airline. YOU - the consumer and viewer get to decide and I'm honoured to help you find the right thing for you.
          </p>
          <p style={{ color: "#4A4A4A", lineHeight: "1.6" }}>
            Thanks for watching!
          </p>
        </div>
      </div>

      <h3 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "20px" }}>
        My Story
      </h3>

      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <h3 style={{ fontSize: "15px", fontWeight: "600", marginBottom: "20px" }}>
        My Passion for Avaition
        </h3>

          <div style={{ flex: 1 }}>
            <p style={{ color: "#4A4A4A", lineHeight: "1.6", marginBottom: "15px" }}>
              I've always loved aviation and traveling - in fact my father is a pilot and used to work for British Airways - and that was the starter to the fire that is my love for the metal tube that is the plane. I have been lucky enough to have flown more than I can count - even before this Youtube channel came to mind. My favourite aircraft manufacturer has always been Airbus but I respect Boeing fans. My favourite plane used to be the A380 but it has recently changed to the A350 - this is because of its elegance and sleek, beautiful design. I really love PLANES!
            </p>
          
          </div>

        <h3 style={{ fontSize: "15px", fontWeight: "600", marginBottom: "20px" }}>
        My Channel - Sean FH Travels
        </h3>

          <div style={{ flex: 1 }}>
            <p style={{ color: "#4A4A4A", lineHeight: "1.6", marginBottom: "15px" }}>
              The idea for this channel came to be once I'd graduated from Primary school and I was about to go into secondary school. In the transitional months between the schools - in the summer holidays (6 weeks) between the beginning of the new school year. I and my family went on an unforgettable trip to Australia on what I called 'Around the World in Not long' (the video playlist is still up on my channel). This trip kickstarted my love for travel vlogging and Airline reviews. nearly every day since I have watched at least one video from an Airline reviewer (Nonstop Dan etc.) and well... thats who I aspire to be.
            </p>
          
          </div>

        <h3 style={{ fontSize: "15px", fontWeight: "600", marginBottom: "20px" }}>
        The Future - More Subscribers?
        </h3>

          <div style={{ flex: 1 }}>
            <p style={{ color: "#4A4A4A", lineHeight: "1.6", marginBottom: "15px" }}>
              My dream is to be like other major flight reviewers with hundreds of thousands of subscribers. To help you with your travels. And to maybe make a little cash along the way? With every video I publish, I always say to myself 'will this be the one that goes viral?' but thats just luck! Or is it? - Yes I know this is very Vsauce esc. but this is my plane. If you are reading this, surely you are subscribed! But If you are not, please go and click that button, It REALLY helps me out (No, seriously it does!) With every subscriber, the videos will get better! So you can assist me in my journey! Help a pal out!
              SUBSCRIBE!
            </p>
          
          </div>
        </div>
    </section>
  );
}

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

    </section>
  );
}

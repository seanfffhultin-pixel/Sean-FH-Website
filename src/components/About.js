import React from "react";
import "../App.css";

export default function AboutMe() {
  return (
    <section id="about" className="about-me-section">
      <h3>About Me</h3>

      <div className="about-me-container">
        <div className="about-me-img-wrapper">
        <img
          src="https://i.postimg.cc/Y9ZC1tjZ/IMG-3911.jpg"
          alt="Sean FH"
          className="about-me-img"
        />
        </div>

        <div className="about-me-text">
          <p>
            Hi I'm Sean - a Thai, German, Swede born in the UK, and I love traveling and YouTube!
          </p>
          <p>
            Sean FH Travels - Formerly Gold Silver Star Travel - is my YouTube channel. A channel that, so far, I have poured hours and hours of hard work into. Whether it is filming or editing. This channel is my way of saying to you what I feel.
          </p>
          <p>
            When I started I was aiming for more of a vlog channel that focused on my experience and adventure, but as time flew on I have come to realise that my channel isn't just for my enjoyment, but for you as well - the viewer. My channel is aimed at you and honesty plays a huge part in this story - if I didn't say how I felt then what is the point?
          </p>
          <p>
            This channel is for YOU to decide for yourself going off of others' opinions and reviews. It is your choice - I'm just here to nudge you to the right thing, experience or airline. YOU - the consumer and viewer get to decide and I'm honoured to help you find the right thing for you.
          </p>
          <p>Thanks for watching!</p>
        </div>
      </div>
    </section>
  );
}

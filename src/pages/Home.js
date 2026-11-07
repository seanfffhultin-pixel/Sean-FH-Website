import React from "react";
import "../App.css";   // <-- FIXED

import Hero from "../components/HomeHero"; 
import FloatingVideoCard from "../components/FloatingVideoCard";
import SubscriberNotification from "../components/SubscriberNotification";
import Latestuploads from "../components/Latestuploads";
import Gallery from "../components/Gallery";
import Socials from "../components/Socials";
import About from "../components/About";
import Featuredreview from "../components/Featuredreview";
import TopLists from "../components/Toplists";

export default function Home() {
  return (
    <>
      <Hero />
      <SubscriberNotification />
      <FloatingVideoCard />
      <About />
      <section className="featured-latest-row">
        <Featuredreview />
        <Latestuploads />
      </section>
      <TopLists />
      <Gallery />
      <Socials />
    </>
  );
}

import React from "react";
import "../App.css";   // <-- FIXED

import Hero from "../components/Hero"; 
import Latestuploads from "../components/Latestuploads";
import Gallery from "../components/Gallery";
import Socials from "../components/Socials";
import Footer from "../components/Footer";
import About from "../components/About";
import Featuredreview from "../components/Featuredreview";
import Podcast from "../components/Podcast";
import TopLists from "../components/Toplists";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Featuredreview />
      <Latestuploads />
      <Podcast />
      <TopLists />
      <Gallery />
      <Socials />
      <Footer />
    </>
  );
}

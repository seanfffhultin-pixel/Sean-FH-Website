import React from "react";
import "../App.css";   // <-- FIXED

import Hero from "../components/Hero"; 
import Latestuploads from "../components/Latestuploads";
import Gallery from "../components/Gallery";
import Socials from "../components/Socials";
import Footer from "../components/Footer";
import About from "../components/About";
import Topairports from "../components/Topairports";
import Topairlines from "../components/Topairlines";
import Featuredreview from "../components/Featuredreview";
import Podcast from "../components/Podcast";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Featuredreview />
      <Latestuploads />
      <Podcast />
      <Topairports />
      <Topairlines />
      <Gallery />
      <Socials />
      <Footer />
    </>
  );
}

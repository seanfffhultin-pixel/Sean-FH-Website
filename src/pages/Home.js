import React from "react";
import "../App.css";   // <-- FIXED

import Hero from "../components/Hero"; 
import FloatingVideoCard from "../components/FloatingVideoCard";
import Latestuploads from "../components/Latestuploads";
import Gallery from "../components/Gallery";
import Socials from "../components/Socials";
import About from "../components/About";
import Featuredreview from "../components/Featuredreview";
import Podcast from "../components/Podcast";
import TopLists from "../components/Toplists";

export default function Home() {
  return (
    <>
      <Hero />
      <FloatingVideoCard />
      <About />
      <Featuredreview />
      <Latestuploads />
      <Podcast />
      <TopLists />
      <Gallery />
      <Socials />
    </>
  );
}

import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Videos from "./components/Videos";
import Gallery from "./components/Gallery";
import Socials from "./components/Socials";
import Footer from "./components/Footer";
import Info from "./components/About";
import Airports from "./components/Topairports";
import Airlines from "./components/Topairlines";
export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <main>
        <Info />
        <Videos />
        <Gallery />
        <Airports />
        <Airlines />
        <Socials />
      </main>
      <Footer />
    </div>
  );
}

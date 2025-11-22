import "./App.css"
import Hero from "./components/Hero";
import Latestuploads from "./components/Latestuploads";
import Gallery from "./components/Gallery";
import Socials from "./components/Socials";
import Footer from "./components/Footer";
import Info from "./components/About";
import Airports from "./components/Topairports";
import Airlines from "./components/Topairlines";
import Featuredreview from "./components/Featuredreview";
import MyStory from "./components/Mystory";
import Podcast from "./components/Podcast";
export default function App() {
  return (
    <div>
      
      <Hero />
      <main>
        <Info />
        <MyStory />
        <Featuredreview />
        <Latestuploads/>
        <Podcast />
        <Airlines />
        <Airports />
        <Gallery />
        <Socials />
      </main>
      <Footer />
    </div>
  );
}

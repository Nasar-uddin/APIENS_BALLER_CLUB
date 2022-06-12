import About from "./components/About/About";
import Artists from "./components/Artists/Artists";
import Faq from "./components/Faq/Faq";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Roadmap from "./components/Roadmap/Roadmap";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Intro />
        <About />
        <Features />
        <Roadmap />
        <Artists />
        <Gallery />
        <Faq />
        <Footer />
      </main>
    </div>
  );
}

export default App;

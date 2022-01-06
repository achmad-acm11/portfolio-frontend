import AboutMe from "parts/AboutMe";
import Header from "parts/Header";
import Hero from "parts/Hero";
import Skills from "parts/Skills";
import "./assets/scss/style.scss";
import "./assets/js/script";
import Portfolio from "parts/Portfolio";
import Footer from "parts/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;

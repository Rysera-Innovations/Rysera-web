import "./App.css";

import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="header">
        <Navbar />
      </div>
      <div className="App-body">
        <section id="hero" style={{ paddingTop: "50px" }}>
          <Hero />
        </section>
        <section id="aboutUs" style={{ paddingTop: "100px" }}>
          <AboutUs />
        </section>
        <section id="services" style={{ paddingTop: "100px" }}>
          <Services />
        </section>
        <section
          id="contactUs"
          style={{ paddingTop: "80px", paddingBottom: "100px" }}
        >
          <ContactUs />
        </section>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;

import "./App.css";

import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Printing from "./components/3DPrinting";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
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
              <section id="3dprinting" style={{ paddingTop: "100px" }}>
                <Printing />
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
        }
      />
      <Route
        path="/stem"
        element={useEffect(() => {
          window.location.href =
            "https://lace-professor-6ab.notion.site/Electronics-Day-01-19af9c1740a280ee83cfc2a71115c96f?pvs=4";
        }, [])}
      />
    </Routes>
  );
}

export default App;

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
        <section>
          <Hero />
        </section>
        <section>
          <AboutUs />
        </section>
        <section>
          <Services />
        </section>
        <section>
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

import "./App.css";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Hero/>
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}

export default App;

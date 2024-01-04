import "./App.css";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}

export default App;

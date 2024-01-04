import "./App.css";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <>
      <div className="App-body">
        <section>
          <AboutUs />
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

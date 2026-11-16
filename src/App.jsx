import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import DemoForm from "./components/DemoForm";
import Footer from "./components/Footer";
import "./App.css";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <DemoForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
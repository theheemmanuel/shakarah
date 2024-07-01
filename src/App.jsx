import "./App.css";
import Footer from "./Component/Footer";
import Hero from "./Component/Hero";
import Navbar from "./Component/Navbar";
import Newletter from "./Component/Newletter";
import PriceRange from "./Component/PriceRange";
import ProdDetails from "./Component/ProdDetails";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProdDetails />
      <PriceRange />
      <Newletter />
      <Footer />
    </div>
  );
}

export default App;

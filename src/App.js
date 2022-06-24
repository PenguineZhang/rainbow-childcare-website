import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Banner />
      <AboutUs />
    </div>
  );
}

export default App;

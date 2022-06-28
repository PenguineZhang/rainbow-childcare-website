import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import AboutUs from "./components/AboutUs";
import Queue from "./components/Queue";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Banner />
      <AboutUs />
      <Queue />
    </div>
  );
}

export default App;

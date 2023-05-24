import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav"; 
import CountryInfo from "./components/CountryInfo";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Countryinfo"  element={<CountryInfo/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

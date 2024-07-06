import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Collection from "./Components/Collection/Collection";
import OurFarm from "./Pages/Our Farm/OurFarm";
import HeaderContainer from "./Components/jsx/HeaderContainer";
import Aboutus from "./Pages/About Us/Aboutus";
import { useProductContext } from "./Context/ProductContext";
import SingleProduct from "./Components/jsx/SingleProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/collection/:productType" element={<Collection />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/our-farm" element={<OurFarm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

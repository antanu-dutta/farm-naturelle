import HeaderContainer from "./Components/Header/Header Container/HeaderContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import { useRef } from "react";
import Footer from "./Components/Footer/Footer";

function App() {
  const ref = useRef(null);
  return (
    <>
      <BrowserRouter>
        <HeaderContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

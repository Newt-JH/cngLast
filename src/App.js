import { BrowserRouter, Link, Route, Switch, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Main from "./pages/Main";
import Sub1 from "./pages/SubPage/Sub-intro";
import Sub2 from "./pages/SubPage/Sub-intro2";
import Sub21 from "./pages/SubPage/Sub-intro2_1";
import Sub22 from "./pages/SubPage/Sub-intro2_2";
import Sub3 from "./pages/SubPage/Sub-intro-3";
import ScrollToTop from "./component/ScrollToTop";
import SubRental from "./pages/SubPage/Sub-rental";

function App() {
  return (
    <>
    
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Sub1" element={<Sub1 />} />
        <Route path="/Sub2" element={<Sub2 />} />
        <Route path="/Sub2_1" element={<Sub21 />} />
        <Route path="/Sub2_2" element={<Sub22 />} />
        <Route path="/Sub3" element={<Sub3 />} />
        <Route path="/Rental" element={<SubRental />} />
      </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;

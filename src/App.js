import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CommonNavbar from "./components/common/commonNavbar";
import LandingPage from "./components/common/landingPage";
import CategoryPage from "./components/common/categoryPage";
import ProductPage from "./components/productPage/productPage";
import Dashboard from "./components/dashboard/dashboard";
import UserSignup from "./components/user/userSignup";
import UserLogin from "./components/user/userLogin";
import AddProduct from "./components/productPage/addProduct";
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <Toaster />
      <BrowserRouter basename="glb-store">
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/navbar" element={<CommonNavbar />} />
          <Route path="/categoryPage" element={<CategoryPage />} />
          <Route path="/productPage" element={<ProductPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/userSignup" element={<UserSignup />} />
          <Route path="/userLogin" element={<UserLogin />} />
          <Route path="/addProduct" element={<AddProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

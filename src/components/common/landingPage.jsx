import React from "react";
import CommonNavbar from "./commonNavbar";
import CategoryPage from "./categoryPage";
import ProductPage from "../productPage/productPage";
export default function LandingPage() {
  return (
    <div>
      <CommonNavbar />
      <div className="landingPage-main">
        <div className="landingPage-head">
          ✅ Trusted by 1.5M creators everymonth
        </div>
        <div className="landingPage-head1">
          <h1>3D models for every budget</h1>
        </div>
        <CategoryPage />
        <ProductPage />
      </div>
    </div>
  );
}

import React, { useState } from "react";
import UserNavbar from "../user/userNavbar";
import Sidebar from "./sidebar";
import AddProduct from "../productPage/addProduct";
import ProductPage from "../productPage/productPage";

export default function Dashboard() {
  const [selectedPage, SetSelectedPage] = useState();

  const changeSelectedPage = (value) => {
    SetSelectedPage(value);
  };
  return (
    <div>
      <UserNavbar />
      <div className="row">
        <div className="col-2 p-0">
          <Sidebar changeSelectedPage={changeSelectedPage} />
        </div>
        <div className="col-10 dashboard-main">
          {selectedPage === "uploadCreation" && <AddProduct />}
          {selectedPage === "viewAllModels" && <ProductPage />}
        </div>
      </div>
    </div>
  );
}

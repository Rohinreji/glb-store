import React, { useEffect, useState } from "react";
import demoImg from "../assets/blueCar.jpg";
import CommonNavbar from "../common/commonNavbar";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import ModelPage from "../model/model";
import axiosMultipartInstance from "../apis/axiosMultipartInstance";
import { BASE_URL } from "../apis/baseURL";

export default function UserViewSingleProduct() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getData();
    console.log("data", product);
  }, []);
  const getData = async () => {
    try {
      const response = await axiosMultipartInstance.post("/viewAllModel");
      if (response?.status === 200) {
        setProduct(response?.data?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <CommonNavbar />
      <div className="userViewSingleProduct-main">
        <div className="userViewSingleProduct-box">
          <div className="userViewSingleProduct-innerBox col-8">
            <Canvas
              dpr={[1, 2]}
              shadows
              camera={{ fov: 45 }}
              style={{ position: "relative" }}
            >
              <color attach="background" args={["#000"]} />
              <PresentationControls
                speed={1.5}
                global
                zoom={0.5}
                polar={[-0.1, Math.PI / 4]}
              >
                <Stage environment={"sunset"} intensity={0.5} shadows={false}>
                  <ModelPage scale={0.1} />
                </Stage>
              </PresentationControls>
            </Canvas>

            {/* <img src={demoImg} alt="" /> */}
            <h2>Product name</h2>
            <p>category</p>
            <p>Product description</p>
            <p>published date</p>
          </div>
          <div className="userViewSingleProduct-suggestBox col-3">
            <div className="userViewSingleProduct-suggestInnerBox">
              <h4>Suggestion model</h4>
              {product.map((e) => {
                return (
                  <div className="userViewSingleProduct-recommProduct mb-4">
                    <img src={`${BASE_URL}${e?.img1?.filename}`} alt="" />
                    <h5>{e?.name} </h5>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

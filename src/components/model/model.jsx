import React, { useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import axiosMultipartInstance from "../apis/axiosMultipartInstance";

export default function ModelPage({ props }) {
  const [glb, setGlb] = useState("./bmw_i8.glb");
  const { scene } = useGLTF(glb);

  const [data, SetData] = useState([]);
  useEffect(() => {
    getData();
    console.log("data", data);
  }, []);
  const getData = async () => {
    try {
      const response = await axiosMultipartInstance.post("/viewAllModel");
      if (response?.status === 200) {
        SetData(response?.data?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  return <primitive object={scene} {...props} />;
}

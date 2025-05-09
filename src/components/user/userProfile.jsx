import React, { useEffect, useState } from "react";
import axiosInstance from "../apis/axiosInstance";
import toast from "react-hot-toast";

export default function UserProfile() {
  const [data, SetData] = useState();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      toast.error("Please Login Again");
    } else {
      getData(userId);
    }
  }, []);
  const getData = async (id) => {
    try {
      const response = await axiosInstance.get(`viewUserById/${id}`);
      if (response.status === 200) {
        SetData(response.data.data);
        console.log("data retrieved");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="userProfile-main">
      <h1>
        Hey <b> {data?.fullname} </b> !,Welcome To Glb Store
      </h1>
    </div>
  );
}

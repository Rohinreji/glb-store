import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../apis/axiosInstance";
import toast from "react-hot-toast";
import CommonNavbar from "../common/commonNavbar";

export default function UserLogin() {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  const handleChanges = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sentToServer();
  };

  const sentToServer = async () => {
    try {
      const response = await axiosInstance.post("./userLogin", data);
      if (response.status === 200) {
        const userId = response.data.data._id;
        if (userId) {
          localStorage.setItem("userId", userId);
        }
        toast.success("Login Success");
        navigate("/dashboard");
      }
      console.log(response.status);
    } catch (error) {
      if (
        error.status === 401 ||
        error.status === 405 ||
        error.status === 402
      ) {
        toast.error(error?.response.data.msg);
      } else {
        toast.error("log in again");
      }
      console.log(error);
    }
  };
  return (
    <div className="userSignup-main">
      <CommonNavbar />
      <div className="userSignup-box">
        <h2 className="text-center mt-4">GLB store</h2>
        <Form onSubmit={handleSubmit} className="userSignup-inputs mt-2">
          <Form.Group
            as={Col}
            className="mb-3"
            controlId="validationCustomUsername"
          >
            <Form.Label>Email</Form.Label>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Email"
                name="email"
                onChange={handleChanges}
                aria-describedby="inputGroupPrepend"
                required
              />
            </InputGroup>
          </Form.Group>

          <Form.Group
            as={Col}
            className="mb-3"
            controlId="validationCustomUsername"
          >
            <Form.Label>Password</Form.Label>
            <InputGroup>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChanges}
                aria-describedby="inputGroupPrepend"
                required
              />
            </InputGroup>
          </Form.Group>

          <Button type="submit">Login</Button>
          <p className="text-center mt-3">
            Don't have account?
            <b
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/userSignup");
              }}
            >
              RegisterNow
            </b>
          </p>
        </Form>
      </div>
    </div>
  );
}

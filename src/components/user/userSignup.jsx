import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../apis/axiosInstance";
import CommonNavbar from "../common/commonNavbar";

export default function UserSignup() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("data", data);
    sendDataToServer();
    navigate("/userLogin");
  };
  const sendDataToServer = async () => {
    try {
      const response = await axiosInstance.post("/userSignup", data);
      if (response.status == 200) {
        toast.success(response?.data?.msg);
      } else {
        toast.error(response.data.msg);
      }
    } catch (error) {
      if (error?.status === 409 || error?.status === 408) {
        toast.error(error?.response?.data.msg);
      } else {
        console.log(error);
      }
    }
  };
  return (
    <div className="userSignup-main">
      <CommonNavbar/>
      <div className="userSignup-box">
        <h2 className="text-center">GLB store</h2>
        <Form onSubmit={handleSubmit} className="userSignup-inputs">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="validationCustom01">
              <Form.Label>Fullname</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Fullname"
                name="fullname"
                onChange={handleChange}
              />
            </Form.Group>
          </Row>
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
                onChange={handleChange}
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
                onChange={handleChange}
                aria-describedby="inputGroupPrepend"
                required
              />
            </InputGroup>
          </Form.Group>

          <Button type="submit">SignUp</Button>
          <p className="text-center mt-3">
            Already have account?
            <b
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/userLogin");
              }}
            >
              LoginNow
            </b>
          </p>
        </Form>
      </div>
    </div>
  );
}

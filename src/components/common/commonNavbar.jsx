import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import brandlogo from "../assets/brandlogo.jpg";
import Button from "@mui/material/Button";
import Person from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";

export default function CommonNavbar() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      setUserId(userId);
    }
  },[]);
  console.log("id", userId);

  return (
    <div>
      <Navbar expand="lg" className="commonNav">
        <Container>
          <Navbar.Brand
            href="#"
            className="commonNav-name fs-4"
            onClick={() => {
              navigate("/");
            }}
          >
            <img
              alt=""
              src={brandlogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              style={{ borderRadius: "20px", margin: "0 5px" }}
            />
            GLB Store
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Button
                variant="outlined"
                color="black"
                onClick={() => {
                  navigate("/userLogin");
                }}
              >
                {" "}
                <Person fontSize="lg" />
                Login
              </Button>
              <Button
                variant="outlined"
                color="black"
                onClick={() => {
                  navigate("/userSignup");
                }}
              >
                Signup
              </Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import axiosMultipartInstance from "../apis/axiosMultipartInstance";
import toast from "react-hot-toast";

export default function AddProduct() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    creatot: "",
    category: "",
    img1: null,
    img2: null,
    modelFile: null,
  });
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setData({ ...data, [name]: files[0] });
    } else {
      setData({ ...data, [name]: value });
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("data", data);
    const { name, creator, category, img1, img2, modelFile } = data;
    const formData = new FormData();
    formData.append("name", name);
    formData.append("creator", creator);
    formData.append("category", category);
    formData.append("img1", img1);
    formData.append("img2", img2);
    formData.append("modelFile", modelFile);

    sendDataToServer(formData);
  };

  const sendDataToServer = async (data) => {
    try {
      const response = await axiosMultipartInstance.post("/addModels", data);
      if (response?.status === 200) {
        toast.success(response?.data?.msg);
      }
    } catch (error) {
      toast.error("network error");
    }
  };
  return (
    <div>
      <div className="userSignup-main">
        <div className="userSignup-box">
          <h2 className="text-center">Upload Your Creation</h2>
          <Form onSubmit={handleSubmit} className="userSignup-inputs">
            <Row className="mb-2">
              <Form.Group as={Col} controlId="validationCustom01">
                <Form.Label>ModelName</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="modelname"
                  name="name"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group
                as={Col}
                className="mb-2"
                controlId="validationCustomUsername"
              >
                <Form.Label>Creator</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="text"
                    name="creator"
                    onChange={handleChange}
                    placeholder="Creator name"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className="mb-2">
              <Form.Group as={Col} controlId="validationCustom01">
                <Form.Label>Category</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="category"
                  onChange={handleChange}
                >
                  <option>Open this select menu</option>
                  <option value="Car">Car</option>
                  <option value="Bike">Bike</option>
                  <option value="Charater">Charater</option>
                  <option value="Heavy vehicles">Heavy vehicles</option>
                  <option value="Land">Land</option>
                  <option value="Others">Others</option>
                </Form.Select>
              </Form.Group>
              <Form.Group
                as={Col}
                className="mb-2"
                controlId="validationCustomUsername"
              >
                <Form.Label>Screenshot 1</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="file"
                    placeholder="upload file"
                    name="img1"
                    onChange={handleChange}
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className="mb-2">
              <Form.Group as={Col} controlId="validationCustom01">
                <Form.Label>Screenshot 2</Form.Label>
                <Form.Control
                  required
                  type="file"
                  placeholder="upload file"
                  name="img2"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group
                as={Col}
                className="mb-3"
                controlId="validationCustomUsername"
              >
                <Form.Label>Model File</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="file"
                    placeholder="upload file"
                    name="modelFile"
                    onChange={handleChange}
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                </InputGroup>
              </Form.Group>
            </Row>

            <Button type="submit">Uplod</Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

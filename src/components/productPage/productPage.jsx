import React, { useEffect, useState } from "react";
import demoPic from "../assets/dgGlbPic.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import axiosMultipartInstance from "../apis/axiosMultipartInstance";
import {BASE_URL} from "../apis/baseURL"

export default function ProductPage() {
  const [data, SetData] = useState([]);
  useEffect(() => {
    getData();
    console.log("data", data);
  },[]);
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
  return (
    <div>
      <Row>
        {data.map((e) => {
          return (
            <Col xs={6} md={3} className="d-flex flex-wrap gap-5 px-4 py-4">
              <Card sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}>
                <CardOverflow>
                  <AspectRatio sx={{ minWidth: 200 }}>
                    <img src={`${BASE_URL}${e?.img1?.filename}`} loading="lazy" alt="" />
                  </AspectRatio>
                </CardOverflow>
                <CardContent>
                  <Typography level="body-xs" textTransform={"uppercase"}>
                    {e?.category}
                  </Typography>
                  <Link
                    href="#product-card"
                    color="neutral"
                    textColor="text.primary"
                    overlay
                    endDecorator={<ArrowOutwardIcon />}
                    sx={{ fontWeight: "md" }}
                  >
                    {e?.name}
                  </Link>

                  <Typography level="title-lg" sx={{ mt: 1, fontWeight: "xl" }}>
                    2,900 THB
                  </Typography>
                  <Typography level="body-sm">
                    (Created by <b>{e?.creator} </b>)
                  </Typography>
                </CardContent>
                <CardOverflow>
                  <Button variant="solid" color="danger" size="lg">
                    View More
                  </Button>
                </CardOverflow>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

import React from "react";
import { makeStyles } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const ProductCard = (props) => {
  return (
    <Card>
      <CardMedia image={props.images[0].path} />
      <CardContent></CardContent>
    </Card>
  );
};

export default ProductCard;

import React from "react";
import { makeStyles } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      margin: 8,
      width: "calc(50% - 16px)",
    },
    [theme.breakpoints.up("sm")]: {
      margin: 16,
      width: "calc(33.3333% - 32px)",
    },
  },
}));

const ProductCard = (props) => {
  const price = props.price.toLocaleString();
  return (
    <Card>
      <CardMedia image={props.images[0].path} />
      <CardContent>
        <Typography color="textSecondary" component="p">
          {props.name}
        </Typography>
        <Typography component="p">¥{price}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;

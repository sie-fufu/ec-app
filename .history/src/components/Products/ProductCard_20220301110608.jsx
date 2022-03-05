import React from "react";
import { makeStyles } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import NoImage from "../../assets/img/src/no_image.png";

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
    content: {
      display: "flex",
      padding: "16px 8px",
      textAlign: "left",
      "&:last-child": {
        paddingBottom: 16,
      },
    },
    media: {
      height: 0,
      paddingTp: "100%",
    },
    price: {
      color: theme.pallette.secondary,
      fontSize: 16,
    },
  },
}));

const ProductCard = (props) => {
  const classes = useStyles();
  const images = props.images.length > 0 ? props.images : [{ path: NoImage }];

  const price = props.price.toLocaleString();
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={props.images[0].path} />
      <CardContent className={classes.content}>
        <Typography color="textSecondary" component="p">
          {props.name}
        </Typography>
        <Typography className={classes.price} component="p">
          ¥{price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;

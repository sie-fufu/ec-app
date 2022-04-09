import React from "react";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { makeStyles } from "@mui/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

const useStyles = makeStyles({
  list: {
    height: 128,
  },
  image: {
    objectFit: "cover",
    margin: 16,
    height: 96,
    width: 96,
  },
  text: {
    width: "100%",
  },
});

const CartListItem = (props) => {
  const classes = useStyles();

  const image = props.product.images[0].path;
  const price = props.product.price.toLocaleString();

  return (
    <>
      <ListItem className={classes.list}>
        <ListItemAvatar></ListItemAvatar>
      </ListItem>
    </>
  );
};

export default CartListItem;

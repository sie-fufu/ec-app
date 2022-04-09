import React from "react";
import { makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import logo from "../../assets/img/FFLogo/1.png";
import { useSelector } from "react-redux";
import { getSignedIn } from "../../reducks/users/selectors";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  menuBar: {
    backgroundColor: "#fff",
    color: "#444",
  },
  toolbar: {
    margin: "0 auto",
    maxWidth: 1024,
    width: "100%",
  },
  iconButtons: {
    margin: "0 0 0 auto",
  },
});

const Header = () => {
  const classes = useStyles();
  const selector = useSelector((state) => state);
  const isSignedIn = getSignedIn(selector);

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.menuBar}>
        <img src={logo} alt="Sie Logo" width="100x" hight="100px" />
        <Toolbar className={classes.toolbar}></Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;

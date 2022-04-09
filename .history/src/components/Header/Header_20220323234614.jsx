import React from "react";
import { makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import logo from "../../assets/img/FFLogo/2.png";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
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
    maxHeight: "50px",
  },
  iconButtons: {
    margin: "0 0 0 auto",
  },
});

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const isSignedIn = getSignedIn(selector);

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={classes.menuBar}
        backgroundColor="#fff"
      >
        <Toolbar className={classes.toolbar}>
          <img
            src={logo}
            alt="Sie Logo"
            width="50px"
            onClick={() => dispatch(push("/"))}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;

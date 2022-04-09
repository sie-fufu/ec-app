import React, { useCallback, useState } from "react";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { makeStyles } from "@mui/styles";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import HistoryIcon from "@mui/icons-material/History";
import PersonIcon from "@mui/icons-material/Person";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { TextInput } from "../UIkit/index";

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      flexShrink: 0,
      width: 256,
    },
    serchField: {
      alignItems: "center",
      display: "flex",
      marginLeft: 32,
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: 256,
}));

const ClosableDrawer = (props) => {
  const classes = useStyles();
  const { container } = props;

  const [keyword, setKeyword] = useState("");

  const inputKeyword = useCallback(
    (event) => {
      setKeyword(event.target.value);
    },
    [setKeyword]
  );

  return (
    <nav className={classes.drawer}>
      <Drawer
        container={container}
        variant="temporary"
        anchor="right"
        open={props.open}
        onClose={(e) => props.onClose(e)}
        classes={{ paper: classes.drawerPaper }}
        ModalProps={{ keepMounted: true }}
      >
        <div>
          <div className={classes.searchField}>
            <TextInput
              fulWidth={false}
              label={"キーワードを入力"}
              multiLine={false}
              onChange={inputKeyword}
              required={false}
              rows={1}
              value={keyword}
              type={"text"}
            />
            <IconButton></IconButton>
          </div>
        </div>
      </Drawer>
    </nav>
  );
};

export default ClosableDrawer;

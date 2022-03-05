import { makeStyles, TableContainer } from "@mui/material";
import { Paper } from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TextInput } from "../UIkit";
import React from "react";
const useStyles = makeStyles({
  checkIcon: {
    float: right
  },
  iconCell: {
    height: 48,
    width: 48,
  },
});

const SetSizeArea = (props) => {
  const classes = useStyles();

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>サイズ</TableCell>
              <TableCell>数量</TableCell>
              <TableCell className={classes.iconCell} />
              <TableCell className={classes.iconCell} />
            </TableRow>
          </TableHead>
          <TableBody>
            {props.sizes.length > 0 &&
              props.sizes.map((item, index) => {
                <TableRow key={item.size}>
                  <TableCell>{item.size}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>
                    <IconButton className={classes.iconCell}>
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <IconButton className={classes.iconCell}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>;
              })}
          </TableBody>
        </Table>
        <div>
          <TextInput fullWidth={false} label={"サイズ"} multiline={false} required={true} onChange={} rows={1} value={} type={"text"}/>
          <TextInput fullWidth={false} label={"数量"} multiline={false} required={true} onChange={} rows={1} value={} type={"number"}/>
        </div>
        <IconButton className={classes.checkIcon}>
          <CheckCircleIcon />
        </IconButton>
      </TableContainer>
    </div>
  );
};

export default SetSizeArea;

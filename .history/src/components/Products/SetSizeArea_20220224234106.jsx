import TableContainer from "@mui/material/TableContainer";
import { makeStyles } from "@mui/styles";
import Paper from "@mui/material/Paper";
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
import React, { useCallback } from "react";
import { useState } from "react";
import { useMemo } from "react";

const useStyles = makeStyles({
  checkIcon: {
    float: " right",
  },
  iconCell: {
    height: 48,
    width: 48,
  },
});

const SetSizeArea = (props) => {
  const classes = useStyles();

  const [index, setIndex] = useState(0),
    [size, setSize] = useState(""),
    [quantity, setQuantity] = useState(0);

  const inputSize = useCallback(
    (event) => {
      setSize(event.target.value);
    },
    [setSize]
  );

  const inputQuantity = useCallback(
    (event) => {
      setQuantity(event.target.value);
    },
    [setQuantity]
  );

  const addSize = (index, size, quantity) => {
    if (size === "" || quantity === 0) {
      // Required input is blank
      return false;
    } else {
      if (index === props.sizes.length) {
        props.setSizes((prevState) => [
          ...prevState,
          { size: size, quantity: quantity },
        ]);
        setIndex(index + 1);
        setSize("");
        setQuantity(0);
      } else {
        const newSizes = props.sizes;
        newSizes[index] = { size: size, quantity: quantity };
        props.setSizes(newSizes);
        setIndex(newSizes.length);
        setSize("");
        setQuantity(0);
      }
    }
  };

  const editSize = (index, size, quantity) => {
    setIndex(index);
    setSize(size);
    setQuantity(quantity);
  };
  const deleteSize = (deleteIndex) => {
    const newSizes = props.sizes.filter((item, i) => i !== deleteIndex);
    props.setSizes(newSizes);
  };

  const memoIndex = useMemo(() => {
    setIndex(props.sizes.length);
  }, [props.sizes.length]);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>?????????</TableCell>
              <TableCell>??????</TableCell>
              <TableCell className={classes.iconCell} />
              <TableCell className={classes.iconCell} />
            </TableRow>
          </TableHead>
          <TableBody>
            {props.sizes.length > 0 &&
              props.sizes.map((item, i) => (
                <TableRow key={item.size}>
                  <TableCell>{item.size}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>
                    <IconButton
                      className={classes.iconCell}
                      onClick={() => editSize(i, item.size, item.quantity)}
                    >
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <IconButton
                      className={classes.iconCell}
                      onClick={() => deleteSize(i)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <div>
          <TextInput
            fullWidth={false}
            label={"?????????"}
            multiline={false}
            required={true}
            onChange={inputSize}
            rows={1}
            value={size}
            type={"text"}
          />
          <TextInput
            fullWidth={false}
            label={"??????"}
            multiline={false}
            required={true}
            onChange={inputQuantity}
            rows={1}
            value={quantity}
            type={"number"}
          />
        </div>
        <IconButton
          className={classes.checkIcon}
          onClick={() => addSize(index, size, quantity)}
        >
          <CheckCircleIcon />
        </IconButton>
      </TableContainer>
    </div>
  );
};

export default SetSizeArea;

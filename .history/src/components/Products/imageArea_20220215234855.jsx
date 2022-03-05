import React from "react";
import IconButton from "@material-ui/core/IconButton";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

const ImageArea = (props) => {
  return (
    <div>
      <div className="u-text-right">
        <span>
          <IconButton>
            <AddPhotoAlternateIcon></AddPhotoAlternateIcon>
          </IconButton>
        </span>
      </div>
    </div>
  );
};

export default ImageArea;

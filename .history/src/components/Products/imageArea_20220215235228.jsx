import React from "react";
import IconButton from "@material-ui/core/IconButton";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

const ImageArea = (props) => {
  return (
    <div>
      <div className="u-text-right">
        <span>商品画像を登録する</span>
        <IconButton>
          <AddPhotoAlternateIcon></AddPhotoAlternateIcon>
        </IconButton>
      </div>
    </div>
  );
};

export default ImageArea;

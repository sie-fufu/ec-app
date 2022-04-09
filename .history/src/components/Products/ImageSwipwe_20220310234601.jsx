import React from "react";
import Swiper from "creat-id-swiper";
import NoImage from "../../assets/img/src/no_image.png";
import "swiper/css/swiper.css";

const ImageSwiper = (props) => {
  const [params] = useSate({
    pagination: {
      el: "swiper-pagenation",
      type: "bullets",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
  });

  const images = props.images;
};

export default ImageSwiper;

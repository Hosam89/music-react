import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SwiperSlide } from "Swiper/react";
import { Swiper } from "Swiper/react";
import { FreeMode } from "swiper";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

import "swiper/css";
import "swiper/css/free-mode";

import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const TopPlay = () => {
  return <div></div>;
};

export default TopPlay;

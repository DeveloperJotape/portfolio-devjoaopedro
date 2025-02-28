"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSwiper } from "swiper/react";
const WorkSliderBtns = ({ containerStyles, btnStyles, iconsStyles }) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <ChevronLeft className={iconsStyles} />
      </button>
      <button className={btnStyles}>
        <ChevronRight
          className={iconsStyles}
          onClick={() => swiper.slideNext()}
        />
      </button>
    </div>
  );
};

export default WorkSliderBtns;

import React, { useEffect, useState } from "react";
import styles from "./CarouselRightNavigation.module.css";
import RightArrow from "../../../assests/rightarrow.png";
import { useSwiper } from "swiper/react";

function CarouselRightNavigation() {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsEnd(swiper.isEnd);
    });
  }, []);

  return (
    <div className={styles.rightNavigation}>
      {!isEnd && (
        <img
          src={RightArrow}
          alt="Right Arrow"
          onClick={() => swiper.slideNext()}
        />
      )}
    </div>
  );
}

export default CarouselRightNavigation;

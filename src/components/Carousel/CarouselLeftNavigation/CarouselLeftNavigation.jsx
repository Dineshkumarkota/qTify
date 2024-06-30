import React, { useEffect, useState } from "react";
import styles from "./CarouselLeftNavigation.module.css";
import LeftArrow from "../../../assests/leftarrow.png";
import { useSwiper } from "swiper/react";

function CarouselLeftNavigation() {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsBeginning(swiper.isBeginning);
    });
  }, []);

  return (
    <div className={styles.leftNavigation}>
      {!isBeginning && (
        <img
          src={LeftArrow}
          alt="Right Arrow"
          onClick={() => swiper.slidePrev()}
        />
      )}
    </div>
  );
}

export default CarouselLeftNavigation;

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { Box } from "@mui/material";

export default function HeaderSlider() {

  const imgs = [
    "https://resimdiyari.com/_data/i/upload/2012/10/14/20121014183741-35e8fecf-me.jpg",
    "https://cdn.pixabay.com/photo/2023/06/12/12/04/lancaster-8058337_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/06/22/03/58/animals-8080446_1280.jpg",
  ];

  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {imgs.map((item, i) => (
          <SwiperSlide>
            <Box>
              <img
                src={item}
                alt="foto"
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                }}
           
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

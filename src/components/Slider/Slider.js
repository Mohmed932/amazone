import React, { Fragment } from "react";
import Laptop from "../../Prodects/Laptops/Apple.json";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <Fragment>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {Laptop.map(
          ({
            title,
            asin,
            brand,
            stars,
            reviewsCount,
            thumbnailImage,
            breadCrumbs,
            description,
            price,
          }) => (
            <SwiperSlide key={asin}>
              <div className="SwiperSlide_word">
                <h3>{title}</h3>
                <h4>{breadCrumbs}</h4>
                <Link to={`/SingleProdect/${asin}`}>
                  <button>Shop Now</button>
                </Link>
              </div>
              <img src={thumbnailImage} alt="thumbnailImage" />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </Fragment>
  );
};

export default Slider;

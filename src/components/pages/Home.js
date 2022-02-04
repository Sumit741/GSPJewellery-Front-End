import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import necklace from "../../images/necklace.png";
import Necklace from "../../images/Necklace2.jpg";
import { Autoplay, Pagination } from "swiper";

import "./Home.css";
function Home() {
  return (
    <div className="home">
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={necklace} />
          <div className="offer-det">
            <h3>Exclusive Offer-20% Off</h3>
            <h1>Necklace</h1>
            <h3>24 Carat pure gold necklace</h3>
            <p>
              Starting At <span>NRP. 50,000</span>
            </p>
            <button>SHOP NOW</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Necklace} />
          <div className="offer-det">
            <h3>Exclusive Offer-20% Off</h3>
            <h1>Necklace</h1>
            <h3>24 Carat pure gold necklace</h3>
            <p>
              Starting At <span>NRP. 50,000</span>
            </p>
            <button>SHOP NOW</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Necklace} />
          <div className="offer-det">
            <h3>Exclusive Offer-20% Off</h3>
            <h1>Necklace</h1>
            <h3>24 Carat pure gold necklace</h3>
            <p>
              Starting At <span>NRP. 50,000</span>
            </p>
            <button>SHOP NOW</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Necklace} />
          <div className="offer-det">
            <h3>Exclusive Offer-20% Off</h3>
            <h1>Necklace</h1>
            <h3>24 Carat pure gold necklace</h3>
            <p>
              Starting At <span>NRP. 50,000</span>
            </p>
            <button>SHOP NOW</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Home;

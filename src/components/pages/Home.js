import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import necklace from "../../images/necklace.png";
import Necklace from "../../images/Necklace2.jpg";
import "aos/dist/aos.css";
import Aos from "aos";
import axios from "axios";
import { Autoplay, Pagination } from "swiper";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { productActions } from "../store/Products";

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 1000,
      once: false,
    });
    Aos.refresh();
  }, []);

  const dispatch = useDispatch();

  const categoryHandler = (category) => {
    navigate(`/category/${category}`);
  };

  return (
    <div className="home">
      <Swiper
        // pagination={true}
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
          <div className="offer-det" data-aos="fade-left">
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
      <div className="category">
        <h1>SHOP BY CATEGORY</h1>
        <div className="cat-items">
          <div data-aos="fade-right" className="item1 items">
            <div className="item-content">
              <div className="item-description">
                <h2>Necklaces</h2>
                <button
                  onClick={() => {
                    categoryHandler("necklaces");
                  }}
                >
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
          <div data-aos="fade-down" className="item2 items">
            <div className="item-content">
              <div className="item-description1">
                <h2>Chains</h2>
                <button
                  onClick={() => {
                    categoryHandler("chains");
                  }}
                >
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" className="item3 items">
            <div className="item-content">
              <div className="item-description2">
                <h2>Rings</h2>
                <button
                  onClick={() => {
                    categoryHandler("rings");
                  }}
                >
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
          <div data-aos="fade-right" className="item4 items">
            <div className="item-content">
              <div className="item-description3">
                <h2>Bangles</h2>
                <button
                  onClick={() => {
                    categoryHandler("bangles");
                  }}
                >
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" className="item5 items">
            <div className="item-content">
              <div className="item-description4">
                <h2>Bracelet</h2>
                <button
                  onClick={() => {
                    categoryHandler("bracelet");
                  }}
                >
                  SHOP NOW
                </button>
              </div>
            </div>
            {/* <img src={catBracelet} className="cat-image" /> */}
          </div>
          <div data-aos="fade-left" className="item6 items">
            <div className="item-content">
              <div className="item-description5">
                <h2>Earrings</h2>
                <button
                  onClick={() => {
                    categoryHandler("earrings");
                  }}
                >
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

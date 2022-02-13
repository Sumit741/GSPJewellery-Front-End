import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import necklace from "../../images/necklace.png";
import Necklace from "../../images/Necklace2.jpg";
import "aos/dist/aos.css";
import Aos from "aos";

import { Autoplay, Pagination } from "swiper";

import "./Home.css";

function Home() {
  let element1, element2, element3, element4, element5, element6;
  useEffect(() => {
    element1 = document.querySelector(".item-description");
    element2 = document.querySelector(".item-description1");
    element3 = document.querySelector(".item-description2");
    element4 = document.querySelector(".item-description3");
    element5 = document.querySelector(".item-description4");
    element6 = document.querySelector(".item-description5");

    Aos.init({
      offset: 200,
      duration: 1000,
      once: false,
    });
    Aos.refresh();
  }, []);

  const hoverInHandler1 = () => {
    element1.classList.add("displayContent");
  };
  const hoverOutHandler1 = () => {
    element1.classList.remove("displayContent");
  };

  const hoverInHandler2 = () => {
    element2.classList.add("displayContent");
  };
  const hoverOutHandler2 = () => {
    element2.classList.remove("displayContent");
  };

  const hoverInHandler3 = () => {
    element3.classList.add("displayContent");
  };
  const hoverOutHandler3 = () => {
    element3.classList.remove("displayContent");
  };

  const hoverInHandler4 = () => {
    element4.classList.add("displayContent");
  };
  const hoverOutHandler4 = () => {
    element4.classList.remove("displayContent");
  };

  const hoverInHandler5 = () => {
    element5.classList.add("displayContent");
  };
  const hoverOutHandler5 = () => {
    element5.classList.remove("displayContent");
  };

  const hoverInHandler6 = () => {
    element6.classList.add("displayContent");
  };
  const hoverOutHandler6 = () => {
    element6.classList.remove("displayContent");
  };
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
          <div
            data-aos="fade-right"
            className="item1 items"
            onMouseOver={hoverInHandler1}
            onMouseLeave={hoverOutHandler1}
          >
            <div className="item-content">
              <div className="item-description">
                <h2>Necklaces</h2>
                <button>SHOP NOW</button>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-down"
            className="item2 items"
            onMouseOver={hoverInHandler2}
            onMouseLeave={hoverOutHandler2}
          >
            <div className="item-content">
              <div className="item-description1">
                <h2>Chains</h2>
                <button>SHOP NOW</button>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="item3 items"
            onMouseOver={hoverInHandler3}
            onMouseLeave={hoverOutHandler3}
          >
            <div className="item-content">
              <div className="item-description2">
                <h2>Rings</h2>
                <button>SHOP NOW</button>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-right"
            className="item4 items"
            onMouseOver={hoverInHandler4}
            onMouseLeave={hoverOutHandler4}
          >
            <div className="item-content">
              <div className="item-description3">
                <h2>Bangles</h2>
                <button>SHOP NOW</button>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="item5 items"
            onMouseOver={hoverInHandler5}
            onMouseLeave={hoverOutHandler5}
          >
            <div className="item-content">
              <div className="item-description4">
                <h2>Bracelet</h2>
                <button>SHOP NOW</button>
              </div>
            </div>
            {/* <img src={catBracelet} className="cat-image" /> */}
          </div>
          <div
            data-aos="fade-left"
            className="item6 items"
            onMouseOver={hoverInHandler6}
            onMouseLeave={hoverOutHandler6}
          >
            <div className="item-content">
              <div className="item-description5">
                <h2>Earrings</h2>
                <button>SHOP NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

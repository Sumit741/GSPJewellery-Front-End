import React, { useEffect, useState, useRef } from "react";
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
import { FcBusinessman } from "react-icons/fc";
import { BsFillChatLeftQuoteFill } from "react-icons/bs";
import { FcFeedback } from "react-icons/fc";
import CloseIcon from "@mui/icons-material/Close";
import Rating from "@mui/material/Rating";

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

  const [status, setStatus] = useState(false);
  const [feedbacklist, setFeedbackList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/feedback").then((response) => {
      setFeedbackList(response.data);
    });
  }, []);

  useEffect(() => {
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/624ee07dc72df874911dc4e2/1g021pr71";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);
  const [value1, setValue1] = useState(0);
  const name = useRef();
  const email = useRef();
  const feedback = useRef();
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (
      value1 !== null &&
      name.current.value !== "" &&
      email.current.value !== "" &&
      feedback.current.value !== ""
    ) {
      axios
        .post(
          "http://localhost:3001/feedback",
          {
            Username: "sumit223",
            Fullname: name.current.value,
            Email: email.current.value,
            Feedback: feedback.current.value,
            Rating: value1,
          },
          {
            headers: {
              accessToken: localStorage.getItem("accessToken"),
            },
          }
        )
        .then((response) => {
          if (response.data.error) {
            alert("Unauthorized access or not logged in");
          } else {
            alert("FEEDBACK SENT");
            setFeedbackList(response.data);
            setStatus(false);
          }
        });
    } else {
      alert("Something is missing");
    }
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
            <button
              onClick={() => {
                categoryHandler("necklaces");
              }}
            >
              SHOP NOW
            </button>
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
            <button
              onClick={() => {
                categoryHandler("necklaces");
              }}
            >
              SHOP NOW
            </button>
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
            <button
              onClick={() => {
                categoryHandler("necklaces");
              }}
            >
              SHOP NOW
            </button>
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
            <button
              onClick={() => {
                categoryHandler("necklaces");
              }}
            >
              SHOP NOW
            </button>
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
          <div data-aos="fade-up" className="item5 items">
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

      <h2 className="feedbacktitle">Customer Feedbacks</h2>

      <div
        className="feedbackSection"
        style={{
          justifyContent: `${
            feedbacklist.length > 2 ? "flex-start" : "center"
          }`,
        }}
      >
        <div>
          {feedbacklist.map((feedback, index) => (
            <div className="feedback" key={index} data-aos="fade-right">
              <BsFillChatLeftQuoteFill className="quote" />
              <FcBusinessman className="icon" />
              <h3>{feedback.Fullname}</h3>
              <Rating
                name="simple-controlled"
                value={feedback.Rating}
                readOnly
                // onChange={(event, newValue) => {
                //   setValue(newValue);
                // }}
                className="rating"
              />
              <span>{feedback.Feedback}</span>
            </div>
          ))}
        </div>
      </div>
      <button
        className="btnFeedback"
        onClick={() => {
          setStatus(true);
        }}
      >
        GIVE FEEDBACK <FcFeedback className="i" />
      </button>

      {status && (
        <div className="feedbackform">
          <form data-aos="fade-down" onSubmit={formSubmitHandler}>
            <CloseIcon
              className="closeIcon"
              onClick={() => {
                setStatus(false);
                setValue1(0);
              }}
            />
            <span>FEEDBACK</span>
            <input
              type="text"
              placeholder="Your Name"
              ref={name}
              // pattern="[A-Za-z][A-Za-z]"
              // title="Doesn't allow other format than text"
            />
            <input type="email" placeholder="Your Email" ref={email} />
            <textarea
              type="text"
              resize="none"
              placeholder="Feedback"
              ref={feedback}
            />
            <span style={{ marginTop: "10px" }}>Give Rating</span>
            <Rating
              name="simple-controlled"
              value={value1}
              // readOnly
              onChange={(event, newValue) => {
                setValue1(newValue);
                console.log(newValue);
              }}
              className="ratings"
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Home;

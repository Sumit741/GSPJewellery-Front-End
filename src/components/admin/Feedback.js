import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Feedbackadmin.module.css";
import Rating from "@mui/material/Rating";
import { FcBusinessman } from "react-icons/fc";

function Feedback() {
  const [feedbackList, setFeedBackList] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3001/feedback`).then((response) => {
      setFeedBackList(response.data);
    });
  }, []);

  const getfulldate = (date) => {
    var date = new Date(date);
    var month = date.toLocaleString("en-us", { month: "long" });
    var day = date.getDay();
    var year = date.getFullYear();
    return `${month}-${day}-${year}`;
  };
  return (
    <div className={styles.feedbackcontainer}>
      {feedbackList.map((feedback, index) => (
        <div key={index} className={styles.feedback}>
          <div>
            <h5>
              <FcBusinessman
                style={{
                  fontSize: "45px",
                  background: "grey",
                  borderRadius: "50%",
                  marginRight: "15px",
                }}
              />
              {feedback.Fullname}
            </h5>
            <span>{feedback.Email}</span>
            <Rating
              name="simple-controlled"
              value={feedback.Rating}
              readOnly
              className="ratings"
            />
            <span
              style={{
                marginTop: "15px",
                fontWeight: "360",
                fontSize: "15px",
              }}
            >
              {feedback.Feedback}
            </span>
          </div>
          <span style={{ fontWeight: "500" }}>
            {getfulldate(feedback.createdAt)}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Feedback;

import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { modalAction } from "../store/showModal";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./Modal.css";
import { searchActions } from "../store/search";

function Modal() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const text = useRef();
  const searchHandler = () => {
    if (text.current.value === "") {
      alert("Please enter some text");
    } else {
      navigate("/search");
      dispatch(searchActions.setKeyword({ keyword: text.current.value }));
      dispatch(modalAction.hideModal());
    }
  };

  const hideModal = () => {
    dispatch(modalAction.hideModal());
  };
  return (
    <div className="search-items">
      <i class="fas fa-window-close" onClick={hideModal}></i>
      <p>What are you looking for?</p>
      <form onSubmit={searchHandler}>
        <input type="text" placeholder="I'm looking for...." ref={text} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Modal;

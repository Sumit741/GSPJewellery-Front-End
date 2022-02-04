import React from "react";
import { useDispatch } from "react-redux";
import { modalAction } from "../store/showModal";
import "./Modal.css";

function Modal() {
  const dispatch = useDispatch();
  const hideModal = () => {
    dispatch(modalAction.hideModal());
  };

  return (
    <div className="search-items">
      <i class="fas fa-window-close" onClick={hideModal}></i>
      <p>What are you looking for?</p>
      <input type="text" placeholder="I'm looking for...." />
      <button onClick={hideModal}>Search</button>
    </div>
  );
}

export default Modal;

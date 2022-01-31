import React from "react";
import "./Modal.css";
function Modal() {
  return (
    <div className="search-items">
      <i class="fas fa-window-close"></i>
      <p>What are you looking for?</p>
      <input type="text" placeholder="I'm looking for...." />
      <button>Search</button>
    </div>
  );
}

export default Modal;

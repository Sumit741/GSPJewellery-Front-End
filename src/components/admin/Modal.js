import { modalClasses } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./modal.module.css";
import { useSelector, useDispatch } from "react-redux";
import { modalAction } from "../store/showModal";

function Modal() {
  const text = useSelector((state) => state.modal.modalText);
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(modalAction.hideAdminModal());
  };
  return (
    <div className={styles.container}>
      <CloseIcon className={styles.icon} onClick={clickHandler} />
      <span>{text}</span>
    </div>
  );
}

export default Modal;

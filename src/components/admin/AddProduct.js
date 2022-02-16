import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import styles from "./AddProduct.module.css";
import Modal from "./Modal";
import axios from "axios";
import { modalAction } from "../store/showModal";

function AddProduct() {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.modal.amdinModalVisible);
  const [show, setShow] = useState(false);
  const Type = useRef();
  const Category = useRef();
  const Carat = useRef();
  const For = useRef();
  const Image = useRef();
  const Title = useRef();
  const NetWeight = useRef();
  const GrossWeight = useRef();
  const Charge = useRef();
  const Stone = useRef();
  const typeChangeHandler = () => {
    if (Type.current.value === "gold") {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      Type.current.value !== "type" &&
      Category.current.value !== "category" &&
      For.current.value !== "for" &&
      Image.current.value &&
      Title.current.value &&
      NetWeight.current.value &&
      GrossWeight.current.value &&
      Charge.current.value &&
      Stone.current.value
    ) {
      axios
        .post("http://localhost:3001/product/add", {
          ElementType: Type.current.value,
          ProductCategory: Category.current.value,
          Carat: Type.current.value === "gold" ? Carat.current.value : "none",
          For: For.current.value,
          Image: Image.current.value,
          ProductName: Title.current.value,
          NetWeight: parseFloat(NetWeight.current.value),
          WeightWithLoss: parseFloat(GrossWeight.current.value),
          Charge: parseFloat(Charge.current.value),
          Stone: Stone.current.value,
        })
        .then((response) => {
          alert(response.data);
          dispatch(
            modalAction.setModalText({ text: "Product Added Successfully" })
          );
          dispatch(modalAction.showAdminModal(true));
          setShow(false);
          Type.current.value = "type";
          Category.current.value = "category";
          For.current.value = "for";
          Image.current.value = "";
          Title.current.value = "";
          NetWeight.current.value = "";
          GrossWeight.current.value = "";
          Charge.current.value = "";
          Stone.current.value = "";
        });
    } else {
      dispatch(modalAction.setModalText({ text: "Please Enter all Fields" }));
      dispatch(modalAction.showAdminModal(true));
    }
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.selectValue}>
          <select name="Type" ref={Type} id="cars" onChange={typeChangeHandler}>
            <option value="type">Element Type</option>
            <option value="gold">Gold</option>
            <option value="silver">Silver</option>
          </select>

          <select id="select" ref={Category} name="Category">
            <option value="category">Product Category</option>
            <option value="necklace">Necklace</option>
            <option value="rings">Rings</option>
            <option value="bracelet">Bracelet</option>
            <option value="chains">Chains</option>
            <option value="bangles">Bangles</option>
            <option value="earrings">Earrings</option>
          </select>

          <select id="select" ref={For} name="For">
            <option value="for">For</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="both">Both</option>
            <option value="child">Child</option>
          </select>
        </div>
        {show && (
          <select id="select" ref={Carat} name="Carat" className={styles.carat}>
            <option value="carat">Carat</option>
            <option value="24KT">24KT</option>
            <option value="22KT">22KT</option>
          </select>
        )}
        <input name="Image" ref={Image} placeholder="Image url" />
        <input name="Title" ref={Title} placeholder="Product Name" />
        <input name="NetWeight" ref={NetWeight} placeholder="Net Weight" />
        <input
          name="GrossWeight"
          ref={GrossWeight}
          placeholder="Weight With Loss"
        />
        <input name="Stone" ref={Charge} placeholder="Charge" />
        <input name="Stone" ref={Stone} placeholder="Stone" />
        <button type="submit">
          Add Product <AddCircleIcon />
        </button>
      </form>
      {showModal && <Modal />}
    </div>
  );
}

export default AddProduct;

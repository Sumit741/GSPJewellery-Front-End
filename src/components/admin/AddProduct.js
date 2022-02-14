import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useRef, useState } from "react";
import styles from "./AddProduct.module.css";

function AddProduct() {
  const [show, setShow] = useState(false);
  const Type = useRef();
  const Category = useRef();
  const Carat = useRef();
  const For = useRef();
  const Image = useRef();
  const Title = useRef();
  const NetWeight = useRef();
  const GrossWeight = useRef();
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
    const prodDet = {
      Type: Type.current.value,
      Category: Category.current.value,
      Carat: Carat.current.value,
      For: For.current.value,
      Image: Image.current.value,
      CategTitleory: Title.current.value,
      NetWeight: NetWeight.current.value,
      GrossWeight: GrossWeight.current.value,
      Stone: Stone.current.value,
    };
    console.log(prodDet);
    Type.current.value = "Element Type";
    Category.current.value = "Prodcut Category";
    Carat.current.value = "";
    For.current.value = "For";
    Image.current.value = "";
    Title.current.value = "";
    NetWeight.current.value = "";
    GrossWeight.current.value = "";
    Stone.current.value = "";
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
            <option value="necklace">Necklaces</option>
            <option value="rings">Rings</option>
            <option value="bracelet">Bracelet</option>
            <option value="chains">Chains</option>
            <option value="bangles">Bangles</option>
            <option value="earrings">Earrings</option>
          </select>
          {show && (
            <select
              id="select"
              ref={Carat}
              name="Carat"
              className={styles.carat}
            >
              <option value="type">Carat</option>
              <option value="carat1">24K</option>
              <option value="carat2">22K</option>
            </select>
          )}
          <select id="select" ref={For} name="For" className={styles.carat}>
            <option value="type">For</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="both">Both</option>
            <option value="child">Child</option>
          </select>
        </div>

        <input name="Image" ref={Image} placeholder="Image url" />
        <input name="Title" ref={Title} placeholder="Product Name" />
        <input name="NetWeight" ref={NetWeight} placeholder="Net Weight" />
        <input
          name="GrossWeight"
          ref={GrossWeight}
          placeholder="Gross Weight"
        />
        <input name="Stone" ref={Stone} placeholder="Stone" />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;

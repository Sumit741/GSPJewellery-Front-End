import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalAction } from "../store/showModal";
import styles from "./EditPage.module.css";
import CloseIcon from "@mui/icons-material/Close";

function EditPage() {
  const id = useSelector((state) => state.product.id);
  const dispatch = useDispatch();
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
  const navigate = useDispatch();
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios
      .post("http://localhost:3001/product/byProductId", { id: id })
      .then((response) => {
        if (response.data.ElementType === "gold") {
          setShow(true);
          console.log(response.data.Carat);
          Carat.current.value = response.data.Carat;
        }
        Type.current.value = response.data.ElementType;
        Category.current.value = response.data.ProductCategory;
        For.current.value = response.data.For;
        Image.current.value = response.data.Image;
        Title.current.value = response.data.ProductName;
        NetWeight.current.value = response.data.NetWeight;
        GrossWeight.current.value = response.data.WeightWithLoss;
        Charge.current.value = response.data.Charge;
        Stone.current.value = response.data.Stone;
      });
  }, []);

  const submitHandler = (e) => {
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
        .put("http://localhost:3001/product/byProductId", {
          id: id,
          ElementType: Type.current.value,
          ProductCategory: Category.current.value,
          Carat: Type.current.value === "gold" ? Carat.current.value : "none",
          For: For.current.value,
          Image: Image.current.value,
          ProductName: Title.current.value,
          NetWeight: parseFloat(NetWeight.current.value),
          WeightWithLoss: parseFloat(GrossWeight.current.value),
          Charge: parseFloat(Charge.current.value),
          Stone: Stone.current.value === "stone" ? "none" : Stone.current.value,
        })
        .then((response) => {
          if (response.data.error) {
            alert(response.data.error);
          } else {
            alert(response.data.message);
            dispatch(modalAction.setShowEditPage({ status: false }));
          }
        });
    } else {
      alert("Make sure you enter all the fields");
      e.preventDefault();
      dispatch(modalAction.setShowEditPage({ status: true }));
    }
  };
  const typeChangeHandler = () => {
    if (Type.current.value === "gold") {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const closeHandler = () => {
    dispatch(modalAction.setShowEditPage({ status: false }));
  };
  return (
    <div className={styles.editSection}>
      <CloseIcon className={styles.close} onClick={closeHandler} />
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
        <select id="select" ref={Stone} name="Stone" className={styles.stone}>
          <option value="Stone">Stone</option>
          <option value="Ruby">Ruby</option>
          <option value="Diamond">Diamond</option>
        </select>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditPage;

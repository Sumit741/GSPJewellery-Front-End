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
  const Title = useRef();
  const NetWeight = useRef();
  const GrossWeight = useRef();
  const Charge = useRef();
  const Stone = useRef();
  const navigate = useDispatch();
  const [show, setShow] = useState(false);

  const [image, setImage] = useState("");

  // const uploadImage = (e) => {
  //   const files = e.target.files;
  //   const data = new FormData();
  //   data.append("file", files[0]);
  //   data.append("upload_preset", "jewelimages");

  //   axios
  //     .post("https://api.cloudinary.com/v1_1/sumitimgcloud/image/upload", data)
  //     .then((response) => {
  //       setImage(response.data.url);
  //     });
  // };

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
        // Image.current.value = response.data.Image;
        Title.current.value = response.data.ProductName;
        NetWeight.current.value = response.data.NetWeight;
        GrossWeight.current.value = response.data.WeightWithLoss;
        Charge.current.value = response.data.Charge;
        Stone.current.value = response.data.Stone;
      });
  }, []);

  const [imageError, setError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [weightError, setWeightError] = useState(false);
  const [weightLossError, setWeightLossError] = useState(false);
  const [chargeError, setChargeError] = useState(false);
  const submitHandler = (e) => {
    if (
      Type.current.value !== "type" &&
      Category.current.value !== "category" &&
      For.current.value !== "for" &&
      // Image.current.value &&
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
          // Image: image,
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
            // Image.current.value ? setError(false) : setError(true);
            Title.current.value ? setNameError(false) : setNameError(true);
            NetWeight.current.value
              ? setWeightError(false)
              : setWeightError(true);
            GrossWeight.current.value
              ? setWeightLossError(false)
              : setWeightLossError(true);
            Charge.current.value ? setChargeError(false) : setChargeError(true);
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
        <select id="select" ref={Stone} name="Stone" className={styles.carat}>
          <option value="Stone">Stone</option>
          <option value="Ruby">Ruby</option>
          <option value="Diamond">Diamond</option>
        </select>
        {show && (
          <select id="select" ref={Carat} name="Carat" className={styles.carat}>
            <option value="carat">Carat</option>
            <option value="24KT">24KT</option>
            <option value="22KT">22KT</option>
          </select>
        )}

        {/* <input type="file" name="file" onChange={uploadImage} /> */}

        {/* <input
          name="Image"
          ref={Image}
          placeholder="Image url"
          onChange={() => {
            Image.current.value ? setError(false) : setError(true);
          }}
        />
        {imageError && (
          <span className={styles.errorMessage}>Please enter image</span>
        )} */}
        <input
          name="Title"
          ref={Title}
          placeholder="Product Name"
          onChange={() => {
            Title.current.value ? setNameError(false) : setNameError(true);
          }}
        />
        {nameError && (
          <span className={styles.errorMessage}>Please enter product name</span>
        )}
        <input
          name="NetWeight"
          ref={NetWeight}
          type="number"
          min="0"
          step="any"
          placeholder="Net Weight"
          onChange={() => {
            NetWeight.current.value
              ? setWeightError(false)
              : setWeightError(true);
            NetWeight.current.value < 0
              ? (NetWeight.current.value = "")
              : (NetWeight.current.value = NetWeight.current.value);
          }}
        />
        {weightError && (
          <span className={styles.errorMessage}>Please enter the weight</span>
        )}

        <input
          name="GrossWeight"
          ref={GrossWeight}
          type="number"
          min="0"
          step="any"
          placeholder="Weight With Loss"
          onChange={() => {
            GrossWeight.current.value
              ? setWeightLossError(false)
              : setWeightLossError(true);

            GrossWeight.current.value < 0
              ? (GrossWeight.current.value = "")
              : (GrossWeight.current.value = GrossWeight.current.value);
          }}
        />
        {weightLossError && (
          <span className={styles.errorMessage}>
            Please enter the total weight with loss
          </span>
        )}
        <input
          name="Charge"
          ref={Charge}
          placeholder="Charge"
          type="number"
          min="0"
          onChange={() => {
            Charge.current.value ? setChargeError(false) : setChargeError(true);
            Charge.current.value < 0
              ? (Charge.current.value = "")
              : (Charge.current.value = Charge.current.value);
          }}
        />
        {chargeError && (
          <span className={styles.errorMessage}>Please enter image</span>
        )}

        <button type="submit" className={styles.button}>
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditPage;

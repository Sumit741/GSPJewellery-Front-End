import React, { useEffect, useState, useRef } from "react";
import styles from "./Productlist.module.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { productActions } from "../store/Products";
import ReactPaginate from "react-paginate";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function Productlist() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.listOfProductsAdmin);
  const category = useRef();
  const [listOfProducts, setlistOfProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/product").then((response) => {
      dispatch(
        productActions.setListOfProductsAdmin({ products: response.data })
      );
      setlistOfProducts([...response.data]);
    });
  }, []);

  const [pageNumber, setPageNumber] = useState(0);
  const productsPerpage = 10;
  const productsShown = pageNumber * productsPerpage;
  const pageCount = Math.ceil(listOfProducts.length / productsPerpage);
  const pageChangeHandler = ({ selected }) => {
    setPageNumber(selected);
  };
  const selectChangeHandler = () => {
    setPageNumber(0);
    if (category.current.value === "Gold") {
      setlistOfProducts([
        ...products.filter((product) => product.ElementType === "gold"),
      ]);
    } else if (category.current.value === "Silver") {
      setlistOfProducts([
        ...products.filter((product) => product.ElementType === "silver"),
      ]);
    } else {
      setlistOfProducts([...products]);
    }
  };
  return (
    <div className={styles.container}>
      <div>
        <select
          className={styles.filter}
          ref={category}
          onChange={selectChangeHandler}
        >
          <option value="Filter">Filter</option>
          <option value="Gold">Gold</option>
          <option value="Silver">Silver</option>
        </select>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Product Name</th>
            <th>Element Type</th>
            <th>Category</th>
            <th>Gender</th>
            <th>Carat</th>
            <th>Net Weight</th>
            <th>Weight with loss</th>
            <th>Charge</th>
            <th>Stone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className={styles.body}>
          {listOfProducts
            .slice(productsShown, productsShown + productsPerpage)
            .map((product, index) => (
              <tr key={index}>
                <td>{product.id}</td>
                <td>{product.Image}</td>
                <td>{product.ProductName}</td>
                <td>{product.ElementType}</td>
                <td>{product.ProductCategory}</td>
                <td>{product.For}</td>
                <td>{product.Carat}</td>
                <td>{product.NetWeight}</td>
                <td>{product.WeightWithLoss}</td>
                <td>{product.Charge}</td>
                <td>{product.Stone}</td>
                <td>
                  <EditIcon className={styles.icons} />{" "}
                  <DeleteForeverIcon className={styles.icons} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel={"<<"}
        containerClassName={styles.pagination}
        nextLabel={">>"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageClassName={styles.container}
        pageLinkClassName={styles.links}
        previousClassName={styles.container}
        previousLinkClassName={styles.links}
        nextClassName={styles.container}
        nextLinkClassName={styles.links}
        breakClassName={""}
        breakLinkClassName={styles.links}
        activeClassName={styles.activeClass}
        onPageChange={pageChangeHandler}
      />
    </div>
  );
}

export default Productlist;

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import styles from "./Productlist.module.css";
import ReactPaginate from "react-paginate";
import SearchIcon from "@mui/icons-material/Search";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function Orders() {
  const [ordersList, setOrdersList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/product/orders").then((response) => {
      const data = response.data.filter((item) => item.Order !== null);
      setOrdersList(data);
      console.log(data);
    });
  }, []);
  const [pageNumber, setPageNumber] = useState(0);
  const customersPerpage = 10;
  const customersShown = pageNumber * customersPerpage;
  const pageCount = Math.ceil(ordersList.length / customersPerpage);
  const pageChangeHandler = ({ selected }) => {
    setPageNumber(selected);
  };
  const searchValue = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    // if (searchValue.current.value !== "") {
    //   axios
    //     .post("http://localhost:3001/user/filter", {
    //       name: searchValue.current.value,
    //     })
    //     .then((response) => {
    //       setListOfCustomers(response.data);
    //     });
    //   // setSearchParams({ select: searchValue.current.value });
    //   setPageNumber(0);
    // } else {
    //   alert("Enter any text");
    // }
  };
  const changeHandler = () => {
    // if (searchValue.current.value === "") {
    //   setListOfCustomers(customers);
    //   setSearchParams({ select: "all" });
    // }
  };
  const deleteHandler = (id) => {
    // axios.delete(`http://localhost:3001/user/delete/${id}`).then((response) => {
    //   setListOfCustomers(response.data);
    //   setCustomers(response.data);
    // });
  };
  return (
    <div>
      <form className={styles.searchOption} onSubmit={submitHandler}>
        <input
          type="text"
          ref={searchValue}
          placeholder="Enter name to search"
          onChange={changeHandler}
        />
        <button type="submit">
          <SearchIcon />
        </button>
      </form>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer Name</th>
            <th>Order Address</th>
            <th>Order Date</th>
            <th>Product Name</th>
            <th>Net Weight</th>
            <th> Weight With Loss</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Total Price</th>
            <th>Payment Status</th>
          </tr>
        </thead>
        <tbody className={styles.body}>
          {ordersList
            .slice(customersShown, customersShown + customersPerpage)
            .map((order, index) => (
              <tr key={index}>
                <td>{order.Order.id}</td>
                <td>{order.Order.Customername}</td>
                <td>{order.Order.OrderAddress}</td>
                <td>{order.Order.createdAt.slice(0, 10)}</td>
                <td>
                  {order.ProductName}({order.ElementType})
                </td>
                <td>{order.NetWeight}</td>
                <td>{order.WeightWithLoss}</td>
                <td>{order.Order.Quantity}</td>
                <td>{order.Order.unitPrice}</td>
                <td>{order.Order.TotalPrice}</td>
                <td>{order.Order.PaymentStatus}</td>
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

export default Orders;

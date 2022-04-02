import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import ReactPaginate from "react-paginate";
import styles from "./Productlist.module.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchParams } from "react-router-dom";

function Customers() {
  const [listOfCustomers, setListOfCustomers] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    axios.get("http://localhost:3001/user").then((response) => {
      setListOfCustomers(response.data);
      setCustomers(response.data);
    });
    setSearchParams({ select: "all" });
  }, []);
  const [pageNumber, setPageNumber] = useState(0);
  const customersPerpage = 10;
  const customersShown = pageNumber * customersPerpage;
  const pageCount = Math.ceil(listOfCustomers.length / customersPerpage);
  const pageChangeHandler = ({ selected }) => {
    setPageNumber(selected);
  };
  const searchValue = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    if (searchValue.current.value !== "") {
      axios
        .post("http://localhost:3001/user/filter", {
          name: searchValue.current.value,
        })
        .then((response) => {
          setListOfCustomers(response.data);
        });
      setSearchParams({ select: searchValue.current.value });
      setPageNumber(0);
    } else {
      alert("Enter any text");
    }
  };
  const changeHandler = () => {
    if (searchValue.current.value === "") {
      setListOfCustomers(customers);
      setSearchParams({ select: "all" });
    }
  };
  const deleteHandler = (id) => {
    axios.delete(`http://localhost:3001/user/delete/${id}`).then((response) => {
      setListOfCustomers(response.data);
      setCustomers(response.data);
    });
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
        <thead style={{ background: "white" }}>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Joined At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className={styles.body}>
          {listOfCustomers
            .slice(customersShown, customersShown + customersPerpage)
            .map((customer, index) => (
              <tr key={index}>
                <td>{customer.id}</td>
                <td>{customer.Username}</td>
                <td>{customer.Fullname}</td>
                <td>{customer.Email}</td>
                <td>{customer.Address}</td>
                <td>{customer.createdAt.slice(0, 10)}</td>
                <td>
                  <DeleteForeverIcon
                    className={styles.icons}
                    onClick={() => {
                      deleteHandler(customer.id);
                    }}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div style={{ marginTop: "20px" }}>
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
    </div>
  );
}

export default Customers;

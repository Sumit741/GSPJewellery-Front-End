import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Aos from "aos";
import Header from "./Header";
import axios from "axios";
import "aos/dist/aos.css";
import * as Yup from "yup";
import styles from "./Register.module.css";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
// import TextField from "@mui/material/TextField";

function Register() {
  const initialValues = {
    Username: "",
    Firstname: "",
    Lastname: "",
    Email: "",
    Address: "",
    Password: "",
    ConfirmPassword: "",
  };
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 1000,
    });
  }, []);
  const inputValidation = Yup.object().shape({
    Username: Yup.string().required("Please Enter your username"),
    Firstname: Yup.string().required("Please Enter your Firstname"),
    Lastname: Yup.string().required("Please Enter your Lastname"),
    Email: Yup.string().required("Please Enter your email"),
    Address: Yup.string().required("Please Enter your address"),
    Password: Yup.string().required("Please Enter the password"),
    ConfirmPassword: Yup.string().required("Please Enter the confirm password"),
  });
  const submitHandler = (data, onSubmitProps) => {
    if (data.Password === data.ConfirmPassword) {
      axios
        .post("http://localhost:3001/user/register", data)
        .then((response) => {
          alert(response.data);
          if (response.data === "SUCCESSFUL REGISTRATION") {
            onSubmitProps.setSubmitting(false);
            onSubmitProps.resetForm();
          }
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      alert("Password doesn't matched");
    }
  };
  return (
    <div className={styles.registrationSection}>
      <div className={styles.formSection} data-aos="zoom-in">
        <Formik
          initialValues={initialValues}
          validationSchema={inputValidation}
          onSubmit={submitHandler}
        >
          <Form className={styles.form}>
            <h1>Create Your Account</h1>
            <span className={styles.firstSpan}>
              Create your account and grab new offers!!
            </span>
            {/* <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            /> */}
            <Field
              name="Username"
              className={styles.inputField}
              placeholder="Enter Username **"
            />
            <ErrorMessage name="Username" component="p" />
            <div className={styles.name}>
              <div className={styles.fname}>
                <Field
                  name="Firstname"
                  className={styles.inputField}
                  placeholder="Enter Firstname **"
                />
                <ErrorMessage name="Firstname" component="p" />
              </div>
              <div className={styles.fname}>
                <Field
                  name="Lastname"
                  className={styles.inputField}
                  placeholder="Enter Lastname **"
                />
                <ErrorMessage name="Lastname" component="p" />
              </div>
            </div>
            <Field
              name="Email"
              className={styles.inputField}
              placeholder="Enter Email **"
            />
            <ErrorMessage name="Email" component="p" />

            <Field
              name="Address"
              className={styles.inputField}
              placeholder="Enter Your Full Address **"
            />
            <ErrorMessage name="Address" component="p" />

            <div className={styles.name}>
              <div className={styles.fname}>
                <Field
                  name="Password"
                  className={styles.inputField}
                  placeholder="Enter Password **"
                />
                <ErrorMessage name="Password" component="p" />
              </div>
              <div className={styles.fname}>
                <Field
                  name="ConfirmPassword"
                  className={styles.inputField}
                  placeholder="Cofirm Password **"
                />
                <ErrorMessage name="ConfirmPassword" component="p" />
              </div>
            </div>
            <button type="submit" className={styles.button}>
              REGISTER <AppRegistrationIcon />
            </button>
            <span className={styles.secondSpan}>
              Already created an account? <Link to="/login">Login</Link>
            </span>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Register;

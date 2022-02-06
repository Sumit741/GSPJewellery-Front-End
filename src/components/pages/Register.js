import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Aos from "aos";
import "aos/dist/aos.css";
import * as Yup from "yup";
import styles from "./Register.module.css";
function Register() {
  const initialValues = {
    Username: "",
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
    Username: Yup.string().required(),
    Password: Yup.string().required(),
    ConfirmPassword: Yup.string().required(),
  });
  return (
    <div className={styles.registrationSection}>
      <div className={styles.formSection} data-aos="zoom-in">
        <div className={styles.picture}></div>
        <Formik
          initialValues={initialValues}
          validationSchema={inputValidation}
        >
          <Form className={styles.form}>
            <h1>Create Your Account</h1>
            <span className={styles.firstSpan}>
              Create your account and grab new offers!!
            </span>
            <ErrorMessage
              name="Username"
              className={styles.errormsg1}
              component="span"
            />
            <Field
              name="Username"
              className={styles.inputField}
              placeholder="Enter a Username"
            />

            <ErrorMessage
              name="Password"
              className={styles.errormsg2}
              component="span"
            />
            <Field
              name="Password"
              className={styles.inputField}
              placeholder="Enter a Password"
              type="password"
            />

            <ErrorMessage
              name="ConfirmPassword"
              className={styles.errormsg3}
              component="span"
            />
            <Field
              name="ConfirmPassword"
              className={styles.inputField}
              placeholder="Confirm Password"
              type="password"
            />
            <button type="submit" className={styles.button}>
              Register
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

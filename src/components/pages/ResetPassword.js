import React from "react";
import TextField from "@mui/material/TextField";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Box } from "@mui/system";
import styles from "./ResetForm.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const navigate = useNavigate();
  const initialValue = {
    username: "",
    password: "",
    confirmPassword: "",
  };

  const validation = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string().required("Please enter password"),
  });
  const submitHandler = (value, onSubmitProps) => {
    if (value.password === value.confirmPassword) {
      axios
        .put("http://localhost:3001/user/resetpassword", {
          Username: value.username,
          Password: value.password,
        })
        .then((response) => {
          if (response.data.error) {
            alert(response.data.error);
          } else {
            alert(response.data);
            navigate("/");
          }
        });
    } else {
      alert("Password doesn't match");
    }
  };
  return (
    <div className={styles.resetContainer}>
      <Formik
        initialValues={initialValue}
        onSubmit={submitHandler}
        validationSchema={validation}
      >
        <Form>
          <Field
            name="username"
            // as={TextField}

            placeholder="Username"
            className={styles.TextField}
          />
          <ErrorMessage
            name="username"
            component="span"
            className={styles.ErrorMessage}
          />
          {/* <ErrorMessage component="span" className={styles.ErrorMessage} /> */}
          <Box height={20} />
          <Field
            name="password"
            // as={TextField}
            type="password"
            placeholder="Password"
            className={styles.TextField}
          />
          <ErrorMessage
            name="password"
            component="span"
            className={styles.ErrorMessage}
          />

          <Box height={20} />
          <Field
            name="confirmPassword"
            // as={TextField}
            type="password"
            placeholder="Confirm Password"
            className={styles.TextField}
          />
          <ErrorMessage
            name="confirmPassword"
            component="span"
            className={styles.ErrorMessage}
          />
          {/* <ErrorMessage component="span" className={styles.ErrorMessage} /> */}

          <Box height={20} />
          <button type="submit">RESET</button>
        </Form>
      </Formik>
    </div>
  );
}

export default ResetPassword;

import React from "react";
import { withFormik, Form, Field } from "formik";
import axios from "axios";
import * as Yup from "yup";

const Login = ({ values, errors, touched, isSubmitting }) => {
  return (
    <Form>
      <h1>Howdy</h1>
      <div>
        <Field type="text" name="username" placeholder="Username" />
        <p>{touched.username && errors.username}</p>
      </div>
      <div>
        <Field type="password" name="password" placeholder="Password" />
        <p>{touched.password && errors.password}</p>
      </div>
      <button disabled={isSubmitting}>Submit</button>
    </Form>
  );
};

export default withFormik({
  mapPropsToValues: () => {
    return {
      username: "",
      password: ""
    };
  },
  handleSubmit: (values, formikBag) => {
    console.log("Values inside handlesubmit", values);
    console.log("formikBag", formikBag);
    const url = "http://localhost:5000/api/register";
    axios
      .post(url, values)
      .then(res => {
        console.log("Res inside .then .post", res);
        // localStorage.setItem("token", res.data.token);
        formikBag.props.setToken(res.data.token);
        formikBag.props.history.push("/user");
      })
      .catch(err => {
        console.log(err);
      });
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("hey not so fast, fill this out"),
    password: Yup.string()
      .min(4)
      .max(16)
      .required("put in a password")
  })
})(Login);

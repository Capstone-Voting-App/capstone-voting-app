import React from 'react';
import {httpConfig} from "../utils/http-config";
import * as Yup from "yup";
import {Formik} from "formik";

import {SignUpFormContent} from "./SignUpFormContent";

export const SignUpForm = () => {
  const signUp = {
    profileCohort:"",
    profileEmail: "",
    profilePassword: "",
    profilePasswordConfirm: "",
    profileName: "",
  };

  const validator = Yup.object().shape({
    profileCohort: Yup.number()
      .required ("Cohort is required"),
    profileEmail: Yup.string()
      .email("email must be a valid email")
      .required('email is required'),
    profilePassword: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least eight characters"),
    profilePasswordConfirm: Yup.string()
      .required("Password Confirm is required")
      .min(8, "Password must be at least eight characters"),
    profileName: Yup.string()
      .min(1, "Name is too short")
      .max(32, "Name is too long")
  });

  const submitSignUp = (values, {resetForm, setStatus}) => {
    httpConfig.post("/apis/sign-up/", values)
      .then(reply => {
          let {message, type} = reply;

          if(reply.status === 200) {
            resetForm();
          }
          setStatus({message, type});
        }
      );
  };


  return (

    <Formik
      initialValues={signUp}
      onSubmit={submitSignUp}
      validationSchema={validator}
    >
      {SignUpFormContent}
    </Formik>

  )
};
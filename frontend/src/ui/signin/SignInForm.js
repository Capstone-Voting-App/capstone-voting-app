import { useDispatch } from 'react-redux'
import { httpConfig } from '../utils/http-config'
import jwtDecode from 'jwt-decode'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { SignInFormContent } from './SignInFormContent'
import { getAuth } from '../../store/auth'

export const SignInForm = () => {
  const dispatch = useDispatch()

    const validator = Yup.object().shape({
      profileEmail: Yup.string()
        .email("email must be a valid email")
        .required('email is required'),
      profilePassword: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least eight characters")

    });
    const signIn ={
      profileEmail:"",
      profilePassword:""
    };
    const submitSignIn = (values, {resetForm, setStatus}) =>
      httpConfig.post("/apis/sign-in/", values)
        .then(reply => {
          let {message, type}= reply;
          setStatus({message, type});
          if(reply.status === 200 && reply.headers["authorization"]) {
            window.localStorage.removeItem(("authorization"))
            window.localStorage.setItem("authorization", reply.headers["authorization"]);
            resetForm();
            let jwtToken = jwtDecode(reply.headers["authorization"])
            dispatch(getAuth(jwtToken))
          }
          setStatus({message, type});
        }
  );
    return (

      <Formik
        initialValues={signIn}
        onSubmit={submitSignIn}
        validationSchema={validator}
        >
        {SignInFormContent}
      </Formik>

    )
};
import { Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import React from 'react'
import * as Yup from 'yup'
import { httpConfig } from '../utils/http-config'

export const IdeaForm = () => {
  const idea = {
    ideaDescription: "",
  };

  const dispatch = useDispatch()

  const auth = useSelector(state => state.auth ? state.auth : null);

  const validator = Yup.object().shape({
    ideaForm: Yup.string()
      .required("idea description if required"),
    });

    const submitIdea = (values, {resetForm, setStatus}) => {
      const ideaProfileId = auth?.profileId ?? null
      const idea = {ideaProfileId, ...values}
      httpConfig.post("apis/idea/", idea)
        .then(reply => {
          let {message, type} = reply;

          if (reply.status === 200) {
            resetForm();
            // dispatch(fetchIdeasByProfileCohort(auth.profileCohort))
          }
          setStatus({message, type});
        }
        );
    };

    return (
      <Formik initialValues={idea}
              onSubmit={submitIdea}
              validationSchema={validator}
              >
        {IdeaFormContent}
      </Formik>
    )
};
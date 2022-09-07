import React from 'react'
import { Envelope, Key } from 'react-bootstrap-icons'
import { FormDebugger } from '../components/FormDebugger'

export const SignInFormContent = (props) => {
  const {
    status,
    values,
    errors,
    touched,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset
  } = props
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="profileEmail">Email Address</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <Envelope/>
              </div>
            </div>
            <input
              className="form-control"
              name="profileEmail"
              type="email"
              value={values.profileEmail}
              placeholder="Enter email"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {
            errors.profileEmail && touched.profileEmail && (
              <div className="alert alert-danger">
                {errors.profileEmail}
              </div>
            )
          }
        <div className="form-group">
          <button className="btn btn-primary mb-2" type="submit">Submit</button>
          <button
            className="btn btn-danger mb-2"
            onClick={handleReset}
            disabled={!dirty || isSubmitting}
          >Reset
          </button>
        </div>
        <FormDebugger {...props} />
      </form>
      {status && (<div className={status.type}>{status.message}</div>)}
    </>
  )
}
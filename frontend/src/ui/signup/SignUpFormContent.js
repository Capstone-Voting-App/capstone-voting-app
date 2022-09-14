import { FormDebugger } from '../components/FormDebugger'
import React from 'react'
import {Envelope, Key, Person, Hash} from 'react-bootstrap-icons'

export const SignUpFormContent = (props) => {
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
        {/*controlId must match what is passed to the initialValues prop*/}
        <div className="form-group">
          <label htmlFor="profileCohort">Cohort Number</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <Hash/>
              </div>
            </div>
            <input
              className="form-control"
              name="profileCohort"
              type="number"
              value={values.profileCohort}
              placeholder="Enter cohort number"
              onChange={handleChange}
              onBlur={handleBlur}

            />
          </div>
          {
            errors.profileCohort && touched.profileCohort && (
              <div className="alert alert-danger">
                {errors.profileCohort}
              </div>
            )

          }
        </div>

        <div className="form-group">
          <label htmlFor="profileEmail">CNM Email Address</label>
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
        </div>
        {/*controlId must match what is defined by the initialValues object*/}
        <div className="form-group">
          <label htmlFor="profilePassword">Password</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <Key/>
              </div>
            </div>
            <input
              name="profilePassword"
              className="form-control"
              type="password"
              placeholder="Password"
              value={values.profilePassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {errors.profilePassword && touched.profilePassword && (
            <div className="alert alert-danger">{errors.profilePassword}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="profilePasswordConfirm">Confirm Your Password</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <Key/>
              </div>
            </div>
            <input

              className="form-control"
              type="password"
              name="profilePasswordConfirm"
              placeholder="Password Confirm"
              value={values.profilePasswordConfirm}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {errors.profilePasswordConfirm && touched.profilePasswordConfirm && (
            <div className="alert alert-danger">{errors.profilePasswordConfirm}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="profileName">Your Name</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <Person/>
              </div>
            </div>
            <input
              className="form-control"
              name="profileName"
              type="text"
              value={values.profileName}
              placeholder="Enter your name"
              onChange={handleChange}
              onBlur={handleBlur}

            />
          </div>
          {
            errors.profileName && touched.profileName && (
              <div className="alert alert-danger">
                {errors.profileName}
              </div>
            )

          }
        </div>
        <div className="form-group">
          <button className="btn btn-primary mb-2" type="submit">Submit</button>
          <button
            className="btn btn-danger mb-2"
            onClick={handleReset}
            disabled={!dirty || isSubmitting}
          >Reset
          </button>
        </div>
        {/*<FormDebugger {...props} />*/}
      </form>
      {
        status && (<div className={status.type}>{status.message}</div>)
      }
    </>

  )
}
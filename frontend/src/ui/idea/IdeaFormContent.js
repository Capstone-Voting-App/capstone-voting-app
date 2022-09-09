import React from 'react'
import { FormDebugger } from '../components/FormDebugger'

export const IdeaFormContent = (props) => {
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
          <label htmlFor="ideaDescription">Idea</label>
          <div className="input-group">
            <input
              className="form-control"
              name="ideaDescription"
              type="text"
              value={values.ideaDescription}
              placeholder="Describe your idea"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {
            errors.ideaDescription && touched.ideaDescription && (
              <div className="alert alert-danger">
                {errors.ideaDescription}
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
        <FormDebugger {...props} />
      </form>
      {status && (<div className={status.type}>{status.message}</div>)}
    </>
  )
}
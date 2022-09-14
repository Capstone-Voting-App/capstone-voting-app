import { FieldArray, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import React from 'react'
import { object, array, string, number} from "yup"
import { httpConfig } from '../utils/http-config'
import { fetchIdeasByProfileCohort } from '../../store/ideas'
import { FormDebugger } from '../components/FormDebugger'

export const RankForm = (props) => {
  const dispatch = useDispatch()
  const {ideas, auth} = props
  const ranks = createInitialRanks(ideas)
  const initialValues = {ranks, ideasLength:ideas.length}
  const validator = object().shape({
    ranks: array().of(object().shape({rankValue:number().min(1, "Rank value must be 1 or greater").max(ideas.length, "Rank value is greater than number of ideas").integer("Please provide a whole number")}))
      .required('Please rank all choices'),
  })
 console.log(ranks)
  const submitRank = (values, { resetForm, setStatus }) => {
    const ideaProfileId = auth?.profileId ?? null
    const idea = { ideaProfileId, ...values }
    httpConfig.post('apis/rank/', idea)
      .then(reply => {
          let { message, type } = reply

          if (reply.status === 200) {
            resetForm()
            dispatch(fetchIdeasByProfileCohort(auth.profileCohort))
          }
          setStatus({ message, type })
        }
      )
  }

  return (
    <Formik initialValues={initialValues}
            onSubmit={submitRank}
            validationSchema={validator}
    >
      {RankFormContent}
    </Formik>
  )

  function RankFormContent (props) {
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
console.log(values)
    return (
      <>
        <form onSubmit={handleSubmit}>
          <FieldArray name="ranks">
            {() => (
              <>
                {values.ranks.map((idea, index) => (
                  <div className="form-group">
                    <label htmlFor="rankValue">{idea.ideaDescription}</label>
                    <div className="input-group">
                      <div key={`rank-${index}`} className="mb-3">
                        <input
                          type="number"
                          name={`ranks.${index}.rankValue`}
                          value={values.ranks[index].rankValue}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>
                    {
                      errors.rankValue && touched.rankValue && (
                        <div className="alert alert-danger">
                          {errors.rankValue}
                        </div>
                      )
                    }
                  </div>
                ))}
              </>
            )}
          </FieldArray>
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

  function createInitialRanks (ideas) {
    let initialRanks = []
    for (let i = 0; i < ideas.length; i++) {
      initialRanks.push({ rankProfileId: auth.profileId, rankIdeaId: ideas[i].ideaId, rankValue: 0, ideaDescription: ideas[i].ideaDescription })
    }
    return initialRanks
  }
}

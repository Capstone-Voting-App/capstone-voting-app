import { FieldArray, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import React from 'react'
import { object, array, string, number} from "yup"
import { httpConfig } from '../utils/http-config'
import { fetchIdeasByProfileCohort } from '../../store/ideas'
import { FormDebugger } from '../components/FormDebugger'
import { Container, Row } from 'react-bootstrap'

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
        <Container>
          <Row className="row-cols-4">
        <form onSubmit={handleSubmit}>
          <FieldArray name="ranks">
            {() => (
              <>
                {values.ranks.map((idea, index) => (
                  <div className="form-group d-flex">
                    <label htmlFor="rankValue" className="me-3 col-md-8 mb-2"><h6 className="p-2">{idea.ideaDescription}</h6></label>
                    <div className="input-group">
                      <div key={`rank-${index}`} className="mb-3">
                        <input
                          type="number"
                          name={`ranks.${index}.rankValue`}
                          value={values.ranks[index].rankValue}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="w-100 p-2"
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
            <button className="btn btn-primary mb-2 me-1 shadow bgColor" type="submit">Submit</button>
            <button
              className="btn mb-2 text-light resetBg"
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
            >Reset
            </button>
          </div>
          {/*<FormDebugger {...props} />*/}
        </form>
          </Row>
        </Container>
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

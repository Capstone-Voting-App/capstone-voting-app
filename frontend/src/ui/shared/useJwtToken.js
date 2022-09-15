import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAuth } from '../../store/auth'

export function useJwtToken () {

  const [isLoading, setIsLoading] = React.useState(true)
  const jwt = useSelector((state) =>state.auth)
  const authenticatedUser = jwt?.auth ?? null

  const dispatch = useDispatch();

  const initialEffects =  () => {
    async function getAuthFromRedux () {
      await dispatch(fetchAuth())
      setIsLoading(false)

    }
    getAuthFromRedux().catch(onerror => {console.error(onerror)})
  }

  React.useEffect(initialEffects, [dispatch])
  return {authenticatedUser, isLoading}

}
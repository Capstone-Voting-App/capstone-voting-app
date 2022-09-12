import React from 'react';
import { useDispatch } from 'react-redux'
import { getAuth } from '../store/auth'
import { httpConfig } from './utils/http-config'

export const SignOutComponent = () => {
  const dispatch = useDispatch()
  const signOut = () => {
    httpConfig.get('apis/sign-out').then(reply => {

      if (reply.status === 200) {
        window.localStorage.removeItem('authorization')
        dispatch(getAuth(null))
        window.location = '/'
      }
    })
  }

  return(
    <>
      <div className="dropdown-item sign-out-dropdown">
        <button onClick={signOut}>
          Sign Out
        </button>
      </div>
    </>
  )
}
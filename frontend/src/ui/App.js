import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { SignUp } from './SignUp'
import { FourOhFour } from './FourOhFour'
import { SignIn } from './SignIn'
import { Navigation } from './Navigation'


export const App = () => (
  <>
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route  path='/' element={<SignUp />} />
        <Route  path='/SignIn' element={<SignIn />} />
        <Route element={<FourOhFour />} />
      </Routes>
    </BrowserRouter>

  </>
)
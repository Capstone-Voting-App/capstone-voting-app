import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { FourOhFour } from './FourOhFour'
import { SignIn } from './SignIn'
import { Navigation } from './Navigation'
import { Home } from './Home'
import { UserInput } from './UserInput'
import { Ranking } from './Ranking'
import { Voting } from './Voting'
import { Instructor } from './Instructor'
import { Provider } from 'react-redux'


export const App = (store) => (
  <>
    <Provider store = {store}>
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/SignIn" element={<SignIn/>}/>
          <Route path="/UserInput" element={<UserInput/>}/>
          <Route path="/Ranking" element={<Ranking/>}/>
          <Route path="/Voting" element={<Voting/>}/>
          <Route path="/Instructor" element={<Instructor/>}/>
          <Route element={<FourOhFour/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>

  </>
)
import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css"
import {Route, BrowserRouter, Switch} from 'react-router-dom'


export function App() {
  return(
    <>
      <BrowserRouter>
        {/*ADD NAVIGATION HERE FOR ALL PAGES*/}
        <Switch>
          {/*<Route exact path='/' component={Home} />*/}
          {/*<Route exact path='/About' component={About} />*/}
        </Switch>
      </BrowserRouter>
    </>
  )

}
import {createRoot} from "react-dom/client"
import { App } from './ui/App'
import store from './store/store'
import * as ReactDOM from 'react-dom'

ReactDOM.render(App(store) , document.querySelector("#root"));
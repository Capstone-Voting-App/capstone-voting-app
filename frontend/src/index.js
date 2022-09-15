import { App } from './ui/App'
import store from './store/store'
import * as ReactDOM from 'react-dom'
// import { createRoot } from 'react-dom/client'

ReactDOM.render(App(store) , document.querySelector("#root"));
// const container = document.getElementById('root')
// const rootContainer = createRoot(container)
// rootContainer.render(<App store={store} />);
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UseContext from './Components/UserContext.jsx'
import {Provider} from 'react-redux'
import {store} from './redux/store.js'
createRoot(document.getElementById('root')).render(

  <Provider store={store}>
  <UseContext>
    <App />
    </UseContext>
    </Provider>
  
)

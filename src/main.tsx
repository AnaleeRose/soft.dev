import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {configureStore} from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import commonReducer from './components/features/commonstate'
import { BrowserRouter } from "react-router-dom";

const store = configureStore({
  reducer:{
      commonState: commonReducer
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
)

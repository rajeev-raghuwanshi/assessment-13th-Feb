import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppRoutes from './routes/AppRoutes'
// import Books from './components/Books'
import { Provider } from 'react-redux'
import { store } from './app/store/store'

function App() {
  return (
    <Provider store={store}>
      <AppRoutes></AppRoutes>
    </Provider>
  )
}

export default App

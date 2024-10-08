import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { Router } from './router'
import './lang/i18n'

function App() {

  return (
    <>
    <RouterProvider router={Router} />

    </>
  )
}

export default App

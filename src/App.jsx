import React, { Suspense } from 'react'
import logo from '../src/assets/Web Portal.png'
import Auth from './Pages/Auth'
import { RouterProvider } from 'react-router-dom'
import Loader from './Loader/Loader'
import { router } from './route/Route'
const App = () => {
  return (
    <>
      <Suspense fallback={
        <Loader />
      }>
        <RouterProvider router={router} />
      </Suspense>
    </>
  )
}

export default App
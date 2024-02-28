import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MemberCart from './pages/MemberCart'
import Home from './pages/Home'
import Accordion from './Accordion'
import SignIn from './pages/auth/SignIn'
import SignUp from './pages/auth/SignUp'
import { ComingSoon } from './pages/ComingSoon'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },

  {
    path: "/memberCart",
    element: <MemberCart />
  },
  {
    path: "/accordion",
    element: <Accordion />
  },
  {
    path: "/sign-in",
    element: <SignIn />
  },
  {
    path: "/sign-up",
    element: <SignUp />
  },
  {
    path: "/comingsoon",
    element: <ComingSoon />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)



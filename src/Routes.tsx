import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Register from './pages/Register/Register'
import RecoverPassword from './pages/RecoverPassword/RecoverPassword'
import { useAuthContext } from './contexts/Auth/AuthContext'
import { useMemo } from 'react'
import App from './App'
import Login from './pages/Login/Login'


function Routes() {
    const { currentUser } = useAuthContext()
    const router = useMemo(() => {
        if (currentUser) {
            return createBrowserRouter([
                {
                    path: '/',
                    element: <App />
                }
            ])
        } else {
            return createBrowserRouter([
                {
                  path: "/",
                  element: <Login />
                },
                {
                  path: "/register",
                  element: <Register />
                },
                {
                  path: "/recover-password",
                  element: <RecoverPassword />
                }
              ])
        }
    },[currentUser])
  return (
    <RouterProvider router={router} />
  )
}

export default Routes
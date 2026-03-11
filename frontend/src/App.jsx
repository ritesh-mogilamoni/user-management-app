import RootLayout from "./components/RootLayout"
import { createBrowserRouter,RouterProvider } from "react-router"
import Home from "./components/Home"
import AddUser from "./components/AddUser"
import User from "./components/User"
import Users from "./components/Users"

function App() {
  const routeObj=createBrowserRouter([
    {
      path:"/",
      element:<RootLayout/>,
      children:[
    {
      index: true,
      element: <Home />
      }
    ,
    {
      path:"add-user",
      element:<AddUser />
    },
    {
      path:"users",
      element:<Users />
    },
    {
      path:"user",
      element:<User />
    }]
  }
  ])

  return (
    <RouterProvider router={routeObj}/>
  )
}

export default App
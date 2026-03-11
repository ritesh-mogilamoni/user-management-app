import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router"

function RootLayout() {
  return (
    <>
    <Header />
    
    <div className="mx-20 min-h-screen">
        <Outlet />
    </div>

    
    <Footer />
</>
  )
}

export default RootLayout
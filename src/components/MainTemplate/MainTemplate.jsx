import { Outlet } from "react-router-dom"
import Header from "../header/Header"
import Footer from "../Footer/Footer"

export const MainTemplate = () => {
    return(
        <>
        <Header />                               
        <main>
            <Outlet />
        </main>
        <Footer/>
        </>
    )
}
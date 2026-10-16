import { Outlet } from "react-router"
import { Header } from "./Header"
import { Footer } from "./Footer"

export const Layout = () => {
    return(
        <div className="flex flex-col items-center">
            <Header title="MyWebsite" />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
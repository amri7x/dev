import { Outlet } from "react-router"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { Card } from "./Card"

export const Layout = () => {
    return(
        <div className="flex flex-col items-center">
            <Header title="MyWebsite" />
            <main>
                <Card title="Coba">
                    <p>Konten card di sini</p>
                </Card>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
import React from "react"
import { Outlet, Link } from "react-router"

export const HostLayout = () => {
    return(
        <>
        <nav className="
                w-100 flex justify-around
                lg:w-full lg:flex-row lg:justify-end lg:text-3xl
                ">
            <Link to="/host">Dashboard</Link>
            <Link to="/host/income">Income</Link>
            <Link to="/host/reviews">Rewviews</Link>
        </nav>
        <Outlet />
        </>
    )
}
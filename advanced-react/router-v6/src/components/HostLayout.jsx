import React from "react"
import { Outlet, NavLink } from "react-router"

export const HostLayout = () => {
    return(
        <>
        <nav className="
                w-full flex justify-around
                lg:w-full lg:flex-row lg:justify-end lg:text-3xl
                ">
            <NavLink 
                className={({isActive}) => `px-5 ${isActive ? "bg-amber-600 font-extrabold text-white rounded-l" : "hover:text-red-500"}`}
                to="/host"
                end>
                    Dashboard
            </NavLink>
            <NavLink 
                className={({isActive}) => `px-5 ${isActive ? "bg-amber-600 font-extrabold text-white rounded-l" : "hover:text-red-500"}`}
                to="income">
                    Income
            </NavLink>
            <NavLink 
                className={({isActive}) => `px-5 ${isActive ? "bg-amber-600 font-extrabold text-white rounded-l" : "hover:text-red-500"}`}
                to="vans">
                    Vans
            </NavLink>
            <NavLink 
                className={({isActive}) => `px-5 ${isActive ? "bg-amber-600 font-extrabold text-white rounded-l" : "hover:text-red-500"}`}
                to="reviews">
                    Rewviews
            </NavLink>
        </nav>
        <Outlet />
        </>
    )
}
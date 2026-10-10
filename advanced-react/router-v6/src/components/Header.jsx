import React from "react"
import { Link, NavLink } from "react-router"

export const Header = () => {
    return(
    <header className="
                flex flex-col w-screen
                sm:text-2xl sm:justify-between
                lg:w-full lg:flex-row lg:justify-end lg:text-4xl
                ">
        <Link to="/">#VanLife</Link>
        <nav className="
                w-full flex justify-around gap-10
                lg:w-full lg:flex-row lg:justify-end lg:text-3xl
                ">
          <NavLink 
            to="/host"
            className={({isActive}) => isActive ? "bg-amber-600 font-extrabold text-white rounded-l" : "hover:text-red-500"}>Host
            </NavLink>
          <NavLink 
            to="/about"
            className={({isActive}) => isActive ? "bg-amber-600 font-extrabold text-white rounded-l" : "hover:text-red-500"}>About
            </NavLink>
          <NavLink 
            to="/vans"
            className={({isActive}) => isActive ? "bg-amber-600 font-extrabold text-white rounded-l" : "hover:text-red-500"}>Vans
            </NavLink>
        </nav>
    </header>
    )
}

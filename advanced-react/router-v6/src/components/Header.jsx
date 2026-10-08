import React from "react"
import { Link } from "react-router"

export const Header = () => {
    return(
    <header className="
                flex flex-col w-screen
                sm:text-2xl sm:justify-between
                lg:w-full lg:flex-row lg:justify-end lg:text-4xl
                ">
        <Link to="/">#VanLife</Link>
        <nav className="
                w-100 flex justify-around
                lg:w-full lg:flex-row lg:justify-end lg:text-3xl
                ">
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
    </header>
    )
}

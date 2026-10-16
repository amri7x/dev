import React from "react"
import { Link, NavLink } from "react-router"
import { useTheme } from "../hooks/ThemeContext"

export const Header = () => {
  const { theme, toggleTheme } = useTheme()
    return(
    <header className="
                flex flex-col w-full
                sm:text-2xl sm:justify-between
                lg:w-full lg:flex-row lg:justify-end lg:text-4xl
                ">
        <div className="flex flex-col justify-start items-center">
          <Link to="/">#VanLife</Link>
            <button 
                  onClick={toggleTheme}
                  className="text-sm h-7 px-3 py-1  rounded border border-slate-300 dark:border-slate-700"
              >
                  {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </button>
        </div>
        <nav className="
                w-full flex justify-around gap-10
                lg:w-full lg:flex-row lg:justify-end lg:text-3xl
                ">
          <NavLink 
            to="/host"
            className={({isActive, isPending}) => (isActive || isPending) ? "bg-amber-600 font-extrabold text-white rounded-l" : "hover:text-red-500"}>Host
            </NavLink>
          <NavLink 
            to="/about"
            className={({isActive, isPending}) => (isActive || isPending) ? "bg-amber-600 font-extrabold text-white rounded-l" : "hover:text-red-500"}>About
            </NavLink>
          <NavLink 
            to="/vans"
            className={({isActive, isPending}) => (isActive || isPending) ? "bg-amber-600 font-extrabold text-white rounded-l" : "hover:text-red-500"}>Vans
            </NavLink>
        </nav>
    </header>
    )
}

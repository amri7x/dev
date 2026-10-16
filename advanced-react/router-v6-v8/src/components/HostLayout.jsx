import React from "react"
import { Outlet, NavLink, useNavigation } from "react-router"
import bgLoading from "../assets/images/loading.gif"

export const HostLayout = () => {
    const navigation = useNavigation()
    const isLoading = navigation.state === "loading"

    return(
        <>
        <nav className="
                w-full flex justify-around
                lg:w-full lg:flex-row lg:justify-end lg:text-3xl
                ">
            <NavLink 
                className={({isActive,isPending}) => `px-5 hover:bg-slate-200 transition-all duration-150 ${(isActive || isPending) ? "bg-amber-600 font-extrabold text-white rounded-l" : "hover:text-red-500"}`}
                to="."
                end>
                    Dashboard
            </NavLink>
            <NavLink 
                className={({isActive,isPending}) => `px-5 hover:bg-slate-200 transition-all duration-150 ${(isActive || isPending) ? "bg-amber-600 font-extrabold text-white rounded-l" : "hover:text-red-500"}`}
                to="income">
                    Income
            </NavLink>
            <NavLink 
                className={({isActive,isPending}) => `px-5 hover:bg-slate-200 transition-all duration-150 ${(isActive || isPending) ? "bg-amber-600 font-extrabold text-white rounded-l" : "hover:text-red-500"}`}
                to="vans">
                    Vans
            </NavLink>
            <NavLink 
                className={({isActive,isPending}) => `px-5 hover:bg-slate-200 transition-all duration-150 ${(isActive || isPending) ? "bg-amber-600 font-extrabold text-white rounded-l" : "hover:text-red-500"}`}
                to="reviews">
                    Reviews
            </NavLink>
        </nav>
        { isLoading ? (
            <div className="w-full h-full flex justify-center items-center">
                <img src={bgLoading} />
            </div>
        ) :
            (<Outlet />)
        }
        </>
    )
}
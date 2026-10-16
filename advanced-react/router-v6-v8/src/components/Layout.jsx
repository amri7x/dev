import React from "react"
import { Outlet, useNavigation } from "react-router"
import { Header } from "./Header"
import loadingImage from "../assets/images/loading.gif"

export const Layout = () => {
    const navigation = useNavigation()
    const isLoading = navigation.state === "loading"
    return(
        <div className="
                flex flex-col w-full p-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors
                sm:text-2xl sm:justify-between
                lg:w-full lg:flex-row lg:justify-end lg:text-4xl">
            <Header />
            {isLoading
                ? (
                    <div>
                        <p>Loading</p>
                    </div>
                ) 
                : (<Outlet />)
            }
        </div>
    )
}
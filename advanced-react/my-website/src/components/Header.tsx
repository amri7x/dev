import { Link, NavLink } from "react-router"
import { useEffect, useState } from "react"

const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "light" || savedTheme === "dark") return savedTheme

    return window.matchMedia("prefers-color-scheme: dark").matches
        ? "dark"
        : "light"
}

type HeaderProps = {
    title: string
}

type NavItem = { 
    label: string
    to: string
}

const navItems: NavItem[] = [ 
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
]

export const Header = ({title}: HeaderProps) => {

    const [theme, setTheme] = useState(getInitialTheme)

    useEffect(()=>{
        document.documentElement.dataset.theme = theme
        localStorage.setItem("theme", theme)
    },[theme])

    const toggleTheme = () => {
        setTheme(current => current === "light" ? "dark" : "light")
    }

    return(
        <header className="w-[98%] flex justify-around">
            <Link 
                className=""
                to="/" 
                aria-label={`${title} - Home`}
                >
                {title}
            </Link>
            <nav aria-label="Navigasi utama">
                <ul className="w-80 flex justify-around">
                    {navItems.map(({label, to}) => (
                        <li key={to}>
                            <NavLink to={to}>{label}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            <button
                type="button"
                onClick={toggleTheme}
                aria-label={`Ganti mode ${theme === "light" ? "gelap" : "terang"}`}
            >
                {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>

        </header>
    )
}
import { Link, NavLink } from "react-router"

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
    return(
        <header className="w-[98%] flex justify-around bg-amber-300">
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
        </header>
    )
}
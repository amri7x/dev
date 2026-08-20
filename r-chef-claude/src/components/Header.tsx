import logo from "../images/Chef-Claude-Icon.png"
import type { headerData } from "../shared/appData";

const Header = ({title, logoAlt}:headerData) => (
    <header className="mx-auto px-[16px] py-[24px] flex justify-center items-center w-[720px] h-[111px] shadow-md">
        <div>
            <img
                src={logo}
                alt={logoAlt}
                className="w-[43px] h-[52px]"
            />
        </div>
        <div>
            <h1 className="pl-[11px] py-[4px] text-[2rem] tracking-[-5%]">{title}</h1>
        </div>
    </header>
)

export default Header;
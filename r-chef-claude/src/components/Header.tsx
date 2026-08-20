import type { HeaderType } from "../shared/headerData";

const Header = ({title, ...imgProps}:HeaderType) => (
    <header className="gap-[11px] mx-auto px-[16px] py-[24px] flex justify-center items-center w-[720px] h-[111px] shadow-md bg-white">
        <div>
            <img
                className="w-[43px] h-[52px]"
                {...imgProps}   
            />
        </div>
        <div>
            <h1 className="py-[4px] text-[2rem] tracking-[-5%]">{title}</h1>
        </div>
    </header>
)

export default Header;
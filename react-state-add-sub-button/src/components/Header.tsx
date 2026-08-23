import type { HeaderType } from "../types/HeaderType"

export const Header = ({title, submitButton}:HeaderType) => (
    <header className="mt-5 flex justify-center items-center w-[80px] h-[80px] bg-white mx-auto rounded-full shadow-md">
        <div className="absolute cursor-pointer mr-20">
            <button className="cursor-pointer pb-1 bg-gray-100 hover:bg-red-300 hover:text-white mx-auto mt-18 rounded-[100%] flex justify-center items-center text-[25px] w-[30px] h-[30px] shadow-[0_0_10px] hover:shadow-red-500 active:scale-70"onClick={submitButton.subs.onClick}>{submitButton.subs.btnText}</button></div>
        <h2 className="text-[50px] font-bold">{title}</h2>
        <div className="absolute cursor-pointer ml-20">
            <button className="cursor-pointer pb-1 bg-gray-100 hover:bg-green-300 hover:text-white mx-auto mt-18 rounded-[100%] flex justify-center items-center text-[25px] w-[30px] h-[30px] shadow-[0_0_10px] hover:shadow-green-500 active:scale-70" onClick={submitButton.add.onClick}>{submitButton.add.btnText}</button></div>
    </header>
)
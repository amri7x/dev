import type { InputType, ButtonType } from "../shared/formData"

const Form = ({inputData,buttonData}:{inputData:InputType; buttonData:ButtonType;}) => (
    <>
    <form  className="flex gap-[11px] mt-[70px]">
        <input 
        className="w-[399px] px-3 border border-[#D1D5DB] rounded-[6px] bg-white text-[#6B7280] text-sm shadow-sm"
        {...inputData}
        />
        <button 
        className="cursor-pointer w-[183px] h-[38px] px-2 rounded-md text-sm text-[#FAFAF8] bg-[#141413] hover:bg-gray-500 shadow-sm"
        {...buttonData}
        >
        {buttonData.btntext}
        </button>
    </form>
    </>
)

export default Form;
import type { FormConfig } from "../types/ingredientsType"

const Form = ({formProps, input, submitButton}: FormConfig) => (
    <>
        <form className="flex flex-col justify-center gap-[11px] mt-[70px]" {...formProps}>
            {input.map(({ id, label, inputProps }) => (
                <div key={id}>
                    <div>
                        <label htmlFor={inputProps.name}>{label}</label>
                    </div>
                    <input
                        className="w-[399px] h-[38px] px-3 border border-[#D1D5DB] rounded-[6px] bg-white text-[#6B7280] text-sm shadow-sm"
                        {...inputProps}
                        id={id}
                    />
                    <button className="ml-2 cursor-pointer w-[188px] h-[38px] px-2 rounded-md text-sm text-[#FAFAF8] bg-[#141413] hover:bg-gray-500 shadow-sm"
                        {...submitButton}
                    >
                        {submitButton.btntext}
                    </button>
                </div>
            ))}
        </form>
    </>
)

export default Form;
import type { ComponentProps } from "react"

export type FormType = ComponentProps<"form"> & {
}

export type ButtonType = ComponentProps<"button"> & {
    btntext: string
}
export type InputType = ComponentProps<"input"> & {
    "aria-label": string
}

export const FormData = {
    input: {
        type: "text",
        placeholder: "e.g. oregano",
        "aria-label": "Input the recipies",
        onSubmit: () => console.log("Form Submited"),
        onMouseEnter: () => console.log("This is input ingredient")
    } as InputType,

    button: {
        type: "submit",
        label: "Add ingredient",
        btntext: "+ Add ingredient",
        onMouseEnter: () => console.log("This is button add ingredient")
    } as ButtonType
}
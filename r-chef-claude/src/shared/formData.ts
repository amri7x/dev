import type { ComponentProps } from "react"

export type ButtonType = ComponentProps<"button"> & {
    type: string
    label: string
    btntext: string
}
export type InputType = ComponentProps<"input"> & {
    type: string
    placeholder: string
    "aria-label": string
}

export const formData = {
    input: {
        type: "text",
        placeholder: "e.g. oregano",
        "aria-label": "Input the recipies"
    } as InputType,

    button: {
        type: "submit",
        label: "Add ingridient",
        btntext: "+ Add ingridient"
    } as ButtonType
}
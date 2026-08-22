import type { ComponentProps } from "react"

export type ingredientType = ComponentProps<"ul"> & {
    items: string[]
}

export type FormFieldItem = {
    id: string,
    label: string,
    inputProps: ComponentProps<"input">
}

export type FormField = {
    formProps: ComponentProps<"form">,
    input: FormFieldItem[];
    submitButton: ComponentProps<"button"> & { btntext:string }
}
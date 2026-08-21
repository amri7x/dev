import type { ComponentProps } from "react"

export type ingredientType = ComponentProps<"ul"> & {
    items: string[]
}

export const ingredientsData: string[] = ["Chicken", "Oregano", "Tomatoes"]
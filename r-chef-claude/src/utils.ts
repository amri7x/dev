//Tools
import { clsx, type ClassValue} from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs: ClassValue[]) => (
    twMerge(clsx(inputs))
)

//Deploy Section

//Type
export * from "./types/headerType"
export * from "./types/ingredientsType"

//Data
export * from "./hooks/HeaderData"
export * from "./hooks/IngredientsData"

//Components
export { default as Header} from "./components/Header"
export { default as Form } from "./components/IngredientsForm"
export { default as IngredientsOutput } from "./components/IngredientsOutput"
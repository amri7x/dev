import { clsx, type ClassValue} from "clsx"
import { twMerge } from "tailwind-merge"

const cn = (...inputs: ClassValue[]) => (
    twMerge(clsx(inputs))
)

export default cn

//Deploy Section

//Type
export * from "./types/headerType"
export * from "./types/ingredientsType"

//Data
export * from "./hooks/HeaderData"

//Components
export { default as Header} from "./components/Header"
export { default as Form } from "./components/IngredientsForm"
export { default as IngredientsOutput } from "./components/IngredientsOutput"
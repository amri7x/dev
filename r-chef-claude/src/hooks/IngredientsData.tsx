import { useState } from "react"
import type { FormField } from "../types/ingredientsType"

export const useIngredientsData = () => {
    const [ingredients, setIngredients] = useState<string[]>([])

    const ingredientsFormField: FormField = {
        formProps: {
            onSubmit: (e) => {
                e.preventDefault()
                const formElement = e.currentTarget as HTMLFormElement
                const formData = new FormData(formElement)
                const newIngredient = formData.get("name") as string

                if (newIngredient && newIngredient.trim() !== "") {
                    setIngredients((prev) => [...prev, newIngredient.trim()])
                    formElement.reset()
                } else {
                    console.log("Input masih kosong!")
                }
            }
        },
        input: [
            {
                id: "ingredient-name",
                label: "Ingredient Name : ",
                inputProps: {
                    type: "text",
                    name: "name",
                    placeholder: "e.g. oregano",
                }
            }
        ],
        submitButton: {
            type: "submit",
            btntext: "+ Add Ingredient",
        }
    }

    return { ingredients, ingredientsFormField }
}
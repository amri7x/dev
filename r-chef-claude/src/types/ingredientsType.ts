import type { ComponentProps } from "react";

export type ingredientType = ComponentProps<"ul"> & {
    items: string[]
}

export const ingredientsData: string[] = ["Chicken", "Oregano", "Tomatoes"]

export type FormFieldItem = {
    id: string,
    label: string,
    inputProps: ComponentProps<"input">
}

export type FormConfig = {
    formProps: ComponentProps<"form">,
    input: FormFieldItem[];
    submitButton: ComponentProps<"button"> & { btntext:string }
}

export const RecipeFormData:FormConfig = {
    formProps: {
        onSubmit:(e) => {
            e.preventDefault()
            const formElement = e.currentTarget as HTMLFormElement
            const formData = new FormData(formElement)
            const newIngredient = formData.get("name") as String

            if(newIngredient && newIngredient.trim() !== ""){
                ingredientsData.push(newIngredient.trim())
                console.log("Update ingredients : ", ingredientsData)
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
                onMouseEnter: (e) => {
                    e.preventDefault()
                    console.log("This is ingredient name input field")
                }
            }
        },
        // {
        //     id: "ingredient-name",
        //     label: "Ingredient Name : ",
        //     inputProps: {
        //         type: "text",
        //         name: "name",
        //         placeholder: "e.g. oregano",
        //         onMouseEnter: (e) => {
        //             e.preventDefault()
        //             console.log("This is ingredient name input field")
        //         }
        //     }
        // },
    ],
    submitButton: {
        type: "submit",
        btntext: "+ Add Ingredient",
        onMouseEnter: (e) => {
                    e.preventDefault()
                    console.log("This is button add ingredient")
                }
    }
}
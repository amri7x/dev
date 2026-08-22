import {
  Header, HeaderData,
  Form, useIngredientsData,
  IngredientsOutput
} from "./utils";

export const App = () => {
  const { ingredients, ingredientsFormField } = useIngredientsData();

  return (
  <div className="w-[720px] text-sm mx-auto flex flex-col justify-center items-center font-[Inter]">
    <Header {...HeaderData} />
    <main>
      <Form {...ingredientsFormField} />
      {ingredients.length > 0 && (
          <IngredientsOutput items={ingredients} />
        )}
    </main>
  </div>
  )
}
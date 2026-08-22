import {
  Header, HeaderData,
  Form, useIngredientsData,
  IngredientsOutput
} from "./utils";

const App = () => {
  const { ingredients, recipeFormConfig } = useIngredientsData();

  return (
  <div className="w-[720px] text-sm mx-auto flex flex-col justify-center items-center font-[Inter]">
    <Header {...HeaderData} />
    <main>
      <Form {...recipeFormConfig} />
      {ingredients.length > 0 && (
          <IngredientsOutput items={ingredients} />
        )}
    </main>
  </div>
  )
}

export default App;
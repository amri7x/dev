import {
  Header, HeaderData,
  Form, FormData,
  IngredientsOutput, ingredientsData
} from "./index";

const App = () => (
  <div className="w-[720px] text-sm mx-auto flex flex-col justify-center items-center font-[Inter]">
    <Header {...HeaderData} />
    <main>
      <Form 
        inputData={FormData.input}
        buttonData={FormData.button}
      />
      <IngredientsOutput
      items={ingredientsData}
      />
    </main>
  </div>
)

export default App;
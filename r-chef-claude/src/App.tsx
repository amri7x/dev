import {
  Header, HeaderData,
  Form, FormData
} from "./index";

const App = () => (
  <div className="flex flex-col justify-center font-[Inter]">
    <Header {...HeaderData} />
    <main>
      <Form 
        inputData={FormData.input}
        buttonData={FormData.button}
      />
    </main>
  </div>
)

export default App;
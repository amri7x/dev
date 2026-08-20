import {
  Header, HeaderData,
  Form, formData
} from "./index";

const App = () => (
  <div className="flex flex-col justify-center font-[Inter]">
    <Header {...HeaderData} />
    <main>
      <Form 
        inputData={formData.input}
        buttonData={formData.button}
      />
    </main>
  </div>
)

export default App;
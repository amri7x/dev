import {Header, Main, Footer, Button} from "./components/index"
import {Toggle} from "./hooks/index"

export const App = () => {
  const [on, toggle] = Toggle(true)
  return(
    <>
    <div>
      <Button onClick={toggle} onDoubleClick={() => console.log("double clicked")}>Show</Button>
      <br />
    </div>
    <div className="grid grid-rows-3 grid-cols-1 rounded-t-md bg-gray-300 w-[360px] max-w-[360px] mx-auto">
      { on &&
      <>
        <Header className="flex flex-col justify-center bg-blue-600 hover:bg">
          <h1 className="text-white mx-auto">this is header</h1>
        </Header>

        <Main className="flex justify-center bg-whitesmoke-600">
          <p>This is main content</p>
        </Main>

        <Footer className="flex justify-center bg-whitesmoke-600">
          <p>This is Footer</p>
        </Footer>
      </>
      }
    </div>
    </>
)}
import Header from "./components/Header"
import { HeaderData } from "./shared/appData";

const App = () => (
  <main className="flex flex-col justify-center font-[Inter]">
    <Header {...HeaderData} />
  </main>
)

export default App;
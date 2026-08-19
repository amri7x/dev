import Header from "./components/Header"
import Travel from "./components/Travel"
import travelData from "./TravelData"

export default function App(){
    return(
        <div className="max-w-[550px] max-h-[750px] mx-auto border-1 border-[#F55A5A]">
            <Header />
            {travelData.map((data) => (
            <Travel
                key={data.id} {...data}
            />
            ))}
        </div>
    )
}
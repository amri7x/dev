import React from "react"
import { useParams } from "react-router"

export const VanDetail = () => {
    const params = useParams()
    console.log(params)
    const [van, setVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    },[params.id])

    return(
    <>
        {van ? (
            <div className="
                    w-full max-w-full flex flex-col text-xl mx-3 gap-3
                    lg:w-full lg:max-w-full lg:flex-row
                        ">
                <img
                    className="
                        rounded-2xl w-80 h-80 mx-auto
                        lg:w-100 lg:h-100
                    " src={van.imageUrl} 
                />
                <div className="">
                    <p>{van.name}</p>
                    <p>{van.type}</p>
                    <p>{van.description}</p>
                </div>
            </div>
            ) : <h2>Loading data</h2>}
    </>
)}
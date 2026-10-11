import { useEffect, useState } from "react"
import { Link } from "react-router"

export const HostVans = () => {
    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
        }, [])

    const vanList = vans.map(van => (
        <Link
            className="flex justify-start mb-2 gap-2 w-full bg-slate-200 p-2 rounded-xl"
            to={`/host/vans/${van.id}`}
            key={van.id}
            >
            <div className="">
                <img
                    className="w-35 rounded-xl" 
                    src={van.imageUrl}
                />
            </div>
            <div className="flex flex-col justify-around">
                <p>{van.name}</p>
                <p>{van.price}</p>
            </div>
        </Link>
    ))

    return(
        <section className="mt-4 mx-4">
            <h1 className="text-2xl mb-5">Your listed vans</h1>
            <div>
                {
                    vans.length > 0
                    ? (<div>{vanList}</div>)
                    : <p>Loading ....</p>
                }
            </div>
        </section>
    )
}
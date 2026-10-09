import { useState, useEffect } from "react"
import { Link } from "react-router"

export const Vans = () => {
    const [vans, setVans] = useState([])
    
    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    return (
        <div className="
            max-w-6xl mx-auto p-4 flex flex-col overflow-auto scrollbar-hide
            sm:grid sm:grid-cols-2 sm:gap-6
            lg:grid-cols-4 lg:w-500 lg:mx-auto lg:gap-5 lg:max-w-7xl
        ">
            {vans.map(van => (
                <div
                    key={van.id}
                    aria-label={`View details for ${van.name}, price at $${van.price} per day`}
                    className="
                        mb-4
                        sm:mb-0
                        "
                >
                    <Link to={`/vans/${van.id}`} className="block">
                        <img
                            className="
                                w-80 h-70 object-cover mx-auto mb-2 rounded-2xl
                                lg:w-120 lg:h-80
                                " 
                            src={van.imageUrl} 
                            alt={van.name}
                        />
                        <div className="
                                flex justify-between w-80 mx-auto
                                lg:w-70
                                ">
                            <div className="flex flex-col">
                                <span className="font-semibold">{van.name}</span>
                                <span className="text-gray-500 text-sm capitalize">{van.type}</span>
                            </div>
                            <div className="flex flex-col text-right">
                                <span className="font-semibold">${van.price}</span>
                                <span className="text-gray-500 text-sm">/day</span>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}
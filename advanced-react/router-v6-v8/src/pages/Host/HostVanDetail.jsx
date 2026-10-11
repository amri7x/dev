import { useState, useEffect } from "react"
import { useParams, Outlet, NavLink } from "react-router"

export const HostVanDetailV8 = () => {
    const params = useParams()
    const [hostVanDetail, setHostVanDetail] = useState([])

    useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setHostVanDetail(data.vans[0]))
    },[params.id])
    
    return(
        <>
            <section className="m-5">
                <div className="flex gap-5">
                    <img src={hostVanDetail?.imageUrl} width={200} />
                    <div className="flex flex-col justify-around">
                        <p>{hostVanDetail?.name}</p>
                        <p>{hostVanDetail?.type}</p>
                        <p>${hostVanDetail?.price}/day</p>
                    </div>
                </div>
            </section>
            <nav className="
                    mx-5 flex gap-5
                    ">
                <NavLink
                    end
                    className={({isActive}) => `px-2 rounded-md ${isActive ? "bg-amber-400" : null}`} 
                    to=".">Description</NavLink>
                <NavLink
                    className={({isActive}) => `px-2 rounded-md ${isActive ? "bg-amber-400" : null}`} 
                    to="pricing">Pricing</NavLink>
                <NavLink
                    className={({isActive}) => `px-2 rounded-md ${isActive ? "bg-amber-400" : null}`} 
                    to="photos">Photos</NavLink>
            </nav>
            <div className="mx-5">
                <Outlet />
            </div>
        </>
    )
}
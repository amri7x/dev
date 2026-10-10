import { useState, useEffect } from "react"
import { useParams, Outlet, NavLink } from "react-router"

export const HostVanDetail = () => {
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
            <nav className="ml-5 flex gap-5">
                <NavLink to=".">Description</NavLink>
                <NavLink to="pricing">Pricing</NavLink>
                <NavLink to="photos">Photos</NavLink>
            </nav>
            <Outlet />
        </>
    )
}
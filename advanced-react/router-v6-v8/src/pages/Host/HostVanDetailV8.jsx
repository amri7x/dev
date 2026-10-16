import { NavLink, Outlet, useLoaderData, Link } from "react-router"

export const loader = async ({params}) => {
    try{
        const response = await fetch(`/api/host/vans/${params.id}`)

        if(!response.ok){
            throw new Error(`There is problem from fetching: ${response.status}`)
        }

        const data = await response.json()
        return { vans: data.vans[0] }

    } catch(error){
        console.log(`Connection problem: `, error.message)

        throw new Response(error.message || `Connection problem`, {
            status: 500,
            statusText: `Internal Server Error`
        })
    }   
}

export const HostVanDetailV8 = () => {
    const { vans } = useLoaderData()
    
    return(
        <>
            <button className="
                        w-40 flex mt-5
                        hover:cursor-pointer hover:text-amber-500
                        active:scale-95
                        transition-all duration-150
                        ">
                <Link 
                    to=".."
                    relative="path"
                    >Back to all vans
                </Link>
            </button>
            <section className="m-5">
                <div className="flex gap-5">
                    <img src={vans?.imageUrl} width={200} />
                    <div className="flex flex-col justify-around">
                        <p>{vans?.name}</p>
                        <p>{vans?.type}</p>
                        <p>${vans?.price}/day</p>
                    </div>
                </div>
            </section>
            <nav className="
                    mx-5 flex gap-5
                    ">
                <NavLink
                    end
                    className={({isActive, isPending}) => `px-2 rounded-md ${(isActive || isPending) ? "bg-amber-400" : ""}`} 
                    to=".">Description</NavLink>
                <NavLink
                    className={({isActive, isPending}) => `px-2 rounded-md ${isActive || isPending ? "bg-amber-400" : ""}`} 
                    to="pricing">Pricing</NavLink>
                <NavLink
                    className={({isActive, isPending}) => `px-2 rounded-md ${isActive || isPending ? "bg-amber-400" : ""}`} 
                    to="photos">Photos</NavLink>
            </nav>
            <div className="mx-5">
                <Outlet context={{ vans }}/>
            </div>
        </>
    )
}
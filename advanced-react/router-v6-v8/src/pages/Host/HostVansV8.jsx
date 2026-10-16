import { Link, useLoaderData } from "react-router"

export const loader = async () => {
    try{
        const response = await fetch(`/api/host/vans`)

        if(!response.ok){
            throw new Error(`There is problem from fetching data: ${response.status}`)
        }

        const data = await response.json()
        return { vans: data.vans }

    } catch(error){
        console.log(`There is problem from connection: `, error.message)

        throw new Response(error.message || `There is problem`,{
            status: 500,
            statusText: "Internal Server Error"
        })
    }
}

export const HostVansV8 = () => {
    const { vans } = useLoaderData()

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
                <div>{vanList}</div>
            </div>
        </section>
    )
}
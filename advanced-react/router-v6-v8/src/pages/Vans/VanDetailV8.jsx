import React from "react"
import { useLoaderData } from "react-router"

export const loader = async ({ params }) => {
    try{
        const response = await fetch(`/api/vans/${params.id}`)
    
        if(!response.ok){
            throw new Error(`Error fetching: ${response.status}`)
        }

        const data = await response.json()
        console.log(data)
        return { van: data.vans }

    } catch(error){
        console.log(`Error outside fetching`, error.message)

        throw new Response(error.message || `Error message`, {
            status: 500,
            statusText: `Internal Server Error`
        })
    }
}

export const VanDetailV8 = () => {

    const { van } = useLoaderData()

    return(
    <>
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
    </>
)}
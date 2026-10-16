import { useLoaderData, useNavigation } from "react-router"

export const loader = async ({ params }) => {
    try {
        const response = await fetch(`/api/vans/${params.id}`)
        if (!response.ok) {
            throw new Error(`Unable to load van (${response.status})`)
        }

        const data = await response.json()
        if (!data.vans) {
            throw new Error("Van not found")
        }
        return data.vans
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : "Unable to load van")
    }
}

export const VanDetail = () => {
    const van = useLoaderData()
    const navigation = useNavigation()

    if (navigation.state === "loading") {
        return <p role="status">Loading van...</p>
    }

    if (!van) {
        return <p role="alert">Unable to load van details.</p>
    }

    return (
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
    )
}
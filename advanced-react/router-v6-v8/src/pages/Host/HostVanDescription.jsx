import { useOutletContext } from "react-router"

export const HostVanDescription = () => {
    const { vans } = useOutletContext()
    return(
        <p>{vans.description}</p>
    )
}
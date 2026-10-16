import { useOutletContext } from "react-router"

export const HostVanPricing = () => {
    const { vans } = useOutletContext()
    return(
        <p>{vans.price}</p>
    )
}
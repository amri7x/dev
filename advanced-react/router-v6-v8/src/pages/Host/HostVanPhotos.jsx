import { useOutletContext } from "react-router"

export const HostVanPhotos = () => {
    const { vans } = useOutletContext()
    return(
        <img
            src={vans.imageUrl}
         />
    )
}
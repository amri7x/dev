import logoIcon from "../images/Chef-Claude-Icon.png"
import type { ComponentProps } from "react"

export type HeaderType = ComponentProps<"img"> & {
    title: string
}

export const HeaderData:HeaderType = {
    title: "Chef Claude",
    alt: "Chef Claude Logo",
    src: logoIcon,
    onMouseEnter: () => console.log("This is Icon website name Claude Chef")
}
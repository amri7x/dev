import type { HeaderType } from "../types/headerType"
import logoIcon from "../images/Chef-Claude-Icon.png"

export const HeaderData:HeaderType = {
    title: "Chef Claude",
    alt: "Chef Claude Logo",
    src: logoIcon,
    onMouseEnter: () => console.log("This is Icon website name Claude Chef")
}
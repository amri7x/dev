import type { ComponentProps } from "react"

export type HeaderType = ComponentProps<"img"> & {
    title: string
}
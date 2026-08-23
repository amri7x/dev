import type { ComponentProps } from "react";

export type HeaderType = ComponentProps<"header"> & {
    id: string | number
    title: string | number
    submitButton: {
        add: ComponentProps<"button"> & { btnText: string}
        subs: ComponentProps<"button"> & { btnText: string}
        clear: ComponentProps<"button"> & { btnText: string}
    }
}
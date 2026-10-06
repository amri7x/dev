import { useState, useRef } from "react"

export const Toggle = ({initialValue = "false"}) => {
    const firstRun = useRef(false)
    console.log(firstRun)
    const [on, setOn] = useState(initialValue)

    function toggle(){
        setOn(prev => !prev)
    }

    return [on, toggle]
}
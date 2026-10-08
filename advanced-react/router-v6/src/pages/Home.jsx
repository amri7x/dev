import React from "react"
import { Link } from "react-router"
import { useToggle } from "../hooks/useToggle"
import { Keyboard } from "../components/Keyboard";

export const Home = () => {
    const [ on, toggle ] = useToggle(true)
    return (
        <>
            <div className="home-container">
                <h1>You got the travel plans, we got the travel vans.</h1>
                <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                <Link to="vans">Find your van</Link>
            </div>
            <button onClick={toggle}>{on ? "Hide" : "Show"} Keyboard</button>
            { on &&
            <Keyboard />
            }
            <br />
        </>
    )
};
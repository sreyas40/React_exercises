import { useState } from "react"
export default function IColor({ colors }) {
    const changeColor = () => {
        const rColor = Math.floor(Math.random() * 8);
        console.log(rColor)
        setColor(colors[rColor])
    }
    const [Color,setColor] = useState("green")
    return (
        <div style={{ backgroundColor: Color, width: "150px", height: "150px" }} className="individualBox" onClick ={changeColor}>
        </div>
    )
}
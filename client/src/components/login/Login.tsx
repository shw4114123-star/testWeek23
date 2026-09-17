import { useState } from "react"
import { useNavigate } from "react-router";
import "./Login.css"
import User from "../user/User";

const url = "http://localhost:3002/login"
export default function Register() {
    const [data, setData] = useState()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    async function handleSubmit(e: any) {
        e.preventDefault
        const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userName: name, email, password })
        })
        const myData = await res.json()
        console.log(myData);
        setData(myData)
        localStorage.setItem("all-data", JSON.stringify(myData))
        navigate("/user")
    }

    return (
        <div className="login">
            <h2 className="h2">login</h2>
            <input type="text" placeholder="enter your email" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="text" placeholder="enter your password" value={password} onChange={e => setPassword(e.target.value)} />
            <button type="submit" onClick={handleSubmit}>login</button>
        </div>
    )
}   

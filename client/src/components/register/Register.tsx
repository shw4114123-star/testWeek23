import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router";
import "./Register.css"


const url = "http://localhost:3002/register"
export default function Register() {
    const [data, setData] = useState()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()


    async function handleSubmit(e: any) {
        e.preventDefault
        console.log("momo");
        
        const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userName: name, email, password })
        })
        const myData = await res.json()
        console.log(myData);
        setData(myData)
        if ("userName" in myData) navigate("/login")
        else {
            alert(myData.message)
        }
    }

    return (
        <div className="register">
            <h2 className="h2">sign in</h2>
            <input type="text" placeholder="enter your name" value={name} onChange={e => setName(e.target.value)} />
            <input type="text" placeholder="enter your email" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="text" placeholder="enter your password" value={password} onChange={e => setPassword(e.target.value)} />
            <button type="submit" onClick={handleSubmit}>register</button>
        </div>
    )
}   

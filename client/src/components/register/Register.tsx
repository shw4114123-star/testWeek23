import { useEffect, useState } from "react"
import UseFetch from "../../hooks/UseFetch";



export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [fullData, setFullData] = useState()

    const { data } = UseFetch("http://localhost:3002/register", { userName: name, email, password })
    // setFullData(data)
    return (
        <div>
            <input type="text" placeholder="enter your name" value={name} onChange={e => setName(e.target.value)} />
            <input type="text" placeholder="enter your email" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="text" placeholder="enter your password" value={password} onChange={e => setPassword(e.target.value)} />
            <button type="button" onClick={_ => {}}>register</button>
            <h1>
                {data? data[0] : "momo"}
            </h1>
        </div>
    )
}   

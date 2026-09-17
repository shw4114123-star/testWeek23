import { useEffect, useState } from "react"

// , "authorization": `Bearer ${token}` 
export default function UseFetch(url: string, body: Object | any, token?: string) {
    const [data, setDate] = useState()
    useEffect(() => {
        fetch(url, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(data => setDate(data))
            .catch(error => console.error(error))
    }, [url])
    return { data }
}

import { useEffect, useState } from "react"

// , "authorization": `Bearer ${token}` 
export default function UseFetch(url: string) {
    const [data, setDate] = useState()
    const [error, setError] = useState()
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setDate(data))
            .catch(error => setError(error))
    }, [url])
    return [
        data,
        error
    ]
}
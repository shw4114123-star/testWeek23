
import "./User.css"

export default function User() {
    const data = localStorage.getItem("all-data")
    if (!data) return;
    const allData = JSON.parse(data)
    return (
        <div className="user">
            <h1>user name :   {allData.userName}</h1>
            <h2>id :   {allData._id}</h2>
            <h3>emal :    {allData.email}</h3>
            <h4>createAt :    {allData.createAt}</h4>
        </div>
    )
}

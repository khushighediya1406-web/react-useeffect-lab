import { useEffect, useState } from "react";

const Effect4 = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/todos')
            .then((res) => res.json())
            .then((datas) =>
                // setData(data.todos)
                setData(datas)
            )
            .catch((error) => {
                console.log("Error")
            })
    }, [])
    return (
        <>
            <h1>User's Information</h1>
            {/* {data.map((user) => (
                <div key={user.id}>
                    <h2>User Id:{user.userId}</h2>
                    <p>{user.todo}</p>
                    <p>{user.completed ? "Completed" : "Not!!"}</p>
                </div>
            ))} */}
            {data.todos?.map((item) => (
                <div key={item.id}>
                    <h2>{item.todo}</h2>
                </div>
            ))}
        </>
    )
}
export default Effect4;
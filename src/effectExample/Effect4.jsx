import { useEffect, useState } from "react";

const Effect4 = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/todos')
            .then((res) => res.json())
            .then((datas) =>
                setData(datas)
            )
            .catch((error) => {
                console.log("Error")
            })
    }, [])
    return (
        <>
            <h1>User's Information</h1>
            {data.todos?.map((item) => (
                <div key={item.id}>
                    <h2>{item.todo}</h2>
                </div>
            ))}
        </>
    )
}
export default Effect4;

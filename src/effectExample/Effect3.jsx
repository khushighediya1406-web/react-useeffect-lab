import { useEffect } from "react"
import { useState } from "react"

export function Effect3() {
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [age, setAge] = useState("")
    const [field, setField] = useState("")

    const [done, setDone] = useState(false)

    const handleSubmitPage = () => {
        setDone(true)
    }
    useEffect(() => {
        if (done) {
            console.log("Name:", name)
            console.log("Number:", number)
            console.log("Age:", age)
            console.log("Field:", field)
        }
    }, [done, name, number, age, field])
    return (
        <>
            <h1>Hello Wellcome to Student Registration Form!!</h1>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label htmlFor="number">Number</label>
            <input
                type="number"
                id="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />
            <br />
            <label htmlFor="age">Age</label>
            <input
                type="age"
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
            <br />
            <label htmlFor="field">Field</label>
            <input
                type="text"
                id="field"
                value={field}
                onChange={(e) => setField(e.target.value)}
            />
            <br />
            <button onClick={handleSubmitPage}>OK</button>
            {done && (
                <>
                    <h2>Registration Done!!</h2>
                    <p>Name:{name}</p>
                    <p>Number:{number}</p>
                    <p>Age:{age}</p>
                    <p>Field:{field}</p>
                </>
            )}
        </>
    )
}
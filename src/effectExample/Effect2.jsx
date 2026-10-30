import { useEffect, useState } from "react";

function Effect2() {
    const [word, setWord] = useState("")
    const [count, setCount] = useState(0)
    const handleSubmit = () => {
        setCount(word.length);
    }
    useEffect(() => {
        if (count > 0 || word.length === 0) {
            console.log("Count:", count)
        }
    }, [count])
    return (
        <>
            <h1>Wellcome to Challenges!!</h1>
            <textarea
                placeholder="Enter Text!!"
                value={word}
                onChange={(e) => setWord(e.target.value)}
            >
            </textarea>
            <h3>Count{count}</h3>
            <button onClick={handleSubmit}>OK</button>
        </>
    )
}
export default Effect2;
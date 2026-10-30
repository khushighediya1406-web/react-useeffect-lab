import { useEffect, useState } from "react";

const Effect1 = () => {
    const [num, setNum] = useState(0);
    const [date, setDate] = useState("");

    useEffect(() => {
        document.title = `Count: ${num}`;
    }, [num]);

    useEffect(() => {
        const timer = setInterval(() => {
            // setDate(new Date().toLocaleString());
            const real = new Date().toLocaleString();
            setDate(real)
            console.log(real)
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <h2>Count: {num}</h2>

            <button onClick={() => setNum(num + 1)}>
                Push num
            </button>

            <button onClick={() => setNum(num > 0 ? num - 1 : 0)}>
                Pop num
            </button>

            <button onClick={() => setNum(0)}>
                Reset
            </button>

            <p>{date}</p>
        </>
    );
};

export default Effect1;
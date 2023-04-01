import React, { useEffect, useState } from 'react';
import Link from 'next/link';


const Counter  = () => {
    var [counter, setCounter] = useState<number>(0);

    useEffect(() => {
        console.log("Empty UseEffect");

        return () => {
            console.log("Empty UseEffect Unmount");
        }
    },[])


    useEffect(() => {
        console.log("Counter After Render",counter);
    }, [counter])

    const incrementCounter = (): void => {
        setCounter(counter + 1);
        // console.log("Counter After Increament",counter);
    }

    const decrementCounter = (): void => {
        setCounter(!counter ? 0 : counter - 1)
        // console.log("Counter After Decreament",counter);
    }

    return (
        <>
            <h1>Counter: {counter}</h1>
            <button onClick={incrementCounter}>Increment</button>
            <br />
            <br />
            <button onClick={decrementCounter}>Decrement</button>
            <br />
            <br />
            <Link href="/blog">Blog</Link>
        </>
    )
}





export default Counter;
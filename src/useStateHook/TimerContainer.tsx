import React, {useState} from "react";

const TimerContainer = () => {

    const [counter, setCounter] = useState({
        incrementCount: 0,
        decrementCount: 0
    })

    const changeValue = (prev: typeof counter, change: number) => {
        change>0 ? setCounter( {
            ...prev,
            incrementCount: prev.incrementCount + change
        }): setCounter( {
            ...prev,
            decrementCount: prev.decrementCount + change
        })

    }

    return (
        <div>
            <div>Value : {counter.incrementCount}</div>
            <button onClick={() =>changeValue(counter, 1) }>Click to Increase</button>

            <div>Value : {counter.decrementCount}</div>
            <button onClick={() =>changeValue(counter, -1) }>Click to decrease</button>

        </div>
    );
}

export default TimerContainer
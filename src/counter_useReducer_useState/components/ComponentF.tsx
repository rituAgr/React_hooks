import React, {useContext} from "react";
import {counterContext} from "../ParentCounterComponent";

const ComponentF = () => {
    const countContext = useContext(counterContext)
    return(
        <div>
            counter from ComponentF - {countContext.counterState}
            <button onClick={() => countContext.counterDispatch('Increment')}>Increment</button>
            <button onClick={() => countContext.counterDispatch('Decrement')}>Decrement</button>
            <button onClick={() => countContext.counterDispatch('Reset')}>Reset</button>
        </div>
    )
}
export default ComponentF
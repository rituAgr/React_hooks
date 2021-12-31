import React, {useContext} from "react";
import {counterContext} from "../ParentCounterComponent";


const ComponentA = () => {
    const countContext: any = useContext(counterContext)

    return(
        <div>
            counter from ComponentA - {countContext.counterState}
            <button onClick={() => countContext.counterDispatch('Increment')}>Increment</button>
            <button onClick={() => countContext.counterDispatch('Decrement')}>Decrement</button>
            <button onClick={() => countContext.counterDispatch('Reset')}>Reset</button>
        </div>
    )

}

export default ComponentA
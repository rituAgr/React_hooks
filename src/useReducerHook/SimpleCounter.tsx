// https://www.youtube.com/watch?v=IHJ-TO_1nME&list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A&index=19&ab_channel=Codevolution
import React, {useReducer} from "react";

const initialState = 0
const reducer = (state: number, action: string) => {
    switch (action){
        case 'Increment':
            return state+1
        case 'Decrement':
            return state-1
        case 'Reset':
            return initialState
        default:
            return state
    }

}
const SimpleCounter = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    return(
        <div>
            <div>
                {count}
            </div>

            <button onClick={()=> dispatch('Increment')}>Increment</button>
            <button onClick={()=> dispatch('Decrement')}>Decrement</button>
            <button onClick={()=> dispatch('Reset')}>Reset</button>
        </div>
    )
}

export default SimpleCounter;
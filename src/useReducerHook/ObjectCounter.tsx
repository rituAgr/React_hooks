import React, {useReducer} from "react";

const initialState = {
    counter1 : 0,
    counter10 : 10
}
// const reducer = (currentState: typeof initialState, action: {type?: string, value: number}) => {
const reducer = (currentState: typeof initialState, action:any) => {

    switch (action.type){
        case 'incrementCounter1':
            return {...currentState, counter1: currentState.counter1 + action.value};
        case 'decrementCounter1':
            return {...currentState, counter1: currentState.counter1 - action.value};
        case 'incrementCounter10':
            return {...currentState, counter10: currentState.counter10 + action.value};
        case 'decrementCounter10':
            return {...currentState, counter10: currentState.counter10 - action.value};
        case 'reset':
            return initialState;
        default:
            return currentState;
    }
}

const ObjectCounter = () => {

    const[counter, dispatch] = useReducer(reducer, initialState)
    return(
        <div>
            <div>counter1 - {counter.counter1}</div>
            <div>counter10 - {counter.counter10}</div>
            <div>
                <button onClick={()=> dispatch({type: 'incrementCounter1', value: 1})}>counter1 Increment</button>
                <button onClick={()=> dispatch({type: 'decrementCounter1', value: 1})}>counter1 Decrement</button>
                <button onClick={()=> dispatch({type: 'incrementCounter10', value: 10})}>counter10 Increment</button>
                <button onClick={()=> dispatch({type: 'decrementCounter10', value: 10})}>counter10 Decrement</button>
            </div>
            <div>
                <button onClick={()=> dispatch({type: 'reset'})}>Reset</button>
            </div>
        </div>
    )
}

export default ObjectCounter
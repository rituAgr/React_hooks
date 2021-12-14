import React, {createContext, useReducer} from "react";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentD from "./components/ComponentD";

export const counterContext = createContext<any>({});

const initialState = 0
export interface ICounter{
     counterState?: any,
    counterDispatch?: any
}

// @ts-ignore
const reducer = (currentState, action) => {
    switch (action){
        case 'Increment':
            return currentState + 1;
        case 'Decrement':
            return currentState - 1;
        case 'Reset':
            return initialState;
        default:
            return currentState;
    }

}

const ParentCounterComponent = () => {

    const [counter, dispatch] = useReducer(reducer, initialState);

    return(
        <counterContext.Provider value={{counterState: counter, counterDispatch: dispatch}}>
        <div>
            counter from Parent - {counter}
          <ComponentA/>
          <ComponentB/>
          <ComponentD/>
        </div>
        </counterContext.Provider>
    )

}

export default ParentCounterComponent
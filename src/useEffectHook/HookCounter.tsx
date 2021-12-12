import React, {useEffect, useState} from "react";

const HookCounter = () => {

    const[counter, setCounter]= useState(0)
    const[name, setName]= useState('')

    //No second parameter => Run after every render
    //empty array second parameter => Run only once after first render
    //Second parameter as array with some value=>
    // Run after every render when any one those array elements values changes

    //return is used in useEffect to do cleanup. e.g., remove event listener etc
    useEffect(()=> {
        console.log("Hello from useEffect hook")
    },[counter])
    return(
      <div >
          <input type='text' value={name} onChange={(e)=> setName(e.target.value)}/>
          <button onClick={() => setCounter(counter+1)}>Click {counter} times</button>
      </div>
    );
}

export default HookCounter;
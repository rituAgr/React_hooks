import React, {useContext} from "react";
import {JobContext, NameContext} from "./ComponentA";

const ComponentB = () => {

    const name= useContext(NameContext)
    const job = useContext(JobContext)
    return(
        <div>
            {console.log(`name = ${name?.name}`)}
            {name?.name}={job?.job}
        </div>
    )
}

export default ComponentB;
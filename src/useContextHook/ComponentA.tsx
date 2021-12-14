import React from "react";
import ComponentB from "./ComponentB";

export interface IName {
    name: string
}
export interface IJob {
    job: string
}

export const NameContext = React.createContext<IName | null>(null)
export const JobContext = React.createContext<IJob | null>(null)
const ComponentA = () => {
    const nameJson = {
        "name": "Ritu"
    }
    const jobJson = {
        "job": "Dev"
    }
    return(
        <div>
            <NameContext.Provider value={nameJson}>
                <JobContext.Provider value={jobJson}>
                    <ComponentB/>
                </JobContext.Provider>
            </NameContext.Provider>

        </div>
    )

}

export default ComponentA;
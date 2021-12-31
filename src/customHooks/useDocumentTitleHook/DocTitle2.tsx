import React, { useState} from "react";
import useDocumentTitle from "./useDocumentTitle";

const DocTitle2 = () => {
    const [number, setNumber] = useState(0);

  useDocumentTitle(number)

    return(
     <div>
         {number}
         <button onClick={() => setNumber(number+1)}>Increment</button>
     </div>
    )
}

export default DocTitle2;
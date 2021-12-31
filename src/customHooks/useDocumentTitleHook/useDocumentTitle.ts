import {useEffect} from "react";

const useDocumentTitle = (number: any) => {

    useEffect(()=>{
        document.title = `Document Title ${number}`
    },[number])

}

export default useDocumentTitle
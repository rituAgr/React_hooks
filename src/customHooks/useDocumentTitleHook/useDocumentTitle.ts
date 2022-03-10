import {useEffect} from "react";

//Good article to custom hook
// https://dev.to/olenadrugalya/introduction-to-custom-hooks-2nmk
const useDocumentTitle = (number: any) => {

    useEffect(()=>{
        document.title = `Document Title ${number}`
    },[number])

}

export default useDocumentTitle
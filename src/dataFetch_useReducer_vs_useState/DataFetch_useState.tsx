import React, {useState, useEffect} from 'react'
import axios from "axios";

const DataFetch_useState = () => {
    const [data, setData]  = useState({
        loading: true,
        post: '',
        error: ''
    })
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response =>
            setData({
                loading: false,
                post: response.data.title,
                error: ''
            }))
            .catch( () =>
                setData({
                    loading: false,
                    post: '',
                    error: 'Something went wrong'
                })

            )
    }, [])


    return(
        <div>
            {data.loading ? 'loading': data.post}
            {data.error ? data.error : null}
        </div>
    );
}
export default DataFetch_useState;
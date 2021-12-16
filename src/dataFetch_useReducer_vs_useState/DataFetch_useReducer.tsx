import React, {useEffect, useReducer} from "react";
import axios from "axios";


const initialState = {
    loading: true,
    post: '',
    error: ''
}

// @ts-ignore
const reducer = (currentState, action) => {
    switch (action.type){
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload.title,
                error: ''
            }
        case 'FETCH_FAILURE':
            return {
                loading: false,
                post: '',
                error: 'Something went wrong'
            }
        default:
            return currentState
    }
}
const DataFetch_useReducer = () => {
    // @ts-ignore
    const[curr, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response =>
                dispatch({
                    type: 'FETCH_SUCCESS',
                    payload: response.data
                }))
            .catch( () =>
                dispatch({
                    type: 'FETCH_SUCCESS'
                })

            )
    }, [])

    return(
        <div>
            {curr.loading ? 'loading': curr.post}
            {curr.error ? curr.error : null}
        </div>
    )
}

export default DataFetch_useReducer;
import React, {useEffect, useState} from "react";
import axios from "axios";

interface IPost {
    userId: string,
    id: string,
    title: string,
    body: string
}
const DataFetchingById = () => {
    const [post, setPost] = useState<IPost|null>(null)
    const [id, setId] = useState('1')
    const [idFromButton, setIdFromButton] = useState(id)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err =>
                console.log(err)
            )

    },[idFromButton])

    return(
        <div>
            <input type='text' value={id} onChange={(e)=> setId(e.target.value) }/>
            <button onClick={()=> setIdFromButton(id)}>Fetch Post</button>
            <div>{post?.title}</div>
        </div>
    )
}

export default DataFetchingById;
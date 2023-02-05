import axios from "axios";
import React, { useState, useEffect } from 'react';


const CommentBox = (props) => {

    const [comments, setComments] = useState([])
    const [videoId, setVideoId] = useState('p6xqKJqsQWs')

    async function getComments() {
        const response = await axios.get(`http://127.0.0.1:8000/api/comment/`)
        setComments(response.data)
    }
   
    useEffect(() => {
        setVideoId(props.videoId)
        getComments()
    },[])
    return ( 
        <div>
            {comments.map((comment) => {
                return (
                    <ul>
                        {comment.comment}
                    </ul>
                )
            })}
        </div>
     );
}
 
export default CommentBox;
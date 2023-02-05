import axios from "axios";
import React, { useState } from 'react';


const CommentBox = (props) => {

    const [comments, setComments] = useState([])


    async function getComments() {
        const response = await axios.get(`http://127.0.0.1/api/comment/`)
        setComments(response.data)
    }
    getComments()
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
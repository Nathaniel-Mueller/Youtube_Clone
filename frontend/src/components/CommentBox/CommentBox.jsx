import axios from "axios";
import React, { useState, useEffect } from 'react';
import PostComment from "./PostComment/PostComment";


const CommentBox = (props) => {

    const [comments, setComments] = useState([])
    const [videoId, setVideoId] = useState(props.videoId)
    const [users, setUsers] = useState([])


    async function getComments() {
        const response = await axios.get(`http://127.0.0.1:8000/api/comment/`)
        const getUsers = response.data.map((object) => {
            return object.user
        })
        const tempUsers = [...new Map(getUsers.map((user) => [user.id, user])).values()]
        setUsers(tempUsers)
        console.log(response.data)
        setComments(response.data)
    }
   
    useEffect(() => {
        setVideoId(props.videoId)
        getComments()
    },[])

    function postComment(comment) {
        let tempComment = [...comments, comment]
        setComments(tempComment)
    }
    return ( 
        <div>
            {comments.map((comment) => {
                if (comment.video_id === videoId)
                return (
                    <ul>
                        {comment.user.first_name} {comment.user.last_name} says: {comment.text}
                    </ul>
                )
                
            })}
            <PostComment propsData = {{videoId : videoId, 
                                       postComment : postComment,
                                       users : users}} />
        </div>
     );
}
 
export default CommentBox;
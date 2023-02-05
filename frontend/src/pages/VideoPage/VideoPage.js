import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from "../../hooks/useAuth"
import useCustomForm from "../../hooks/useCustomForm"
import axios from 'axios';
import CommentBox from '../../components/CommentBox/CommentBox';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';

const VideoPage = () => {

    let formValues = {
        comment: ""
    }


    const [user, token] = useAuth()
    const navigate = useNavigate()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(formValues, postComment)

    async function postComment(){
        try {
            
            let response = await axios.post(`http://127.0.0.1:3000/api/comment/`, formData, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            
            
        } catch (error) {
            
        }
    }


    

    return (
        <div>
            <VideoPlayer videoId = '7lCDEYXw3mM'/>
            <CommentBox/>
            <div>
                {user ? (
                <form onSubmit={handleSubmit}>
                    <label>
                        Post A Comment:{" "}
                        <input
                            type='text'
                            name = 'comment'
                            value = {formData.comment}
                            onChange={handleInputChange}
                            />
                    </label>
                    
                    <button>Submit</button>
                    
                </form>
                ) : (
                    <p onClick={navigate("/login")}>You must be logged in to post a comment</p>
                )}
            </div>
        </div>
    )

}

export default VideoPage
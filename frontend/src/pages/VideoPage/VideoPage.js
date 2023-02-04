import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from "../../hooks/useAuth"
import useCustomForm from "../../hooks/useCustomForm"
import axios from 'axios';


const VideoPage = () => {

    let formValues = {
        comment: ""
    }

    const [user, token] = useAuth()
    const navigate = useNavigate()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(formValues, postComment)

    async function postComment(){
        try {
            let response = await axios.post(`/api/comment/${video_id}`, formData, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            
        } catch (error) {
            
        }
    }

    let video_id = 'p6xqKJqsQWs'
    
    

    return (
        <div>
            <div>
            <iframe id="ytplayer" type="text/html" width="640" height="360"
                src={'https://www.youtube.com/embed/'+video_id}
                frameBorder="0"></iframe>
            </div>
            <div>
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
            </div>
        </div>
    )

}

export default VideoPage
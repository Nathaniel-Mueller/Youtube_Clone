import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from "../../hooks/useAuth"
import useCustomForm from "../../hooks/useCustomForm"
import axios from 'axios';
import CommentBox from '../../components/CommentBox/CommentBox';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import { KEY } from '../../localKey';
import { DATA } from './localData';

const VideoPage = () => {
    
    const videoId = '7lCDEYXw3mM'
    let formValues = {
        text: "",
        video_id: videoId
    }

    const [relatedVideos, setRelatedVideos] = useState([DATA])
    const [user, token] = useAuth()
    const navigate = useNavigate()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(formValues, postComment)

    async function fetchRelatedVideos(){
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&type=video&key=${KEY}`)
        console.log(response.data.items)
    }

    async function postComment(){
        try {
            
            let response = await axios.post(`http://127.0.0.1:8000/api/comment/`, formData, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            
            
        } catch (error) {
            
        }
    }


    useEffect(() => {
        //fetchRelatedVideos()
    }, [])

    return (
        <div>
            <VideoPlayer videoId = {videoId}/>
            <CommentBox videoId = {videoId}/>
            <div>
                {user ? (
                <form onSubmit={handleSubmit}>
                    <label>
                        Post A Comment:{" "}
                        <input
                            type='text'
                            name = 'text'
                            value = {formData.text}
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
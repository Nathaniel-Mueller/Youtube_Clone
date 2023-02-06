import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import CommentBox from '../../components/CommentBox/CommentBox';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import { KEY } from '../../localKey';
import { DATA } from './localData';

const VideoPage = () => {
    
    const videoId = '7lCDEYXw3mM'
    const [relatedVideos, setRelatedVideos] = useState([DATA])
    const navigate = useNavigate()


    async function fetchRelatedVideos(){
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&type=video&key=${KEY}`)
        console.log(response.data.items)
    }

    useEffect(() => {
        //fetchRelatedVideos()
    }, [])


    return (
        <div>
            <VideoPlayer videoId = {videoId}/>
            <CommentBox videoId = {videoId}/>
        </div>
    )

}

export default VideoPage
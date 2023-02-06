import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import CommentBox from '../../components/CommentBox/CommentBox';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import { KEY } from '../../localKey';
import { DATA } from './localData';

const VideoPage = () => {

    const location = useLocation()
    const [videoId, setVideoId] = useState('video_id_here')
    const [videoTitle, setVideoTitle] = useState('placeholder')
    const [videoDesc, setVideoDesc] = useState('placeholder')
    const [relatedVideos, setRelatedVideos] = useState([DATA])
    const navigate = useNavigate()
    

    useMemo(() => {
        setVideoId(location.state.videoId)
    }, [])


    async function fetchRelatedVideos(){
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&type=video&key=${KEY}`)
        console.log(response.data.items)
    }

    useEffect(() => {
        //fetchRelatedVideos()
    }, [])


    return (
        <div>
            <VideoPlayer propsData = {{videoId: videoId, videoDesc: videoDesc, videoTitle: videoTitle}}/>
            <CommentBox videoId = {videoId}/>
        </div>
    )

}

export default VideoPage
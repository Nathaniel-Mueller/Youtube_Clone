import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import CommentBox from '../../components/CommentBox/CommentBox';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import { KEY } from '../../localKey';
import { DATA } from './localData';
import './VideoPage.css'


const VideoPage = () => {

    const location = useLocation()
    const [videoId, setVideoId] = useState('video_id_here')
    const [videoTitle, setVideoTitle] = useState('placeholder')
    const [videoDesc, setVideoDesc] = useState('placeholder')
    const [relatedVideos, setRelatedVideos] = useState([DATA])
    const navigate = useNavigate()
    

    useMemo(() => {
        setVideoId(location.state.videoId)
        setVideoTitle(location.state.title)
        setVideoDesc(location.state.desc)
    }, [])

    function goToPage(id, title, desc){
        navigate('/watch', {
            state: {
                videoId: id,
                title: title,
                desc: desc
            }})
            window.location.reload(true)
    }

    async function fetchRelatedVideos(){
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&type=video&key=${KEY}&part=snippet`)
        setRelatedVideos(response.data.items)
        console.log(response.data.items)
    }

    useEffect(() => {
        //fetchRelatedVideos()
    }, [])


    return (
        <div className='box'>
            <div>
                <VideoPlayer propsData = {{videoId: videoId, videoDesc: videoDesc, videoTitle: videoTitle}}/>
                <CommentBox videoId = {videoId}/>
            </div>
            <div className='related-vids'>
                {relatedVideos[0].map((video) => { 
                    return (
                        <div key={video.id.videoId}
                            onClick={() =>
                                goToPage(video.id.videoId, video.snippet.title, video.snippet.description)}>
                            <img
                                src = {video.snippet.thumbnails.default.url}/>
                            <h3>{video.snippet.title}</h3>
                            <p>{video.snippet.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}

export default VideoPage
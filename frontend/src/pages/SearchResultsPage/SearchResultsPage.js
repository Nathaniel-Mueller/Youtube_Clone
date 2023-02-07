import { React, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const SearchResultsPage = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const [videoId, setVideoId] = useState('7lCDEYXw3mM')
    const [videoTitle, setVideoTitle] = useState('Lorem Ipsum')
    const [videoDesc, setVideoDesc] = useState('Lorem Ipsum')
    let objectData = location.state.data

    
    function goToPage(id, title, desc){
        navigate('/watch', {
            state: {
                videoId: id,
                title: title,
                desc: desc
            }})
    }
    return (
        <div>
            {objectData.map((video) => {
                return (
                    <div key={video.id.videoId}
                        onClick={() =>
                            goToPage(video.id.videoId, video.snippet.title, video.snippet.description)}>
                        <img
                            src = {video.snippet.thumbnails.default.url}/>
                        <h3>{video.snippet.title}</h3>
                        <p>{video.snippet.description}</p>
                    </div>
                )})}
        </div>
    )

}

export default SearchResultsPage
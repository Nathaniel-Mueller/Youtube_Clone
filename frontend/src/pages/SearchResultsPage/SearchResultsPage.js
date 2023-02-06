import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchResultsPage = () => {

    const navigate = useNavigate()
    const [videoId, setVideoId] = useState('7lCDEYXw3mM')
    const [videoTitle, setVideoTitle] = useState('')
    const [videoDesc, setVideoDesc] = useState('')

    function goToPage(){
        navigate('/watch', {
            state: {
                videoId: videoId,
                title: videoTitle,
                desc: videoDesc
            }})
    }
    return (
        <div>
            <button onClick={goToPage}>Route</button>
        </div>
    )

}

export default SearchResultsPage
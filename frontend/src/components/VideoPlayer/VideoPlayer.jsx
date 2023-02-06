import{ React, useState, useEffect } from 'react';




const VideoPlayer = (props) => {

    const [videoId, setVideoId] = useState('p6xqKJqsQWs')
    const [videoTitle, setVideoTitle] = useState('placeholder title')
    const [videoDesc, setVideoDesc] = useState('placeholder description')

    useEffect(() => {
        setVideoId(props.propsData.videoId)
        setVideoTitle(props.propsData.videoTitle)
        setVideoDesc(props.propsData.videoDesc)
    }, [])

    return ( 
        <div>
            <iframe id="ytplayer" type="text/html" width="640" height="360"
                src={'https://www.youtube.com/embed/'+videoId}
                frameBorder="0"></iframe>
            <h1>{videoTitle}</h1>
            <p>{videoDesc}</p>
        </div>
     );
}
 
export default VideoPlayer;
import{ React, useState, useEffect } from 'react';




const VideoPlayer = (props) => {

    const [videoId, setVideoId] = useState('p6xqKJqsQWs')

    useEffect(() => {
        setVideoId(props.videoId)
    }, [])

    return ( 
        <div>
        <iframe id="ytplayer" type="text/html" width="640" height="360"
            src={'https://www.youtube.com/embed/'+videoId}
            frameBorder="0"></iframe>
        </div>
     );
}
 
export default VideoPlayer;
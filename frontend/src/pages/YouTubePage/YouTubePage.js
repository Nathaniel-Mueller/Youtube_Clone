import axios from 'axios';
import React from 'react';
import { KEY } from '../../localKey'
import { DATA } from './localData';
import { Navigate, useNavigate } from 'react-router-dom';
import useCustomForm from "../../hooks/useCustomForm"
import './YouTubePage.css'

const YouTubePage = () => {

    let formValues = {
        text: '',

    }

    const navigate = useNavigate()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(formValues, searchYoutubeDatabase)

    async function searchYoutubeDatabase(){
        try {
           let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${formData.text}&key=${KEY}&part=snippet`,{
           })
           //console.log(response.data.items)
           navigate('/searchresults', {
            state: {
                data: response.data.items
            }
           })
            
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div className='center'>
            <div>Search for a video:{' '}</div>
            <form onSubmit={handleSubmit} className='space'>
                <input
                className='resize'
                name='text'
                type='text'
                value = {formData.text}
                onChange={handleInputChange}
                ></input> <button className='space'>Search</button>
            </form>
        </div>
    )
}

export default YouTubePage
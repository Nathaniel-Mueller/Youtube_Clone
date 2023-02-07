import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useCustomForm from '../../../hooks/useCustomForm';
import useAuth from "../../../hooks/useAuth"



const PostComment = (props) => {

    let formValues = {
        text: "",
        video_id: props.propsData.videoId,

    }

    const [user, token] = useAuth()
    const currentUser = props.propsData.users.filter((u) => {
        if (user.id === u.id){
            return true;
        }
    })
    const [formData, handleInputChange] = useCustomForm(formValues, props.propsData.postComment)
    function handleSubmit (e){
        e.preventDefault();
        if (formData.text.trim() === ''){
            return null
        }
        else{
        let newComment = {
            user: currentUser[0],
            text: formData.text,
            video_id: props.propsData.videoId,
        } 
        props.propsData.postComment(newComment)
        postComment()
    }
    }
    
    async function postComment(){
        try {
            
            let response = await axios.post(`http://127.0.0.1:8000/api/comment/`, formData, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            
            
        } catch (error) {
            console.log(error)
        }
    }

    return ( 
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
                    <div>Please log in to post a comment.</div>
                )}
        </div>
     );
}
 
export default PostComment;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from "../../hooks/useAuth"
import useCustomForm from "../../hooks/useCustomForm"

const SearchResultsPage = () => {

    const [user, token] = useAuth()
    const navigate = useNavigate()
    const [formData, handleInputChange, handleSubmit] = useCustomForm()

    return (
        <div>
            <form onSubmit={handleSubmit}>

            </form>
        </div>
    )

}

export default SearchResultsPage
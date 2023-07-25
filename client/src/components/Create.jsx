import React from 'react'
import Form from './Form'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Create = () => {

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleCreate = (authorParam) => {
        axios.post('http://localhost:8000/api/author/create', authorParam)
            .then(res => {
                console.log(res);
                navigate("/")
            })
            .catch(err => {
                console.log(err);
                setErrors(err.response.data.errors);
            });
    }


    return (
        <div>
            <h1>Favorite authors</h1>
            <a href="/" class="btn btn-primary">Home</a>
            <p>Add a new author:</p>
            <Form 
                initialName=""
                onSubmitProp={handleCreate}
                errors={errors}
            />
        </div>
    )
}

export default Create
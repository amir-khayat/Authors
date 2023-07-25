import React from 'react'
import Form from './Form'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'


const Update = () => {

    const { id } = useParams();
    const [author, setAuthor] = useState({});
    const [errors, setErrors] = useState({});
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                console.log("author res", res);
                setAuthor(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, []);

    const handleUpdate = (authorParam) => {
        axios.put('http://localhost:8000/api/author/update/' + id, authorParam)
            .then(res => {
                console.log("update res", res);
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
            <p>Edit this author:</p>
            {loaded && 
                <Form 
                    initialName={author.name}
                    onSubmitProp={handleUpdate}
                    errors={errors}
                />
            }
        </div>
    )
}

export default Update
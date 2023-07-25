import React from 'react'
import axios from 'axios'


const Delete = (props) => {



    const { authorId, successCallback } = props;


    const handleDelete = () => {
        axios.delete('http://localhost:8000/api/author/delete/' + authorId)
            .then(res => {
                console.log(res);
                successCallback();
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <button className="btn btn btn-danger mb-2" onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Delete
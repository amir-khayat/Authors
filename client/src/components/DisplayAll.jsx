import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Delete from './Delete';

function DisplayAll() {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
            .then(res => {
                console.log(res);
                setAuthors(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId));
    }

    return (
        <div>
            <h1>Favorite authors</h1>
            <Link to="/create" className="btn btn-primary mb-3">Add an author</Link>
            <p>We have quotes by:</p>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions available</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.map(author => (
                        <tr key={author._id}>
                            <td>{author.name}</td>
                            <td>
                                <Link to={`/edit/${author._id}`} className="btn btn btn-primary mb-2">Edit</Link>
                                <Delete authorId={author._id} successCallback={() =>removeFromDom(author._id)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DisplayAll;
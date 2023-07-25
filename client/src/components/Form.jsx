import React, { useEffect } from 'react'
import { useState } from 'react'

const Form = (props) => {

    const { initialName, onSubmitProp, errors} = props;
    const [name, setName] = useState(initialName);
    // const [loaded, setLoaded] = useState(false);
    // useEffect(() => {
    //     setAuthorName(initialName);
    //     setLoaded(true);
    // }
    // , [])

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitProp({name});
    }

    return (
        <div className="container mt-4">
            {/* {loaded &&  */}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} value={name} />
                        {errors.name && <p className="text-danger">{errors.name.message}</p>}
                    </div>
                    <input type="submit" value="Submit" className="btn btn-primary" />
                </form>
            {/* } */}
        </div>
    )
}

export default Form
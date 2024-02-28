import React, { useState } from 'react';

const Form = () => {
    const [username, setUsername] = useState('');
    const [description, setDescription] = useState('');
    const [country, setCountry] = useState('Bangladesh');

    const handleSubmit = (event) => {
            event.preventDefault();
            alert(`Form data is ${username} from city ${description} from country ${country}`);        
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* USERNAME */}
            <div>
                <label>Username</label>
                <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
            </div>

            {/* DESCRIPTION */}
            <div>
                <label>Description</label>
                <textarea type="text" value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Mention city" />
            </div>

            {/* COUNTRY */}
            <div>
                <label>Country</label>
                <select name="country" id="country" onChange={(event) => setCountry(event.target.value)}>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="India">India</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Nepal">Nepal</option>
                </select>
            </div>

            <button type="submit" >Submit</button>
        </form>
    )
}

export default Form;
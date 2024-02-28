import React, { useState, useTransition } from 'react';
import NAMES from './data.json';

const NamesFilter = () => {
    const [query, setQuery] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [isPending, startTransition] = useTransition();

    const changeHandler = (event) => {
        // setQuery(event.target.value);
        setInputValue(event.target.value);
        startTransition(() => setQuery(event.target.value))
    }

    const filteredNames = NAMES.filter(item => {
        return item.first_name.includes(query) || item.last_name.includes(query)

        // CASE INSENSITIVE
        // return item.first_name.toLowerCase().includes(query.toLowerCase()) || item.last_name.toLowerCase().includes(query.toLowerCase())
    })

    return (
        <div>
            <input type="text" value={inputValue} onChange={changeHandler} />

            {isPending && <p>Updating list...</p>}

            {
                filteredNames.map((item) => (
                <p key={item.id}>{item.first_name} {item.last_name}</p>
                ))
            }
        </div>
    )
}

export default NamesFilter;
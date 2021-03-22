import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

export const AddSearch = ({ setQuery }) => {

    let history = useHistory();
    const [inputValue, setInputValue] = useState(''); // ''

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();

 
            setQuery( inputValue  );
            history.push(`/items/?search=${inputValue}`)
 

    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}


AddSearch.propTypes = {
    setQuery: PropTypes.func.isRequired
}

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

        <div className="nav-bar p-1">
        <div className="container">
        <form onSubmit={ handleSubmit }>
            <div className="d-flex justify-content-start">
                <img src="../assets/img/meli-logo.png" className="logo pr-3" />
                <input 
                    className="w-75"
                    type="text"
                    value={ inputValue }
                    onChange={ handleInputChange }
                />
                <button className="btn btn-default">search</button>               
            </div>
        </form>
        </div>
        </div>
    )
}


AddSearch.propTypes = {
    setQuery: PropTypes.func.isRequired
}

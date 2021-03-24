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

    const handleReturn = () => {
        history.push('/');
    }

    return (

        <div className="nav-bar p-1">
        <div className="container">
        <form onSubmit={ handleSubmit }>
            <div className="d-flex justify-content-start">
                <div className=" w-20">
                 <img 
                 src="../assets/img/meli-logo.png" 
                 className="logo pr-3"  
                 onClick={ handleReturn }
                 alt="logo-mercadolibre" />       
                </div>
                <div className="input-group w-80">
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Nunca dejes de buscar" 
                    aria-label="Nunca dejes de buscar" 
                    value={ inputValue }
                    onChange={ handleInputChange }
                    />
                    <button 
                    className="input-group-text" 
                    id="basic-addon2" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </button>
                </div>
           
            </div>
        </form>
        </div>
        </div>
    )
}


AddSearch.propTypes = {
    setQuery: PropTypes.func.isRequired
}

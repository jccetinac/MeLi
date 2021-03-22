import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import queryString from 'query-string';




export const Navbar  = ({history}) => {

    const location = useLocation();
    const { q = '' } = queryString.parse( location.search );

    const [ formValues, handleInputChange ] = useForm({
        searchText: q
    });
    const { searchText } = formValues;
    
    const heroesFiltered = useMemo(() => getHeroesByName( q ), [q])


    const handleSearch = (e) => {
        e.preventDefault();
        console.log(history);
        console.log(searchText);

        history.push(`?q=${ searchText }`);
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
         <div className="row nav-bar">
                    <div className="col-md-4">
                        <h4> Search Form </h4>
                        <hr />
                    </div>
                    <div className="col-md-8">
                    <form className="row" onSubmit={ handleSearch }>
                        <div className="col-8">
                            <input 
                                type="text"
                                placeholder="Find your hero"
                                className="form-control"
                                name="searchText"
                                autoComplete="off"
                                value={ searchText }
                                onChange={ handleInputChange }
                            />
                        </div>
                        <div className="col-4">
                            <button
                                type="submit"
                                className="btn m-1 btn-block btn-outline-primary"
                            >
                                Search...
                            </button>
                        </div>
                    </form>
                    </div>
                </div>
        </nav>
    )
}
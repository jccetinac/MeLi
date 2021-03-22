import React, { useMemo } from 'react';
import queryString from 'query-string';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse( location.search );

    const [ formValues, handleInputChange ] = useForm({
        searchText: q
    });
    const { searchText } = formValues;
    
    const heroesFiltered = useMemo(() => getHeroesByName( q ), [q])


    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${ searchText }`);
    }

    return (
            <div className="container-fluid">
                
                <div className="row">
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


                <div className="row">
                    { 
                        (q ==='') 
                            && 
                            <div className="alert alert-info w-100 text-center p-5">
                                Search a hero
                            </div>
                    }

                    { 
                        (q !=='' && heroesFiltered.length === 0 ) 
                            && 
                            <div className="alert alert-danger w-100 text-center p-5">
                                There is no a hero with { q }
                            </div>
                    }

                    {
                        heroesFiltered.map( hero => (
                            <HeroCard 
                                key={ hero.id }
                                { ...hero }
                            />
                        ))
                    }

                </div>

            </div>
    )
}

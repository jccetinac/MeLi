import React from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { ProductCard } from '../product/ProductCard';
import { useFetchProducts } from '../../hooks/useFetchProduct';


export const ResultScreen = () => {


    const location = useLocation();
    const { search = '' } = queryString.parse( location.search );
    const { data:productsFiltered, loading } = useFetchProducts( search );

    return (
        <div>
                            <div className="col-12">

                    <h4> Results </h4>
                    <h4> {(loading === true) && <b>cargando</b>} </h4>

                    <hr />

                    { 
                        (search ==='') 
                            && 
                            <div className="alert alert-info">
                                Search a product
                            </div>
                    }

                    { 
                        (search !=='' && productsFiltered.length === 0 && loading === false ) 
                            && 
                            <div className="alert alert-danger">
                                There is not a product with { search }
                            </div>
                    }

                    {
                        productsFiltered.map( product => (
                            <ProductCard 
                                key={ product.id }
                                { ...product }
                            />
                        ))
                    }

                </div>
          </div>
    )
}

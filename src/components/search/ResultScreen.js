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
        <div className="container-fluid mb-5">
                    {(loading === true) && 
                    <img src="../assets/img/loader.gif" className="loader" alt="loading" />       
                    }
                    
                    { 
                        (search ==='') 
                            && 
                            <div className="alert alert-info p-4">
                                <p className="text-center">realiza tu búsqueda</p>
                            </div>
                    }

                    { 
                        (search !=='' && productsFiltered.length === 0 && loading === false ) 
                            && 
                            <div className="alert p-4">
                               <p className="text-center">No hay un producto que coincida con tu búsqueda: { search }</p>
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
    )
}

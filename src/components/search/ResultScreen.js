import React from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { ProductCard } from '../product/ProductCard';
import { useFetchProducts } from '../../hooks/useFetchProduct';
const CONST = require('../../utilities/constants');

export const ResultScreen = () => {


    const location = useLocation();
    const { search = '' } = queryString.parse( location.search );
    const { data:productsFiltered, loading } = useFetchProducts( search );
    const LOADER = CONST.LIST.IMG_LOADER;



    return (
        <div className="container-fluid mb-5">
                    {(loading === true) && 
                    <img src={LOADER} className="loader" alt="loading" />       
                    }
                    
                    { 
                        (search ==='') 
                            && 
                            <div className="alert alert-info p-4">
                                <p className="text-center">{ CONST.LIST.MSJ_SEARCH }</p>
                            </div>
                    }

                    { 
                        (search !=='' && productsFiltered.length === 0 && loading === false ) 
                            && 
                            <div className="alert p-4">
                               <p className="text-center">{ CONST.LIST.MSJ_NO_FOUND } { search }</p>
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

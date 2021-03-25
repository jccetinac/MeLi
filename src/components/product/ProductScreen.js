import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { useFetchProductById } from "../../hooks/useFetchProductById";
import { BreadCrumbs } from "../utilities/breadcrumb";

const CONST = require('../../utilities/constants');


export const ProductScreen = ({ history }) => {

    const { productId } = useParams();
    const LOADER = CONST.LIST.IMG_LOADER;

    const categories=['macro', 'medioum', 'mini'];
    const { data:product, loading } = useFetchProductById( productId );

    if ( !product ) {
        return <Redirect to="/" />;
    }

    const handleReturn = () => {

        if( history.length <=2 ) {
            history.push('/');
        } else {
            history.goBack();
        }

    }

    const {  title, picture, amount,  decimals,  description } = product;
    
    return (
        <main className="container mt-3">
            <BreadCrumbs categories={categories}  />
            <div className="container bg-white mb-2 p-5">
                    {(loading === true) && 
                        <img src={ LOADER } className="loader" alt="loading" />       
                    }

                    {(loading === false) && 
                        <div className="row product-screen">
                            <section className="col-sm-8">

                                <img 
                                    src={ picture }
                                    alt={ title }
                                    className="img-fluid animate__animated animate__fadeIn"
                                />
                                <h3 className="mt-2 mb-3">{ CONST.LIST.TITLE_DESCRIPTION }</h3>
                                <p  className="text-justify paragraph" > { description || '' } </p>

                            </section>
                            
                            <aside className="col-sm-4">

                                <div className="badge badge-light p-2 mb-3">{CONST.LIST.TAGS}</div>
                                <h4><b>{ title }</b></h4>
                                
                                <h1>$ <span>{ amount } <sup>{ decimals }</sup></span></h1>
                                
                                <button className="btn btn-primary w-100" onClick={ handleReturn }>{CONST.LIST.BTN_SELL}</button>
                            </aside>
                        </div>      
                    }
                        
            </div>
        </main>

    )
}

import React from 'react';
import { Link } from 'react-router-dom';

const CONST = require('../../utilities/constants');


export const ProductCard = ({
    id, 
    title, 
    picture, 
    amount, 
    condition, 
    free_shipping
}) => {

/*    id, 
    title, 
    picture, 
    amount, 
    condition, 
    free_shipping */



    return (
        <article className="
        product-card
        animate__animated animate__fadeIn
        w-100 p-3 bg-white" 
        >
            <div className="row no-gutters">
                <div className="col-md-3">
                    <Link to={ `${CONST.LIST.ROUTE_APP}/${ id }` }>
                        <img src={ picture } className="card-img" alt={ title } />
                    </Link>
                </div>
                <div className="col-md-6">
                    
                    <div className="card-body">
                        <h1 className="price">
                            $ { amount }<span className={ free_shipping? 'check-light on':'check-light off' }  ></span>
                        </h1>
                        <p> <Link to={ `${CONST.LIST.ROUTE_APP}/${ id }` }>{ title }</Link> </p>
                    </div>

                </div>
                <div className="col-md-3">
                    <span className="badge p-2 mt-3">{ condition }</span>
                </div>
            </div>
        </article>
    )

}

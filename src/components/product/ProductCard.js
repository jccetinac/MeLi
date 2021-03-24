import React from 'react';
import { Link } from 'react-router-dom';

export const ProductCard = ({
    id, 
    title, 
    picture, 
    amount, 
    currency, 
    decimals, 
    condition, 
    free_shipping, 
    sold_quantity, 
    description
}) => {




    return (
        <div className="card ms-3 animate__animated animate__fadeIn w-50" >
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={ picture } className="card-img" alt={ title } />
                </div>
                <div className="col-md-8">
                    
                    <div className="card-body">
                        <h5 className="card-title"> { title } </h5>
                        <p className="card-text"> { title} </p>

                    
                        <p className="card-text">
                            <small className="text-muted"> { amount } </small>
                            <small className="text-muted"> { currency } </small>

                        </p>

                        <Link to={ `/items/${ id }` }>
                           ver
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    )

}

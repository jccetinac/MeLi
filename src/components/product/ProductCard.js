import React from 'react';
import { Link } from 'react-router-dom';

export const ProductCard = ({
    id,
    title,
    url,
    price
}) => {

    return (
        <div className="card ms-3 animate__animated animate__fadeIn w-50" >
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={ url } className="card-img" alt={ title } />
                </div>
                <div className="col-md-8">
                    
                    <div className="card-body">
                        <h5 className="card-title"> { title } </h5>
                        <p className="card-text"> { title} </p>

                    
                        <p className="card-text">
                            <small className="text-muted"> { price } </small>
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

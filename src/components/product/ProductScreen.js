import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { useFetchProductById } from "../../hooks/useFetchProductById";

export const ProductScreen = ({ history }) => {

    const { productId } = useParams();


    const { data:product, loading } = useFetchProductById( productId );
    console.log(product);

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

    const { id, title, picture, amount, currency, decimals, condition, free_shipping, sold_quantity, description } = product;
    
    return (
        <div className="content-fluid">
            <h4> {(loading === true) && <b>cargando</b>} </h4>
            <div className="row md-12">

                <div className="col-4">
                <img 
                    src={ picture }
                    alt={ id }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
                <p>currency: { currency }</p>
                <p>amount: { amount }</p>
                <p>decimals: { decimals }</p>
                <p>conditions: { condition }</p>
                <p>free_shipping: { free_shipping }</p>
                <p>sold_quantity: { sold_quantity }</p>


            </div>

                <div className="col-8 animate__animated animate__fadeIn">
                <h3> { title } </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Alter ego: </b> { title } </li>
                    <li className="list-group-item"> <b> Price: </b> { amount } </li>
                </ul>

                <h5> description </h5>
                <p> { description || ' nada ' } </p>

                <button 
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                >
                    Return
                </button>

            </div>

            </div>
        </div>

    )
}

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

    const { id, title, url, price, description } = product;
    
    return (
        <div className="content-fluid">
            <h4> {(loading === true) && <b>cargando</b>} </h4>
            <div className="row md-12">

                <div className="col-4">
                <img 
                    src={ url }
                    alt={ id }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

                <div className="col-8 animate__animated animate__fadeIn">
                <h3> { title } </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Alter ego: </b> { title } </li>
                    <li className="list-group-item"> <b> Price: </b> { price } </li>
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

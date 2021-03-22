import { useState, useEffect } from 'react'
import { getProductById } from "../helpers/getProductById";


export const useFetchProductById = ( id ) => {
    
    const [state, setState] = useState({
        data: {},
        loading: true
    });

    useEffect( () => {

        getProductById( id )
            .then( product => {
                
                setState({
                    data: product,
                    loading: false
                });
            })

    }, [id])




    return state; // { data:{}, loading: true };


}

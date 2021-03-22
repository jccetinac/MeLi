import { useState, useEffect } from 'react'
import { getProducts } from '../helpers/getProducts';


export const useFetchProducts = ( q ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

        getProducts( q )
            .then( products => {
                
                setState({
                    data: products,
                    loading: false
                });
            })

    }, [q])




    return state; // { data:[], loading: true };


}



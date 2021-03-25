import { useState, useEffect } from 'react'
import { getProducts } from '../helpers/getProducts';


export const useFetchProducts = ( q ) => {
    
    const [state, setState] = useState({
        data: [],
        categories:[],
        loading: true
    });

    useEffect( () => {

        getProducts( q )
            .then( response => {
                
                setState({
                    data: response.products,
                    categories: response.categories,
                    loading: false
                });
            })

    }, [q])

    return state; // { data:[], loading: true };


}



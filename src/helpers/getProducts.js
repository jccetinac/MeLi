import axios from "axios";
const CONST = require('../utilities/constants');

export const getProducts = async( query ) => {
    const baseUrl = process.env.REACT_APP_API_URL;

    const urlLocal=`${ baseUrl }${ CONST.LIST.API_PATH_PRODUCTS }${ CONST.LIST.API_PATH_SEARCH }${ encodeURI( query ) }`; 
    const resp = await axios.get(urlLocal);

    const { data } = await resp;

    const newList = data.items.map( product=>{
        const { id, title, price, picture, condition, free_shipping, description } =  product;
        const prod =  {
                id: id,
                title: title,
                picture: picture,
                amount: price.amount,
                currency: price.currency,
                decimals: price.decimals,
                condition: condition,
                free_shipping: free_shipping,
                description: description
            };
        return prod;    
    });


    return newList;


}
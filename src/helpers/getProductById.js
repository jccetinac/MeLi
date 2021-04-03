import axios from "axios";
const CONST = require('../utilities/constants');

export const getProductById = async( idProduct ) => {

    const baseUrl = process.env.REACT_APP_API_URL;

    const urlLocal=`${ baseUrl }${CONST.LIST.API_PATH_PRODUCTS}/${ encodeURI( idProduct ) }`;  

    const resp = await axios.get(urlLocal,{
        headers: { 'Access-Control-Allow-Origin': '*'}
        }
    );

    
    const { id, title, price, picture, condition, free_shipping, sold_quantity, description, category } = await resp.data.item;

    const prod =  {
            id: id,
            title: title,
            picture: picture,
            amount: price.amount,
            currency: price.currency,
            decimals: price.decimals,
            condition: condition,
            free_shipping: free_shipping,
            description: description,
            sold_quantity: sold_quantity,
            category: category
        };
        
    return prod;


}
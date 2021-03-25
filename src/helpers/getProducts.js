import axios from "axios";
const CONST = require('../utilities/constants');

export const getProducts = async( query ) => {
    const baseUrl = process.env.REACT_APP_API_URL;

    const urlLocal=`${ baseUrl }${ CONST.LIST.API_PATH_PRODUCTS }${ CONST.LIST.API_PATH_SEARCH }${ encodeURI( query ) }`; 
    const resp = await axios.get(urlLocal);

    console.log(resp);
    const { data } = await resp;

    const productList = data.items.map( product=>{
        const { id, title, price, picture, condition, free_shipping, city } =  product;
        const prod =  {
                id: id,
                title: title,
                picture: picture,
                amount: price.amount,
                currency: price.currency,
                decimals: price.decimals,
                condition: condition,
                free_shipping: free_shipping,
                city: city
            };
        return prod;    
    });


    return {'products':productList, 'categories': data.categories};


}
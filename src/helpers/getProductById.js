import axios from "axios";

export const getProductById = async( idProduct ) => {

    const baseUrl = process.env.REACT_APP_API_URL;

    const urlLocal=`${ baseUrl }items/${ encodeURI( idProduct ) }`;  

    const resp = await axios.get(urlLocal);

    
    const { id, title, price, picture, condition, free_shipping, sold_quantity, description } = await resp.data;

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
            sold_quantity: sold_quantity
        };
        
    return prod;


}
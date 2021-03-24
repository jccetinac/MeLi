import axios from "axios";

export const getProducts = async( query ) => {
    const baseUrl = process.env.REACT_APP_API_URL;

    const urlLocal=`${ baseUrl }items?search=${ encodeURI( query ) }`; 
    const resp = await axios.get(urlLocal);

    console.log(resp);
    const { data } = await resp;

    const newList = data.items.map( product=>{
        const { id, title, price, picture, condition, free_shipping, sold_quantity, description } =  product;
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
    });


    return newList;


}
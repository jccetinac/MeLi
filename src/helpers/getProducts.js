import axios from "axios";

export const getProducts = async( query ) => {

    const url = `https://api.mercadolibre.com/sites/MLA/search?q=:${ encodeURI( query ) }`;
    const resp = await axios.get(url);
    const { data } = await resp;

    const prod = data.results.map( product => {
        return {
            id: product.id,
            title: product.title,
            url: product.thumbnail,
            price: product.price
        }
    })
    console.log(['prod']);
    console.log(prod);
    
    return prod;


}
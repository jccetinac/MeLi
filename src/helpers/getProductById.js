import axios from "axios";

export const getProductById = async( idProduct ) => {


    const urlLocal=`http://localhost:4200/api/items/${ encodeURI( idProduct ) }`;  

    const resp = await axios.get(urlLocal);

    console.log(resp);
    const { id, title, price, thumbnail, description } = await resp.data;

    const prod =  {
            id: id,
            title: title,
            url: thumbnail,
            price: price,
            description: description
        };
    
    console.log(['prod BY ID']);
    console.log(prod);
    
    return prod;


}
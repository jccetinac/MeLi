import axios from "axios";

export const getProducts = async( query ) => {

    const urlLocal=`http://localhost:4200/api/items?search=${ encodeURI( query ) }`; 
    const resp = await axios.get(urlLocal);

    console.log(resp);
    const { data } = await resp;
    return data;


}
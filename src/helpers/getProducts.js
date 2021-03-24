import axios from "axios";

export const getProducts = async( query ) => {
    const baseUrl = process.env.REACT_APP_API_URL;

    const urlLocal=`${ baseUrl }items?search=${ encodeURI( query ) }`; 
    const resp = await axios.get(urlLocal);

    console.log(resp);
    const { data } = await resp;
    return data;


}
import axios from "axios"
import queryString from "query-string"
import { api_url } from "../utils/contain";

const axiosClient = axios.create({
    baseURL: api_url.base,
    headers: {
        "content-type": "application/json",
    },
    paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config)=>{
    //handle token here...
    return config;
})

axiosClient.interceptors.response.use((response)=> {
    if(response && response.data) {
        return response.data
    }
    return response;
}, (error)=> {
    //handle errors
    throw error;
})


export default axiosClient;
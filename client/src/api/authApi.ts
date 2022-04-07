import { AxiosResponse } from 'axios';
import { IFormInput } from './../utils/interface';
import axiosClient from "./api";

type IRes = Promise<AxiosResponse<any, any> & {success: boolean}>

const authApi = {
    login: (data: IFormInput): IRes => {
        const url = "/auth/login";
        return axiosClient.post(url, data);
    },
    register: (data: IFormInput):IRes => {
        const url = "/auth/register";
        return axiosClient.post(url, data);
    },

    // get: (id: string) => {
    //     const url = `/provices/${id}`;
    //     return axiosClient.get(url,);
    // },
}

export default authApi;
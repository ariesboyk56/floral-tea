import axiosClient from "./api";

// class ProvincesApi {
//     getAll = (params: string) => {
//         const url = "";
//         return axiosClient.get(url, {params});
//     };
// }

// const provincesApi = new ProvincesApi();

const provincesApi = {
    getAll: (params: string) => {
        const url = "/provices";
        return axiosClient.get(url, {params});
    },

    get: (id: string) => {
        const url = `/provices/${id}`;
        return axiosClient.get(url,);
    },
}

export default provincesApi;
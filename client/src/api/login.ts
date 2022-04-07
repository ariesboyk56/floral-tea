import { Method } from "axios";
import axiosClient from "./api";

export async function login (data: any) {
    const res = await axiosClient({
        method: "post",
        url: '/auth/login',
        data
    })
    return res
}

export async function axiosRes (method: Method, url: string, data: any) {
    const res = await axiosClient({
        method,
        url,
        data
    })
    return res
}
import axios from 'axios';

const baseApi = axios.create({
    baseURL: "http://127.0.0.1:8000/comision/",
    headers: {
        "Content-Type": "application/json",
    }
})

export const fetchData = async (endpoint, method = 'GET', data = null, responseType = 'json' ) => {
    const response = await baseApi({
        url: endpoint,
        method,
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        data,
        responseType
    });

    return response;
};

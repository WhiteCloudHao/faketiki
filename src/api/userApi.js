import AxiosClient from "./axiosClient";


const userApi = {
    register(data) {
        const url = '/auth/local/register';
        return AxiosClient.post(url, data);
    },
    login(data) {
        const url = '/auth/local';
        return AxiosClient.post(url, data);
    },

}

export default userApi;
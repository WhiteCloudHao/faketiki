import AxiosClient from "./axiosClient";


const CategoryApi = {
    getAll(params) {
        const url = '/categories';
        return AxiosClient.get(url, {params});
    },

    get(id) {
        const url = `/categories/${id}`;
        return AxiosClient.get(url)
    },

    add(data) {
        const url = '/categories';
        return AxiosClient.post(url);
    },

    update(data) {
        const url = `/categories/${data.id}`;
        return AxiosClient.patch(url, data);
    },

    remove(id) {
        const url = `/categories/${id}`;
        return AxiosClient.delete(url);
    }
}

export default CategoryApi;
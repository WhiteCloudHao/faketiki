import AxiosClient from "./axiosClient";


const ProductApi = {
   async getAll(params) {
        const newParams = {...params};
        newParams._start = !params._page || params._page <= 1
        ? 0
        : (params._page -1)* (params._limit || 9);
        
        delete newParams._page;

        const productLists = await AxiosClient.get('/products', {params: newParams});
        const count = await AxiosClient.get('/products/count', { params: newParams });

        return {
            data: productLists,
            paginations: {
                page: params._page,
                limit: params._limit,
                total: count
            }
        }
    },

    get(id) {
        const url = `/products/${id}`;
        return AxiosClient.get(url)
    },

    add(data) {
        const url = '/products';
        return AxiosClient.post(url);
    },

    update(data) {
        const url = `/products/${data.id}`;
        return AxiosClient.patch(url, data);
    },

    remove(id) {
        const url = `/products/${id}`;
        return AxiosClient.delete(url);
    }
}

export default ProductApi;
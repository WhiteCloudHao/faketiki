import  { useEffect, useState } from 'react';
import ProductApi from '../../api/productApi';

function useGetId(idInfor) {

    const [loading, setLoading] = useState(true);
    const [productInfor, setProductInfor] = useState({});
    

    useEffect(() => {
       (async () => {
            try {
          
               const result = await ProductApi.get(idInfor);
                console.log(result)
               setProductInfor(result);
            } catch(error) {
                console.log("failed to call infor when click in product", error);
            }
            setLoading(false)
        })();
    }, [idInfor])

    return { productInfor, loading};
}

export default useGetId;
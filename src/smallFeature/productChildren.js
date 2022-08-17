import { Box, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { useNavigate } from 'react-router';

function ProductChildren( {data}) {
    const thumbnailsUrl = data.thumbnail
        ?`https://api.ezfrontend.com${data.thumbnail?.url}`
        :'https://m.media-amazon.com/images/M/MV5BNjljYjdkOWUtZjUwYS00NTAwLWJiNWQtZTc1Yjc5Nzk3ODgyXkEyXkFqcGdeQXVyMTAyNDMyNzk2._V1_.jpg';

        const navigate = useNavigate();
        
        const handleClick = () => {
            navigate(`/products/${data.id}`)
        }

        return (
        <Box padding ={1} margin = {1} onClick = {handleClick}>
            
        <Skeleton animation="wave" variant="circle" width={40} height={40} />     
        <img src={thumbnailsUrl} alt = {data.name} width ="100%" height="205" />
       <Typography variant="body2">{data.name}</Typography>
       <Typography variant="body2">
           <Box component= "span" fontSize="16px" fontWeight="500" color ="rgb(255, 66, 78)" mr ={1}>
          {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data.salePrice)}
           </Box>
        {data.promotionPercent > 0?` -${data.promotionPercent}%`: ''}
        </Typography>
                            
        </Box>
    )
}

export default ProductChildren;
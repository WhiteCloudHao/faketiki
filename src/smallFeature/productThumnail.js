import { Box } from "@material-ui/core";


function ProductThumnail({data, newWidth}) {
    
    const defaultImage = 
    'https://m.media-amazon.com/images/M/MV5BNjljYjdkOWUtZjUwYS00NTAwLWJiNWQtZTc1Yjc5Nzk3ODgyXkEyXkFqcGdeQXVyMTAyNDMyNzk2._V1_.jpg';

    const thumbnailsUrl =  data.thumbnail?
    `https://api.ezfrontend.com${data.thumbnail?.url}`
    : defaultImage
    
    return (
        <Box>
            <img src={thumbnailsUrl} alt = {data.name}  width ={newWidth}   />
        </Box>
    )
}

export default ProductThumnail;